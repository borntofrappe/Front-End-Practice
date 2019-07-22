// identify the svg graphic
const svg = document.querySelector('svg');
// retrieve the starting coordinates and dimensions
let { x, y, height, width } = svg.getBoundingClientRect();

// variables to emulate a physics engine
// https://www.youtube.com/watch?v=VWfXiSUDquw
const target = {
  x,
  y,
};

const velocity = {
  x: 0,
  y: 0,
};
let strength = 0.1;
let drag = 0.6;


// following the mousemove event update the variables describing the position of the graphic
window.addEventListener('mousemove', ({pageX, pageY}) => {
  target.x = pageX - 5;
  target.y = pageY - 30; // -5 and -30 to roughly overlap with the part of the svg describing the nose
});

// at every frame update the positon of the svg to match the x and y variable
function updatePosition() {
  const { x: tx, y: ty } = target;
  let { x: vx, y: vy } = velocity;

  let forceX = tx - x;
  let forceY = ty - y;

  forceX *= strength;
  forceY *= strength;

  vx *= drag;
  vy *= drag;

  vx += forceX;
  vy += forceY;

  x += vx;
  y += vy;

  svg.style.left = `${x + width / 2}px`;
  svg.style.top = `${y + height / 2}px`;

  velocity.x = vx;
  velocity.y = vy;

  requestAnimationFrame(updatePosition);
}

updatePosition();