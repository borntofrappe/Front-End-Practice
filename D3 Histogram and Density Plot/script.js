/* globals d3 */
// data describing the length of setosa's irises
const href = 'https://en.wikipedia.org/wiki/Iris_flower_data_set';
const data = [5.1, 4.9, 4.7, 4.6, 5, 5.4, 4.6, 5, 4.4, 4.9, 5.4, 4.8, 4.8, 4.3, 5.8, 5.7, 5.4, 5.1, 5.7, 5.1, 5.4, 5.1, 4.6, 5.1, 4.8, 5, 5, 5.2, 5.2, 4.7, 4.8, 5.4, 5.2, 5.5, 4.9, 5, 5.5, 4.9, 4.4, 5.1, 5, 4.5, 4.4, 5, 5.1, 4.8, 5.1, 4.6, 5.3, 5];

// target the .viz container
const viz = d3.select('.viz');

// in a header include preliminary information about the project
const header = viz.append('header');
header
  .append('h1')
  .text('Iris Setosa - Petal Length');

// have the visualizations share the same margin, width and height
const margin = {
  top: 30,
  right: 20,
  bottom: 50,
  left: 20,
};
const width = 500 - (margin.left + margin.right);
const height = 500 - (margin.top + margin.bottom);

// HISTOGRAM
const svgHistogram = viz
  .append('svg')
  .attr('class', 'histogram')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

// linear gradient described for the entire visualization
// the idea is to have lighter colors toward the top of the svg
const linearGradient = svgHistogram
  .append('defs')
  .append('linearGradient')
  .attr('id', 'gradient-histogram')
  .attr('gradientUnits', 'userSpaceOnUse')
  .attr('x1', 0)
  .attr('x2', 0)
  .attr('y1', 0)
  .attr('y2', height);

linearGradient
  .append('stop')
  .attr('stop-color', 'hsl(280, 87%, 73%)')
  .attr('offset', 0);

linearGradient
  .append('stop')
  .attr('stop-color', 'hsl(265, 77%, 53%)')
  .attr('offset', 1);

const groupHistogram = svgHistogram
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// for the horizontal dimension the scale is defined for both the histogram and the density plot
// ! the function is also used by the histogram function to determine the different bins
const xScale = d3
  .scaleLinear()
  .domain([Math.floor(d3.min(data)), Math.ceil(d3.max(data))])
  .range([0, width]);

// histogram used to create the bins from the input data
const histogram = d3
  .histogram()
  .domain(xScale.domain());

// multi dimensional array describing for each bin the start and end coordinate on the x axis (x0, x1) as well as the data points falling in the bin
// the number of data points is given by the length of each array
const dataHistogram = histogram(data);

// for the vertical dimension, the histogram uses the number of observations
const yScaleHistogram = d3
  .scaleLinear()
  .domain([0, d3.max(dataHistogram, ({ length }) => length)])
  .range([height, 0]);

// draw the y axis before the visualization, to have the grid lines behind the histogram' rectangles
const yAxisHistogram = d3
  .axisLeft(yScaleHistogram);

// give a class to the axis to later identify and style the elements
groupHistogram
  .append('g')
  .attr('class', 'axis y-axis')
  .call(yAxisHistogram);

// HISTOGRAM ELEMENTS
// add one group for each bin
const binsHistogram = groupHistogram
  .selectAll('g.bin')
  .data(dataHistogram)
  .enter()
  .append('g')
  .attr('class', 'bin')
  // translate the bins horizontally according to where each bin ought to start
  .attr('transform', ({ x0 }) => `translate(${xScale(x0)} 0)`);

// in the group elements add a rectangle using the vertical scale
binsHistogram
  .append('rect')
  .attr('x', 0)
  .attr('y', d => yScaleHistogram(d.length))
  .attr('width', ({ x0, x1 }) => xScale(x1) - xScale(x0))
  .attr('height', d => height - yScaleHistogram(d.length))
  .attr('fill', 'url(#gradient-histogram)')
  .attr('stroke', '#0c1620')
  .attr('stroke-width', 2);

// at the top of the rectangles include a text describing the precise count
binsHistogram
  .append('text')
  .attr('x', ({ x0, x1 }) => (xScale(x1) - xScale(x0)) / 2)
  .attr('y', d => yScaleHistogram(d.length) - margin.top / 3)
  .attr('fill', 'url(#gradient-histogram)')
  .attr('text-anchor', 'middle')
  .attr('font-weight', 'bold')
  .attr('font-size', '1.1rem')
  .text(d => d.length);

