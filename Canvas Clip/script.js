// target the two canvases
const canvasBackground = document.querySelector('canvas:nth-of-type(1)');
const canvasClip = document.querySelector('canvas:nth-of-type(2)');

// object describing the position of the clip
const clip = {
  x: window.innerWidth / 2,
  y: window.innerHeight / 2,
};


// function adding a star in the form of an object detailing the position, speed and size of a then circle
function addStar() {
  // shape positioned either at the top or the left of the screen
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

// array describing the planets
const planets = [
  {
    x: 1 / 8,
    y: 1 / 4,
  },
  {
    x: 3 / 4,
    y: 1 / 6,
  },
  {
    x: 1 / 2,
    y: 1 / 2,
  },
  {
    x: 1 / 5,
    y: 3 / 4,
  },
  {
    x: 6 / 7,
    y: 4 / 5,
  }
].map(({x, y}, index, { length }) => ({
  x,
  y,
  color: `${360 / length * index}`,
}));


// array describing the stars
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


// function drawing in the canvas clipped to show only a portion at a time
// the idea is to then move the clip following the cursor
function drawClip() {
  // in the context describe by the canvas, draw a series of shapes _after_ a clip
  const { width, height } = canvasClip;
  const context = canvasClip.getContext('2d');

  // clear the previous drawing
  context.clearRect(0, 0, width, height);

  // wrap the clipped section in a save-restore pair to avoid repeating
  context.save();

  // describe the radius using the updated width of the canvas
  const radius = Math.min(150, width / 2);

  // "draw" the clip
  context.lineWidth = 20;
  const { x, y } = clip;
  context.beginPath();
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.closePath();
  context.clip();

  // draw the planets
  // include a radial gradient next to each planet
  planets.forEach((planet) => {
    context.save();
    context.translate(planet.x * width, planet.y * height)
    const radialGradient = context.createRadialGradient(0, 0, 80, 80, -80, 80);
    radialGradient.addColorStop(0, `hsl(${planet.color}, 80%, 10%)`);
    radialGradient.addColorStop(1, `hsl(${planet.color}, 80%, 70%)`);
    context.fillStyle = radialGradient;
    context.beginPath();
    context.arc(0, 0, 50, 0, Math.PI * 2);
    context.closePath();
    context.fill();
    context.restore();

  });

  // draw the stars
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

    // move the shotting stars and whenever a copy exceeds the boundaries of the window, remove it in favor of a new one
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

  // draw a circle to fake a lens above the clip
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

}

window.addEventListener('resize', () => {
  resize();
  // re-draw the background
  // the clipped canvas is drawn after requestAnimationFrame
  drawBackground();
});
window.addEventListener('mousemove', updateClip);

// resize the canvases and draw the connecting elements
resize();
drawClip();
drawBackground();
