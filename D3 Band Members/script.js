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