// draw the y axis on top of the rectangles
const xAxis = d3
  .axisBottom(xScale)
  .tickPadding(10);

groupHistogram
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);


// DENSITY PLOT
const svgDensity = viz
  .append('svg')
  .attr('class', 'density')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

const groupDensity = svgDensity
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// data massaging
// for the density plot, it is necessary to compute the density of each segment
// as a first estimation, the value can be computed as the number of observations divided by the total
const dataCount = dataHistogram.map(({ x0, x1, length: count }) => ({
  x0,
  x1,
  count,
}));
const countTotal = dataCount.reduce((acc, curr) => acc + curr.count, 0);
const dataDensity = dataCount.map(({ x0, x1, count }) => ({
  x0,
  x1,
  density: count / countTotal,
}));

// for the scales, use the xScale defined for the histogram, but a new yScale using the density values
const yScaleDensity = d3
  .scaleLinear()
  .domain([0, d3.max(dataDensity, d => d.density)])
  .range([height, 0]);

// include the y axis before the visualization
const yAxisDensity = d3
  .axisLeft(yScaleDensity);

groupDensity
  .append('g')
  .attr('class', 'axis y-axis')
  .call(yAxisDensity);

// DENSITY PLOT ELEMENTS
// include the line and area describing the plot in a wrapping group
const curveDensity = groupDensity
  .append('g')
  .attr('class', 'curve');

// line function, used to draw the stroke of the density plot
const line = d3
  .line()
  .x(({ x0, x1 }) => xScale(x0) + (xScale(x1) - xScale(x0)) / 2)
  .y(({ density }) => yScaleDensity(density))
  .curve(d3.curveBasis);

curveDensity
  .append('path')
  .attr('d', line(dataDensity))
  .attr('stroke', '#0c1620')
  .attr('stroke-width', 2)
  .attr('fill', 'none');

// area function, highlighting the area below the line, or curve
const area = d3
  .area()
  .x(({ x0, x1 }) => xScale(x0) + (xScale(x1) - xScale(x0)) / 2)
  .y1(({ density }) => yScaleDensity(density))
  .curve(d3.curveBasis)
  .y0(yScaleDensity(0));

curveDensity
  .append('path')
  .attr('d', area(dataDensity))
  .attr('fill', 'url(#gradient-histogram)');

// add the axis created for the histogram on top of the visualization
groupDensity
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);


// style the axes of both visualizations
// remove all line elements
d3
  .selectAll('.axis')
  .selectAll('line')
  .remove();

// for the horizontal axis, increase the size of the labels and include a label beneath the values
d3
  .selectAll('.x-axis')
  .selectAll('text')
  .attr('font-size', '0.9rem');

d3
  .selectAll('.x-axis')
  .append('text')
  .attr('font-size', '1rem')
  .attr('x', width / 2)
  .attr('y', margin.bottom)
  .attr('fill', 'currentColor')
  .attr('opacity', 0.5)
  .style('letter-spacing', '0.2rem')
  .text('centimeters');

// for the vertical dimension, add the axes, but hide the content it in favor of grid lines
d3
  .selectAll('.y-axis')
  .selectAll('path')
  .remove();
d3
  .selectAll('.y-axis')
  .selectAll('text')
  .remove();

d3
  .selectAll('.y-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('d', `M 0 0 h ${width}`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 1)
  .attr('opacity', 0.25);

// include text labels describing the graphics
// for both visualizations explain the highlighted metric
d3
  .selectAll('.y-axis')
  .append('text')
  .attr('font-size', '1rem')
  .attr('x', 0)
  .attr('y', -margin.top / 3)
  .attr('fill', 'currentColor')
  .attr('opacity', 0.5)
  .attr('text-anchor', 'start')
  .style('letter-spacing', '0.2rem')
  .text((d, i) => (i === 0 ? 'count' : 'density'));

// for the density plot, and positioned next to each tick include the tick's value
d3
  .select('.density .y-axis')
  .selectAll('g.tick')
  .append('text')
  .attr('font-size', '1rem')
  .attr('x', width)
  .attr('y', -5)
  .attr('fill', 'currentColor')
  .attr('opacity', 0.2)
  .attr('text-anchor', 'end')
  .style('letter-spacing', '0.2rem')
  .text(d => d);


// in the footer explain the purpose of the individual project
const footer = viz.append('footer');
footer
  .append('p')
  .html('This is but one project I plan to create around the Iris\'s dataset. Eventually, multiple visualizations will come together for every species and multiple variables to detail an informative correlogram.');

footer
  .append('p')
  .html(`You can read more about the dataset <a href="${href}">right here</a>.`);
