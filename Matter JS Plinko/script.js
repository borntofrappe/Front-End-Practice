// export the necessary modules
const { Engine, Render, World, Bodies, Events } = Matter;

// set up the engine
const engine = Engine.create();

// set up the renderer
const render = Render.create({
  element: document.body,
  engine,
  // set a background slightly lighter than the body's own background
  options: {
    wireframes: false,
    background: 'hsl(225, 60%, 20%)',
  },
});

// global variables used throughout the canvas
const width = 800;
const height = 600;
// number of columns and rows for the grid of pegs
const columns = 20;
const rows = 10;
// margin to allocate buckets underneath the grid
const margin = 100;
// padding to include make space for two rectangles at either side of the canvas
const padding = width / columns / 2;
// number of initial and maximum plinkos included in the canvas
const initialPlinkos = 10;
const maxPlinkos = 250;

// utility function returning a random integer between two values
const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

// function fabricating a plinko, as a circle included atop the canvas
// accept as input the color of the circle
const makePlinko = () => {
  const x = randomBetween(width / 4, (width * 3) / 4);
  const y = randomBetween(0, height / 2) * -1;
  const r = 8;
  const fillStyle = `hsl(${randomBetween(0, 360)}, 85%, 55%)`;

  return Bodies.circle(x, y, r, {
    restitution: 0.8,
    render: {
      fillStyle,
    },
    // add a label to later identify the circle in the collision event
    label: 'plinko',
  });
};

// function fabricating a peg, as a white circle with a static position
// accepting as input the coordinates of the circle's center
const makePeg = (x, y) => {
  const r = 5;

  return Bodies.circle(x, y, r, {
    isStatic: true,
    render: { fillStyle: 'white' },
    // add a label to later identify the circle in the collision event
    label: 'peg',
  });
};

// function fabricating a bucket, as a white taller-than-wider rectangle positioned at the bottom of the canvas
const makeBucket = x => {
  const w = 5;
  const h = 80;
  const y = height - h / 2;

  return Bodies.rectangle(x, y, w, h, {
    isStatic: true,
    render: {
      fillStyle: 'white',
    },
  });
};

// PLINKO's elements
// to prevent the plinkos from bouncing off the canvas's scope, include rectangle elements at the bottom and sides of the element
const contourSize = 50;
const contourBottom = Bodies.rectangle(
  width / 2,
  height + contourSize / 2,
  width,
  contourSize,
  {
    isStatic: true,
  }
);

// use the padding to create the left and right walls as white tall and thin rectangles
// the idea is to have them pick up the color of the plinkos coming into contact with the shape
const contourLeft = Bodies.rectangle(0, 0, padding / 2, height * 2, {
  isStatic: true,
  render: {
    fillStyle: 'white',
  },
});
const contourRight = Bodies.rectangle(width, 0, padding / 2, height * 2, {
  isStatic: true,
  render: {
    fillStyle: 'white',
  },
});

const contours = [contourBottom, contourLeft, contourRight];

// plinko
// an array of plinkos; the idea is to populate with the world immediately with a set number of plinkos

const plinkos = Array(initialPlinkos)
  .fill()
  .map(() => makePlinko());

// pegs
// array of columns and rows; the idea is to have pegs ranging the width and height of the canvas
// use the padding to reduce the horizontal space allocated to the pegs
const columnSize = (width - padding * 2) / columns;
const rowSize = (height - margin) / rows;
const grid = Array(rows)
  .fill()
  .map((rowItem, row) => {
    // have the number of columns alternate with a shorter row every other row
    // the idea is to then offset the shorter row to recreate the plinko's own structure
    const cols = row % 2 === 0 ? columns : columns - 1;
    const dx = cols !== columns ? columnSize / 2 : 0;
    return Array(cols)
      .fill()
      .map((columnItem, column) => {
        const x = padding + columnSize * column + columnSize / 2 + dx;
        const y = rowSize * row + rowSize / 2;
        return makePeg(x, y);
      });
  });

// since grid refers to a 2d array, flatten the items to a one-dimensional array
const pegs = grid.reduce((acc, curr) => [...acc, ...curr], []);

// buckets
// arrays of buckets in which the plinkos would eventually fall
// as many buckets as the number of columns -1, to make use of the left and right wall for the outer edges
const buckets = Array(columns)
  .fill()
  .map((columnItem, column) => {
    const x = columnSize * column + columnSize;
    return makeBucket(x);
  });

const { world } = engine;
World.add(world, [...contours, ...plinkos, ...pegs, ...buckets]);

// function adding a single plinko, used following a mouse press and at an interval
function addPlinko() {
  const plinko = makePlinko();
  World.add(world, plinko);
}
const intervalID = setInterval(() => {
  addPlinko();
  // as a precaution remove plinkos from world.bodies if the array surpasses a certain threshold
  const existingPlinkos = world.bodies.filter(body => body.label === 'plinko');
  if (existingPlinkos.length > maxPlinkos) {
    World.remove(world, existingPlinkos[0]);
  }
}, 1000);

document.querySelector('body').addEventListener('click', addPlinko);

// following a collision event retrieve the label of the two bodies
// if one is a plinko, consider its color and apply it to the other body

function handleCollision(event) {
  const { pairs } = event;

  pairs.forEach(pair => {
    const { bodyA, bodyB } = pair;
    const { label: labelA } = bodyA;
    const { label: labelB } = bodyB;

    if (labelA === 'plinko') {
      const { fillStyle } = bodyA.render;
      bodyB.render.fillStyle = fillStyle;
    }
    if (labelB === 'plinko') {
      const { fillStyle } = bodyB.render;
      bodyA.render.fillStyle = fillStyle;
    }
  });
}
Events.on(engine, 'collisionStart', handleCollision);

// run the engine
Engine.run(engine);
// run the renderer
Render.run(render);
