/* globals Matter */

// extract the modules from the Matter object
const { Engine } = Matter;
const { Render } = Matter;
const { World } = Matter;
const { Body } = Matter;
const { Bodies } = Matter;
const { Events } = Matter;
const { Mouse } = Matter;
const { MouseConstraint } = Matter;

// target the canvas used in the project
const canvas = document.querySelector('canvas');

// create engine and a renderer
const engine = Engine.create();
const render = Render.create({
  // use the canvas already included in the DOM
  canvas,
  engine,
  // remove the default wireframes
  options: {
    background: 'transparent',
    wireframes: false,
  },
});

// starting from default values for the radius of the ball and the height of the ground
const ballSize = 12;
const groundHeight = 30;

// create a peg on which to add the golf ball
const teeWidth = 5;
const teeHeight = 8;
const teeX = Math.random() * (100 - 70) + 70;
const teeY = canvas.height - groundHeight - teeHeight / 2;

// create the peg as a static rectangle in the left section of the canvas
const tee = Bodies.rectangle(teeX, teeY, teeWidth, teeHeight, {
  isStatic: true,
  render: {
    fillStyle: '#000',
  },
});

// for the golf ball, include a circle and smaller shapes for the details of the ball
const ballX = teeX;
const ballY = teeY - ballSize / 2 - teeHeight;
const ball = Bodies.circle(ballX, ballY, ballSize, {
  render: {
    fillStyle: '#fed73e',
    lineWidth: 5,
    strokeStyle: '#000',
  },
});

// ball details made up of smaller circles added in the corner of the ball
const ballDetails = [
  {
    x: ballX - 6,
    y: ballY - 2,
  },
  {
    x: ballX - 5,
    y: ballY + 4,
  },
  {
    x: ballX - 1,
    y: ballY - 1,
  },
  {
    x: ballX,
    y: ballY + 4,
  },
];
// create the circles
const details = ballDetails.map(({ x, y }) => Bodies.circle(x, y, 1.5, {
  render: {
    fillStyle: '#000',
  },
}));

// create a composite object making up the golf ball
const golfBall = Body.create({
  parts: [ball, ...details],
  restitution: 0.4,
});

// create two rectangles for the ground segments, spaced by a gap slightly larger than the ball size
// ! x and y represent the center of the rectangle, not the corner of the shape
let groundX = Math.floor(Math.random() * (canvas.width / 2 - canvas.width / 8) + canvas.width / 8 - ballSize * 2);
const groundY = canvas.height - groundHeight / 2;
let groundWidth = groundX * 2;

const grounds = Array(2).fill('').map(() => {
  const ground = Bodies.rectangle(groundX, groundY, groundWidth, groundHeight, {
    isStatic: true,
    render: {
      fillStyle: '#fed73e',
    },
  });
  // update groundX and groundWidth to have the second rectangle start after the first one and end at the end of the canvas
  groundWidth = canvas.width - groundWidth - ballSize * 2.5;
  groundX = canvas.width - groundWidth / 2;
  return ground;
});

// create the mouse constraint allowing to move the golf ball
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
  constraint: {
    stiffness: 1,
  },
});

// create four rectangles at all sides of the canvas to detect a collision between the ball and the canvas boundaries
const sideBottom = Bodies.rectangle(canvas.width / 2, canvas.height * 2, canvas.width, canvas.height * 2, {
  isStatic: true,
});
const sideLeft = Bodies.rectangle(-canvas.width, canvas.height / 2, canvas.width * 2, canvas.height, {
  isStatic: true,
});
const sideRight = Bodies.rectangle(canvas.width * 2, canvas.height / 2, canvas.width * 2, canvas.height, {
  isStatic: true,
});
const sideTop = Bodies.rectangle(canvas.width / 2, -canvas.height, canvas.width, canvas.height * 2, {
  isStatic: true,
});
const sides = [sideTop, sideRight, sideBottom, sideLeft];

// specify a gravity for the world, according to the celestial body
const { world } = engine;
world.gravity.y = 1; // 1 by default,
/* add the elements to the world:
  - ground segments
  - tee,
  - golf ball
  - sides
  - mouse constraint
*/
World.add(world, [...grounds, tee, golfBall, ...sides, mouseConstraint]);

// run the engine and the renderer
Engine.run(engine);
Render.run(render);

// when a collision is detected check the y coordinate of the ball
Events.on(engine, 'collisionStart', (e) => {
  const { y } = golfBall.position;
  // if falling beneath the ground segment(s), highlight a victory
  if (y > canvas.height - 15) {
    console.log('victory');
  }
});
