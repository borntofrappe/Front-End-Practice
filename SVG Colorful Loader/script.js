function renderLoader(props) {
  const {
    paused,
    crispEdges,
    duration,
    initialScale,
    strokeWidth,
    innerRadius,
    number,
  } = props;
  console.log(number);
  document.querySelector('#root').innerHTML = `
    <svg shape-rendering="${
      crispEdges ? 'crispEdges' : 'auto'
    }" aria-hidden="true" viewBox="-50 -50 100 100" width="300" height="300">
    <defs>
        <path id="semicircle" d="M -50 0 a 50 50 0 0 1 100 0" />
        <path id="line" stroke-width="${strokeWidth}" d="M -50 0 h 50" />
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
    </svg>
    `;
}
const ColorfulLoader = function() {
  this.paused = true;
  this.crispEdges = false;
  this.duration = 1;
  this.initialScale = 0.5;
  this.strokeWidth = 2;
  this.innerRadius = 0;
  this.number = 10;

  renderLoader({
    paused: this.paused,
    duration: this.duration,
    initialScale: this.initialScale,
    strokeWidth: this.strokeWidth,
    innerRadius: this.innerRadius,
    number: this.number,
  });
};

window.onload = function() {
  const loader = new ColorfulLoader();
  console.log(loader);
  const gui = new dat.GUI();

  const f1 = gui.addFolder('Animation');
  const paused = f1.add(loader, 'paused');
  const duration = f1.add(loader, 'duration', 0.5, 4);
  const scale = f1.add(loader, 'initialScale', 0, 1);

  const f2 = gui.addFolder('Slices');
  const crisp = f2.add(loader, 'crispEdges');
  const stroke = f2.add(loader, 'strokeWidth', 0, 10);
  const radius = f2.add(loader, 'innerRadius', 0, 48);
  const number = f2.add(loader, 'number', 2, 50).step(1);

  paused.onFinishChange(d => {
    const slices = document.querySelectorAll('.slice');
    slices.forEach(slice => {
      slice.style.animationPlayState = d ? 'paused' : 'running';
    });
  });

  duration.onFinishChange(d => {
    const slices = document.querySelectorAll('.slice');
    slices.forEach((slice, index, { length }) => {
      slice.style.animationDuration = `${d}s`;
      slice.style.animationDelay = `${(d / length) * index * -1}s`;
    });
  });

  scale.onFinishChange(d => {
    const slices = document.querySelectorAll('.slice');
    slices.forEach(slice => {
      slice.style.transform = `scale(${d})`;
    });
  });

  crisp.onFinishChange(d => {
    const svg = document.querySelector('svg');
    svg.setAttribute('shape-rendering', d ? 'crispEdges' : 'auto');
  });

  stroke.onFinishChange(() => this.renderLoader(loader));
  radius.onFinishChange(d => {
    const innerCircle = document.querySelector('#inner');
    innerCircle.setAttribute('r', d);
  });

  number.onFinishChange(() => this.renderLoader(loader));
  f1.open();
  f2.open();
};
