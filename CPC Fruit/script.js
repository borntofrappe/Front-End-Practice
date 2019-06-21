/* globals Matter */
// STATE & SETUP
// object describing the state of the game
const state = {
  playing: false,
  health: 5,
  score: 0,
};

// set up the text in the .game__info containers to match the initial state
const health = document.querySelector('.game__info .info--health span');
const score = document.querySelector('.game__info .info--score span');
health.textContent = state.health;
score.textContent = state.score;

// target the button in the game screen
const playButton = document.querySelector('.game__screen button');

/* MATTER JS
the idea is to create circle elements in the bottom part of the screen and have them shoot upwards into sight
one at a time, with an arbitrary color and size
*/
// target the existing canvas element
const canvas = document.querySelector('canvas');
// retrieve the dimensions of the canvas to position the shapes relative to the width and height of the element
const { width, height } = canvas;

// extract the modules from matter.js
const {
  Engine, Render, World, Bodies, Body, Mouse, MouseConstraint, Events,
} = Matter;

// create an instance of the engine
const engine = Engine.create();

// create a renderer
// reference the canvas already defined in the HTML
const render = Render.create({
  canvas,
  engine,
  options: {
    width,
    height,
    wireframes: false,
    background: '#2C2C2C',
  },
});

// array describing the possible colors of the circle elements
const fruitStyle = [
  '#F68B51',
  '#F84B7F',
  '#41B6FA',
  '#F6DA00',
  '#3246E3',
  '#26A7A8',
];


// utility functions
// random item in an array
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];
// random integer in between two values
const randomIntBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);

// function including a new circle in the Matter js world
const addFruit = () => {
  // starting with a random fill color and somewhere below the bottom edge of the screen
  const fillStyle = randomItem(fruitStyle);
  const cx = randomIntBetween(0, width);
  const cy = height + 50;
  const radius = randomIntBetween(15, 25);

  // create a circle
  const fruit = Bodies.circle(cx, cy, radius, {
    render: {
      fillStyle,
    },
    restitution: 0.5,
  });

  // add the circle to the world
  World.add(engine.world, fruit);

  // describe horizontal and vertical forces to push the circle upwards
  // ! upwards and horizontally toward the opposite half from which it spawned
  const x = cx < width / 2 ? randomIntBetween(200, 600) / 10000 : -randomIntBetween(200, 600) / 10000;
  const y = -0.05;
  Body.applyForce(fruit, fruit.position, {
    x,
    y,
  });
};

// function including a circle and allowing to play the game
const play = () => {
  // after a certain delay call the addFruit function to generate a circle
  const timeout = randomIntBetween(1000, 4000);
  const timeoutID = setTimeout(() => {
    addFruit();
    clearTimeout(timeoutID);
  }, timeout);
};

// boundaries of the world
// the idea is to include a box around the canvas element and detect collision between said box and the circle elements
const ground = Bodies.rectangle(width / 2, height + 100, width + (100 * 2), 50, { isStatic: true });
const leftWall = Bodies.rectangle(-50, height / 2, 50, height * 1.5, { isStatic: true });
const rightWall = Bodies.rectangle(width + 50, height / 2, 50, height * 1.5, { isStatic: true });
const sky = Bodies.rectangle(width / 2, -100, width, 50, { isStatic: true });

const boundaries = [sky, rightWall, ground, leftWall];

// create a mouse constraint to react to a click event on the circle elements
const mouse = Mouse.create(render.canvas);
const mouseConstraint = MouseConstraint.create(engine, {
  mouse,
  constraint: {
    render: {
      visible: false,
    },
  },
});

// add the boundaries and mouse constraint to the world
World.add(engine.world, [...boundaries, mouseConstraint]);


// when a click event is registered assess if the click occurred on a body
// ! the only click-able body, within the canvas are the circles
Events.on(mouseConstraint, 'mousedown', () => {
  const { body } = mouseConstraint;
  if (body) {
    // remove the world from the body
    World.remove(engine.world, body);
    // increase the score in the state and the span element
    state.score += randomIntBetween(25, 75);
    score.textContent = state.score;

    // call the play function to create a new circle and start a new round
    play();
  }
});

// when a collision is detected highlight the loss of health
// remove one health point and the circle only when the collision is detected below the canvas
Events.on(engine, 'collisionStart', () => {
  const { bodies } = engine.world;
  const fruit = bodies.find(body => body.label === 'Circle Body');
  if (fruit.position.y > height) {
    // remove the element
    World.remove(engine.world, fruit);

    // reduce the health
    state.health -= 1;
    health.textContent = state.health;

    // if the health hits 0, proceed to the gameover state
    if (state.health <= 0) {
      playButton.parentElement.classList.add('gameover');
    } else {
      // start a new round
      play();
    }
  }
});

engine.world.gravity.y = 0.7;
// run the engine
Engine.run(engine);

// run the renderer
Render.run(render);

// PLAY THE GAME
// when the play button is clicked proceed to remove the class of .gameover from the container and run the matter js engine
function playGame() {
  // ! reset the state and update the span elements to match
  state.health = 5;
  state.score = 0;
  health.textContent = state.health;
  score.textContent = state.score;
  playButton.parentElement.classList.remove('gameover');
  play();
}
playButton.addEventListener('click', playGame);
