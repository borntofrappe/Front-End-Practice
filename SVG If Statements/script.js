// setup
const duration = 500;
const easing = 'easeInOutSine';
const durationCircle = 300;
const easingCircle = 'easeOutBack';

// counter variables
let x = 0;
let y = 0;
// change in viewBox
const dx = 5;
const dy = 10;


// buttons to add a fork/show the entire tree structure
// createElement
const buttonFork = document.createElement('button');
buttonFork.textContent = 'Fork';

const buttonViewbox = document.createElement('button');
buttonViewbox.textContent = 'Zoom out';


document.body.appendChild(buttonFork);
document.body.appendChild(buttonViewbox);


// createElementNS for SVG elements
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('viewBox', '-5 -5 10 10');
svg.setAttribute('width', '200');
svg.setAttribute('height', '200');

document.body.appendChild(svg);

// initial circle
const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
circle.setAttribute('fill', 'currentColor');
circle.setAttribute('r', '1');
circle.setAttribute('stroke', 'none');

svg.appendChild(circle);

// group wrapping the path elements
const groupPaths = document.createElementNS('http://www.w3.org/2000/svg', 'g');
groupPaths.setAttribute('fill', 'none');
groupPaths.setAttribute('stroke', 'currentColor');
groupPaths.setAttribute('stroke-width', '0.5');
groupPaths.setAttribute('stroke-linecap', 'round');

svg.appendChild(groupPaths);

// two path elements describing a bezier curve south west and south east
// added at every iteration
const pathSouthWest = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'path'
);
pathSouthWest.setAttribute('d', 'M 0 0 c 0 5 -5 5 -5 10');

const pathSouthEast = document.createElementNS(
  'http://www.w3.org/2000/svg',
  'path'
);
pathSouthEast.setAttribute('d', 'M 0 0 c 0 5 5 5 5 10');

// add two copies of the strokes, in the last available group
// add a group translated at the bottom of one of the two paths
// add a circle in this group
function addFork() {
  buttonViewbox.textContent = 'Zoom out';

  const groups = svg.querySelectorAll('g');
  const groupLast = groups[groups.length - 1];

  const pSW = pathSouthWest.cloneNode(true);
  const pSE = pathSouthEast.cloneNode(true);

  groupLast.appendChild(pSW);
  groupLast.appendChild(pSE);

  const goesEast = Math.random() > 0.5;

  y += 1;

  // hide the other path
  if(goesEast) {
    x -= 1;

    pSW.setAttribute('opacity', 0);
    pSW.setAttribute('stroke-dasharray', '1');
    pSW.setAttribute('stroke-width', '0.3');
    pSW.setAttribute('class', 'else');
  } else {
    x += 1;

    pSE.setAttribute('opacity', 0);
    pSE.setAttribute('stroke-dasharray', '1');
    pSE.setAttribute('stroke-width', '0.3');
    pSE.setAttribute('class', 'else');
  }

  const groupTranslate = document.createElementNS('http://www.w3.org/2000/svg', 'g');
  groupTranslate.setAttribute('transform', `translate(${goesEast ? dx : dx * -1} ${dy})`);

  groupLast.appendChild(groupTranslate);

  const p = circle.cloneNode(true);
  groupTranslate.appendChild(p);

  const viewBox = `${-5 - x * dx} ${-5 + y * dy} 10 10`;

  // animate the path, viewBox, finally the circle
  anime({
    targets: goesEast ? pSE : pSW,
    strokeDashoffset: [anime.setDashoffset, 0],
    duration,
    easing,
  });

  anime({
    targets: svg,
    viewBox,
    duration,
    easing,
    // necessary for the if statement checking equality
    complete: () => svg.setAttribute('viewBox', viewBox)
  })

  anime({
    targets: p,
    scale: [0, 1],
    duration: durationCircle,
    delay: duration,
    easing: easingCircle,
  })
}
buttonFork.addEventListener('click', addFork);

// consider the existing viewBox and pan out/zoom in
// when panning out show the .else paths with a staggered animation
function toggleViewbox() {
  let viewBox = svg.getAttribute('viewBox');
  if(viewBox === `${-5 - x * dx} ${-5 + y * dy} 10 10`) {
    viewBox = `-10 -5 20 ${10 * (y + 1)}`;
    buttonViewbox.textContent = 'Zoom in';

  anime({
    targets: '.else',
    opacity: (el, i, l) => 0.9 - 0.5 / l * (l - i),
    duration,
    delay: (el, i, l) => 500 / l * i,
    easing,
  })

  } else {
    viewBox = `${-5 - x * dx} ${-5 + y * dy} 10 10`;
    buttonViewbox.textContent = 'Zoom out';


  anime({
    targets: '.else',
    opacity: 0,
    duration,
    easing,
  })
  }


  anime({
    targets: svg,
    viewBox,
    duration,
    easing,
    // necessary for the if statement checking equality
    complete: () => svg.setAttribute('viewBox', viewBox)
  })
}

buttonViewbox.addEventListener('click', toggleViewbox);