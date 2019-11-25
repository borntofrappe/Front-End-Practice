// target the two canvases
const canvasBackground = document.querySelector('canvas:nth-of-type(1)');
const canvasClip = document.querySelector('canvas:nth-of-type(2)');

// function drawing in the canvas making up the background
// the idea is to draw a starry's sky
function drawBackground() {
  // in the context describe by the canvas, draw a gradient and a series of shapes describing the stars
  const { width, height } = canvasBackground;
  const context = canvasBackground.getContext('2d');


  // gradient from top to bottom, with lighter and lighter shades of blue
  const gradient = context.createLinearGradient(
    width / 2,
    0,
    width / 2,
    height
  );
  gradient.addColorStop(0, 'hsl(240, 100%, 15%)');
  gradient.addColorStop(0.3, 'hsl(240, 100%, 15%)');
  gradient.addColorStop(0.3, 'hsl(240, 100%, 20%)');
  gradient.addColorStop(0.7, 'hsl(240, 100%, 20%)');
  gradient.addColorStop(0.7, 'hsl(240, 100%, 25%)');

  context.fillStyle = gradient;
  context.fillRect(0, 0, width, height);

  // loop horizontally and vertically to include the shapes describing the stars
  for (let x = 0; x < window.innerWidth; x += 20) {
    for (let y = 0; y < window.innerHeight; y += 20) {
      // skip the stars with a certain probability
      const showStar = Math.random() > 0.8;
      if (showStar) {
        const radius = Math.random() * 2;
        context.fillStyle = 'hsl(240, 100%, 95%)';
        context.beginPath();

        // draw a different shape with a certain probability
        if (Math.random() > 0.75) {
          // four arcs around the center provided by the x and y coordinate
          const size = radius * 3;
          context.moveTo(x + size, y);
          context.quadraticCurveTo(x, y, x, y + size);
          context.quadraticCurveTo(x, y, x - size, y);
          context.quadraticCurveTo(x, y, x, y - size);
          context.quadraticCurveTo(x, y, x + size, y);
        } else {
          // a circle
          context.arc(x, y, radius, 0, Math.PI * 2);
        }
        context.closePath();
        context.fill();
      }
    }
  }
}

const clip = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
}

// function drawing in the canvas clipped to show only a portion at a time
// the idea is to then move the clip following the cursor
function drawClip() {
  // in the context describe by the canvas, draw a series of shapes _after_ a clip
  const { width, height } = canvasClip;
  const context = canvasClip.getContext('2d');


  context.clearRect(0, 0, width, height);
  context.save();
  const radius = Math.min(150, width / 2);

  context.lineWidth = 20;
  const { x, y } = clip;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.closePath();
  context.clip();

  // populate viewport here


  // circle fabricating the lens of the telescope
  context.strokeStyle = 'hsl(240, 100%, 5%)';
  context.fillStyle = 'hsla(0, 0%, 100%, 0.05)';
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.closePath();
  context.stroke();
  context.fill();



  context.restore();

  requestAnimationFrame(drawClip);
}

// function following the mousemove event to update the position of the clip
function updateClip({clientX: x, clientY: y}) {
  clip.x = x;
  clip.y = y;
}

// function called as the project loads and whenever the viewport changes in size
function resize() {
  // resize the canvases to cover the available width
  [canvasBackground, canvasClip].forEach(canvas => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  // re-draw the elements in the newly sized canvases
  drawBackground();
  drawClip();
}
window.addEventListener('resize', () => resize());
window.addEventListener('mousemove', updateClip);


resize();
