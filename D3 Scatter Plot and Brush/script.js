/* eslint-disable func-names */
/* globals d3 */

// https://en.wikipedia.org/wiki/Iris_flower_data_set
const href = 'https://codepen.io/borntofrappe/full/dBeKga';
// array describing the hsl color for each subspecies
// the idea is to usie the hsl values to create a lighter/more vibrant variant for a gradient
const colors = {
  setosa: {
    h: 280,
    s: 75,
    l: 60,
  },
  versicolor: {
    h: 330,
    s: 75,
    l: 60,
  },
  virginica: {
    h: 230,
    s: 75,
    l: 60,
  },
};
// data describing the length and width for three subspecies of the iris flower
const data = [
  {
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    petalLength: 1.7,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    petalLength: 1.1,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    petalLength: 1.2,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    petalLength: 1.3,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    petalLength: 1.7,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    petalLength: 1.7,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    petalLength: 1,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.7,
    petalWidth: 0.5,
    species: 'setosa',
  },
  {
    petalLength: 1.9,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.6,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.2,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.3,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    petalLength: 1.3,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.6,
    petalWidth: 0.6,
    species: 'setosa',
  },
  {
    petalLength: 1.9,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    petalLength: 4.7,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 4.9,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 4,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4.6,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 4.5,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4.7,
    petalWidth: 1.6,
    species: 'versicolor',
  },
  {
    petalLength: 3.3,
    petalWidth: 1,
    species: 'versicolor',
  },
  {
    petalLength: 4.6,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 3.9,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    petalLength: 3.5,
    petalWidth: 1,
    species: 'versicolor',
  },
  {
    petalLength: 4.2,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 4,
    petalWidth: 1,
    species: 'versicolor',
  },
  {
    petalLength: 4.7,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    petalLength: 3.6,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4.4,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 4.1,
    petalWidth: 1,
    species: 'versicolor',
  },
  {
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 3.9,
    petalWidth: 1.1,
    species: 'versicolor',
  },
  {
    petalLength: 4.8,
    petalWidth: 1.8,
    species: 'versicolor',
  },
  {
    petalLength: 4,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4.9,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 4.7,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    petalLength: 4.3,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4.4,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    petalLength: 4.8,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    petalLength: 5,
    petalWidth: 1.7,
    species: 'versicolor',
  },
  {
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 3.5,
    petalWidth: 1,
    species: 'versicolor',
  },
  {
    petalLength: 3.8,
    petalWidth: 1.1,
    species: 'versicolor',
  },
  {
    petalLength: 3.7,
    petalWidth: 1,
    species: 'versicolor',
  },
  {
    petalLength: 3.9,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    petalLength: 5.1,
    petalWidth: 1.6,
    species: 'versicolor',
  },
  {
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 4.5,
    petalWidth: 1.6,
    species: 'versicolor',
  },
  {
    petalLength: 4.7,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    petalLength: 4.4,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4.1,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4.4,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    petalLength: 4.6,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    petalLength: 4,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    petalLength: 3.3,
    petalWidth: 1,
    species: 'versicolor',
  },
  {
    petalLength: 4.2,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4.2,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    petalLength: 4.2,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 4.3,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 3,
    petalWidth: 1.1,
    species: 'versicolor',
  },
  {
    petalLength: 4.1,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    petalLength: 6,
    petalWidth: 2.5,
    species: 'virginica',
  },
  {
    petalLength: 5.1,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    petalLength: 5.9,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    petalLength: 5.6,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 5.8,
    petalWidth: 2.2,
    species: 'virginica',
  },
  {
    petalLength: 6.6,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    petalLength: 4.5,
    petalWidth: 1.7,
    species: 'virginica',
  },
  {
    petalLength: 6.3,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 5.8,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 6.1,
    petalWidth: 2.5,
    species: 'virginica',
  },
  {
    petalLength: 5.1,
    petalWidth: 2,
    species: 'virginica',
  },
  {
    petalLength: 5.3,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    petalLength: 5.5,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    petalLength: 5,
    petalWidth: 2,
    species: 'virginica',
  },
  {
    petalLength: 5.1,
    petalWidth: 2.4,
    species: 'virginica',
  },
  {
    petalLength: 5.3,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    petalLength: 5.5,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 6.7,
    petalWidth: 2.2,
    species: 'virginica',
  },
  {
    petalLength: 6.9,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    petalLength: 5,
    petalWidth: 1.5,
    species: 'virginica',
  },
  {
    petalLength: 5.7,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    petalLength: 4.9,
    petalWidth: 2,
    species: 'virginica',
  },
  {
    petalLength: 6.7,
    petalWidth: 2,
    species: 'virginica',
  },
  {
    petalLength: 4.9,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 5.7,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    petalLength: 6,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 4.8,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 4.9,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 5.6,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    petalLength: 5.8,
    petalWidth: 1.6,
    species: 'virginica',
  },
  {
    petalLength: 6.1,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    petalLength: 6.4,
    petalWidth: 2,
    species: 'virginica',
  },
  {
    petalLength: 5.6,
    petalWidth: 2.2,
    species: 'virginica',
  },
  {
    petalLength: 5.1,
    petalWidth: 1.5,
    species: 'virginica',
  },
  {
    petalLength: 5.6,
    petalWidth: 1.4,
    species: 'virginica',
  },
  {
    petalLength: 6.1,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    petalLength: 5.6,
    petalWidth: 2.4,
    species: 'virginica',
  },
  {
    petalLength: 5.5,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 4.8,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    petalLength: 5.4,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    petalLength: 5.6,
    petalWidth: 2.4,
    species: 'virginica',
  },
  {
    petalLength: 5.1,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    petalLength: 5.1,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    petalLength: 5.9,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    petalLength: 5.7,
    petalWidth: 2.5,
    species: 'virginica',
  },
  {
    petalLength: 5.2,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    petalLength: 5,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    petalLength: 5.2,
    petalWidth: 2,
    species: 'virginica',
  },
  {
    petalLength: 5.4,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    petalLength: 5.1,
    petalWidth: 1.8,
    species: 'virginica',
  },
];

