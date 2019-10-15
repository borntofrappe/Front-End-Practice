// include the necessary plugin
Matter.use('matter-attractors');

// extract the necessary modules
const {
  Engine,
  Render,
  World,
  Bodies,
  Body,
  Mouse,
  MouseConstraint,
  Composites,
} = Matter;

// engine
const engine = Engine.create();

// renderer
const render = Render.create({
  element: document.body,
  engine,
  options: {
    wireframes: false,
    background: 'hsl(0, 0%, 95%)',
  },
});

const width = 800;
const height = 600;
// variables describing the length of the constraint, the radius and number of the spheres
const line = height / 3;
const n = 5;
const r = 30;

// instead of using Bodies.circle() and several constraint, take advantage of the Composite already provided by the library
const cradle = Composites.newtonsCradle(
  width / 2 - r * (n - 1),
  height / 2 - line / 2,
  n,
  r,
  line
);

// loop through the bodies and include a different category for the first and last item
// this to prevent the mouse constraint from moving the spheres in between
const { bodies } = cradle;
bodies.forEach((body, index, { length }) => {
  if (index === 0 || index === length - 1) {
    body.collisionFilter.category = 0x0001;
  } else {
    body.collisionFilter.category = 0x0002;
  }
  // change the properties of the spheres to have the collision be more impact-ful
  body.friction = 0;
  body.frictionAir = 0;
  body.restitution = 1;
  body.render.fillStyle = 'hsl(0, 0%, 5%)';
});

// loop through the constraint and change the appearance to match the spheres
const { constraints } = cradle;
constraints.forEach(constraint => {
  constraint.render.lineWidth = 2;
  constraint.render.strokeStyle = 'hsl(0, 0%, 5%)';
});

// move the first body to the left to trigger Newton's cradle
Body.setVelocity(bodies[0], {
  x: -5,
  y: 0,
});

// add the cradle to the world
const { world } = engine;
World.add(world, cradle);

// add a mouse and a constraint
const { canvas } = render;
const mouse = Mouse.create(canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
  // filter the mouse constraint to move only the first and last sphere
  collisionFilter: {
    mask: 0x0001,
  },
});
World.add(world, mouseConstraint);

// describe a magnet
const magnet = Bodies.circle(width / 2, height / 2, 30, {
  isStatic: true,
  render: {
    fillStyle: 'hsl(0, 75%, 35%)',
  },
  // isSensor to avoid a collision with the cradle
  isSensor: true,
  // attractor to have the spheres move _away_ from the position of the body
  plugin: {
    attractors: [
      function(bodyA, bodyB) {
        return {
          x: (bodyB.position.x - bodyA.position.x) * 1e-5,
          y: (bodyB.position.y - bodyA.position.y) * 1e-5,
        };
      },
    ],
  },
});

// target the button and form element
const button = document.querySelector('button');
const form = document.querySelector('form');

// following a click on the button add/remove the magnet from the world
function toggleMagnet() {
  const hasMagnet = world.bodies.length > 0;
  // toggle also the appearance of the form and the text of the button itself
  form.classList.toggle('hidden');
  if (hasMagnet) {
    this.textContent = 'Add magnet';
    World.remove(world, magnet);
  } else {
    this.textContent = 'Remove magnet';
    World.add(world, magnet);
  }
}
button.addEventListener('click', toggleMagnet);

// following an input event extract the x and y value and update the position of the magnet
function moveMagnet() {
  const { value: x } = this.x;
  const { value: y } = this.y;

  Body.setPosition(magnet, {
    x: (width * x) / 100,
    y: (height * y) / 100,
  });
}
form.addEventListener('input', moveMagnet);
form.addEventListener('submit', e => e.preventDefault());

// run the engine
Engine.run(engine);

// run the render
Render.run(render);
