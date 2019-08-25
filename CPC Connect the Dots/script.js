// target the header and wrap each letter o in a span element
// this to show the custom counter specified through the stylesheet
const header = document.querySelector('header');
header.innerHTML = header.textContent.split('').map(letter => (letter.toLowerCase() === 'o' ? `<span>${letter}</span>` : letter)).join('');

// retrieve the canvas and its dimensions
const canvas = document.querySelector('.worksheet canvas');
const {width, height} = canvas;
// context to draw the circle/path elements
const context = canvas.getContext('2d');

// function called initially and following a click on the trash-can button
function setupCanvas() {
  // retrieve the coordinates described by the path element
  const d = document.querySelector('.worksheet svg path').getAttribute('d');
  const coordinates = d.match(/\d+ \d+/g);
  // consider the (x, y) integers described by the different sets of coordinates
  const points  = coordinates.map(point => point.split(' ').map((coordinate) => parseInt(coordinate, 10)));

  // for each point draw a circle
  points.forEach((point, index) => {
    const [x, y] = point;
    context.beginPath();
    context.arc(x, y, 4, 0, Math.PI * 2);
    context.fill();

    // below the circle include text describing the order of the point
    context.font = '14px sans-serif';
    context.textAlign = 'center';
    context.fillText(index + 1, x, y + 18);
  });
}
// immediately call the function setting up the canvas
setupCanvas();

// boolean allowing to draw only as the cursor is down on the canvas
let isCanvasFocused = false;
// variables describing the position from which the path is drawn
let startingX = 0;
let startingY = 0;


// function setting up the path
// ! update the initial coordinates
function setupPath(x, y) {
  isCanvasFocused = true;
  context.lineWidth = 4;
  [startingX, startingY] = [x, y];

  // remove the disabled attribute from the button
  document.querySelector('button').removeAttribute('disabled');
}

// function drawing the path
function drawPath(x, y) {
  // draw a path from the starting coordinates to the new values
  context.beginPath();
  context.moveTo(startingX, startingY)
  context.lineTo(x, y)
  context.stroke();

  // update the starting coordinates to have the stroke continue from where it last was
  [startingX, startingY] = [x, y];
};

// add the necessary event listeners
// as the canvas is focused update the starting position and toggle the control value to true
canvas.addEventListener('mousedown', ({layerX, layerY}) => setupPath(layerX, layerY));
canvas.addEventListener('touchstart', (e) => {
  const { layerX, layerY } = e.targetTouches[0];
  setupPath(layerX, layerY);
});

// as a cursor is moved on the canvas draw the path to the final coordinates
canvas.addEventListener('mousemove', (e) => {
  if(isCanvasFocused) {
    const { layerX, layerY } = e;
    drawPath(layerX, layerY);
  }
});
canvas.addEventListener('touchmove', (e) => {
  if(isCanvasFocused) {
    e.preventDefault();
    const { layerX, layerY } = e.targetTouches[0];
    drawPath(layerX, layerY);
  }
});

// as the cursor leaves the canvas element switch the control boolean back to false
canvas.addEventListener('mouseup', () => { isCanvasFocused = false; });
canvas.addEventListener('mouseout', () => { isCanvasFocused = false; });
canvas.addEventListener('touchend', () => { isCanvasFocused = false; });

// following a click on the button element clear the content of the canvas and disable the button once again
const button = document.querySelector('.worksheet button');
button.addEventListener('click', () => {
  context.clearRect(0, 0, width, height);
  // ! call the setup function to retain the coordinates
  setupCanvas();

  button.setAttribute('disabled', true);
});

// target the input of type checkbox and following the input event show the svg in the .worksheet__paper container
const checkbox = document.querySelector('input[type="checkbox"]');
checkbox.addEventListener('input', () => document.querySelector('.worksheet__paper').classList.toggle('show'));