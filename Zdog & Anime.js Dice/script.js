const { Illustration, Group, Anchor, Rect, TAU, Ellipse } = Zdog;
const element = document.querySelector('canvas');
const illustration = new Illustration({
  element,
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

one.copy({
  addTo: three,
  translate: {
    z: 0,
  },
});

one.copy({
  addTo: three,
  translate: {
    x: 20,
    y: -20,
    z: 0,
  },
});

one.copy({
  addTo: three,
  translate: {
    x: -20,
    y: 20,
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

two.copyGraph({
  addTo: six,
  rotate: {
    x: 0,
    z: TAU / 4,
  },
  translate: {
    x: 0,
    y: 0,
  },
});

four.copyGraph({
  addTo: six,
  rotate: {
    y: 0,
  },
  translate: {
    x: 0,
  },
});

// show the static illustration
illustration.updateRenderGraph();

// animation following a click on the button, using anime.js
const button = document.querySelector('button');

// object animated through anime.js
const rotation = {
  x: 0,
  y: 0,
  z: 0,
};

// array describing the rotation necessary to highlight the difference faces
const rotate = [
  {},
  {
    x: TAU / 4,
  },
  {
    y: TAU / 4,
  },
  {
    y: (TAU * 3) / 4,
  },
  {
    x: (TAU * 3) / 4,
  },
  {
    x: TAU / 2,
  },
];

// utility function returning a positive integer up to a maximum value
const randomInt = (max = 10) => Math.floor(Math.random() * max);
// utility function returning a random item from an array
const randomItem = arr => arr[randomInt(arr.length)];

// function animating the dice according to the input x and y values
// ! as some items of the array describe only one rotation include a default value
function rollDice({ x = TAU, y = TAU }) {
  // animate the object toward the input values
  anime({
    targets: rotation,
    // ! increment the input rotation with a random number of additional rotations
    x: x + TAU * randomInt(),
    y: y + TAU * randomInt(),
    z: TAU * randomInt(),
    duration: 1500,
    // while the object is being updated update the rotation of the dice
    // ! remember to update the graphic with the updateRenderGraph() method
    update() {
      dice.rotate.x = rotation.x;
      dice.rotate.y = rotation.y;
      dice.rotate.z = rotation.z;
      illustration.updateRenderGraph();
    },
  });
}

button.addEventListener('click', () => rollDice(randomItem(rotate)));
