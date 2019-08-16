// data describing the length and width of the petals for three subspecies of the iris flowers
const data = [
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.7,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.1,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.2,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.7,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.7,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.7,
    width: 0.5,
    species: 'setosa',
  },
  {
    length: 1.9,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.2,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.6,
    species: 'setosa',
  },
  {
    length: 1.9,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 4.7,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.9,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.6,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.7,
    width: 1.6,
    species: 'versicolor',
  },
  {
    length: 3.3,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.6,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 3.9,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 3.5,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.2,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.7,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 3.6,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.4,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.1,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 3.9,
    width: 1.1,
    species: 'versicolor',
  },
  {
    length: 4.8,
    width: 1.8,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.9,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.7,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 4.3,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.4,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 4.8,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 5,
    width: 1.7,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 3.5,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 3.8,
    width: 1.1,
    species: 'versicolor',
  },
  {
    length: 3.7,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 3.9,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 5.1,
    width: 1.6,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.6,
    species: 'versicolor',
  },
  {
    length: 4.7,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.4,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.1,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.4,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 4.6,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 3.3,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.2,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.2,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 4.2,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.3,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 3,
    width: 1.1,
    species: 'versicolor',
  },
  {
    length: 4.1,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 6,
    width: 2.5,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 5.9,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.8,
    width: 2.2,
    species: 'virginica',
  },
  {
    length: 6.6,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 4.5,
    width: 1.7,
    species: 'virginica',
  },
  {
    length: 6.3,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.8,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 6.1,
    width: 2.5,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 2,
    species: 'virginica',
  },
  {
    length: 5.3,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 5.5,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 5,
    width: 2,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 2.4,
    species: 'virginica',
  },
  {
    length: 5.3,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.5,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 6.7,
    width: 2.2,
    species: 'virginica',
  },
  {
    length: 6.9,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5,
    width: 1.5,
    species: 'virginica',
  },
  {
    length: 5.7,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 4.9,
    width: 2,
    species: 'virginica',
  },
  {
    length: 6.7,
    width: 2,
    species: 'virginica',
  },
  {
    length: 4.9,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.7,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 6,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 4.8,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 4.9,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 5.8,
    width: 1.6,
    species: 'virginica',
  },
  {
    length: 6.1,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 6.4,
    width: 2,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 2.2,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 1.5,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 1.4,
    species: 'virginica',
  },
  {
    length: 6.1,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 2.4,
    species: 'virginica',
  },
  {
    length: 5.5,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 4.8,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.4,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 2.4,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 5.9,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.7,
    width: 2.5,
    species: 'virginica',
  },
  {
    length: 5.2,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 5.2,
    width: 2,
    species: 'virginica',
  },
  {
    length: 5.4,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 1.8,
    species: 'virginica',
  },
];


// target the .viz container and add an svg element
const viz = d3.select('.viz');

// follow the margin convention to give space around the visualization for the axes and their labels
const margin = {
  top: 25,
  right: 25,
  bottom: 25,
  left: 25,
};

const width = 700 - (margin.right + margin.left);
const height = 500 - (margin.top + margin.bottom);

// the svg is a container 700x500
// ! by default, as the size can be altered in the stylesheet
const svg = viz
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.right + margin.left)} ${height + (margin.top + margin.bottom)}`)
  .attr('width', width + (margin.right + margin.left))
  .attr('height', height + (margin.top + margin.bottom));

// the group is translated inside the 700x500 container
// ! it does not have a size, as group elements wrap around the nested elements
// the visualization can however use the width and height and be centered in the svg container
const group = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// create two linear scales for the petals' lengths and widths
// x scale: petal width
const xScale = d3
  .scaleLinear()
  // consider the maximum value found in the dataset
  .domain([0, d3.max(data, d => d.width)])
  .range([0, width])
  .nice();

// y scale: petal length
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, d => d.length)])
  // given the top-down coordinate system of the svg element invert the range
  // this means smaller values are closer to the height, meaning the bottom of the svg
  .range([height, 0])
  .nice();

// add one circle for each data point
group
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.width))
  .attr('cy', d => yScale(d.length))
  .attr('r', 3);

// add axes delimiting the scatter plot
const xAxis = d3
  .axisBottom(xScale);

// push the x-axis at the bottom of the visualization
group
  .append('g')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

const yAxis = d3
  .axisLeft(yScale);

group
  .append('g')
  .call(yAxis);
