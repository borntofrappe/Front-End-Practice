// identify the svg graphic
const svg = document.querySelector('svg');
// retrieve the starting coordinates and dimensions
let { x, y, height, width } = svg.getBoundingClientRect();

// variables to emulate a physics engine
// @vlh explains the concept with clarity https://www.youtube.com/watch?v=VWfXiSUDquw

// variables describing where the svg should end up
const target = {
  x,
  y,
};
// variables describing the velocity assumed by the svg going from (x, y) to (target.x, target.y)
const velocity = {
  x: 0,
  y: 0,
};

// variable describing the rigidity of the hypothetical spring
const strength = 0.1;
// variable describing the follow through on
const drag = 0.6;

/*
the idea is to update the target variables following the mousemove event
with a function using requestAnimation frame then update the velocity to describe the movement of the svg toward the target
*/

window.addEventListener('mousemove', ({pageX, pageY}) => {
  target.x = pageX - 5;
  target.y = pageY - 30; // -5 and -30 to roughly overlap with the part of the svg describing the nose
});

function updatePosition() {
  // retrieve the target and velocity
  const { x: tx, y: ty } = target;
  let { x: vx, y: vy } = velocity;

  // variable describing the movement from (x, y) toward (tx, ty)
  // initialize as the actual distance between the points
  let forceX = tx - x;
  let forceY = ty - y;

  // reduce by the amount of the strength variable
  // this means the gap covered by the svg is reduced
  forceX *= strength;
  forceY *= strength;

  // reduce the velocity by the amount of the drag variable
  vx *= drag;
  vy *= drag;

  // increase the velocity by the force variables
  vx += forceX;
  vy += forceY;

  // update the x and y coordinates to match the velocity
  // ! even if it is labeled velocity, the variables all refer to a distance
  x += vx;
  y += vy;

  // update the velocity variables
  // this means vx and vy will be continuously considered and reduced until they reach 0 and the svg has reached its final coordinates
  velocity.x = vx;
  velocity.y = vy;


  // update the position of the svg
  svg.style.left = `${x + width / 2}px`;
  svg.style.top = `${y + height / 2}px`;

  requestAnimationFrame(updatePosition);
}

updatePosition();