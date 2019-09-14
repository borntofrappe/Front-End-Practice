// data describing the members of the AC/DC band
const band = [
  {
    name: 'Angus Young',
    role: 'guitar',
    active: [
      {
        beginning: 1973,
      },
    ],
  },
  {
    name: 'Chris Slade',
    role: 'drums',
    active: [
      {
        beginning: 1989,
        end: 1994,
      },
      {
        beginning: 2015,
      },
    ],
  },
  {
    name: 'Steve Young',
    role: 'guitar',
    active: [
      {
        beginning: 2014,
      },
    ],
  },
  {
    name: 'Axl Rose',
    role: 'vocals',
    active: [
      {
        beginning: 2016,
      },
    ],
  },
  {
    name: 'Malcolm Young',
    role: 'guitar',
    active: [
      {
        beginning: 1973,
        end: 2014,
      },
    ],
  },
  {
    name: 'Dave Evans',
    role: 'vocals',
    active: [
      {
        beginning: 1973,
        end: 1974,
      },
    ],
  },
  {
    name: 'Bon Scott',
    role: 'vocals',
    active: [
      {
        beginning: 1974,
        end: 1980,
      },
    ],
  },
  {
    name: 'Phil Rudd',
    role: 'drums',
    active: [
      {
        beginning: 1975,
        end: 1983,
      },
      {
        beginning: 1994,
        end: 2015,
      },
    ],
  },
  {
    name: 'Mark Evans',
    role: 'bass',
    active: [
      {
        beginning: 1975,
        end: 1977,
      },
    ],
  },
  {
    name: 'Cliff Williams',
    role: 'bass',
    active: [
      {
        beginning: 1977,
        end: 2016,
      },

    ],
  },
  {
    name: 'Brian Johnson',
    role: 'vocals',
    active: [
      {
        beginning: 1980,
        end: 2016,
      },
    ],
  },
  {
    name: 'Simon Wright',
    role: 'drums',
    active: [
      {
        beginning: 1983,
        end: 1989,
      },
    ],
  },
];

// utility function to create an instance of the date object with arguments (more reliable than with an string)
const yearToDate = year => new Date(`${year}`, 1, 1);

// sort the array according to the starting year and according to the role
const bandYears = [...band].sort((a, b) => (a.active[0].beginning > b.active[0].beginning ? 1 : -1));
// ! for the role start from the sorted array and considering the alphabetical order
const bandRoles = [...bandYears].sort((a, b) => (a.role >= b.role ? 1 : -1));

// create a time scale to map the year values in a [0-100] range
// range describing the % percentage for the position and size of the |---| line
const oldestYear = bandYears[0].active[0].beginning;

const timeScale = d3
  .scaleTime()
  .domain([yearToDate(oldestYear), new Date()])
  .range([0, 100]);

// add a div container for each member
const viz = d3.select('.viz');

