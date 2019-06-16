/* globals d3 */
// DATA
// starting from an object describing the possible categories and matching colors
// the idea is to fabricate an array of data points with random percentage and user count values
const legend = [
  {
    name: 'Purple',
    color: 'hsl(259, 48%, 55%)',
  },
  {
    name: 'Green',
    color: 'hsl(137, 68%, 61%)',
  },
  {
    name: 'Yellow',
    color: 'hsl(57, 96%, 64%)',
  },
  {
    name: 'Orange',
    color: 'hsl(0, 99%, 71%)',
  },
];

// utility functions to return random values, in a range and from an array
const randomBetween = (min, max) => Math.floor(Math.random() * (max - min) + min);
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// minimum and maximum values for the percentage and user count
const percentages = {
  min: 0,
  max: 100,
};
const counts = {
  min: 0,
  max: 10000,
};

// function called to fabricate random data points
const randomDataPoint = () => {
  // compute a random percentage and count
  const percentage = randomBetween(percentages.min, percentages.max);
  const count = randomBetween(counts.min, counts.max);

  // call the function once more if the data point were to be located in the bottom right corner of the viz
  // this is where the legend is specified
  if (percentage < 20 && count > 8000) {
    return randomDataPoint();
  }
  // retrieve an item from the legend array
  const item = randomItem(legend);

  /* return an object marrying the name and color with the percentage and user count */
  return Object.assign({}, item, {
    percentage,
    count,
  });
};

// number of data points
const dataPoints = 30;
// create an array of data points benefiting from the random functions
const data = Array(dataPoints).fill('').map(randomDataPoint);


// VIZ
// using the D3 library
// in the .viz container include an SVG element following the margin convention
const margin = {
  top: 20,
  right: 20,
  bottom: 50,
  left: 55,
};

// the chart ought to be wider than taller
const width = 600 - (margin.left + margin.right);
const height = 425 - (margin.top + margin.bottom);

// svg container
const svg = d3
  .select('.viz')
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

// group element in which to add the actual viz
const group = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);


// scales
// for both the x and y dimensions define linear scales, using the minimum and maximum values defined earlier
const countScale = d3
  .scaleLinear()
  .domain(d3.extent(Object.values(counts)))
  .range([0, width]);

const percentageScale = d3
  .scaleLinear()
  .domain(d3.extent(Object.values(percentages)))
  .range([height, 0]);

// quadrants and labels
// position four rectangles and text elements to section the larger viz in four areas
const quad = [
  'Assess',
  'Adopt',
  'Avoid',
  'Analyze',
];

const quadrantsGroup = group
  .append('g')
  .attr('class', 'quadrants');

// include one group for each quadrant
const quadrants = quadrantsGroup
  .selectAll('g.quadrant')
  .data(quad)
  .enter()
  .append('g')
  .attr('class', 'quadrant')
  // position the groups at the four corners of the viz
  .attr('transform', (d, i) => `translate(${i % 2 === 0 ? 0 : width / 2} ${i < 2 ? 0 : height / 2})`);

// for each quadrant add a rectangle and a label
quadrants
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', width / 2)
  .attr('height', height / 2)
  // include a darker shade for the third quadrant
  .attr('fill', (d, i) => (i === 2 ? 'hsl(0, 0%, 0%)' : 'hsl(0, 100%, 100%)'))
  // highlight the second and third quadrant with less transparency
  .attr('opacity', (d, i) => ((i === 1 || i === 2) ? 0.15 : 0.05));

quadrants
  .append('text')
  .attr('x', width / 4)
  .attr('y', height / 4)
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle')
  .text(d => d)
  .style('text-transform', 'uppercase')
  .style('letter-spacing', '0.1rem')
  .style('font-weight', '300')
  .style('text-shadow', '0 0 1px hsla(0, 0%, 0%, 0.25)');

// legend
// include in the bottom right corner of the viz the legend
const legendGroup = group
  .append('g')
  .attr('class', 'legend')
  .attr('transform', `translate(${countScale(8500)} ${percentageScale(15)})`);

