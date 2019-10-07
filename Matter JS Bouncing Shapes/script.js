// export the necessary modules
const { Engine, Render, World, Bodies, Events } = Matter;

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

// add a rectangle for the ground
const width = 800;
const height = 600;

const { world } = engine;
const ground = Bodies.rectangle(width / 2, height * 1.5, width, height, {
  isStatic: true,
});

World.add(world, ground);

// add another rectangle beneath the ground to capture the shapes as they fall by its side
const threshold = Bodies.rectangle(
  width / 2,
  height * 2.5,
  width * 10,
  height,
  {
    isStatic: true,
  }
);
World.add(world, threshold);

// utility function to return a random integer between 2 values
const randomBetween = (min, max) =>
  Math.floor(Math.random() * (max - min)) + min;

// rectangle class, adding a rectangle to the world
class Rectangle {
  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.width = w;
    this.height = h;
    this.restitution = randomBetween(1, 3);
  }

  // through the add function add a rectangle with the chosen dimensions and coordinates
  add() {
    const rectangle = Bodies.rectangle(
      this.x,
      this.y,
      this.width,
      this.height,
      {
        restitution: this.restitution,
      }
    );
    World.add(world, rectangle);
  }
}

// circle class, adding a circle to the world
class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
    this.restitution = randomBetween(1, 3);
  }

  add() {
    const circle = Bodies.circle(this.x, this.y, this.r, {
      restitution: this.restitution,
    });
    World.add(world, circle);
  }
}

// triangle class, adding a polygon with three vertices
class Triangle {
  constructor(x, y, size) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.restitution = randomBetween(1, 3);
  }

  add() {
    const triangle = Bodies.polygon(this.x, this.y, 3, this.size, {
      restitution: this.restitution,
    });
    World.add(world, triangle);
  }
}

// function to add a shape in the world
function addShape() {
  const x = randomBetween(50, width - 50);
  const y = randomBetween(0, height / 2);

  const odds = Math.random();
  if (odds < 0.33) {
    const w = randomBetween(4, 25);
    const h = randomBetween(10, 25);

    const rectangle = new Rectangle(x, y, w, h);
    rectangle.add();
  } else if (odds < 0.67) {
    const r = randomBetween(5, 15);

    const circle = new Circle(x, y, r);
    circle.add();
  } else {
    const size = randomBetween(10, 20);

    const triangle = new Triangle(x, y, size);
    triangle.add();
  }
}
// listen to mouse and touch events on the body
// the idea is to add shapes as long as the cursor is pressed
const body = document.querySelector('body');
// add shapes conditional to the boolean being true
// toggled when the cursor is down
let isMouseDown = false;

body.addEventListener('mousedown', () => {
  isMouseDown = true;
});
body.addEventListener('mouseup', () => {
  isMouseDown = false;
});
body.addEventListener('mouseout', () => {
  isMouseDown = false;
});

// add shapes in the canvas
// using a 0-1 value to decide the different shape
body.addEventListener('mousemove', () => {
  if (!isMouseDown) {
    return false;
  }
  addShape();
});

body.addEventListener('touchmove', e => {
  e.preventDefault();
  addShape();
});

// remove the shapes as they exceed the height of the window
Events.on(engine, 'collisionStart', () => {
  const shapes = world.bodies.filter(shape => shape.position.y > 1000);
  shapes.forEach(shape => World.remove(world, shape));
});

// to get started run the addShape function an arbitrary amount of times
for (let i = 0; i < 50; i += 1) {
  addShape();
}

// run the engine
Engine.run(engine);
// run the renderer
Render.run(render);
