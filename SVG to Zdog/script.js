/* globals Zdog */
// extract the necessary functions
const { Illustration, Ellipse, Rect, Shape, Group, Anchor, TAU } = Zdog;
// create an illustration out of the existing canvas
const illustration = new Illustration({
  element: 'canvas',
  dragRotate: true,
});

// group describing the bomb, positioned horizontally in the first half of the illustration
const bomb = new Group({
  addTo: illustration,
  translate: { x: -50, y: 20 },
});

new Shape({
  addTo: bomb,
  stroke: 120,
  color: '#0D3730',
});

new Rect({
  addTo: bomb,
  width: 60,
  height: 20,
  stroke: 40,
  color: '#0D3730',
  translate: { y: -50},
  rotate: { x: TAU / 4},
});

const triforce = new Group({
  addTo: illustration,
  translate: { x: -50, y: 20, z: 50 },

})
new Ellipse({
  addTo: triforce,
  stroke: 5,
  diameter: 68,
  color: '#458588',
})
const tri = new Shape({
  addTo: triforce,
  stroke: 8,
  path: [
    { x: 0, y: 0},
    { x: 6, y: 10},
    { x: -6, y: 10},
  ],
  translate: { y: -15},
  color: '#FFF9EE',
});

tri.copy({
  translate: { x: -10, y: 3},
})
tri.copy({
  translate: { x: 10, y: 3},
})

const fuse = new Group({
  addTo: illustration,
  translate: { x: -50, y: -50 },
});

const match = new Shape({
  addTo: fuse,
  stroke: 12,
  path: [
    { x: 0, y: 0},
    { arc: [
      { x: 0, y: -40},
      { x: 40, y: -40},
    ]},
    { arc: [
      { x: 80, y: -40},
      { x: 80, y: 0},
    ]},
    { arc: [
      { x: 80, y: 40},
      { x: 120, y: 40},
    ]},
    { arc: [
      { x: 160, y: 40},
      { x: 160, y: 0},
    ]},
    { x: 160, y: -15 },
  ],
  closed: false,
  color: '#458588',
});

const sparkle = new Group({
  addTo: fuse,
  translate: { x: 160, y: -15 },
})


const sparkles = new Group({
  addTo: sparkle,
});

const flint = new Shape({
  addTo: sparkles,
  stroke: 12,
  color: '#F3A37C',
  translate: { x: 30, y: -30 },
})

const star = new Shape({
  addTo: sparkle,
  path: [
    { x: -15, y: 20},
    { x: 0, y: -25},
    { x: 15, y: 20},
    { x: -25, y: -7.5},
    { x: 25, y: -7.5},
  ],
  color: '#F3A37C',
  stroke: 20,
});
star.copy({
  color: '#FFF9EE',
  scale: 0.55,
  stroke: 10,
})

flint.copy({
  translate: { x: 40, y: 20 },
})
flint.copy({
  translate: { x: -40, y: 20 },
})

let counter = 0;
// let direction = -1;
function animate() {
  if(counter <= 100) {
    counter = counter >= 3.14 ? 0 : counter + 0.02;
    const scale = Math.abs(Math.sin(counter));
    sparkles.scale.x = scale;
    sparkles.scale.y = scale;
    sparkles.scale.z = scale;
  }
  requestAnimationFrame(animate);

  illustration.updateRenderGraph();
}
animate();
