// target the svg and the elements meant to be translated (they all share a data-strength attribute)
const svg = document.querySelector('svg');
const elements = svg.querySelectorAll('[data-strength]');

// for each element create an object describing the node and variables used for the translation
// ! the strength is determined by the respective attribute
// ! threshold describes the maximum translation assumed by the element
const translation = [...elements].map(element => ({
  element,
  initial: 0,
  final: 0,
  velocity: 0,
  strength: Number(element.getAttribute('data-strength')),
  threshold: Number(element.getAttribute('data-threshold')),
  drag: 0.6
}));

// at every frame update the position of the elements toward the final coordinate
function animate() {
  translation.forEach(set => {
    const { element, drag, strength } = set;
    let { initial, final, velocity } = set;

    let force = final - initial;
    force *= strength;
    velocity *= drag;
    velocity += force;

    initial += velocity;

    set.velocity = velocity;
    set.initial = initial;
    element.setAttribute('transform', `translate(${initial} 0)`)
  })

  requestAnimationFrame(animate);
}

// following the mousemove event update the final coordinate of each eleement adding the horizontal movement described by the cursor
const handleMove = ({ movementX }) => translation.forEach(set => {
  // ! do not update the final coordinate if it reaches the respective threshold
  if(Math.abs(set.final  +movementX) < set.threshold ) {
    set.final = set.final + movementX;
  }
});
// following the mouseout event set
const handleOut = () => translation.forEach(set => set.final = 0);

// listen for the mousemove and mouseout events
svg.addEventListener('mousemove', handleMove);
svg.addEventListener('mouseout', handleOut);
// call the function to animate the elements
animate();