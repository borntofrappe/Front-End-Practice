// retrieve the coordinates and dimensions of the svg
const svg = document.querySelector('svg');
const eyesight = svg.querySelector('svg #eyesight');
const { left: x, top: y, width, height } = svg.getBoundingClientRect();

// describe the position of the top left corner
const position = {
  x,
  y,
};

// describe the intervals to map the position of the cursor from the width/height to the prescribed translation
const h = {
  domain: [0, width],
  range: [-8, 8],
};

const v = {
  domain: [0, height],
  range: [-4, 4],
};

// when resizing the window update the values
window.addEventListener('resize', () => {
  const {
    left: x1,
    top: y1,
    width: width1,
    height: height1,
  } = svg.getBoundingClientRect();
  position.x = x1;
  position.y = y1;
  h.domain[1] = width1;
  v.domain[1] = height1;
});

/* function describing a linear scale
there's a bit of math involved, but it's far better than importing d3-scale just for mapping values
*/
const linearScale = (value = 1, domain = [0, 1], range = [0, 1]) => {
  /**
   * coefficient computed from the input intervals
   * -> m = (r1 - r0) / (d1 - d0)
   *
   */
  const [d0, d1] = domain;
  const [r0, r1] = range;
  const m = (r1 - r0) / (d1 - d0);
  /**
   * origin computed from any point on the line
   * -> b = y - m * x with any two points
   */
  const b = r1 - m * d1;

  /** value computed based on the line's equation
   * -> y = m * x + b
   */
  return m * value + b;
};

// following the mousemove event on the svg consider the cursor coordinates to compute the point within the svg
function handleMousemove(e) {
  const cX = e.pageX - position.x;
  const cY = e.pageY - position.y;

  // map the cursor's coordinates for the the translation values
  const tX = linearScale(cX, h.domain, h.range);
  const tY = linearScale(cY, v.domain, v.range);
  eyesight.setAttribute('transform', `translate(${tX} ${tY})`);
}
svg.addEventListener('mousemove', handleMousemove);

// bonus round
// just to try things out, update the color of the graphic when the svg is clicked
// beware, using a random color might result in rather jarring combinations
function handleClick() {
  this.style.color = `hsl(${Math.floor(Math.random() * 360)}, 80%, 50%)`;
}
svg.addEventListener('click', handleClick);
