// necessary modules
const { Engine, Render, World, Bodies, Body, Constraint, Mouse, MouseConstraint, Composites } = Matter;

// engine
const engine = Engine.create();

// renderer
const render = Render.create({
  element: document.body,
  engine,
  options: {
    wireframes: false,
  },
});

const width = 800;
const height = 600;
// variables describing the length of the constraint, the radius and number of the spheres
const line = height / 2.5;
const n = 5;
const r = 30;
const w = r * 2 * 5;

// instead of using Bodies.circle() and several constraint, take advantage of the Composite already provided by the library
const cradle = Composites.newtonsCradle(width / 2 - r * (n - 1), height / 2 - line / 2, n, r, line);

// loop through the bodies and include a different category for the first and last item
// this to prevent the mouse constraint from moving the spheres in between
const bodies = cradle.bodies;
bodies.forEach((body, index, { length }) => {
    if(index === 0 || index === length - 1) {
        body.collisionFilter.category = 0x0001;
    } else {
        body.collisionFilter.category = 0x0002;
    }
})
// add the cradle to the world
const { world } = engine;
World.add(world, cradle);


// add a mouse and a constraint
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
    mouse,
    // filter the mouse constraint to move only the first and last sphere
    collisionFilter: {
        mask: 0x0001,
    }
});
World.add(world, mouseConstraint);

// run the engine
Engine.run(engine);

// run the render
Render.run(render);
