const form = document.querySelector('form');
const canvas = document.querySelector('canvas');
const context = canvas.getContext('2d');
context.fillStyle = '#555555';

// variable to keep track of requestAnimationFrame
// most importantly to cancel the animation
let animationFrame;

// setup: create a grid to replicate the pixels of the static texture
const { width, height } = canvas;
const columns = 150;
const rows = 100;
// w and h describing the size of the pixels
const w = width / columns;
const h = height / rows;

const grid = Array(columns * rows)
  .fill('')
  .map((val, index) => ({
    row: Math.floor(index / columns),
    column: index % columns,
  }));

// turn on: fill in the rectangles making up the grid at random
function turnOn() {
  context.clearRect(0, 0, width, height);

  grid.forEach(({ row, column }) => {
    if (Math.random() > 0.5) {
      context.fillRect(column * w, row * h, w, h);
    }
  });
  context.fill();

  animationFrame = requestAnimationFrame(turnOn);
}

// turn off: remove existing drawing
function turnOff() {
  context.clearRect(0, 0, width, height);

  cancelAnimationFrame(animationFrame);
}


// update the output using the form element api
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements
function handleInput() {
  const { checked: isOn } = this.onOff;
  this.status.value = isOn ? 'On' : 'Off';

  // change the appearance of the canvas
  if (isOn) {
    turnOn();
  } else {
    turnOff();
  }
}
form.addEventListener('input', handleInput);
