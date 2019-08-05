/* globals d3 */
/* eslint-disable func-names */
// data describing the average number of beehives and the average yield per beehive for a selection of countries
// pdf available @ https://ec.europa.eu/agriculture/sites/agriculture/files/honey/market-presentation-honey_en.pdf
const data = [
  {
    country: 'Greece',
    code: 'EL',
    beehives: 147,
    yield: 9,
  },
  {
    country: 'Spain',
    code: 'ES',
    beehives: 103,
    yield: 10,
  },
  {
    country: 'Romania',
    code: 'RO',
    beehives: 80,
    yield: 19,
  },
  {
    country: 'Cyprus',
    code: 'CY',
    beehives: 76,
    yield: 11,
  },
  {
    country: 'Portugal',
    code: 'PO',
    beehives: 68,
    yield: 24,
  },
  {
    country: 'Bulgaria',
    code: 'BG',
    beehives: 57,
    yield: 17,
  },
  {
    country: 'Hungary',
    code: 'HU',
    beehives: 55,
    yield: 21,
  },
  {
    country: 'Latvia',
    code: 'LV',
    beehives: 34,
    yield: 23,
  },
  {
    country: 'France',
    code: 'FR',
    beehives: 27,
    yield: 21,
  },
  {
    country: 'Italy',
    code: 'IT',
    beehives: 27,
    yield: 25,
  },
  {
    country: 'Finland',
    code: 'FI',
    beehives: 23,
    yield: 47,
  },
  {
    country: 'Lithuania',
    code: 'LT',
    beehives: 22,
    yield: 30,
  },
  {
    country: 'Poland',
    code: 'PL',
    beehives: 22,
    yield: 14,
  },
  {
    country: 'Slovenia',
    code: 'SI',
    beehives: 18,
    yield: 19,
  },
  {
    country: 'Malta',
    code: 'MT',
    beehives: 18,
    yield: 10,
  },
  {
    country: 'Denmark',
    code: 'DK',
    beehives: 17,
    yield: 20,
  },
  {
    country: 'Slovakia',
    code: 'SK',
    beehives: 16,
    yield: 16,
  },
  {
    country: 'Luxembourg',
    code: 'LU',
    beehives: 13,
    yield: 26,
  },
  {
    country: 'Austria',
    code: 'AT',
    beehives: 13,
    yield: 30,
  },
  {
    country: 'Czechia',
    code: 'CZ',
    beehives: 11,
    yield: 14,
  },
  {
    country: 'Sweden',
    code: 'SE',
    beehives: 11,
    yield: 30,
  },
  {
    country: 'Netherlands',
    code: 'NL',
    beehives: 10,
    yield: 22,
  },
];

// add an svg element in the .viz container
const viz = d3
  .select('.viz');

const margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30,
};

const width = 500 - (margin.right + margin.left);
const height = 300 - (margin.top + margin.bottom);

const vizGroup = viz
  .append('svg')
  .attr('class', 'viz__hexbin')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// create two linear scales to describe the average number of beehives (x axis) and the average yield (y axis)
const xScale = d3
  .scaleLinear()
  .domain(d3.extent(data, d => d.beehives))
  .range([0, width])
  .nice();

const yScale = d3
  .scaleLinear()
  .domain(d3.extent(data, d => d.yield))
  .range([height, 0])
  .nice();

// include two labels describing the scales
vizGroup
  .append('text')
  .attr('class', 'label')
  .attr('transform', `translate(${width / 2} ${height})`)
  .attr('x', 0)
  .attr('y', margin.top * 0.75)
  .attr('text-anchor', 'middle')
  .text('Beehives');

vizGroup
  .append('text')
  .attr('class', 'label')
  .attr('transform', `translate(0 ${height / 2})`)
  .attr('x', -margin.left * 0.75)
  .attr('y', 0)
  .attr('writing-mode', 'vertical-rl')
  .attr('text-anchor', 'middle')
  .text('Yield');


// HEXBIN
// describe the layout function to build hexagons out of the data points
const hexbin = d3
  .hexbin()
  .x(d => xScale(d.beehives))
  .y(d => yScale(d.yield))
  .radius(9);

// the function adds to each data point the x and y coordinates necessary to position the element
// the hexbin.hexagon() function is then able to draw the hexagon around these coordinates
const hexbinData = hexbin(data);

// for each data point add a group element
// use the coordinates included through the hexbin function to translate the group
const pointsGroup = vizGroup
  .selectAll('g')
  .data(hexbinData, d => d[0].code)
  .enter()
  .append('g')
  .attr('transform', d => `translate(${d.x} ${d.y})`)
  // on hover display the information for the selected country in the prescribed area
  // style the hexagon to show the #000 fill
  .on('mouseenter', function (d) {
    d3
      .select('.viz__tooltip')
      .html(`In 2018, <strong>${d[0].country}</strong> registered <strong>${d[0].beehives} beehives</strong> per beekeper, with an average yield of <strong>${d[0].yield} kg</strong> per beehive.`)
      .style('opacity', 1)
      .style('visibility', 'visible');

    d3
      .select(this)
      .select('path')
      .transition()
      .attr('opacity', 1);

    d3
      .select(this)
      .select('text')
      .transition()
      .attr('fill', '#fff');
  })
  // when leaving the group reset the style of the nested elements
  .on('mouseout', function () {
    d3
      .select(this)
      .select('path') //
      .transition()
      .attr('opacity', 0);

    d3
      .select(this)
      .select('text')
      .transition()
      .attr('fill', '#000');
  });

// add the hexagons
// transparent fill, used for mouse events and shown on hover
pointsGroup
  .append('path')
  .attr('d', hexbin.hexagon())
  .attr('fill', '#000')
  .attr('opacity', 0);

// stroke, shown by default
pointsGroup
  .append('path')
  .attr('d', hexbin.hexagon())
  .attr('fill', 'none')
  .attr('stroke', '#000')
  .attr('stroke-width', 1)
  .attr('pointer-events', 'none');

// add labels, inside the hexagon
pointsGroup
  .append('text')
  .text(d => d[0].code)
  .attr('x', 0)
  .attr('y', 3.5)
  .attr('font-size', 9)
  .attr('font-weight', 'bold')
  .attr('text-anchor', 'middle')
  .attr('pointer-events', 'none');
