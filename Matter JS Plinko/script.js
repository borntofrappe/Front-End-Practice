// export the necessary modules
const { Engine, Render, World, Bodies } = Matter;

// set up the engine
const engine = Engine.create();

// set up the renderer
const render = Render.create({
  element: document.body,
  engine,
  // remove the default appearance to show the color of the shapes
  options: {
    wireframes: false,
  },
});

const width = 800;
const height = 600;

const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

// function creating a plinko, a ball subject to gravity included atop the canvas
const makePlinko = fillStyle => {
  const x = randomBetween(width / 4, (width * 3) / 4);
  const y = randomBetween(0, height / 2) * -1;
  const r = 8;
  return Bodies.circle(x, y, r, {
    restitution: 0.8,
    render: {
      fillStyle,
    },
  });
};
function addPlinko () {
    const plinko = makePlinko();
    World.add(world, plinko);
}

// utility function to return a circle as defined through the Bodies module
const makePeg = (x, y) => {
  const r = 5;

  return Bodies.circle(x, y, r, {
    isStatic: true,
    render: { fillStyle: 'white' },
  });
};

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

const ground = Bodies.rectangle(width / 2, height + 25, width, 50, {
  isStatic: true,
});

const wallLeft = Bodies.rectangle(-25, 0, 50, height * 2, {
  isStatic: true,
});
const wallRight = Bodies.rectangle(width + 25, 0, 50, height * 2, {
  isStatic: true,
});

// const plinko = makePlinko('red');
const plinkos = Array(10)
  .fill()
  .map(() => makePlinko());

const columns = 20;
const rows = 10;
const margin = 100;

const grid = Array(rows)
  .fill()
  .map((rowItem, row) => {
    const cols = row % 2 === 0 ? columns : columns - 1;
    const dx = cols !== columns ? width / columns / 2 : 0;
    return Array(cols)
      .fill()
      .map((columnItem, column) => {
        const x = (width / columns) * column + width / columns / 2 + dx;
        const y =
          ((height - margin) / rows) * row + (height - margin) / rows / 2;
        return makePeg(x, y);
      });
  });

const pegs = grid.reduce((acc, curr) => [...acc, ...curr], []);

const buckets = Array(columns - 1)
  .fill()
  .map((columnItem, column) => {
    const x = (width / columns) * column + width / columns;
    return makeBucket(x);
  });

const { world } = engine;
World.add(world, [
  ground,
  wallLeft,
  wallRight,
  ...plinkos,
  ...pegs,
  ...buckets,
]);

// run the engine
Engine.run(engine);
// run the renderer
Render.run(render);


// add a circle following a mouse press and at an interval
document.querySelector('body').addEventListener('click', addPlinko);
const intervalID = setInterval(() => {
    addPlinko();
}, 1000);