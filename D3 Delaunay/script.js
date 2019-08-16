/* eslint-disable func-names */
/* globals d3 */
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

const viz = d3
  .select('.viz');

// add a tooltip
const tooltip = viz
  .append('div')
  .attr('id', 'tooltip')
  .style('opacity', 0)
  .style('visibility', 'hidden')
  .style('position', 'absolute');

// add the svg element describing the visualization
// follow the margin convention to give space around the visualization for the axes and their labels
const margin = {
  top: 40,
  right: 55,
  bottom: 40,
  left: 55,
};

const width = 700 - (margin.right + margin.left);
const height = 500 - (margin.top + margin.bottom);

// the svg is a container 700x500
// ! by default, as the size can be altered in the stylesheet
const svg = viz
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.right + margin.left)} ${height + (margin.top + margin.bottom)}`);

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

// add axes to describe the length and width in centimeters
const xAxis = d3
  .axisBottom(xScale)
  .ticks(7)
  .tickPadding(4)
  .tickFormat(d => `${d}cm`);

// push the x-axis at the bottom of the visualization
group
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

const yAxis = d3
  .axisLeft(yScale)
  .ticks(4)
  .tickPadding(4)
  .tickFormat(d => `${d}cm`);

group
  .append('g')
  .attr('class', 'axis y-axis')
  .call(yAxis);

// remove the path elements describing the axes (these are substituted with the boundaries of the Vonoroi diagram) and the line elements behind the ticks (design choice)
d3
  .selectAll('g.axis')
  .selectAll('path')
  .remove();

d3
  .selectAll('g.axis')
  .selectAll('line')
  .remove();

// remove the first tick from both axes and add a `0cm` instead, shared by both
d3
  .selectAll('g.axis')
  .select('g.tick')
  .remove();

d3
  .select('g.axis') // added to the first axis, meaning the x axis
  .append('text')
  .attr('x', -18)
  .attr('y', 18)
  .text('0cm');

// add grid lines for the existing ticks
d3
  .selectAll('g.x-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('stroke', 'currentColor')
  .attr('fill', 'none')
  .attr('d', `M 0 0 v${-height}`);

d3
  .selectAll('g.y-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('stroke', 'currentColor')
  .attr('fill', 'none')
  .attr('d', `M 0 0 h${width}`);

// style the grid lines
d3
  .selectAll('g.axis')
  .selectAll('g.tick')
  .select('path')
  .attr('stroke-width', '2')
  .attr('stroke-dasharray', '5')
  .attr('opacity', 0.1);

// include two labels for the axes
d3
  .select('g.x-axis')
  .append('text')
  .attr('class', 'label')
  .attr('x', width / 2)
  .attr('y', margin.bottom)
  .attr('text-anchor', 'middle')
  .text('Petal\'s Width');

d3
  .select('g.y-axis')
  .append('text')
  .attr('class', 'label')
  .attr('x', -margin.left + 5)
  .attr('y', height / 2)
  .attr('text-anchor', 'middle')
  .style('writing-mode', 'vertical-rl')
  .text('Petal\'s Length');


// add a path element to connect the cell to the tooltip
const link = group
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 1.5);


// add one circle for each data point
// differentiate the fill of the circles according to the sub-specie of flower
const fill = {
  setosa: 'hsl(360, 40%, 45%)',
  versicolor: 'hsl(300, 40%, 45%)',
  virginica: 'hsl(240, 40%, 45%)',
};

group
  .selectAll('circle')
  .data(data)
  .enter()
  .append('circle')
  .attr('cx', d => xScale(d.width))
  .attr('cy', d => yScale(d.length))
  .attr('fill', d => fill[d.species])
  .attr('r', 4);


// add a voronoi diagram on top of the existing elements
// following the docs specify the x and y points through functions referencing the values included in the visualization
const delaunay = new d3.Delaunay.from(data, d => xScale(d.width), d => yScale(d.length));
// create a Vonoroi diagram describing its boundaries
const voronoi = delaunay.voronoi([0, 0, width, height]);

// add a path element describing the Vonoroi diagram
// this shows the different sections of the diagram itself
group
  .append('path')
  .attr('class', 'outline')
  // hidden by default
  .attr('opacity', 0)
  .attr('d', voronoi.render())
  .attr('fill', 'none')
  .attr('stroke', 'currentColor');

// add the boundaries as a substitute to the axes, and to encase the visualization on four sides
group
  .append('path')
  .attr('d', voronoi.renderBounds())
  .attr('fill', 'none')
  .attr('stroke', 'currentColor');


// for each data point add a cell
// ! make the cell fully transparent, since the path is included only for mouseover events
group
  .selectAll('path.cell')
  .data(data)
  .enter()
  .append('path')
  .attr('class', 'cell')
  .attr('opacity', 0)
  .attr('d', (d, i) => voronoi.renderCell(i))
  // following the mousemove event position the tooltip and adjust the path element linking the cursor to the matching data point
  .on('mousemove', function (d) {
    // dom coordinates for the tooltip
    const { pageX, pageY } = d3.event;

    // svg coordinates for the path
    const [mouseX, mouseY] = d3.mouse(this);
    // svg coordinates for the data point
    const x = xScale(d.width);
    const y = yScale(d.length);

    // ! position the tooltip away from the connecting line
    const dx = mouseX - x; // dx > 0, the point is to the right, show the tooltip to the left
    const dy = mouseY - y; // dy > 0, the point is above, show the tooltip below

    const { width: tooltipWidth, height: tooltipHeight } = document.querySelector('#tooltip').getBoundingClientRect();
    const left = dx > 0 ? `${pageX}px` : `${pageX - tooltipWidth}px`;
    const top = dy > 0 ? `${pageY}px` : `${pageY - tooltipHeight}px`;

    tooltip
      .style('left', left)
      .style('top', top);

    link
      .attr('d', `M ${mouseX} ${mouseY} L ${x} ${y} m -8 0 a 8 8 0 0 0 16 0 a 8 8 0 0 0 -16 0`);
  })
  // following the hover event describe the individual data point in the tooltip
  .on('mouseenter', (d) => {
    // remove existing elements
    tooltip
      .selectAll('*')
      .remove();

    // describe the flower's information through description elements
    tooltip
      .append('p')
      .append('strong')
      .text(`Iris ${d.species}`);

    const describeFlower = tooltip
      .append('dl');

    describeFlower
      .append('dt')
      .text('Length');

    describeFlower
      .append('dd')
      .text(`${d.length}cm`);

    describeFlower
      .append('dt')
      .text('Width');

    describeFlower
      .append('dd')
      .text(`${d.width}cm`);

    // show the tooltip
    tooltip
      .style('opacity', 1)
      .style('visibility', 'visible');
  });

// select the checkbox and toggle the opacity of the outline to show/hide the Vonoroi diagram
d3
  .select('input[type="checkbox"]')
  .on('input', function () {
    const { checked } = this;
    if (checked) {
      d3
        .select('path.outline')
        .attr('opacity', 0.6);
    } else {
      d3
        .select('path.outline')
        .attr('opacity', 0);
    }
  });
