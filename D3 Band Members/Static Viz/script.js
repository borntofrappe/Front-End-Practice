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


// for the |---| line create a scale mapping the year values to the [0-100] range
// range given by the % percentage value used to position and size the elements
// ! to build a date object with arguments instead of a string, create a utility function to detail the first of January for the input year
const yearToDate = (year) => new Date(`${year}`, 1, 1);

// refer to the oldest year for the beginning of the scale
const oldestYear = d3.min(band.reduce((acc, curr) => {
  const beginnings = curr.active.map(({beginning}) => beginning);
  return [...acc, ...beginnings];
}, []));

const timeScale = d3
  .scaleTime()
  .domain([yearToDate(oldestYear), new Date()])
  .range([0, 100]);


const viz = d3
  .select('.viz');

// add a div container for each member
const members = viz
    .selectAll('div.member')
    .data(band)
    .enter()
    .append('div')
    .attr('class', 'member');

//icon matching the role
members
  .append('svg')
  .attr('viewBox', '0 0 100 100')
  .attr('width', '60')
  .attr('height', '60')
  .append('use')
  .attr('href', ({ role }) => `#${role}`);

// container in which to describe the name and years of activity
const details = members
  .append('div')
  .attr('class', 'details')
  .style('flex-grow', '1')
  .style('min-height', '60px')
  .style('position', 'relative');

// absolute position the heading in the middle of the active years
details
  .append('h2')
  .text(({name}) => name)
  .style('position', 'absolute')
  .style('white-space', 'nowrap')
  .style('top', '15%')
  .style('left', ({ active }) => {
    const beginning = yearToDate(active[0].beginning);
    const end = active[active.length - 1].end ? yearToDate(active[active.length - 1].end) : new Date;
    const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
    return `${midPoint}%`;
  })
  // change the alignment of the text to avoid having the name overlap on the icon or exceed the visualization
  .style('transform', ({ active }) => {
    const beginning = yearToDate(active[0].beginning);
    const end = active[active.length - 1].end ? yearToDate(active[active.length - 1].end) : new Date;
    const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
    if(midPoint < 10) {
      return 'translate(0%, 0%)';
    } else if(midPoint > 90) {
      return 'translate(-100%, 0%)';
    }
    return 'translate(-50%, 0%)';
  });

// container for the active years
// absolute position each .years container according to the starting year
const years = details
  .selectAll('div.years')
  .data(({active}) => active)
  .enter()
  .append('div')
  .attr('class', 'years')
  .style('position', 'absolute')
  .style('top', '35%')
  .style('left', ({ beginning }) => {
    return `${timeScale(yearToDate(beginning))}%`;
  })
  .style('width', ({ beginning, end }) => {
    const endValue = end ? new Date(`${end}`) : new Date();
    return `${timeScale(endValue) - timeScale(yearToDate(beginning))}%`;
  })
  .style('height', '65%');

// include span elements to create a |---| line encompassing the container
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
  .attr('class', 'end')
  .style('position', 'absolute')
  .style('top', '50%')
  .style('left', '100%')
  .style('background', 'currentColor')
  .style('border-radius', '5px')
  .style('width', '2px')
  .style('height', '18px')
  .style('transform', 'translate(-50%, -50%)')
  .style('opacity', ({ end }) => end ? '1' : '0');

