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


// function adding the donut chart
function showDonutChart() {
  // the donut chart is based on the provisional data regarding the entering  parliament
  const { entering } = parliament;
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
  

  // LEGEND through  a grid
  const legend = main
    .append('div')
    .attr('class', 'viz-legend');

  const legendItems = legend
    .selectAll('div')
    .data(entering)
    .enter()
    .append('div')
    .attr('class', 'legend-item');

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
