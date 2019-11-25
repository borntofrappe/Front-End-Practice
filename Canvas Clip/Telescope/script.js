// target the two canvases
const canvasBackground = document.querySelector('canvas:nth-of-type(1)');
const canvasClip = document.querySelector('canvas:nth-of-type(2)');

const rotation = 0;
function addStar() {
  const fromTheTop = Math.random() > 0.5;
  if (fromTheTop) {
    return {
      x: Math.floor(Math.random() * window.innerWidth),
      y: 0,
      vx: 2 + Math.floor(Math.random() * 5),
      vy: 2 + Math.floor(Math.random() * 5),
      radius: Math.random() * 3,
    };
  }
  return {
    x: 0,
    y: Math.floor(Math.random() * window.innerHeight),
    vx: 2 + Math.floor(Math.random() * 5),
    vy: 2 + Math.floor(Math.random() * 5),
    radius: Math.random() * 3,
  };
}
let shootingStars = Array(50)
  .fill('')
  .map(() => addStar());

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
  gradient.addColorStop(0, 'hsl(240, 100%, 10%)');
  gradient.addColorStop(0.3, 'hsl(240, 100%, 10%)');
  gradient.addColorStop(0.3, 'hsl(240, 100%, 15%)');
  gradient.addColorStop(0.7, 'hsl(240, 100%, 15%)');
  gradient.addColorStop(0.7, 'hsl(240, 100%, 20%)');

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
};

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

  context.save();
  const radialGradient = context.createRadialGradient(0, 0, 80, 80, -80, 80);

  radialGradient.addColorStop(0, 'hsl(60, 80%, 10%)');
  radialGradient.addColorStop(1, 'hsl(60, 80%, 70%)');
  context.translate(width / 2, height / 2);
  context.fillStyle = radialGradient;
  context.beginPath();
  context.arc(0, 0, 50, 0, Math.PI * 2);
  context.closePath();
  context.fill();
  context.restore();

  shootingStars.forEach((shootingStar, index) => {
    context.fillStyle = 'hsl(60, 90%, 70%)';
    context.beginPath();
    context.arc(
      shootingStar.x,
      shootingStar.y,
      shootingStar.radius,
      0,
      Math.PI * 2
    );
    context.closePath();
    context.fill();

    shootingStar.x += shootingStar.vx;
    shootingStar.y += shootingStar.vy;

    if (shootingStar.x >= width || shootingStar.y >= height) {
      shootingStars = [
        ...shootingStars.slice(0, index),
        addStar(),
        ...shootingStars.slice(index + 1),
      ];
    }
  });

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
function updateClip({ clientX: x, clientY: y }) {
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
}
window.addEventListener('resize', () => resize());
window.addEventListener('mousemove', updateClip);

drawClip();
resize();
