/* globals Zdog */
/* eslint-disable no-new */
// from the Zdog object extract the necessary objects
const {
  Illustration, Ellipse, Shape, Group, Rect, Anchor,
} = Zdog;
const canvas = document.querySelector('canvas');

// set up the illustration with the canvas and allow for drag
const illustration = new Illustration({
  element: 'canvas',
  dragRotate: true,
});

const starAnchor = new Anchor({
  addTo: illustration,
  translate: { y: 100 },
  rotate: { z: Math.PI / 10 },
});
// draw a star through path elements
const starGroup = new Group({
  addTo: starAnchor,
  translate: { x: -70, y: -170 },
});

new Shape({
  addTo: starGroup,
  path: [
    { x: 0, y: 45 },
    { x: 45, y: 45 },
    { x: 70, y: 0 },
    { x: 95, y: 45 },
    { x: 140, y: 45 },
    { x: 105, y: 80 },
    { x: 120, y: 130 },
    { x: 70, y: 105 },
    { x: 20, y: 130 },
    { x: 35, y: 80 },
    { x: 0, y: 45 },
  ],
  stroke: 40,
  color: 'hsla(45, 100%, 58%)',
});
new Rect({
  addTo: starGroup,
  width: 40,
  height: 50,
  stroke: 40,
  translate: { x: 70, y: 70 },
  color: 'hsla(45, 100%, 58%)',
});

const eyes = new Group({
  addTo: starGroup,
  translate: { x: 70, y: 72.5, z: 20 },
});
const eye = new Ellipse({
  addTo: eyes,
  diameter: 5,
  stroke: 15,
  translate: { x: -32.5 },
  color: 'hsla(0, 0%, 0%)',
});
eye.copy({
  translate: { x: 32.5 },
});

const leftIrisAnchor = new Anchor({
  addTo: eyes,
  translate: { x: -32.5, z: 0.5 },
  // rotate: { z: Math.PI / 2 },
});
const leftIris = new Ellipse({
  addTo: leftIrisAnchor,
  diameter: 1,
  stroke: 5,
  color: 'hsla(0, 100%, 100%)',
  translate: { x: -3.5 },
});

const rightIrisAnchor = leftIrisAnchor.copyGraph({
  translate: { x: 32.5, z: 0.5 },
  // rotate: { z: 0 },
});

const mouthAnchor = new Anchor({
  addTo: starGroup,
  translate: { x: 70, y: 95, z: 20 },
});
const mouth = new Shape({
  addTo: mouthAnchor,
  path: [
    { x: -8, y: 0 },
    { x: 8, y: 0 },
    {
      arc: [
        { x: 4, y: 6 },
        { x: 0, y: 6 },
      ],
    },
    {
      arc: [
        { x: -4, y: 6 },
        { x: -8, y: 0 },
      ],
    },
  ],
  stroke: 10,
  color: 'hsl(358, 100%, 65%)',
});

// draw a circle with a fill and no stroke for the shadow
const shadow = new Ellipse({
  addTo: illustration,
  diameter: 100,
  stroke: false,
  fill: true,
  color: 'hsla(45, 100%, 58%, 0.4)',
  translate: { x: 50, y: 100 },
  rotate: { x: Math.PI / 1.7 },
});

illustration.updateRenderGraph();

/* to animate the star, change the transform property of the following elements
|variableName|transform|valueRange|
|---|---|---|
|starAnchor|rotate.z|[Math.PI/10, -Math.PI/10]|
|leftIrisAnchor && rightIrisAnchor|rotate.z|[0, Math.PI/2]|
|mouthAnchor|scale|[1, 1.2]|
|shadow|translate.x|[50, -50]|
*/
