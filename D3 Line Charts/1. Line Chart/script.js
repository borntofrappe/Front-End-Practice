// data describing the global annual growth in GDP since 1961
// https://data.worldbank.org/indicator/NY.GDP.MKTP.KD.ZG?end=2018&start=1961
const data = [
  {
    year: '1961',
    value: 4.30037375686376,
  },
  {
    year: '1962',
    value: 5.55403569849358,
  },
  {
    year: '1963',
    value: 5.35345142380727,
  },
  {
    year: '1964',
    value: 6.71476405477571,
  },
  {
    year: '1965',
    value: 5.51945066229031,
  },
  {
    year: '1966',
    value: 5.76956322582288,
  },
  {
    year: '1967',
    value: 4.48689164016416,
  },
  {
    year: '1968',
    value: 6.31507805213363,
  },
  {
    year: '1969',
    value: 6.11657700535642,
  },
  {
    year: '1970',
    value: 3.5359422873954,
  },
  {
    year: '1971',
    value: 4.34275602886878,
  },
  {
    year: '1972',
    value: 5.7260488190492,
  },
  {
    year: '1973',
    value: 6.50546589231847,
  },
  {
    year: '1974',
    value: 1.99656371100572,
  },
  {
    year: '1975',
    value: 0.602978791616167,
  },
  {
    year: '1976',
    value: 5.27240589436656,
  },
  {
    year: '1977',
    value: 3.93463354931751,
  },
  {
    year: '1978',
    value: 3.88941949316408,
  },
  {
    year: '1979',
    value: 4.12418668421466,
  },
  {
    year: '1980',
    value: 1.90421232926181,
  },
  {
    year: '1981',
    value: 1.92299999865109,
  },
  {
    year: '1982',
    value: 0.431397133511297,
  },
  {
    year: '1983',
    value: 2.41208706713867,
  },
  {
    year: '1984',
    value: 4.50559186195167,
  },
  {
    year: '1985',
    value: 3.71363915874841,
  },
  {
    year: '1986',
    value: 3.39616153358322,
  },
  {
    year: '1987',
    value: 3.70215967625762,
  },
  {
    year: '1988',
    value: 4.61744894308713,
  },
  {
    year: '1989',
    value: 3.67842326178209,
  },
  {
    year: '1990',
    value: 2.91837492913503,
  },
  {
    year: '1991',
    value: 1.47848769357822,
  },
  {
    year: '1992',
    value: 1.76320873564606,
  },
  {
    year: '1993',
    value: 1.51720399273816,
  },
  {
    year: '1994',
    value: 2.98827236142351,
  },
  {
    year: '1995',
    value: 3.04002321966254,
  },
  {
    year: '1996',
    value: 3.37878088270047,
  },
  {
    year: '1997',
    value: 3.68250794535668,
  },
  {
    year: '1998',
    value: 2.5534231293675,
  },
  {
    year: '1999',
    value: 3.24333651089066,
  },
  {
    year: '2000',
    value: 4.38354416129563,
  },
  {
    year: '2001',
    value: 1.94944414685212,
  },
  {
    year: '2002',
    value: 2.17638510320587,
  },
  {
    year: '2003',
    value: 2.95684985138351,
  },
  {
    year: '2004',
    value: 4.40295451838317,
  },
  {
    year: '2005',
    value: 3.91492406801117,
  },
  {
    year: '2006',
    value: 4.37950740924713,
  },
  {
    year: '2007',
    value: 4.31925812309606,
  },
  {
    year: '2008',
    value: 1.85056149616105,
  },
  {
    year: '2009',
    value: -1.67892493205274,
  },
  {
    year: '2010',
    value: 4.2989225919154,
  },
  {
    year: '2011',
    value: 3.13298091850254,
  },
  {
    year: '2012',
    value: 2.50763409239181,
  },
  {
    year: '2013',
    value: 2.65436271969762,
  },
  {
    year: '2014',
    value: 2.83318568384443,
  },
  {
    year: '2015',
    value: 2.80594403993194,
  },
  {
    year: '2016',
    value: 2.48150064621998,
  },
  {
    year: '2017',
    value: 3.10881541689862,
  },
  {
    year: '2018',
    value: 2.97362919125077,
  },
];

const margin = 40;
const width = 500;
const height = 350;

const container = d3.select('body').append('article');
container.append('h1').text('D3 Line');
container.append('p').text('Mapping data with a linear and a time scale.');

const visualization = container
  .append('svg')
  .attr('viewBox', `0 0 ${width + margin * 2} ${height + margin * 2}`)
  .append('g')
  .attr('transform', `translate(${margin} ${margin})`);

// vertically map the data points according to their values
const yScale = d3
  .scaleLinear()
  .domain(d3.extent(data, d => d.value))
  .range([height, 0])
  .nice();

// horizontally map the years according to the associated date object
const timeParse = d3.timeParse('%Y');
const xScale = d3
  .scaleTime()
  .domain(d3.extent(data, d => timeParse(d.year)))
  // // the following domain works as well
  // .domain(d3.extent(data, d => new Date(d.year)))
  .range([0, width])
  .nice();

// axes
const xAxis = d3.axisBottom(xScale).tickPadding(5);
const yAxis = d3
  .axisLeft(yScale)
  .tickPadding(8)
  .tickFormat(d => `${d}%`);

const axes = visualization.append('g').attr('class', 'axes');
axes
  .append('g')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis)
  // remove every other tick
  // nth-of-type :p works
  .selectAll('.tick:nth-of-type(even)')
  .remove();

axes
  .append('g')
  .call(yAxis)
  // add grid lines for every other tick
  .selectAll('.tick:nth-of-type(even)')
  .append('path')
  .attr('d', `M 0 0 h ${width}`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '1')
  .attr('stroke-linecap', 'round')
  .attr('stroke-dasharray', '3 6')
  .attr('fill', 'none')
  .attr('opacity', '0.25');

axes.selectAll('text').attr('font-size', '16');

// line function
// ! be sure to parse the string describing the year to a date object
const line = d3
  .line()
  .x(d => xScale(timeParse(d.year)))
  .y(d => yScale(d.value))
  .curve(d3.curveCatmullRom);

visualization
  .append('path')
  .attr('d', line(data))
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '3')
  .attr('stroke-linecap', 'round')
  .attr('fill', 'none');

// add a label and a circle for the maximum and minimum values
const format = d3.format('.3');

const least = d3.least(data, d => d.value);
const greatest = d3.greatest(data, d => d.value);
const extremes = visualization
  .selectAll('g.extreme')
  .data([least, greatest])
  .enter()
  .append('g')
  .attr('class', 'extreme')
  .attr(
    'transform',
    ({ year, value }) =>
      `translate(${xScale(timeParse(year))} ${yScale(value)})`
  );

extremes
  .append('circle')
  .attr('r', '7')
  .attr('fill', 'currentColor');
extremes
  .append('text')
  .attr('x', '12')
  .attr('dominant-baseline', 'middle')
  .text(({ value }) => `${format(value)}%`)
  .attr('font-size', '20');

// add a dashed line connecting the data points to the x axis
extremes
  .append('path')
  .attr('d', ({ value }) => `M 0 0 v ${height - yScale(value)}`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '1')
  .attr('stroke-linecap', 'round')
  .attr('stroke-dasharray', '3 6')
  .attr('fill', 'none')
  .attr('opacity', '0.75');
