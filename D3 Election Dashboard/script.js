// data describing the composition of the european parliament
// 2014 and provisional 2019
const data = {
  'exiting': [
    {
      'party': 'Conservatives',
      'seats': 217,
      'color': '#2495C1'
    },
    {
      'party': 'Social democrats',
      'seats': 186,
      'color': '#FF6D90'
    },
    {
      'party': 'Nationalist right and sovereignist',
      'seats': 116,
      'color': '#02279C'
    },
    {
      'party': 'Centrists and liberals',
      'seats': 68,
      'color': '#FF7F00'
    },
    {
      'party': 'Ecologists and regionalists',
      'seats': 52,
      'color': '#64CC76'
    },
    {
      'party': 'Radical left',
      'seats': 52,
      'color': '#D6001A'
    },
    {
      'party': 'Extreme right',
      'seats': 37,
      'color': '#671706'
    },
    {
      'party': 'Others',
      'seats': 22,
      'color': '#C0C2C9'
    }
  ],
  'entering': [
    {
      'party': 'Conservatives',
      'seats': 175,
      'color': '#2495C1'
    },
    {
      'party': 'Social democrats',
      'seats': 148,
      'color': '#FF6D90'
    },
    {
      'party': 'Nationalist right and sovereignist',
      'seats': 58,
      'color': '#02279C'
    },
    {
      'party': 'Centrists and liberals',
      'seats': 109,
      'color': '#FF7F00'
    },
    {
      'party': 'Ecologists and regionalists',
      'seats': 77,
      'color': '#64CC76'
    },
    {
      'party': 'Radical left',
      'seats': 41,
      'color': '#D6001A'
    },
    {
      'party': 'Extreme right',
      'seats': 115,
      'color': '#671706'
    },
    {
      'party': 'Others',
      'seats': 28,
      'color': '#C0C2C9'
    }
  ]
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

// function adding the donut chart
function showDonutChart() {
  // the donut chart is based on the provisional data regarding the entering parliament
  // create a copy of the necessary data, to massage the data structure according to the donut's requirement without affecting the original
  const entering = [...data.entering];

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

  /* data massaging:
    - sort the parties according to the political affiliation
    - split the 'Others' category so to have it at the beginning _and_ end of the donut
  */
  entering.sort(({party: partyA}, {party: partyB}) => {
      const affiliationA = affiliation.findIndex(party => party === partyA);
      const affiliationB = affiliation.findIndex(party => party === partyB);
      return affiliationA > affiliationB ? 1 : -1;
    });

  // create a copy of the 'Others' category
  // ! this to avoid modifying the original object
  const others = Object.assign({}, entering[entering.length - 1]);
  others.seats /= 2;
  // include the halved category at the beginning of the input data
  const enteringData = [
    others,
    ...entering.slice(0, entering.length - 1),
    others
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
  // the row chart displays the exiting and entering visualizations side by side
  const {exiting, entering} = data;

  console.log(exiting);
  // target the main container
  const main = d3
    .select('main');

  // INTRODUCTION with a heading
  const introduction = main
    .append('div')
    .attr('class', 'viz-introduction');

  introduction
    .append('h1')
    .text('Evolution of the European Parliament');

  // ROW CHART through svg elements
  // in a wrapping container include the two visualizations
  const margin = {
    top: 50,
    right: 30,
    bottom: 30,
    left: 100,
  };

  const width = 300 - (margin.left + margin.right);
  const height = 380 - (margin.top + margin.bottom);

  const visualizations = main
    .append('div')
    .attr('class', 'viz-visualization');

  const groups = visualizations
    .selectAll('svg')
    .data([exiting, entering])
    .enter()
    .append('svg')
    .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
    .append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`);;

  // add text elements describing the purpose of the separate charts
  groups
    .append('text')
    .attr('x', 0)
    .attr('y', -20)
    .attr('class', 'label')
    .style('font-weight', 'bold')
    .style('letter-spacing', '0.002rem')
    .attr('fill', '#555')
    .text((d, i) => `${i === 0 ? 'Outgoing': 'Sitting'} Parliament`)


  // for each visualization, include a row chart benefiting from a ordinal scale (y-axis, listing the parties) and a linear scale (x-axis, representing the seats)
  const maxEntering = d3.max(entering, d => d.seats);
  const maxExiting = d3.max(exiting, d => d.seats);
  const max = d3.max([maxEntering, maxExiting]);

  const xScale = d3
    .scaleLinear()
    .domain([0, Math.floor(max * 1.2)])
    .range([0, width]);

  const yScale = d3
    .scaleBand()
    .domain(exiting.map(({party}) => party))
    .range([0, height]);

  // add rectangles to show the number of seats
  groups
    .selectAll('rect')
    .data(d => d)
    .enter()
    .append('rect')
    .attr('x', 0)
    .attr('y', ({party}) => (yScale(party) + yScale.bandwidth() / 8))
    .attr('width', ({seats}) => xScale(seats))
    .attr('height', ({party}) => yScale.bandwidth() - yScale.bandwidth() / 4)
    .attr('fill', ({color}) => color);

  // add text elements after the rectangles detailing the actual number
  groups
    .selectAll('text.seat')
    .data(d => d)
    .enter()
    .append('text')
    .attr('class', 'seat')
    .text(({seats}) => seats)
    .attr('dominant-baseline', 'middle')
    .attr('x', ({seats}) => xScale(seats) + 5)
    .attr('y', ({party}) => (yScale(party) + yScale.bandwidth() / 2));


      // add the y axis with the parties's names
  const yAxis = d3
  .axisLeft(yScale)
  .tickSize(0);

  const groupAxis = groups
    .append('g')
    .attr('class', 'axis')
    .call(yAxis);

  groupAxis
    .selectAll('text')
    .attr('x', -100)
    .attr('text-anchor', 'start')
    .attr('font-size', '11px')
    .attr('fill', '#777')
    .style('letter-spacing', '0.02rem')
    .text(d => d.length > 16 ? `${d.substring(0, 16)}...` : d);

  groupAxis
    .select('path')
    .attr('stroke-width', 1);

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
