const { Illustration, Anchor, Shape, Ellipse, TAU } = Zdog;

const canvas = document.querySelector('canvas');
const { width, height } = canvas;
const strokeWidth = 20;
const color = 'hsl(0, 0%, 100%)';
const rotation = TAU / 4;
const delay = 1000;
const increment = 0.05;

const illustration = new Illustration({
  element: canvas,
});

const plane = new Anchor({
  addTo: illustration,
  scale: { x: 0, y: 0 },
  rotate: { x: -rotation },
});

new Shape({
  addTo: plane,
  path: [{ x: -48, y: 44 }, { x: 48, y: 44 }, { x: 0, y: -44 }],
  stroke: strokeWidth,
  color,
  translate: { x: -190 },
});

new Ellipse({
  addTo: plane,
  diameter: 88,
  stroke: strokeWidth,
  color,
  translate: { x: -65 },
});

new Shape({
  addTo: plane,
  path: [
    { x: -40, y: -40 },
    { x: 40, y: 40 },
    { move: { x: 40, y: -40 } },
    { x: -40, y: 40 },
  ],
  stroke: strokeWidth,
  color,
  translate: { x: 60 },
});

new Shape({
  addTo: plane,
  path: [
    { x: -42, y: -42 },
    { x: -42, y: 42 },
    { x: 42, y: 42 },
    { x: 42, y: -42 },
  ],
  stroke: strokeWidth,
  color,
  translate: { x: 190 },
});

function animate() {
  illustration.updateRenderGraph();
  plane.scale.x += increment;
  plane.scale.y += increment;
  plane.rotate.x = (1 - plane.scale.x) * rotation * -1;
  if (plane.scale.x <= 1 && plane.scale.y <= 1) {
    requestAnimationFrame(animate);
  } else {
    plane.scale.x = 1;
    plane.scale.y = 1;
  }
}

illustration.updateRenderGraph();

const timeout = setTimeout(() => {
  clearTimeout(timeout);

  animate();
}, delay);

window.addEventListener('click', () => {
  plane.scale.x = 0;
  plane.scale.y = 0;
  plane.rotate.x = -rotation;
  illustration.updateRenderGraph();
  const timeout = setTimeout(() => {
    clearTimeout(timeout);
    animate();
  }, delay);
});
