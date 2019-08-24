const canvas = document.querySelector('#drawing-canvas');
const {width, height} = canvas;
const context = canvas.getContext('2d');

function setupCanvas() {
  const d = document.querySelector('#drawing-svg path').getAttribute('d');
  const coordinates = d.match(/\d+ \d+/g);
  const points  = coordinates.map(point => point.split(' ').map((coordinate) => parseInt(coordinate, 10)));

  points.forEach((point, index) => {
    const [x, y] = point;
    context.beginPath();
    context.arc(x, y, 4, 0, Math.PI * 2);
    context.fill();

    context.font = '14px sans-serif';
    context.textAlign = 'center';
    context.fillText(index + 1, x, y + 18);
  });
}


setupCanvas();


let isCanvasFocused = false;
let startingX, startingY = [0, 0];
function drawPath(x, y) {
  context.beginPath();
  context.moveTo(startingX, startingY)
  context.lineTo(x, y)
  context.stroke();

  [startingX, startingY] = [x, y];
};
function setupPath(x, y) {
  button.classList.add('active');
  button.removeAttribute('disabled');

  context.lineWidth = 4;

  [startingX, startingY] = [x, y];
  isCanvasFocused = true;

}
canvas.addEventListener('mousedown', ({layerX, layerY}) => setupPath(layerX, layerY));
canvas.addEventListener('touchstart', (e) => {
  const { layerX, layerY } = e.targetTouches[0];
  setupPath(layerX, layerY);
});

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

canvas.addEventListener('mouseup', () => { isCanvasFocused = false; });
canvas.addEventListener('mouseout', () => { isCanvasFocused = false; });
canvas.addEventListener('touchend', () => { isCanvasFocused = false; });

const button = document.querySelector('button');
button.addEventListener('click', () => {
  button.classList.remove('active');
  button.setAttribute('disabled', true);
  context.clearRect(0, 0, width, height);
  setupCanvas();
});