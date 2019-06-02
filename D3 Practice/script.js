
const dataColors = [
  {
    party: 'Radical Left',
    color: '#D6001A',
  },
  {
    party: 'Social Democrats',
    color: '#FF6D90',
  },
  {
    party: 'Ecologists and regionalists',
    color: '#64CC76',
  },
  {
    party: 'Centrists and liberals',
    color: '#FF7F00',
  },
  {
    party: 'Conservatives',
    color: '#2495C1',
  },
  {
    party: 'Right nationalists and sovereignists',
    color: '#02279C',
  },
  {
    party: 'Extreme Right',
    color: '#671706',
  },
  {
    party: 'Others',
    color: '#C0C2C9',
  },
];

const dataElection = [
  {
    nation: 'germany',
    results: [
      {
        party: 'Radical Left',
        seats: 5,
      },
      {
        party: 'Social Democrats',
        seats: 16,
      },
      {
        party: 'Ecologists and regionalists',
        seats: 24,
      },
      {
        party: 'Centrists and liberals',
        seats: 5,
      },
      {
        party: 'Conservatives',
        seats: 32,
      },
      {
        party: 'Right nationalists and sovereignists',
        seats: 0,
      },
      {
        party: 'Extreme Right',
        seats: 11,
      },
      {
        party: 'Others',
        seats: 3,
      },
    ],
  },
  {
    nation: 'france',
    results: [
      {
        party: 'Radical Left',
        seats: 6,
      },
      {
        party: 'Social Democrats',
        seats: 5,
      },
      {
        party: 'Ecologists and regionalists',
        seats: 12,
      },
      {
        party: 'Centrists and liberals',
        seats: 21,
      },
      {
        party: 'Conservatives',
        seats: 8,
      },
      {
        party: 'Right nationalists and sovereignists',
        seats: 0,
      },
      {
        party: 'Extreme Right',
        seats: 22,
      },
      {
        party: 'Others',
        seats: 0,
      },
    ],
  },
  {
    nation: 'italy',
    results: [
      {
        party: 'Radical Left',
        seats: 0,
      },
      {
        party: 'Social Democrats',
        seats: 19,
      },
      {
        party: 'Ecologists and regionalists',
        seats: 1,
      },
      {
        party: 'Centrists and liberals',
        seats: 0,
      },
      {
        party: 'Conservatives',
        seats: 6,
      },
      {
        party: 'Right nationalists and sovereignists',
        seats: 5,
      },
      {
        party: 'Extreme Right',
        seats: 28,
      },
      {
        party: 'Others',
        seats: 14,
      },
    ],
  },
  {
    nation: 'united kingdom',
    results: [
      {
        party: 'Radical Left',
        seats: 1,
      },
      {
        party: 'Social Democrats',
        seats: 10,
      },
      {
        party: 'Ecologists and regionalists',
        seats: 11,
      },
      {
        party: 'Centrists and liberals',
        seats: 17,
      },
      {
        party: 'Conservatives',
        seats: 1,
      },
      {
        party: 'Right nationalists and sovereignists',
        seats: 4,
      },
      {
        party: 'Extreme Right',
        seats: 29,
      },
      {
        party: 'Others',
        seats: 0,
      },
    ],
  },
  {
    nation: 'spain',
    results: [
      {
        party: 'Radical Left',
        seats: 5,
      },
      {
        party: 'Social Democrats',
        seats: 20,
      },
      {
        party: 'Ecologists and regionalists',
        seats: 6,
      },
      {
        party: 'Centrists and liberals',
        seats: 7,
      },
      {
        party: 'Conservatives',
        seats: 12,
      },
      {
        party: 'Right nationalists and sovereignists',
        seats: 0,
      },
      {
        party: 'Extreme Right',
        seats: 3,
      },
      {
        party: 'Others',
        seats: 0,
      },
    ],
  },
  {
    nation: 'poland',
    results: [
      {
        party: 'Radical Left',
        seats: 0,
      },
      {
        party: 'Social Democrats',
        seats: 3,
      },
      {
        party: 'Ecologists and regionalists',
        seats: 0,
      },
      {
        party: 'Centrists and liberals',
        seats: 0,
      },
      {
        party: 'Conservatives',
        seats: 22,
      },
      {
        party: 'Right nationalists and sovereignists',
        seats: 26,
      },
      {
        party: 'Extreme Right',
        seats: 0,
      },
      {
        party: 'Others',
        seats: 0,
      },
    ],
  },
  {
    nation: 'romania',
    results: [
      {
        party: 'Radical Left',
        seats: 0,
      },
      {
        party: 'Social Democrats',
        seats: 10,
      },
      {
        party: 'Ecologists and regionalists',
        seats: 0,
      },
      {
        party: 'Centrists and liberals',
        seats: 8,
      },
      {
        party: 'Conservatives',
        seats: 12,
      },
      {
        party: 'Right nationalists and sovereignists',
        seats: 0,
      },
      {
        party: 'Extreme Right',
        seats: 0,
      },
      {
        party: 'Others',
        seats: 2,
      },
    ],
  },
  {
    nation: 'netherlands',
    results: [
      {
        party: 'Radical Left',
        seats: 0,
      },
      {
        party: 'Social Democrats',
        seats: 6,
      },
      {
        party: 'Ecologists and regionalists',
        seats: 3,
      },
      {
        party: 'Centrists and liberals',
        seats: 6,
      },
      {
        party: 'Conservatives',
        seats: 3,
      },
      {
        party: 'Right nationalists and sovereignists',
        seats: 0,
      },
      {
        party: 'Extreme Right',
        seats: 0,
      },
      {
        party: 'Others',
        seats: 2,
      },
    ],
  },
];

// FIRST VIZ: GEOMAP
// target the node in which to include the geomap
const vizGeo = d3
  .select('.viz--geo');

// HTML elements making up the legend, and using the data in the dataColors array
const legend = vizGeo
  .append('div')
  .attr('class', 'legend');

const items = legend
  .selectAll('div.item')
  .data(dataColors)
  .enter()
  .append('div')
  .attr('class', 'item');

// include a span with the parties' colors
items
  .append('span')
  .attr('role', 'img')
  .style('background', d => d.color);

// include the name of the party
items
  .append('p')
  .text(d => d.party);


// MISSING
// include SVG with the map of europe and the representation through the squares


// SECOND VIZ: TETRIS MAP
// target the node
const vizTetris = d3
  .select('.viz--tetris');

// include a container for each nation
const nations = vizTetris
  .selectAll('div.nation')
  .data(dataElection)
  .enter()
  .append('div')
  .attr('class', 'nation');

// include two headings with general information
nations
  .append('h3')
  .text(d => d.nation);

// compute the total number of seats from the results array
nations
  .append('p')
  .text(d => `${d.results.reduce((acc, curr) => acc + curr.seats, 0)} Seats`);

// include a container for the squares (to display the different parties side by side)
const seats = nations
  .append('div')
  .attr('class', 'seats');

// for each party include a div container
const parties = seats
  .selectAll('div.party')
  // ! use a subset for only the parties with at least one seat
  .data(d => d.results.filter(party => party.seats > 0))
  .enter()
  .append('div')
  .attr('class', 'party')
  .attr('data-seat', d => d.seats);

// for each number of seats (represented by a column) include one square for each seat made available
// ! if made available
parties
  .selectAll('div.seat')
  .data(d => Array(d.seats).fill(d.party))
  .enter()
  .append('div')
  .attr('class', 'seat')
  .style('background', d => dataColors.find(color => color.party === d).color);
