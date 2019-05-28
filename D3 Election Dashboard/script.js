// data describing the composition of the european parliament
// 2014 and provisional 2019
const parliament = {
  exiting: [
    {
      party: 'Conservatives',
      seats: 217,
    },
    {
      party: 'Social democrats',
      seats: 186,
    },
    {
      party: 'Nationalist right and sovereignist',
      seats: 116,
    },
    {
      party: 'Centrists and liberals',
      seats: 68,
    },
    {
      party: 'Ecologists and regionalists',
      seats: 52,
    },
    {
      party: 'Radical left',
      seats: 52,
    },
    {
      party: 'Extreme right',
      seats: 37,
    },
    {
      party: 'Others',
      seats: 22,
    },
  ],
  entering: [
    {
      party: 'Conservatives',
      seats: 175,
    },
    {
      party: 'Social democrats',
      seats: 148,
    },
    {
      party: 'Nationalist right and sovereignist',
      seats: 58,
    },
    {
      party: 'Centrists and liberals',
      seats: 109,
    },
    {
      party: 'Ecologists and regionalists',
      seats: 77,
    },
    {
      party: 'Radical left',
      seats: 41,
    },
    {
      party: 'Extreme right',
      seats: 115,
    },
    {
      party: 'Others',
      seats: 28,
    },
  ],
};
// data describing the parties from left to right
const affiliation = [
  'Radical left',
  'Social democrats',
  'Ecologists and regionalists',
  'Centrists and liberals',
  'Conservatives',
  'Nationalist right and sovereignist',
  'Extreme right',
  'Others'
];
// data describing the color palette for each party
const colors = [
  '#D6001A',
  '#FF6D90',
  '#64CC76',
  '#FF7F00',
  '#2495C1',
  '#02279C',
  '#671706',
  '#C0C2C9',
];

/* data massaging:
  from the parliament array
  - sort according to the left to right affiliation
  - add the color matching the party

  finally data ought to look as follows

  - objects for the entering and exiting parliament
    - array of parties sorted by affiliation
      - party name
      - seat count
      - party color
*/
const data = {};
const elections = Object.entries(parliament);
elections.forEach(([election, results]) => {
  Object.assign(data, {
    [election]: results
      .sort(({party: partyA}, {party: partyB}) => {
        const affiliationA = affiliation.findIndex(party => party === partyA);
        const affiliationB = affiliation.findIndex(party => party === partyB);
        return affiliationA > affiliationB ? 1 : -1;
      })
      .map(({party, seats}) => ({
        party,
        seats,
        color: colors[affiliation.findIndex(aff => aff === party)]
      })
    )
  })
});


// function adding the donut chart
function showDonutChart() {
  // the donut chart is based on the provisional data regarding the entering parliament
  const { entering } = data;

  // target the main container
  const main = d3
    .select('main');

  // INTRODUCTION through html elements
  const introduction = main
    .append('div')
    .attr('class', 'viz-introduction');

  introduction
    .append('h1')
    .text('Results of the European Election');
  introduction
    .append('h2')
    .text('by political affiliation');

  // DONUT CHART through svg
  const margin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 30,
  };

  const width = 500 - (margin.left + margin.right);
  const height = 280 - (margin.top + margin.bottom);

  const visualization = main
    .append('svg')
    .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
    .append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`);

  // pie function
  const pie = d3
    .pie()
    .value(d => d.seats)
    //establishing the half a donut structure through the startAngle and endAngle functions
    .startAngle(-Math.PI / 2)
    .endAngle(Math.PI / 2)
    // sorting is handled later, massaging the input data
    .sort(null)
    .padAngle(0.01);

  // arc function
  const arc = d3
    .arc()
    .innerRadius(width / 10)
    .outerRadius(width / 2);

  // position the slices at the bottom of the svg
  const groupSlices = visualization
    .append('g')
    .attr('class', 'slices')
    .attr('transform', `translate(${width/2} ${height})`);

  // ! modify the data to have the last slice (the one dedicated to 'Others') split in two and positioned at the beginning and end of the donunt)
  // use Object.assign() to avoid modifying the original object
  const others = Object.assign({}, entering[entering.length - 1]);
  others.seats /= 2;
  const enteringData = [
    others,
    ...entering
      .slice(0, entering.length - 1),
    others,
  ]

  // add the individual slices binding the pie-ed data
  const slices = groupSlices
    .selectAll('g.slice')
    .data(pie(enteringData))
    .enter()
    .append('g')
    .attr('class', 'slice')
    .attr('data-party', d => d.data.party);

  // draw the slices through the arc function
  slices
    .append('path')
    .attr('d', arc)
    .attr('fill', d => d.data.color);

  // include the total number of seats in the bottom center of the visualization
  const total = entering.reduce((acc, curr) => acc += curr.seats, 0);
  groupSlices
    .append('text')
    .text(total)
    .attr('text-anchor', 'middle')
    .style('font-size', '25px')
    .style('font-weight', 600);

  // LEGEND through  a grid
  const legend = main
    .append('div')
    .attr('class', 'viz-legend');

  const legendItems = legend
    .selectAll('div')
    .data(entering)
    .enter()
    .append('div')
    .attr('class', 'legend-item')
    .style('border-left', (d) => `5px solid ${d.color}`)
    // when hovering on an item highlight the matching slice in the visualization
    // ! only the matching slice
    .on('mouseenter', ({party}) => {
      d3
        .selectAll(`g.slice`)
        .transition()
        .attr('transform', 'scale(1)');
      d3
        .selectAll(`g[data-party="${party}"]`)
        .transition()
        .attr('transform', 'scale(1.03)');
    });

  legendItems
    .append('h3')
    .text(d => d.party);

  legendItems
    .append('strong')
    .text(d => d.seats);

}

// function adding the row chart
function showRowChart() {

}
// function showing a specific visualization according to the input value
function showVisualization(viz = 'donut-chart') {
  const main = document.querySelector('main');
  main.innerHTML = '';
  if (viz === 'donut-chart') {
    showDonutChart();
  } else {
    showRowChart();
  }
}
// immediately call the function to show the default visualization
showVisualization();

// target the buttons in the nav element
const buttons = document.querySelectorAll('nav button');
// when a click is registered on the buttons update the buttons through the selection class and call a function to show the appropriate visualization
function updateSelection() {
  // ! proceed only if the selection differs from the previous visualization
  if (!this.classList.contains('selection')) {
    const selection = this.getAttribute('id');
    buttons.forEach(button => button.classList.remove('selection'));
    this.classList.add('selection');
    // call the function to inject the matching visualization in the main container
    showVisualization(selection);
  }
}

buttons.forEach(button => button.addEventListener('click', updateSelection));