// target the .viz container
const viz = d3.select('.viz');

// HEADER
const header = viz.append('header');
header
  .append('h1')
  .text('Iris Flowers - Petals');

// SVG
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};
const width = 500 - (margin.left + margin.right);
const height = 500 - (margin.top + margin.bottom);

// LEGEND
// before the scatter plot include an svg element describing the subspecies and matching colors through rectangle and text elements
const legendWidth = 500;
const legendHeight = 30;

const legend = viz
  .append('svg')
  .attr('viewBox', `0 0 ${legendWidth} ${legendHeight}`);

// include one group for each color
const colorEntries = Object.entries(colors);

const legendEntries = legend
  .selectAll('g.entry')
  .data(colorEntries)
  .enter()
  .append('g')
  .attr('class', 'entry')
  // translate the group at fractions of the legend's width
  .attr('transform', (d, i, { length }) => `translate(${(legendWidth / length) * i} ${0})`)
  // on hover highlight the selected entry and the matching petals in the subsequent visualization
  .on('mouseenter', function ([species]) {
    // highlight the label by translating the hidden rectangle into view
    d3
      .select(this)
      .select('rect')
      .transition()
      .attr('transform', 'translate(0 0)');

    // highlight the matching circles by reducing the opacity and the radius of the non-matching circles
    d3
      .selectAll(`g.petal:not(.petal-${species})`)
      .attr('opacity', 0.1)
      .selectAll('circle')
      .transition()
      .attr('r', 3);
  })
  // on mouseout hide the rectangles back and reset the opacity/radius of all circle elements
  .on('mouseout', function () {
    d3
      .select(this)
      .select('rect')
      .transition()
      .attr('transform', `translate(0 ${legendHeight})`);

    d3
      .selectAll('g.petal')
      .attr('opacity', 1)
      .selectAll('circle')
      .transition()
      .attr('r', 5);
  });

