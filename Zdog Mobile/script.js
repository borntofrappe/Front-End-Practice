// extract the necessary classes from the Zdog object
const {
  Illustration, Ellipse, Shape, Cylinder, TAU, Group, Anchor,
} = Zdog;

// retrieve the canvas and its measures
// this to include the elements relative to the container's size
const canvas = document.querySelector('canvas');
const { width, height } = canvas;
const margin = {
  top: 10,
  right: 20,
  bottom: 10,
  left: 20,
};
const innerWidth = width - (margin.left + margin.right);
const innerHeight = height - (margin.top + margin.bottom);

// create an illustration from the canvas element
const illustration = new Illustration({
  element: canvas,
  dragRotate: true,
});

// add a group element to translate the illustration according to the margin
// similar to the margin convention frequently used with D3
const group = new Group({
  addTo: illustration,
  translate: {
    x: -width / 2 + margin.left,
    y: -height / 2 + margin.top,
  },
});

// include shapes from the top center of the illustration
const topCenter = new Group({
  addTo: group,
  translate: { x: innerWidth / 2 },
});

new Cylinder({
  addTo: topCenter,
  diameter: 20,
  length: 30,
  stroke: 15,
  color: '#FFF2C7',
  translate: { y: 10 }, // translate by half the height since the cylinder is rotated from the top left corner
  rotate: { x: TAU / 4 },
});

// create an anchor starting with the ellipse, to have the nested elements rotate from its center
const hook = new Anchor({
  addTo: topCenter,
  translate: { y: 55 }, // translate at the bottom center of the cylinder
});

// add a group of stars rotating alongside the hook
const starGroup = new Group({
  addTo: hook,
  translate: { x : -innerWidth / 2 }
});

// add a star in the group element
const star = new Shape({
  addTo: starGroup,
  path: [
    { x: 0, y: 0 },
    { x: 4, y: 0 },
    { x: 6, y: -4 },
    { x: 8, y: 0 },
    { x: 12, y: 0 },
    { x: 8, y: 1 },
    { x: 10, y: 7 },
    { x: 6, y: 4 },
    { x: 2, y: 7 },
    { x: 4, y: 2 },
  ],
  stroke: 5, // considerable stroke to avoid gaps in the star structure
  color: '#FFAE08',
});


// copy the star to include a pseudo-random constellation behind the mobile
for (let columns = 1; columns < innerWidth; columns += innerWidth / 8) {
  for (let rows = 1; rows < innerHeight / 2; rows += innerHeight / 4) {
    star.copy({
      translate: { x: columns, y: rows + Math.floor(Math.random() * innerHeight / 4), z: Math.floor(Math.random() * 200 - 100) },
    });
  }
}
// hook attached to the cylinder
new Ellipse({
  addTo: hook,
  width: 30,
  height: 45,
  stroke: 12,
  color: '#FFF2C7',
  rotate: { y: TAU / 4 }, // rotate to have the circle parallel to the viewer eyesight
});

new Shape({
  addTo: hook,
  stroke: 12,
  color: '#FFF2C7',
  closed: false,
  path: [
    { x: 15, y: 15 },
    {
      arc: [
        { x: 15, y: 0 },
        { x: 0, y: 0 },
      ],
    },
    {
      arc: [
        { x: -15, y: 0 },
        { x: -15, y: 15 },
      ],
    },
    {
      bezier: [
        { x: -15, y: 30 },
        { x: 0, y: 30 },
        { x: 0, y: 45 },
      ],
    },
    { x: 0, y: 80 },
  ],
  translate: { y: 8 }, // translate to the bottom center of the ellipse
});

new Cylinder({
  addTo: hook,
  diameter: 45,
  length: 20,
  stroke: 15,
  color: '#FFF2C7',
  translate: { y: 105 }, // translate at the bottom of the previous path (be sure to consider the height of the cylinder)
  rotate: { x: TAU / 4 },
});

// arms protruding from the central cylinder
const arm = new Group({
  addTo: hook,
  translate: { y: 105 }, // translate to start from the center of the hook
});

new Shape({
  addTo: arm,
  stroke: 12,
  color: '#FFF2C7',
  closed: false,
  path: [
    { x: 0, y: 0 },
    {
      bezier: [
        { z: 40, y: 0 },
        { z: 120, y: 20 },
        { z: 160, y: 50 },
      ],
    },
  ],
});

new Shape({
  addTo: arm,
  stroke: 2,
  color: '#4956bb',
  closed: false,
  path: [
    { z: 160, y: 58 },
    { z: 160, y: 100 },
  ],
});

// copy the arm twice and rotate the group around the cylinder
const secondArm = arm.copyGraph({
  rotate: { y: TAU / 3 },
});

const thirdArm = arm.copyGraph({
  rotate: { y: TAU / 3 * 2 },
});

// include different groups and shapes at the bottom of the different arms
const firstPlanet = new Group({
  addTo: arm,
  translate: { z: 160, y: 140 },
});
new Shape({
  addTo: firstPlanet,
  stroke: 80,
  color: '#0A9DD0',
});


const secondPlanet = new Group({
  addTo: secondArm,
  translate: { z: 160, y: 150 },
});
new Ellipse({
  addTo: secondPlanet,
  stroke: 10,
  diameter: 130,
  color: '#ED9590',
  rotate: { x: TAU / 4, y: TAU / 16 },
});
new Shape({
  addTo: secondPlanet,
  stroke: 100,
  color: '#FFAE08',
});


const thirdPlanet = new Group({
  addTo: thirdArm,
  translate: { z: 160, y: 130 },
});
new Shape({
  addTo: thirdPlanet,
  stroke: 70,
  color: '#DF4D97',
});

// animate the illustration to continuously rotate the hook
function animate() {
  illustration.updateRenderGraph();
  requestAnimationFrame(animate);

  hook.rotate.y -= 0.01;
}

animate();
