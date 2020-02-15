const canvas = document.querySelector('canvas');
const form = document.querySelector('form');
const { width, height } = canvas;
let animationFrame;
const columns = 150;
const rows = 100;
const w = width / columns;
const h = height / rows;

const grid = Array(columns * rows)
  .fill('')
  .map((val, index) => ({
    row: Math.floor(index / columns),
    column: index % columns,
  }));

function draw() {
  const context = canvas.getContext('2d');

  context.clearRect(0, 0, width, height);

  context.fillStyle = '#555';
  grid.forEach(({ row, column }) => {
    if (Math.random() > 0.5) {
      context.fillRect(column * w, row * h, w, h);
    }
  });
  context.fill();
}
function turnOn() {
  draw();
  animationFrame = requestAnimationFrame(turnOn);
}
function turnOff() {
  const context = canvas.getContext('2d');

  context.clearRect(0, 0, width, height);

  cancelAnimationFrame(animationFrame);
}

function handleInput() {
  const { checked } = this.isOn;
  this.status.value = checked ? 'On' : 'Off';

  if (checked) {
    turnOn();
  } else {
    turnOff();
  }
}
form.addEventListener('input', handleInput);
