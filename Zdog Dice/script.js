const { Illustration, Group, Anchor, Rect, TAU, Ellipse } = Zdog;
const element = document.querySelector('canvas');
const illustration = new Illustration({
  element,
  dragRotate: true,
});

// anchor point used for the rotation
const dice = new Anchor({
  addTo: illustration,
});

// group describing the faces through rounded rectangles
const faces = new Group({
  addTo: dice,
});
// due to the considerable stroke, it is possible to fake the dice using four faces only
const face = new Rect({
  addTo: faces,
  stroke: 50,
  width: 50,
  height: 50,
  color: 'hsl(5, 80%, 55%)',
  translate: {
    z: -25,
  },
});

// rotate the faces around the center
face.copy({
  rotate: {
    x: TAU / 4,
  },
  translate: {
    y: 25,
  },
});

face.copy({
  rotate: {
    x: TAU / 4,
  },
  translate: {
    y: -25,
  },
});

face.copy({
  translate: {
    z: 25,
  },
});

// include the dots repeating as many shapes/groups as possible
// ! when copying an element be sure to reset the rotation/translation of the copied shape
const one = new Ellipse({
  addTo: dice,
  diameter: 15,
  stroke: false,
  fill: true,
  color: 'hsl(0, 0%, 100%)',
  translate: {
    z: 50,
  },
});

const two = new Group({
  addTo: dice,
  rotate: {
    x: TAU / 4,
  },
  translate: {
    y: 50,
  },
});

one.copy({
  addTo: two,
  translate: {
    y: 20,
  },
});

one.copy({
  addTo: two,
  translate: {
    y: -20,
  },
});

const three = new Group({
  addTo: dice,
  rotate: {
    y: TAU / 4,
  },
  translate: {
    x: 50,
  },
});

two.copyGraph({
  addTo: three,
  rotate: {
    x: 0,
  },
  translate: {
    y: 0,
  },
});

one.copy({
  addTo: three,
  translate: {
    z: 0,
  },
});

const four = new Group({
  addTo: dice,
  rotate: {
    y: TAU / 4,
  },
  translate: {
    x: -50,
  },
});

two.copyGraph({
  addTo: four,
  rotate: {
    x: 0,
  },
  translate: {
    x: 20,
    y: 0,
  },
});

two.copyGraph({
  addTo: four,
  rotate: {
    x: 0,
  },
  translate: {
    x: -20,
    y: 0,
  },
});

const five = new Group({
  addTo: dice,
  rotate: {
    x: TAU / 4,
  },
  translate: {
    y: -50,
  },
});

four.copyGraph({
  addTo: five,
  rotate: {
    y: 0,
  },
  translate: {
    x: 0,
  },
});

one.copy({
  addTo: five,
  translate: {
    z: 0,
  },
});

const six = new Group({
  addTo: dice,
  translate: {
    z: -50,
  },
});

three.copyGraph({
  addTo: six,
  rotate: {
    y: 0,
  },
  translate: {
    x: 20,
  },
});

three.copyGraph({
  addTo: six,
  rotate: {
    y: 0,
  },
  translate: {
    x: -20,
  },
});

// animate the dice to endlessly rotate around its center
function animate() {
  illustration.updateRenderGraph();
  dice.rotate.x += 0.01;
  dice.rotate.y -= 0.01;
  requestAnimationFrame(animate);
}
animate();
