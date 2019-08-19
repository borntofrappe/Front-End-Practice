/* globals d3 */
// dataset describing the real interest rate in Australia between 1961 and 2018
// https://data.worldbank.org/indicator/FR.INR.RINR?locations=AU
const data = [2.20192877675305, 5.58540353096757, 3.27426206402178, 1.73117500574349, 2.25949294588104, 2.62157170803393, 0.485511769939369, 3.25964521959553, 1.06997722082935, 1.68627392761528, 1.96233657787761, 0.783337878323126, -1.50603605860954, -6.01827571279595, -5.33931397533848, -3.59758101116202, -1.3850598652733, 1.05174177237822, 0.452274918324396, -0.0340965425476336, 2.10701235642412, 1.41659149691651, 2.05091846004363, 3.37176137088193, 7.44387087635544, 8.02521004999169, 7.50523525122644, 6.40745933698599, 6.6035464089397, 9.66734259720985, 10.0726572327522, 8.94800409569146, 8.44723104852863, 7.98204363248875, 8.05222422170466, 6.84880884746632, 5.86109478223985, 5.3423337284395, 6.18759255059486, 5.00774385062176, 2.12270228152934, 3.40477128529011, 3.39329282720625, 3.61907954781133, 3.33455981692418, 2.39802213383888, 3.03222849228063, 4.19302925472188, 0.970400198200039, 6.04147227701786, 1.39733435535196, 5.00773264232463, 6.34314890121023, 4.44149027991943, 6.32118230974146, 5.9470353697114, 1.47390222942331, 3.37286926136901];


/* FIRST VISUALIZATION
using functions from the D3 array module estimate key figures behind the dataset
! while most of the functions work with a general array, d3.quantile requires a **sorted** array
for this create a shallow copy of the original data, to avoid mutating the original array
*/
// d3.ascending() is another convenience method to rapidly sort two integers
const sortedData = [...data].sort((a, b) => d3.ascending(a, b));

// statistics
const min = d3.min(data);
const q1 = d3.quantile(sortedData, 0.25);
const mean = d3.mean(data);
const median = d3.median(data);
const q3 = d3.quantile(sortedData, 0.75);
const max = d3.max(data);

// create a formatting function to show only three digits after the decimal point
const format = d3.format('.3f');

// populate the table with the computed statistics
const vizStatistics = d3
  .select('.viz__statistics');

vizStatistics
  .select('#min')
  .text(`${format(min)}%`);

vizStatistics
  .select('#q1')
  .text(`${format(q1)}%`);

vizStatistics
  .select('#mean')
  .text(`${format(mean)}%`);

vizStatistics
  .select('#median')
  .text(`${format(median)}%`);
vizStatistics
  .select('#q3')
  .text(`${format(q3)}%`);

vizStatistics
  .select('#max')
  .text(`${format(max)}%`);


/* SECOND AND THIRD VISUALIZATION
specify the measures shared by the box plot and the histogram
*/
const margin = {
  top: 40,
  right: 40,
  bottom: 40,
  left: 40,
};

const width = 500 + (margin.left + margin.right);
const height = 200 + (margin.top + margin.bottom);

// base the horizontal scale on the minimum and maximum data points
// ! the vertical scale is defined for the histogram once the bins are created, since it's based on the bins' sizes
const xScale = d3
  .scaleLinear()
  .domain(d3.extent(data))
  .range([0, width])
  .nice();


/* SECOND VISUALIZATION
build a box plot from the computed statistics
*/
const vizBoxPlot = d3
  .select('.viz__box-plot');

// describe the size of the box plot to be at most half the height of the visualization
const boxHeight = 120;

const svgBoxPlot = vizBoxPlot
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