// include one group for each legend item
// separate the groups vertically
const legendItems = legendGroup
  .selectAll('g.legend-item')
  .data(legend)
  .enter()
  .append('g')
  .attr('class', 'legend-item')
  .attr('transform', (d, i) => `translate(0 ${i * 15})`);

// for each group add a colored circle and the matching text
legendItems
  .append('circle')
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('r', 4)
  .attr('fill', d => d.color);

legendItems
  .append('text')
  .attr('x', 12)
  .attr('y', 0)
  .attr('dominant-baseline', 'middle')
  .text(d => d.name)
  .style('font-size', '0.55rem')
  .style('letter-spacing', '0.05rem')
  .style('text-shadow', '0 0 1px hsla(0, 0%, 0%, 0.25)');

// axes
// beside the lines and ticks include two labels describing the axes
const countAxis = d3
  .axisBottom(countScale)
  .tickFormat(d => d);

const percentageAxis = d3
  .axisLeft(percentageScale)
  .tickFormat(d => `${d}%`);

// add a class to the group elements to rapidly reference them afterwards
group
  .append('g')
  .attr('transform', `translate(0 ${height})`)
  .attr('class', 'axis axis-count')
  .call(countAxis);

group
  .append('g')
  .attr('class', 'axis axis-percentage')
  .call(percentageAxis);

// remove the path describing the axes
d3
  .selectAll('.axis')
  .select('path')
  .remove();

// style the ticks to be shorter
d3
  .select('.axis-count')
  .selectAll('line')
  .attr('y2', 5);

d3
  .select('.axis-percentage')
  .selectAll('line')
  .attr('x2', -4);

// style the text elements with the imported font
d3
  .selectAll('.axis')
  .selectAll('text')
  .style('letter-spacing', '0.01rem');

// grid
// include dotted lines for each tick and both dimensions
d3
  .select('.axis-count')
  .selectAll('g.tick')
  .append('path')
  .attr('d', `M 0 0 v -${height}`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 1)
  .attr('stroke-dasharray', '2')
  .attr('opacity', 0.3);

d3
  .select('.axis-percentage')
  .selectAll('g.tick')
  .append('path')
  .attr('d', `M 0 0 h ${width}`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 1)
  .attr('stroke-dasharray', '2')
  .attr('opacity', 0.3);


// labels
// add a group in which position the label
// for the percentage label, this allows to also modify the transform-origin to rotate the label from the center of the axis
// add a class to identify both labels when needed
d3
  .select('.axis-count')
  .append('g')
  .attr('class', 'label label-count')
  .attr('transform', `translate(${width / 2} ${margin.bottom})`);

d3
  .select('g.label-count')
  .append('text')
  .attr('x', 0)
  .attr('y', 0)
  .text('User Count')
  .attr('text-anchor', 'middle');


d3
  .select('.axis-percentage')
  .append('g')
  .attr('class', 'label label-percentage')
  .attr('transform', `translate(-${margin.left} ${height / 2})`);

d3
  .select('g.label-percentage')
  .append('text')
  .attr('x', 0)
  .attr('y', 0)
  .text('Satisfaction Percentage')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'hanging')
  .attr('transform', 'rotate(-90)');

d3
  .selectAll('g.label text')
  .style('font-size', '0.7rem')
  .style('font-weight', '600')
  .style('letter-spacing', '0.05rem')
  .style('text-shadow', '0 0 1px hsla(0, 0%, 0%, 0.25)');


// data points
// add a group for each data point, to group circle and text elements
const dataGroup = group
  .append('g')
  .attr('class', 'data');

const dataPointsGroup = dataGroup
  .selectAll('g.data-point')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'data-point')
  .attr('transform', d => `translate(${countScale(d.count)} ${percentageScale(d.percentage)})`);

// circles using the defined color
dataPointsGroup
  .append('circle')
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('r', 6)
  .attr('fill', d => d.color);