// for each color
// add a rectangle transitioned on hover to highlight the selection
legendEntries
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('height', legendHeight)
  .attr('width', (d, i, { length }) => (legendWidth / length))
  .attr('fill', ([, color]) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`)
  .attr('transform', `translate(0 ${legendHeight})`)
  .attr('opacity', 0.2);

// add a label describing the entry
legendEntries
  .append('text')
  .attr('x', 5)
  .attr('y', legendHeight / 1.5)
  .attr('fill', 'currentColor')
  .attr('font-family', 'inherit')
  .attr('font-size', '1rem')
  .style('text-transform', 'capitalize')
  .text(([species]) => species);

// add a path describing a small underline
legendEntries
  .append('path')
  .attr('d', (d, i, { length }) => `M 0 ${legendHeight} h ${(legendWidth / length)}`)
  .attr('fill', 'none')
  .attr('stroke-width', 5)
  .attr('stroke', ([, color]) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`);

// add the SVG describing the basic icon of a flower
const flowers = legendEntries
  .append('svg')
  .attr('viewBox', '0 0 7 10')
  .attr('height', legendHeight)
  .attr('width', (legendHeight) * 7 / 10)
  // positioned at the end of the respective area
  .attr('x', (d, i, { length }) => ((legendWidth / length) - (legendHeight) * 7 / 10))
  .attr('y', 0);

flowers
  .append('g')
  .attr('transform', 'translate(0.5 0.5)')
  .append('path')
  .attr('d', 'M 1 9 q 2 -2 2 -5 a 3 3 0 0 1 -3 -3 a 1 1 0 0 1 2 0 a 1 1 0 0 1 2 0 a 1 1 0 0 1 2 0 a 3 3 0 0 1 -3 3')
  .attr('fill', 'none')
  .attr('stroke-width', 1)
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('stroke', ([, color]) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`);

// add rectangle spanning the width of each section to trigger mouse event on the parent group, whenever hovering the matching section
legendEntries
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', (d, i, { length }) => (legendWidth / length))
  .attr('height', legendHeight)
  .attr('opacity', 0);


// SCATTER PLOT
const svg = viz
  .append('svg')
  .attr('class', 'scatter-plot')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

// in a <defs> element describe the linear gradients for the three subspecies, using the hsl code described in the colors array
const defs = svg
  .append('defs');

const colorGradients = defs
  .selectAll('linearGradient')
  .data(colorEntries)
  .enter()
  .append('linearGradient')
  .attr('id', ([species]) => `gradient-${species}`)
  .attr('x1', 0.8)
  .attr('x2', 0.2)
  .attr('y1', 0)
  .attr('y2', 1);

// include a lighter variant at the top of each circle
colorGradients
  .append('stop')
  .attr('stop-color', ([, color]) => `hsl(${color.h + 5}, ${color.s + 5}%, ${color.l + 15}%)`)
  .attr('offset', 0);

colorGradients
  .append('stop')
  .attr('stop-color', ([, color]) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`)
  .attr('offset', 1);

const group = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// SCALES & AXES
// the petals are described by numerical variables
// describe linear scales for both dimensions, starting at 0
// petal width on the x axis
const xScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, d => d.petalWidth)])
  .range([0, width]);

const xAxis = d3
  .axisBottom(xScale)
  .ticks(5)
  .tickPadding(4);

group
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

// petal length on the y axis
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, d => d.petalLength)])
  .range([height, 0]);

const yAxis = d3
  .axisLeft(yScale)
  .ticks(5)
  .tickPadding(4);

group
  .append('g')
  .attr('class', 'axis y-axis')
  .call(yAxis);

// modify the tick's lines to show grid lines spanning the entire width and height of the visualization
d3
  .select('.x-axis')
  .selectAll('g.tick line')
  .attr('y1', 0)
  .attr('y2', -height)
  .attr('opacity', 0.1)
  .attr('stroke-width', 2);

