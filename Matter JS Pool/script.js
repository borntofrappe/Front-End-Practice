// necessary modules
const {
  Engine,
  Render,
  World,
  Body,
  Bodies,
  Mouse,
  MouseConstraint,
  Constraint,
  Events,
} = Matter;

// engine
const engine = Engine.create();

// renderer
const render = Render.create({
  element: document.querySelector('main'),
  engine,
  options: {
    wireframes: false,
    // set the background ozf the canvas to be fully transparent, in favor of the design built with rectangle and circle elements
    background: 'transparent',
  },
});

// world
const { world } = engine;

// remove gravity to have the balls subject to collision only
engine.world.gravity.y = 0;

// global variables used in the project
// the idea is to translate the table to show a smaller rectangle surrounded by four borders and six circles
const margin = 40;
const width = 600;
const height = 800;

const borderSize = margin;
const pocketSize = margin;
// array describing the position of the pockets
const pocketsPosition = [
  { x: 0, y: 0 },
  { x: width, y: 0 },
  { x: width, y: height / 2 },
  { x: width, y: height },
  { x: 0, y: height },
  { x: 0, y: height / 2 },
];
const ballSize = pocketSize * 0.5;

//   specify a larger surface for the canvas, inspired by d3 margin convention
render.canvas.width = width + margin * 2;
render.canvas.height = height + margin * 2;

// rectangle for the floor, with a fill
const floor = Bodies.rectangle(width / 2, height / 2, width, height, {
  render: {
    fillStyle: 'hsl(170, 30%, 40%)',
  },
  // isSensor means the ball with not bounce off of the rectangle as if it were a solid shape
  isSensor: true,
});

// utility function to create a rectangle for the borders
const makeBorder = (x, y, w, h) =>
  Bodies.rectangle(x, y, w, h, {
    render: {
      fillStyle: 'hsl(260, 2%, 20%)',
    },
  });

// rectangles for the border, surrounding the floor
const borderTop = makeBorder(width / 2, -borderSize / 2, width, borderSize);
const borderRight = makeBorder(
  width + borderSize / 2,
  height / 2,
  borderSize,
  height
);
const borderBottom = makeBorder(
  width / 2,
  height + borderSize / 2,
  width,
  borderSize
);
const borderLeft = makeBorder(-borderSize / 2, height / 2, borderSize, height);

// utility function creating a circle for the pockets
// isSensor is specified to later have smaller circles used to detect a collision
const makePocket = (x, y, r, isSensor = true, label = '') =>
  Bodies.circle(x, y, r, {
    isStatic: true,
    isSensor,
    label,
    render: {
      fillStyle: 'hsl(260, 2%, 20%)',
    },
  });

// create two sets of circles, one purely aesthetical and one functional (smaller and used to detect a collision)
const pockets = pocketsPosition.map(({ x, y }) => makePocket(x, y, pocketSize));
const pocketsCollision = pocketsPosition.map(({ x, y }) =>
  makePocket(x, y, pocketSize / 3, false, 'pocket') // the label is picked up following the collisionStart event
);

const table = Body.create({
  parts: [
    floor,
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    ...pockets,
    ...pocketsCollision,
  ],
  isStatic: true,
});

// translate the table in the canvas
Body.translate(table, {
  x: margin,
  y: margin,
});

World.add(world, table);

// utility function returning a circle for the ball(s)
const makeBall = (x, y, r, fillStyle, label = 'ball') =>
  Bodies.circle(x, y, r, {
    restitution: 1,
    friction: 0.3,
    label,
    render: {
      fillStyle,
    },
  });

/* utility function creating a pattern for the balls
accepting as input the number of rows, returning as many balls as to create the following pattern
  x x x
   x x
    x
*/
const makePattern = (rows, x, y, r) => {
    let columns = 1;
    let ballsPattern = [];
    for(let i = 0; i < rows; i += 1) {
      let ballsRow = Array(columns)
        .fill()
        .map((col, colIndex) => makeBall(x + ((colIndex - columns / 2) * r * 2 + r), y - (columns - 1) * r * 2, r));
      ballsPattern.push(...ballsRow);
      columns += 1;
    }
  return ballsPattern;
};

