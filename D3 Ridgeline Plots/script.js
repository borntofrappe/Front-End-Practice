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

// for both visualizations the idea is to have the distribution represented at different heights of the visualization
// the vertical scale needs to therefore consider a fraction of the height
const dataEntries = Object.entries(data);

// for the horizontal scale, both visualization consider the actual length of the petals
const dataLengths = dataEntries.reduce((acc, curr) => [...acc, ...curr[1]], []);
const xScale = d3
  .scaleLinear()
  // start at 0 and end at the greatest value considering every observation
  .domain([0, d3.max(dataLengths)])
  .range([0, width])
  .nice();

const xAxis = d3
  .axisBottom(xScale)
  .ticks(5);

// for the vertical scale, each petal needs to occupy a fraction of the total height
// ! the domain is dictated by the number of bins and is specified later
const histogram = d3
  .histogram()
  .domain(xScale.domain());

/* create an array describing for each subspecies an object
bins is an array of values describing the bins, with x0, x1 properties and the data points falling in between the two
*/
const dataHistogram = dataEntries.map(([species, values]) => ({
  species,
  bins: histogram(values),
}));

// create a variable allowing to separate the different flowers
const maxHeight = height / dataEntries.length;
// use the variable to dictate the maximum height reach-able by the histograms
const yScaleHistogram = d3
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

// group describing the visualization itself
const groupHistogram = svgHistogram
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// add the x axis
groupHistogram
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

// function called for every species to draw the respective histogram
function includeBins(species, bins, groupBins) {
  // update the linear scale with the maximum value of the bins lengths
  yScaleHistogram
    .domain([0, d3.max(bins, bin => bin.length)]);

  // apply the gradient of the matching species
  groupBins
    .attr('fill', `url(#gradient-${species})`);

  // include one rectangle for every bin
  // ! the height is dictated by the updated linear scale
  groupBins
    .selectAll('rect')
    .data(bins)
    .enter()
    .append('rect')
    .attr('data-length', ({ length }) => length)
    .attr('x', ({ x0 }) => xScale(x0))
    .attr('y', ({ length }) => -yScaleHistogram(length))
    .attr('width', ({ x0, x1 }) => xScale(x1) - xScale(x0))
    .attr('height', ({ length }) => yScaleHistogram(length));

  // add a rectangle describing the ground level
  groupBins
    .append('rect')
    .attr('x', 0)
    .attr('y', -1)
    .attr('width', width)
    .attr('height', 1);

  // add a text label centered on the axis
  groupBins
    .append('text')
    .attr('x', -5)
    .attr('y', -yScaleHistogram(d3.max(bins, bin => bin.length) / 2))
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'middle')
    .text(species);
}

// data histogram describes the species as well as the bins
// bins is an array describing the data points and the x0,x1 values
// for each flower create a group element
dataHistogram.forEach(({ species, bins }, index) => {
  const groupBins = groupHistogram
    .append('g')
    .attr('class', `bins-${species}`)
    // translate the group to have the histograms on different levels
    .attr('transform', `translate(0 ${maxHeight * (index + 1)})`);

  // call the function including in the group element the necessary elements
  includeBins(species, bins, groupBins);
});


// RIDGELINE DENSITY
// the visualization mirrors the ridgeline with histogram, but using the area function instead of rectangle elements
const svgDensity = viz
  .append('svg')
  .attr('class', 'density')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);


const groupDensity = svgDensity
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

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

// specify a different vertical scale given the different range
const yScaleDensity = d3
  .scaleLinear()
  .range([0, maxHeight]);

// create an array describing the species and an array with the density values
// density computed as the bins' lengths divided by the sum of all bins' lengths
const dataDensity = dataHistogram.map(({ species, bins }) => {
  const total = bins.reduce((acc, curr) => acc + curr.length, 0);
  const density = bins.map(({ length }) => length / total);
  return {
    species,
    density,
  };
});

// function called to draw the area in each group element
function includeCurves(species, density, groupCurves) {
  // update the domain to consider the maximum value for the density
  yScaleDensity
    .domain([0, d3.max(density)]);

  // update the area function to use the now updated scale
  area
    .y1(d => -yScaleDensity(d));

  // specify the matching gradient for the fill of the path and of the text
  groupCurves
    .attr('fill', `url(#gradient-${species})`);

  // include the area
  groupCurves
    .append('path')
    .attr('d', area(density));

  // rectangle for the ground level
  groupCurves
    .append('rect')
    .attr('x', 0)
    .attr('y', -1)
    .attr('width', width)
    .attr('height', 1);

  // text label
  groupCurves
    .append('text')
    .attr('x', -5)
    .attr('y', -yScaleDensity(d3.max(density) / 2))
    .attr('text-anchor', 'end')
    .attr('dominant-baseline', 'middle')
    .text(species);
}

// for each flower extract the species and array of densities
dataDensity.forEach(({ species, density }, index) => {
  const groupCurves = groupDensity
    .append('g')
    .attr('class', 'bins')
    // translate each successive group vertically
    .attr('transform', `translate(0 ${maxHeight * (index + 1)})`);

  // call the
  includeCurves(species, density, groupCurves);
});


// style the x axes of both visualizations to remove the axis, the ticks and leave the ticks' labels only
d3
  .selectAll('.x-axis')
  .selectAll('path')
  .remove();

d3
  .selectAll('.x-axis')
  .selectAll('line')
  .remove();

d3
  .selectAll('.x-axis')
  .selectAll('text')
  .attr('font-size', '1rem');

// include a label describing the ticks' labels unit of measure
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
