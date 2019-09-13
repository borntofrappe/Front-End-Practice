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


const timeScale = d3
  .scaleTime()
  .domain([new Date('1973'), new Date()])
  .range([0, 100]);

// add a div container for each member
const viz = d3.select('.viz');

const members = viz
  .selectAll('div.member')
  .data(band)
  .enter()
  .append('div')
  .attr('class', 'member');

// add an icon matching the role
members
  .append('svg')
  .attr('viewBox', '0 0 100 100')
  .attr('width', '60')
  .attr('height', '60')
  .append('use')
  .attr('href', ({ role }) => `#${role}`);

// add a container in which to describe the name and years of acivity
const details = members
  .append('div')
  .attr('class', 'details');

details
  .append('h2')
  .text(({name}) => name)
  .style('position', 'absolute')
  .style('top', '40%')
  .style('left', ({ active }) => {
    const beginning = new Date(`${active[0].beginning}`);
    const end = active[active.length - 1].end ? new Date(`${active[active.length - 1].end}`) : new Date();
    const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
    return `${midPoint}%`;
  })
  .style('transform', ({ active }) => {
    const beginning = new Date(`${active[0].beginning}`);
    const end = active[active.length - 1].end ? new Date(`${active[active.length - 1].end}`) : new Date();
    const midPoint = timeScale(beginning) + (timeScale(end) - timeScale(beginning)) / 2;
    if(midPoint < 10) {
      return 'translate(0%, -50%)';
    } else if(midPoint > 90) {
      return 'translate(-100%, -50%)';
    }
    return 'translate(-50%, -50%)';
  });

const years = details
  .selectAll('div')
  .data(({active}) => active)
  .enter()
  .append('div')
  .attr('class', 'div')
  .style('position', 'absolute')
  .style('top', '0%')
  .style('width', '100%')
  .style('height', '100%')
  .style('left', ({ beginning }) => {
    return `${timeScale(new Date(`${beginning}`))}%`;
  });

years
  .append('span')
  .style('position', 'absolute')
  .style('top', '75%')
  .style('left', '0%')
  .style('background', 'currentColor')
  .style('border-radius', '5px')
  .style('width', '2px')
  .style('height', '30%')
  .style('transform', 'translate(-50%, -50%)');

years
  .append('span')
  .style('position', 'absolute')
  .style('top', '75%')
  .style('left', '0%')
  .style('background', 'currentColor')
  .style('border-radius', '5px')
  .style('width', ({ beginning, end }) => {
    const left = end ? new Date(`${end}`) : new Date();
    return `${timeScale(left) - timeScale(new Date(`${beginning}`))}%`;
  })
  .style('height', '2px')
  .style('transform', 'translate(0%, -50%)');

years
  .append('span')
  .style('position', 'absolute')
  .style('top', '75%')
  .style('left', ({ beginning, end }) => {
    const left = end ? new Date(`${end}`) : new Date();
    return `${timeScale(left) - timeScale(new Date(`${beginning}`))}%`;
  })
  .style('opacity', ({ end }) => end ? '1' : '0')
  .style('background', 'currentColor')
  .style('border-radius', '5px')
  .style('width', '2px')
  .style('height', '30%')
  .style('transform', 'translate(-50%, -50%)');