d3
  .select('.y-axis')
  .selectAll('g.tick line')
  .attr('x1', 0)
  .attr('x2', width)
  .attr('opacity', 0.1)
  .attr('stroke-width', 2);

// modify the path elements describing the axes to be straight lines without edges
d3
  .select('.x-axis')
  .select('path')
  .attr('d', `M 0.5 0.5 h ${width}`);

d3
  .select('.y-axis')
  .select('path')
  .attr('d', `M 0.5 0.5 v ${height}`);

// increase the size of the ticks' labels
d3
  .selectAll('.axis')
  .selectAll('text')
  .attr('font-family', 'inherit')
  .attr('font-size', '0.85rem');

// show only one of the origin of the y axis, but reposition the text to be aligned with the elements of the x-axis
const dy = d3
  .select('.x-axis')
  .select('text')
  .attr('dy');

const y = d3
  .select('.x-axis')
  .select('text')
  .attr('y');

d3
  .selectAll('.axis')
  .select('text')
  .attr('y', y)
  .attr('dy', dy)
  .attr('opacity', (d, i) => (i === 1 ? 1 : 0));

// include two labels describing the axes
d3
  .select('.x-axis')
  .append('text')
  .attr('class', 'axis-label')
  .attr('x', width)
  .attr('y', -5)
  .attr('text-anchor', 'end')
  .text('width (cm)')

d3
  .select('.y-axis')
  .append('text')
  .attr('class', 'axis-label')
  .attr('x', 5)
  .attr('y', 15)
  .attr('text-anchor', 'start')
  .text('length (cm)');

d3
  .selectAll('.axis-label')
  .attr('fill', 'currentColor')
  .attr('font-size', '1rem')
  .attr('font-family', 'inherit')
  .attr('opacity', 0.5)
  .style('letter-spacing', '0.2rem');


// DATA POINTS
// include one group for each data point
const petals = group
  .selectAll('g.petal')
  .data(data)
  .enter()
  .append('g')
  .attr('class', d => `petal petal-${d.species}`)
  // translate the group according to the data point's value
  .attr('transform', ({ petalWidth, petalLength }) => `translate(${xScale(petalWidth)} ${yScale(petalLength)})`);

// for each petal add a circle with a fixed radius and the gradient defined earlier
petals
  .append('circle')
  .attr('r', 5)
  .attr('fill', ({ species }) => `url(#gradient-${species})`);


// BRUSH
// function called following the brush and end events
function highlightViz() {
  // if there is a selection, proceed to find the circle elements falling within the selection
  if (d3.event.selection) {
    // retrieve the values from the coordinates of the selection
    const [[x0, y0], [x1, y1]] = d3.event.selection;
    const [width0, width1] = [x0, x1].map(coordinate => xScale.invert(coordinate));
    const [length0, length1] = [y1, y0].map(coordinate => yScale.invert(coordinate));

    // reduce the opacity of all g.petals except for those falling within the values' ranges
    petals
      .attr('opacity', ({ petalWidth, petalLength }) => ((petalWidth > width0 && petalWidth < width1 && petalLength > length0 && petalLength < length1) ? 1 : 0.2));
  } else {
    // else reset the opacity
    petals
      .attr('opacity', 1);
  }
}

// create a brush spanning the entirety of the group element
const brush = d3
  .brush()
  .extent([[0, 0], [width, height]])
  .on('end brush', highlightViz);

// append the brush
group.append('g')
  .attr('class', 'brush')
  .call(brush);
// reduce the opacity of the rectangle describing the selected area
group
  .select('g.brush rect.selection')
  .attr('opacity', 0.3);

// when entering the svg element reset the opacity of the rectangles and remove the selection0
svg
  .on('mouseenter', () => {
    d3
      .selectAll('g.petal')
      .attr('opacity', 1);

    d3
      .select('g.brush')
      .call(brush.move, null);

  });


// FOOTER
// explain the purpose of the individual project
const footer = viz.append('footer');
footer
  .append('p')
  .html(`This is the second project I've build with the Iris's dataset. You can check the first project <a href="${href}">right here</a>. `);