// translate the group to vertically center the box plot elements
const groupBoxPlot = svgBoxPlot
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top + height / 2})`);

// draw a line considering the interquartile range (q1 - iqr*1.5, q3 + iqr *1.5)
// where the interquartile range is (q3 - q1)
const IQR = q3 - q1;
// the line is drawn from (q1 - IQR *1.5) to (q3 + IQR *1.5)
// cap the values to the minimum/maximum data points
const minBoxPlot = Math.max(q1 - IQR * 1.5, d3.min(data));
const maxBoxPlot = Math.min(q3 + IQR * 1.5, d3.max(data));

groupBoxPlot
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '4')
  .attr('d', `M ${xScale(minBoxPlot)} 0 H ${xScale(maxBoxPlot)}`);

// draw a rectangle from q1 to q3
groupBoxPlot
  .append('rect')
  .attr('x', xScale(q1))
  .attr('width', xScale(q3) - xScale(q1))
  .attr('y', -boxHeight / 2)
  .attr('height', boxHeight)
  .attr('fill', 'hsl(227, 50%, 10%)');

// for the details of the boxplot, include a group to translate the elements at the desired coordinates
// this to include connected elements in the same group

// median: draw the line in the rectangle, a text element describing the purpose and a line connecting the two
const medianBoxPlot = groupBoxPlot
  .append('g')
  .attr('transform', `translate(${xScale(median)} ${-(boxHeight / 2)})`);

medianBoxPlot
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'hsl(152, 70%, 60%)')
  .attr('stroke-width', 4)
  .attr('d', `M 0 0 v ${boxHeight}`);

medianBoxPlot
  .append('text')
  .text('Median')
  .attr('x', 0)
  .attr('y', -70)
  .attr('text-anchor', 'middle');

medianBoxPlot
  .append('path')
  .attr('d', 'M 0 -60 v 50')
  .attr('fill', 'none')
  .attr('stroke-linecap', 'round')
  .attr('stroke-width', 2)
  .attr('stroke', 'currentColor');

// q1 and q3: include text elements and lines connecting the text to the matching values
const q1BoxPlot = groupBoxPlot
  .append('g')
  .attr('transform', `translate(${xScale(q1)} 0)`);

q1BoxPlot
  .append('text')
  .text('q1')
  .attr('x', -45)
  .attr('y', -60)
  .attr('text-anchor', 'middle');

q1BoxPlot
  .append('path')
  .attr('d', 'M -45 -50 v 25 l 35 15')
  .attr('fill', 'none')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('stroke-width', 2)
  .attr('stroke', 'currentColor');

const q3BoxPlot = groupBoxPlot
  .append('g')
  .attr('transform', `translate(${xScale(q3)} 0)`);

q3BoxPlot
  .append('text')
  .text('q3')
  .attr('x', 45)
  .attr('y', -60)
  .attr('text-anchor', 'middle');

q3BoxPlot
  .append('path')
  .attr('d', 'M 45 -50 v 25 l -35 15')
  .attr('fill', 'none')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('stroke-width', 2)
  .attr('stroke', 'currentColor');

// interquartile range: include a text element and a path wrapping the matching region
const iqrBoxPlot = groupBoxPlot
  .append('g')
  .attr('transform', `translate(${xScale(minBoxPlot)} 0)`);

iqrBoxPlot
  .append('text')
  .text('Interquartile Range')
  .attr('x', (xScale(maxBoxPlot) - xScale(minBoxPlot)) / 2)
  .attr('y', (boxHeight / 2 + 60))
  .attr('text-anchor', 'middle');

iqrBoxPlot
  .append('path')
  // draw arcs to figuratively wrap the area from the points described by the interquartile range
  .attr('d', `M 0 ${boxHeight / 2 + 10} a 15 15 0 0 0 15 15 h ${(xScale(maxBoxPlot) - xScale(minBoxPlot)) / 2 - 25} a 10 10 0 0 1 10 10 a 10 10 0 0 1 10 -10 h ${(xScale(maxBoxPlot) - xScale(minBoxPlot)) / 2 - 25} a 15 15 0 0 0 15 -15`)
  .attr('fill', 'none')
  .attr('stroke-linecap', 'round')
  .attr('stroke-width', 2)
  .attr('stroke', 'currentColor');

// outliers (if any): draw a circle, add a text element describing the point and a path connecting the two
// values outside of the interquartile range
const outliers = data.filter(dataPoint => dataPoint < minBoxPlot || dataPoint > maxBoxPlot);

// group to position the outliers
const outliersBoxPlot = groupBoxPlot
  .selectAll('g.outlier')
  .data(outliers)
  .enter()
  .append('g')
  .attr('class', 'outlier')
  .attr('transform', d => `translate(${xScale(d)} 0)`);

// circle, text and connecting line
outliersBoxPlot
  .append('circle')
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('r', 3);

outliersBoxPlot
  .append('text')
  .text('Outlier')
  .attr('x', 0)
  .attr('y', -60)
  .attr('text-anchor', 'middle');

outliersBoxPlot
  .append('path')
  .attr('d', 'M 0 -50 v 40')
  .attr('fill', 'none')
  .attr('stroke-linecap', 'round')
  .attr('stroke-width', 2)
  .attr('stroke', 'currentColor');

/* THIRD VISUALIZATION
build a histogram by creating bins aggregating the data points
*/

// function creating the bins
// ! by default the function creates bins considering the minimum and maximum data points
// the domain function can be specified to have the bins match the scale
const bin = d3
  .bin()
  .domain(xScale.domain());

// bin the data in arrays
// each array describes the data points falling in the bin
// additionally, each array provides x0 and x1 values describing the start and end of the bin
const binData = bin(data);

// create the vertical scale based on the size of the largest bin
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(binData, ({ length }) => length)])
  .range([height, 0]);

const vizHistogram = d3
  .select('.viz__histogram');

const svgHistogram = vizHistogram
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

const groupHistogram = svgHistogram
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// in the nested group add one group for each bin
const bins = groupHistogram
  .selectAll('g.bin')
  .data(binData)
  .enter()
  .append('g')
  // translate the bin horizontally according to the value describing the beginning of the bin
  // vertically according to the size
  .attr('transform', ({ x0, length }) => `translate(${xScale(x0)} ${yScale(length)})`);

// for each bin add a rectangle describing the bin's size
bins
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('fill', 'hsl(227, 50%, 10%)')
  // use the start and end values for the bin's width
  .attr('width', ({ x0, x1 }) => (xScale(x1) - xScale(x0)))
  // use the length for the bin's height
  .attr('height', ({ length }) => height - yScale(length));

// for each bin add a text element spelling out the bin's size
bins
  .append('text')
  // center the text in the matching bin
  .attr('x', ({ x0, x1 }) => (xScale(x1) - xScale(x0)) / 2)
  .attr('y', -5)
  .attr('text-anchor', 'middle')
  .text(({ length }) => length);

// include a line where the axis would be
groupHistogram
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'hsl(152, 70%, 60%)')
  .attr('stroke-width', 4)
  .attr('d', `M 0 ${height} h ${width}`);

// include an axis to specify the bins' values
const xAxis = d3
  .axisBottom(xScale)
  .tickPadding(10)
  .tickFormat(d => `${d}%`);

groupHistogram
  .append('g')
  .attr('class', 'axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

// remove the tick lines and the path describing the axis
d3
  .select('.axis')
  .selectAll('line')
  .remove();
d3
  .select('.axis')
  .select('path')
  .remove();

// style the text elements to be larger and semitransparent
d3
  .select('.axis')
  .attr('opacity', 0.5);
