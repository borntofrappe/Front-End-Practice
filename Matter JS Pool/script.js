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
    // set the background of the canvas to be fully transparent, in favor of the design built with rectangle and circle elements
    background: 'transparent',
  },
});

// remove gravity to have the balls subject to collision only
engine.world.gravity.y = 0;

// global variables used in the project
// the idea is to translate the table to show smaller rectangle surrounded by four borders and six circles
const margin = 50;
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

//   specify a larger surface for the canvas, inspired by d3 margin convention
render.canvas.width = width + margin * 2;
render.canvas.height = height + margin * 2;

// world
const { world } = engine;

// rectangle for the floor, with a fill and as a sensor (meaning the ball with not bounce off the rectangle as if it were a solid shape)
const floor = Bodies.rectangle(width / 2, height / 2, width, height, {
  render: {
    fillStyle: '#433243',
  },
  isSensor: true,
});

// utility function to create the borders
const makeBorder = (x, y, w, h) =>
  Bodies.rectangle(x, y, w, h, {
    render: {
      fillStyle: '#4F716F',
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
      fillStyle: '#4F716F',
    },
  });

// create two sets of circles, one purely aesthetical and one functional (smaller and used to detect a collision)
const pockets = pocketsPosition.map(({ x, y }) => makePocket(x, y, pocketSize));
const pocketsCollision = pocketsPosition.map(({ x, y }) =>
  makePocket(x, y, pocketSize / 3, false, 'pocket')
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

// translate in the canvas
Body.translate(table, {
  x: margin,
  y: margin,
});

World.add(world, table);

// utility function returning a circle for the ball(s)
const makeBall = (x, y, r, fillStyle, label) =>
  Bodies.circle(x, y, r, {
    restitution: 0.5,
    label,
    render: {
      fillStyle,
    },
  });

// as an experiment, add an arbitrary number of balls in the table

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min) + min);

function addBall() {
  const x = randomBetween(0, width);
  const y = randomBetween(0, height);
  const r = 20;
  const fillStyle = `hsl(${randomBetween(0, 360)}, 50%, 80%)`;
  return makeBall(x, y, r, fillStyle, 'ball');
}

const balls = Array(10)
  .fill()
  .map(() => addBall());

World.add(world, [...balls]);

// add a mouse constraint
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
});

World.add(world, mouseConstraint);

const scoreboard = document.querySelector('main span');
let score = 0;

function handleScore() {
  score += 1;
  scoreboard.textContent = score;
}

function handleCollision(event) {
  const { pairs } = event;
  pairs.forEach(pair => {
    const { bodyA, bodyB } = pair;
    if (bodyA.label === 'ball' && bodyB.label === 'pocket') {
      handleScore();
      World.remove(world, bodyA);
      World.add(world, addBall());
    }
    if (bodyB.label === 'ball' && bodyA.label === 'pocket') {
      handleScore();
      World.remove(world, bodyB);
      World.add(world, addBall());
    }
  });
}

Events.on(engine, 'collisionStart', handleCollision);

// following a collision event increase the score if the collision occurs between a ball and a pocket

Engine.run(engine);
Render.run(render);