// balls included in the top section of the billiard
const balls = makePattern(5, width / 2 + margin, height / 3 + margin, ballSize);

World.add(world, [...balls]);

// ball included in the bottom section
// specify a different label to differentiate the behavior of the ball
const ballX = width / 2 + margin;
const ballY = height * 4 / 5;

const ball = makeBall(ballX, ballY, ballSize, 'hsl(0, 0%, 90%)', 'ball white');

// constraint included for the ball
const constraint = Constraint.create({
  pointA: {
    x: ballX,
    y: ballY,
  },
  bodyB: ball,
  stiffness: 0.2
})

World.add(world, [ball, constraint]);

// add a mouse constraint
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
});
World.add(world, mouseConstraint);

// increase the score displayed in the heading following a collision between a ball and one of the inner pockets
const scoreboard = document.querySelector('#score');
let score = 0;
// function updating the score with the input value
function handleScore(point) {
  score += point;
  scoreboard.textContent = score;
}

// function following the collisionStart event
function handleCollision(event) {
  const { pairs } = event;
  // loop through the pairs array(s) and update the score if a collision is detected between a ball and a pocket
  pairs.forEach(pair => {
    const { bodyA, bodyB } = pair;
    // String.includes allows to find if the label contains a certain string of text
    if (bodyA.label.includes('ball') && bodyB.label === 'pocket') {
      // if the ball is the white, starter ball, decrease the score and reset the position of the ball
      if(bodyA.label.includes('white')) {
        handleScore(-1);
        // set the velocity to 0 to stop the otherwise moving ball
        Body.setVelocity(bodyA, {
          x: 0,
          y: 0,
        });
        Body.setPosition(bodyA, {
          x: ballX,
          y: ballY,
        });
      } else {
        // else remove the scoring ball and increase the score
        handleScore(1);
        World.remove(world, bodyA);
      }
    }
    // repeat the logic for the opposite scenario
    if (bodyB.label.includes('ball') && bodyA.label === 'pocket') {
      if(bodyB.label.includes('white')) {
        handleScore(-1);
        Body.setVelocity(bodyB, {
          x: 0,
          y: 0,
        });
        Body.setPosition(bodyB, {
          x: width / 2 + margin,
          y: height * 4 / 5,
        });
      } else {
        handleScore(1);
        World.remove(world, bodyB);
      }
    }
  });
}
Events.on(engine, 'collisionStart', handleCollision);

// body for the mouse events
const body = document.querySelector('body');
// boolean used to toggle the constraint on the white ball
let isConstrained = true;

// following a mouseup event remove the constraint
function removeConstraint() {
  // remove the constaint following a brief delay to have the ball move in the desired direction
  const timeoutID = setTimeout(() => {
    isConstrained = false;
     World.remove(world, constraint);
      clearTimeout(timeoutID);
  }, 25);
}
body.addEventListener('mouseup', removeConstraint);
body.addEventListener('mouseout', removeConstraint);

// following the collisionActive event, and only if the constraint is not already present, locate the white ball and add the constraint on top of the ball
function handleCollisionActive() {
  if(isConstrained) {
    return false;
  }
  // if the white ball is slow enough reset the constraint on the ball
  if(Math.abs(ball.velocity.x) <= 0.2 && Math.abs(ball.velocity.y) < 0.2) {
    isConstrained = true;
    const { x, y } = ball.position;
    constraint.pointA.x = x;
    constraint.pointA.y = y;
    World.add(world, constraint);
  }
}
Events.on(engine, 'collisionActive', handleCollisionActive);

Engine.run(engine);
Render.run(render);