// function binding the data points to html element
// use the update-enter-exit loop to plot the data, to change the appearance according to the input data
function displayBandMembers(data) {
  // update: existing elements (when the function is first called, no element at all)
  const update = viz
    .selectAll('div.member')
    .data(data);

  // enter: new elements (when the function is first called, this means one element for each data point)
  const enter = update
    .enter();

  // exit: old (unnecessary) elements (since the input arrays have the same number of items this selection is always empty, but it is included to complete the loop)
  const exit = update
    .exit();

  // remove unnecessary elements
  exit.remove();

  // enter: div container to display the items side by side
  const member = enter
    .append('div')
    .attr('class', 'member')
    .style('display', 'flex')
    .style('align-items', 'center')
    .style('background', (d, i) => (i % 2 === 0 ? 'hsl(0, 0%, 96%)' : 'hsl(0, 0%, 100%)'));

  // icon matching the role
  // change the reference of any existing icon
  const svg = update.select('svg use');
  member
    .append('svg')
    .attr('viewBox', '0 0 100 100')
    .attr('width', '50')
    .attr('height', '50')
    .style('display', 'block')
    .style('width', '30px')
    .style('height', 'auto')
    .style('margin', '0 0.75rem')
    .append('use')
    .merge(svg)
    .attr('href', ({ role }) => `#${role}`);

  // container in which to describe the name and years of activity
  const details = member
    .append('div')
    .attr('class', 'details')
    .style('flex-grow', '1')
    .style('min-height', '60px')
    .style('position', 'relative');

  // absolute position the heading in the middle of the active years
  // change the text _and_ position of the existing heading
  const h2 = update.select('div.details h2');
  details
    .append('h2')
    .style('position', 'absolute')
    .style('font-size', '0.85rem')
    .style('color', 'hsl(0, 0%, 15%)')
    .style('white-space', 'nowrap')
    .style('top', '15%')
    .merge(h2)
    .text(({ name }) => name)
    .style('left', ({ active }) => {
      const beginning = yearToDate(active[0].beginning);
      const end = active[active.length - 1].end ? yearToDate(active[active.length - 1].end) : new Date();
      const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
      return `${midPoint}%`;
    })
    // change the alignment of the text to avoid having the name overlap on the icon or exceed the visualization
    .style('transform', ({ active }) => {
      const beginning = yearToDate(active[0].beginning);
      const end = active[active.length - 1].end ? yearToDate(active[active.length - 1].end) : new Date();
      const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
      if (midPoint < 10) {
        return 'translate(0%, 0%)';
      } if (midPoint > 90) {
        return 'translate(-100%, 0%)';
      }
      return 'translate(-50%, 0%)';
    });

  // absolute position each .years container according to the starting year
  // ! have the container take as much space as described by the beginning and end year values
  const years = details
    .selectAll('div.years')
    .data(({ active }) => active)
    .enter()
    .append('div')
    .attr('class', 'years')
    .style('position', 'absolute')
    .style('top', '35%')
    .style('height', '65%')
    .style('left', ({ beginning }) => `${timeScale(yearToDate(beginning))}%`)
    .style('width', ({ beginning, end }) => {
      const endDate = end ? yearToDate(end) : new Date();
      return `${timeScale(endDate) - timeScale(yearToDate(beginning))}%`;
    });

  // include span elements to create the |---| line encompassing the container
  years
    .append('span')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '0%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '2px')
    .style('height', '18px')
    .style('transform', 'translate(-50%, -50%)');

  years
    .append('span')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '0%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '100%')
    .style('height', '2px')
    .style('transform', 'translate(0%, -50%)');

  // conceal the final tick in case the member is still active
  years
    .append('span')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '100%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '2px')
    .style('height', '18px')
    .style('transform', 'translate(-50%, -50%)')
    .style('opacity', ({ end }) => (end ? '1' : '0'));

  // ! the .years containers are bound to the .active array
  // as this might change in size, it is necessary to consider the update-enter-exit loop for the nested div
  const updateYears = update
    .select('div.details')
    .selectAll('div.years')
    .data(({ active }) => active);

  const enterYears = updateYears
    .enter();

  const exitYears = updateYears
    .exit();

  // exit: remove unnecessary elements
  exitYears
    .remove();

  // update years: update the position of the existing container
  updateYears
    .style('left', ({ beginning }) => `${timeScale(yearToDate(beginning))}%`)
    .style('width', ({ beginning, end }) => {
      const endDate = end ? yearToDate(end) : new Date();
      return `${timeScale(endDate) - timeScale(yearToDate(beginning))}%`;
    });

  // conceal the last span if there's no matching year
  updateYears
    .select('span:nth-of-type(3)')
    .style('opacity', ({ end }) => (end ? '1' : '0'));

  // enter: add a new container and three accompanying span elements
  // same design to replicate the |---| line
  const newYears = enterYears
    .append('div')
    .attr('class', 'years')
    .style('position', 'absolute')
    .style('top', '35%')
    .style('left', ({ beginning }) => `${timeScale(new Date(`${beginning}`))}%`)
    .style('width', ({ beginning, end }) => {
      const endDate = end ? yearToDate(end) : new Date();
      return `${timeScale(endDate) - timeScale(yearToDate(beginning))}%`;
    })
    .style('height', '65%');

  newYears
    .append('span')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '0%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '2px')
    .style('height', '18px')
    .style('transform', 'translate(-50%, -50%)');

  newYears
    .append('span')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '0%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '100%')
    .style('height', '2px')
    .style('transform', 'translate(0%, -50%)');

  // conceal the final tick in case the member is still active
  newYears
    .append('span')
    .attr('class', 'end')
    .style('position', 'absolute')
    .style('top', '50%')
    .style('left', '100%')
    .style('background', 'currentColor')
    .style('border-radius', '5px')
    .style('width', '2px')
    .style('height', '18px')
    .style('transform', 'translate(-50%, -50%)')
    .style('opacity', ({ end }) => (end ? '1' : '0'));
}

// call the function to immediately display the band members according to the starting year
displayBandMembers(bandYears);

// following the input event on the checkbox call the function to display the elements according to the different sorting
function handleInput() {
  const { checked: sortByRole } = this;
  if (sortByRole) {
    displayBandMembers(bandRoles);
  } else {
    displayBandMembers(bandYears);
  }
}
d3
  .select('input[type="checkbox"]')
  .on('input', handleInput);
