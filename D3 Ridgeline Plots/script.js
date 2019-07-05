/* globals d3 */
const hrefData = 'https://en.wikipedia.org/wiki/Iris_flower_data_set';
const hrefFirstProject = 'https://codepen.io/borntofrappe/full/dBeKga';
const hrefSecondProject = 'https://codepen.io/borntofrappe/full/XLYPWQ';
// array describing the length of the petals for three subspecies of the iris flower
const data = {
  setosa: [1.4, 1.4, 1.3, 1.5, 1.4, 1.7, 1.4, 1.5, 1.4, 1.5, 1.5, 1.6, 1.4, 1.1, 1.2, 1.5, 1.3, 1.4, 1.7, 1.5, 1.7, 1.5, 1, 1.7, 1.9, 1.6, 1.6, 1.5, 1.4, 1.6, 1.6, 1.5, 1.5, 1.4, 1.5, 1.2, 1.3, 1.4, 1.3, 1.5, 1.3, 1.3, 1.3, 1.6, 1.9, 1.4, 1.6, 1.4, 1.5, 1.4],
  versicolor: [4.7, 4.5, 4.9, 4, 4.6, 4.5, 4.7, 3.3, 4.6, 3.9, 3.5, 4.2, 4, 4.7, 3.6, 4.4, 4.5, 4.1, 4.5, 3.9, 4.8, 4, 4.9, 4.7, 4.3, 4.4, 4.8, 5, 4.5, 3.5, 3.8, 3.7, 3.9, 5.1, 4.5, 4.5, 4.7, 4.4, 4.1, 4, 4.4, 4.6, 4, 3.3, 4.2, 4.2, 4.2, 4.3, 3, 4.1],
  virginica: [6, 5.1, 5.9, 5.6, 5.8, 6.6, 4.5, 6.3, 5.8, 6.1, 5.1, 5.3, 5.5, 5, 5.1, 5.3, 5.5, 6.7, 6.9, 5, 5.7, 4.9, 6.7, 4.9, 5.7, 6, 4.8, 4.9, 5.6, 5.8, 6.1, 6.4, 5.6, 5.1, 5.6, 6.1, 5.6, 5.5, 4.8, 5.4, 5.6, 5.1, 5.1, 5.9, 5.7, 5.2, 5, 5.2, 5.4, 5.1],
};
// array describing the colors for each subspecies
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

// target the .viz container
const viz = d3.select('.viz');

// in a header include preliminary information about the project
const header = viz.append('header');
header
  .append('h1')
  .text('Iris Flowers - Petal Length');


// have the visualizations share the same margin, width and height
const margin = {
  top: 20,
  right: 20,
  bottom: 40,
  left: 80, // margin on the left to give space for the labels
};
const width = 500 - (margin.left + margin.right);
const height = 500 - (margin.top + margin.bottom);

// for both visualizations the idea is to have the flowers represented on different lines, at different heights of the visualization
// the vertical scale needs to therefore consider a fraction of the height
const dataEntries = Object.entries(data);


// for the horizontal scale, both visualization consider the actual length of the petals
const xScale = d3
  .scaleLinear()
  // start at 0 and end at the greatest value considering every observation
  .domain([0, d3.max(dataEntries, d => d3.max(d[1]))])
  .range([0, width])
  .nice();

const xAxis = d3
  .axisBottom(xScale)
  .ticks(5);

// for the vertical scale, each petal needs to occupy a fraction of the total height
// ! the domain is dictated by the number of the bins of the visualization
const histogram = d3
  .histogram()
  .domain(xScale.domain());

const dataHistogram = dataEntries.map(([species, values]) => ({
  species,
  bins: histogram(values),
}));

const maxHeight = height / dataEntries.length;
const yScale = d3
  .scaleLinear()
  .range([0, maxHeight * 0.8])
  .nice();


// RIDGELINE HISTOGRAM
// wrapping container
const svgHistogram = viz
  .append('svg')
  .attr('class', 'histogram')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

// defs block describing the gradients for the three subspecies
const defs = svgHistogram
  .append('defs');

const colorGradients = defs
  .selectAll('linearGradient')
  .data(Object.entries(colors))
  .enter()
  .append('linearGradient')
  .attr('id', ([species]) => `gradient-${species}`)
  .attr('x1', 1)
  .attr('x2', 0)
  .attr('y1', 0)
  .attr('y2', 1);

