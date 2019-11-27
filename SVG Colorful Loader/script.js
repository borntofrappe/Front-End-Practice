// function rendering the svg graphic on the basis of the values received from dat.gui
function renderLoader(props) {
  const {
    paused,
    crispEdges,
    duration,
    initialScale,
    gap,
    innerRadius,
    number,
  } = props;
  document.querySelector('#root').innerHTML = `
    <svg shape-rendering="${
      crispEdges ? 'crispEdges' : 'auto'
    }" aria-hidden="true" viewBox="-50 -50 100 100" width="300" height="300">
    <defs>
        <path id="semicircle" d="M -50 0 a 50 50 0 0 1 100 0" />
        <path id="line" stroke-width="${gap}" d="M -50 0 h 50" />
        <mask id="mask--slice">
            <use href="#semicircle" fill="hsl(0, 0%, 100%)" />
            <use transform="rotate(${360 /
              number})" href="#semicircle" stroke="hsl(0, 0%, 0%)" fill="hsl(0, 0%, 0%)" />

            <use href="#line" stroke="hsl(0, 0%, 0%)" />
            <use href="#line" stroke="hsl(0, 0%, 0%)" transform="rotate(${360 /
              number})" />
            <circle id="inner" r="${innerRadius}" fill="hsl(0, 0%, 0%)" />
        </mask>
        <use id="slice" stroke="none" href="#semicircle" mask="url(#mask--slice)" />
    </defs>

    <g class="slices">
        ${Array(number)
        .fill()
        .map(
            (item, index, { length }) => `
                <g class="slice" transform="scale(${initialScale})" style="animation: scale ${duration /
            2}s ${(duration / length) *
            index *
            -1}s ease-in-out infinite alternate ${
            paused ? 'paused' : 'running'
            };">
                    <use href="#slice" fill="hsl(${(360 / length) *
                    index}, 90%, 60%)" transform="rotate(${(360 / length) *
            index})" />
                </g>
            `
        )
        .join('')}
    </g>
    </svg>
    `;
}

// dat.gui settings
const ColorfulLoader = function() {
    // divide between the settings dedicated to the animation and those dedicated to the svg
  this.paused = true;
  this.duration = 1;
  this.initialScale = 0.5;

  this.crispEdges = false;
  this.gap = 2;
  this.innerRadius = 0;
  this.number = 10;

  // draw the svg with the default values
  renderLoader({
    paused: this.paused,
    duration: this.duration,
    initialScale: this.initialScale,
    gap: this.gap,
    innerRadius: this.innerRadius,
    number: this.number,
  });
};

// function setting up dat.gui with the necessary controller
// still getting to know the library
window.onload = function() {
  const loader = new ColorfulLoader();
  const gui = new dat.GUI();

  // animation settings
  const f1 = gui.addFolder('Animation');
  const togglePlayState = f1.add(loader, 'paused');
  const updateDuration = f1.add(loader, 'duration', 0.5, 4);
  const updateInitialScale = f1.add(loader, 'initialScale', 0, 1);

  // toggle the animation-play-state property of all the group elements of class slice
  togglePlayState.onFinishChange(d => {
    const slices = document.querySelectorAll('.slice');
    slices.forEach(slice => {
      slice.style.animationPlayState = d ? 'paused' : 'running';
    });
  });

  // update the animation-duration _and_ animation-delay properties of the slices
  updateDuration.onFinishChange(d => {
    const slices = document.querySelectorAll('.slice');
    slices.forEach((slice, index, { length }) => {
      slice.style.animationDuration = `${d}s`;
      slice.style.animationDelay = `${(d / length) * index * -1}s`;
    });
  });

  // set the initial transform value for the slices
  updateInitialScale.onFinishChange(d => {
    const slices = document.querySelectorAll('.slice');
    slices.forEach(slice => {
      slice.style.transform = `scale(${d})`;
    });
  });


  // svg settings
  const f2 = gui.addFolder('Slices');
  const toggleCrispEdges = f2.add(loader, 'crispEdges');
  const updateGap = f2.add(loader, 'gap', 0, 10);
  const updateInnerRadius = f2.add(loader, 'innerRadius', 0, 48);
  const number = f2.add(loader, 'number', 2, 50).step(1);

  // toggle the shape-rendering property between crispEdges and auto
  toggleCrispEdges.onFinishChange(d => {
    const svg = document.querySelector('svg');
    svg.setAttribute('shape-rendering', d ? 'crispEdges' : 'auto');
  });

  // update the stroke-width of the lines included in between the slices
  updateGap.onFinishChange(d => {
    const line = document.querySelector('#line');
    line.setAttribute('stroke-width', d);
  });

  // update the radius of the inner circle
  updateInnerRadius.onFinishChange(d => {
    const innerCircle = document.querySelector('#inner');
    innerCircle.setAttribute('r', d);
  });

  // re-render the entire svg graphic with the new number of slices
  number.onFinishChange(() => renderLoader(loader));


  f1.open();
  f2.open();
};
