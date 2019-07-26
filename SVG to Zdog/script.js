// extract the necessary functions
const {
  Illustration, Ellipse, Rect, Shape, Group, TAU,
} = Zdog;

// create an illustration out of the existing canvas
const illustration = new Illustration({
  element: 'canvas',
  dragRotate: true, // allow for rotation
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
  translate: { y: -50 },
  rotate: { x: TAU / 4 },
});

// group describing the decoration on top of the bomb
// ! add to the illustration instead of the bomb to have the group hide one another as the illustration is rotated
const triforce = new Group({
  addTo: illustration,
  translate: { x: -50, y: 20, z: 50 },
});

new Ellipse({
  addTo: triforce,
  stroke: 5,
  diameter: 68,
  color: '#458588',
});

// triangle repeated thrice in the center of the bomb
const tri = new Shape({
  addTo: triforce,
  stroke: 8,
  path: [
    { x: 0, y: 0 },
    { x: 6, y: 10 },
    { x: -6, y: 10 },
  ],
  translate: { y: -15 },
  color: '#FFF9EE',
});
tri.copy({
  translate: { x: -10, y: 3 },
});
tri.copy({
  translate: { x: 10, y: 3 },
});

// group describing the line making up the fuse and the sparkle
// group together to avoid z-conflict as they rotate
const fuse = new Group({
  addTo: illustration,
  translate: { x: -50, y: -50 },
});

new Shape({
  addTo: fuse,
  stroke: 12,
  path: [
    { x: 0, y: 0 },
    {
      arc: [
        { x: 0, y: -40 },
        { x: 40, y: -40 },
      ],
    },
    {
      arc: [
        { x: 80, y: -40 },
        { x: 80, y: 0 },
      ],
    },
    {
      arc: [
        { x: 80, y: 40 },
        { x: 120, y: 40 },
      ],
    },
    {
      arc: [
        { x: 160, y: 40 },
        { x: 160, y: 0 },
      ],
    },
    { x: 160, y: -15 },
  ],
  closed: false,
  color: '#458588',
});


const sparkle = new Group({
  addTo: fuse,
  translate: { x: 160, y: -15 }, // positioned where the line ends
});

// group the particles together
// this to scale the wrapping group and have the circles move forward and back to the center of the star
// ! add the particles before the star to have this last one effectively hide the particles
const particles = new Group({
  addTo: sparkle,
});

// translate the particles away from the center
// as the group gets scaled to 0 they effectively move back toward the center
const particle = new Shape({
  addTo: particles,
  stroke: 12,
  color: '#F3A37C',
  translate: { x: 30, y: -30 },
});
particle.copy({
  translate: { x: 40, y: 20 },
});
particle.copy({
  translate: { x: -40, y: 20 },
});

// star describing the light fuse
const star = new Shape({
  addTo: sparkle,
  path: [
    { x: -15, y: 20 },
    { x: 0, y: -25 },
    { x: 15, y: 20 },
    { x: -25, y: -7.5 },
    { x: 25, y: -7.5 },
  ],
  color: '#F3A37C',
  stroke: 20,
});

// add a smaller star on top of the existing one to fake the stroke
star.copy({
  color: '#FFF9EE',
  scale: 0.55,
  stroke: 10,
});

// counter used to animate the particles
let counter = 0;
function animate() {
  // progressively increment the counter
  counter = counter >= 3.14 ? 0 : counter + 0.02;
  // compute the scale in the [0-1] range and modify the scale of the particles' group
  const scale = Math.abs(Math.sin(counter));
  particles.scale.x = scale;
  particles.scale.y = scale;
  particles.scale.z = scale;

  requestAnimationFrame(animate);
  illustration.updateRenderGraph();
}
animate();