// include a lighter variant starting from the top left corner of the visualization
colorGradients
  .append('stop')
  .attr('stop-color', ([, color]) => `hsl(${color.h + 5}, ${color.s + 5}%, ${color.l + 15}%)`)
  .attr('offset', 0);

colorGradients
  .append('stop')
  .attr('stop-color', ([, color]) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`)
  .attr('offset', 1);

const groupHistogram = svgHistogram
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);


// add the x axis
groupHistogram
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

function includeBins(species, bins, groupBins) {
  yScale
    .domain([0, d3.max(bins, bin => bin.length)]);

  groupBins
    .attr('fill', `url(#gradient-${species})`);
  groupBins
    .selectAll('rect')
    .data(bins)
    .enter()
    .append('rect')
    .attr('data-length', ({ length }) => length)
    .attr('x', ({ x0 }) => xScale(x0))
    .attr('y', ({ length }) => -yScale(length))
    .attr('width', ({ x0, x1 }) => xScale(x1) - xScale(x0))
    .attr('height', ({ length }) => yScale(length));

  groupBins
    .append('rect')
    .attr('x', 0)
    .attr('y', -1)
    .attr('width', width)
    .attr('height', 1);

  groupBins
    .append('text')
    .attr('x', -5)
    .attr('y', -yScale(d3.max(bins, bin => bin.length) / 2))
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'middle')
    .text(species);
}

dataHistogram.forEach(({ species, bins }, index) => {
  // add a group for each series of bins
  const groupBins = groupHistogram
    .append('g')
    .attr('class', 'bins')
    .attr('transform', `translate(0 ${maxHeight * (index + 1)})`);

  includeBins(species, bins, groupBins);
});


// RIDGELINE DENSITY
const svgDensity = viz
  .append('svg')
  .attr('class', 'density')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);


const groupDensity = svgDensity
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);


// add the x axis
groupDensity
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);


const area = d3
  .area()
  .x((d, i) => xScale(i) + (xScale(i + 1) - xScale(i)) / 2)
  .y0(0)
  .curve(d3.curveBasis);

const yScaleDensity = d3
  .scaleLinear()
  .range([0, maxHeight]);

const dataDensity = dataHistogram.map(({ species, bins }) => {
  const total = bins.reduce((acc, curr) => acc + curr.length, 0);
  const density = bins.map(({ length }) => length / total);
  return {
    species,
    density,
  };
});
function includeCurves(species, density, groupCurves) {
  yScaleDensity
    .domain([0, d3.max(density)]);

  area
    .y1(d => -yScaleDensity(d));

  groupCurves
    .attr('fill', `url(#gradient-${species})`);

  groupCurves
    .append('path')
    .attr('d', area(density));

  groupCurves
    .append('rect')
    .attr('x', 0)
    .attr('y', -1)
    .attr('width', width)
    .attr('height', 1);

  groupCurves
    .append('text')
    .attr('x', -5)
    .attr('y', -yScaleDensity(d3.max(density) / 2))
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'middle')
    .text(species);
}

dataDensity.forEach(({ species, density }, index) => {
  // add a group for each series of bins
  const groupCurves = groupDensity
    .append('g')
    .attr('class', 'bins')
    .attr('transform', `translate(0 ${maxHeight * (index + 1)})`);

  includeCurves(species, density, groupCurves);
});


// style the x axes of both visualizations to include vertical grid lines
// increase the size of the labels and add a label beneath the values
d3
  .selectAll('.x-axis')
  .selectAll('path')
  .remove();

d3
  .selectAll('.x-axis')
  .selectAll('line')
  .attr('y0', 0)
  .attr('y1', -height)
  .attr('opacity', 0.1);

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

// in the footer explain the purpose of the individual project
const footer = viz.append('footer');
footer
  .append('p')
  .html(`This is the third D3 project I made with the <a href="${hrefData}">Iris flower dataset</a>. I plan to build a correlogram, but decided to build the different visualizations one at a time. For reference, you can find the individual histogram and density plot <a href="${hrefFirstProject}">here</a> and a scatterplot <a href="${hrefSecondProject}">here</a>.`);
