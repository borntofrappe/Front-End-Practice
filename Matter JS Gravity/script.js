const { Engine, Render, World, Bodies, Body, Events } = Matter;

// engine
const engine = Engine.create();

// size of the canvas and the nested player
const width = 500;
const height = 500;
const size = 50;
const w = 30;
const padding = 10;

// renderer
const render = Render.create({
  element: document.body,
  engine,
  options: {
    wireframes: false,
    background: 'hsl(0, 0%, 95%)',
    width,
    height,
  },
});

// border around the canvas
const line = (x, y, w, h) =>
  Bodies.rectangle(x, y, w, h, {
    render: {
      fillStyle: 'hsl(0, 0%, 11%)',
    },
  });

const borderTop = line(width / 2, 0, width, size);
const borderRight = line(width, height / 2, size, height);
const borderBottom = line(width / 2, height, width, size);
const borderLeft = line(0, height / 2, size, height);

const d = size * 1.5 + w / 2 + padding;
const gate1 = line(width / 5, height - d, width / 2.5, w);
const gate2 = line(width - size * 2, height / 5, w, height / 2.5);
const gate3 = line(width - width / 6, height - d, width / 3, w);
const gate4 = line(width / 4, d, width / 2, w);
const gate5 = line(d, height / 1.5, w, height / 4);

// goal post
// the idea is to position the shape at random in the corners of the canvas
const coordinates = [
  [size + padding / 2, size + padding / 2],
  [width - (size + padding / 2), size + padding / 2],
  [width - (size + padding / 2), height - (size + padding / 2)],
  [size + padding / 2, height - (size + padding / 2)],
];
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const goal = Bodies.rectangle(...randomItem(coordinates), size, size, {
  render: {
    fillStyle: 'hsl(0, 60%, 55%)',
  },
  // is sensor to prevent a collision
  isSensor: true,
  // label matching the shape subject to gravity
  label: 'match',
});

const grid = Body.create({
  parts: [
    borderTop,
    borderRight,
    borderBottom,
    borderLeft,
    gate1,
    gate2,
    gate3,
    gate4,
    gate5,
    goal,
  ],
  isStatic: true,
});

// shape subject to the canvas's gravity
const player = Bodies.circle(width / 2, height / 2, size / 2, {
  render: {
    fillStyle: 'hsl(120, 65%, 60%)',
  },
  label: 'match',
});

// add the elements to the world
const { world } = engine;
World.add(world, [grid, player]);

// run the engine
Engine.run(engine);

// run the render
Render.run(render);

// variable keeping track of the rotation (number of times the canvas is meant to rotate clockwise and counter-clockwise)
let rotation = 0;
// possible gravity values
// the idea is to have the rotation affect the canvas element, while the world updates its gravity with the four values
let index = 0;
const gravity = [[0, 1], [1, 0], [0, -1], [-1, 0]];

// rotate the canvas and update the gravity according to the directions passed as argument
// for the gravity, the idea is to go through the array in order, and reach for the beginning/end of the array when going after the end/before the beginning
function rotateMaze(direction) {
  const { canvas } = render;
  if (direction === 'left') {
    rotation -= 1;
    index = index <= 0 ? gravity.length - 1 : index - 1;
  } else {
    rotation += 1;
    index = index >= gravity.length - 1 ? 0 : index + 1;
  }
  canvas.style.transform = `rotate(${rotation * 90}deg)`;

  const [x, y] = gravity[index];
  world.gravity.x = x;
  world.gravity.y = y;
}

// following a click event extract the data-direction attribute and call the rotate function with the appropriate direction
const buttons = document.querySelectorAll('button');
function handleClick() {
  const direction = this.getAttribute('data-direction');
  rotateMaze(direction);
}
buttons.forEach(button => button.addEventListener('click', handleClick));

// following a collisionStart event, check if the collision occurs between the player and the goal post
function handleCollision(e) {
  const { pairs } = e;
  pairs.forEach(pair => {
    const { label: labelA } = pair.bodyA;
    const { label: labelB } = pair.bodyB;
    if (labelA === labelB) {
      // momentarily change the color of the goal post before changing the coordinates of the goal post and the player's shape
      goal.render.fillStyle = 'hsl(120, 65%, 60%)';
      const timeout = setTimeout(() => {
        goal.render.fillStyle = 'hsl(0, 60%, 55%)';

        const [x, y] = randomItem(coordinates);
        Body.setPosition(goal, {
          x,
          y,
        });
        Body.setPosition(player, {
          x: width / 2,
          y: height / 2,
        });

        clearTimeout(timeout);
      }, 500);
    }
  });
}
Events.on(engine, 'collisionStart', handleCollision);
