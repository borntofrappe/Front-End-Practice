/* globals d3 */
// dataset describing the consumption of renewable energy at world level
// https://data.worldbank.org/indicator/EG.FEC.RNEW.ZS
const data = [
  {
    year: '1990',
    percentage: 17.0671538947666,
  },
  {
    year: '1991',
    percentage: 17.2238189234724,
  },
  {
    year: '1992',
    percentage: 17.5843343506126,
  },
  {
    year: '1993',
    percentage: 17.5984373876898,
  },
  {
    year: '1994',
    percentage: 17.6928633402301,
  },
  {
    year: '1995',
    percentage: 17.755347793459,
  },
  {
    year: '1996',
    percentage: 17.741819656794,
  },
  {
    year: '1997',
    percentage: 17.7683028072844,
  },
  {
    year: '1998',
    percentage: 17.9209223918013,
  },
  {
    year: '1999',
    percentage: 18.1298420308909,
  },
  {
    year: '2000',
    percentage: 17.8993921979056,
  },
  {
    year: '2001',
    percentage: 17.6015066667197,
  },
  {
    year: '2002',
    percentage: 17.6183731904508,
  },
  {
    year: '2003',
    percentage: 17.434098206958,
  },
  {
    year: '2004',
    percentage: 17.0972296583476,
  },
  {
    year: '2005',
    percentage: 17.0434424770035,
  },
  {
    year: '2006',
    percentage: 17.1212606863223,
  },
  {
    year: '2007',
    percentage: 16.9083050750164,
  },
  {
    year: '2008',
    percentage: 17.0350290849647,
  },
  {
    year: '2009',
    percentage: 17.5116086035299,
  },
  {
    year: '2010',
    percentage: 17.2551919506048,
  },
  {
    year: '2011',
    percentage: 17.2097710318662,
  },
  {
    year: '2012',
    percentage: 17.4762365885514,
  },
  {
    year: '2013',
    percentage: 17.6990568614625,
  },
  {
    year: '2014',
    percentage: 17.8701840419389,
  },
  {
    year: '2015',
    percentage: 18.0537549929864,
  },
];

// in the .viz container add an svg element following the margin convention
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};
const width = 700 - (margin.left + margin.right);
const height = 350 - (margin.top + margin.bottom);

const svg = d3
  .select('.viz')
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
  .attr('width', width)
  .attr('height', height);

// include the visualization in the nested group
const group = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.right})`);

// describe the scales for the line chart
// x-axis: time scale using the years
const xScale = d3
  .scaleTime()
  .domain([new Date(data[0].year), new Date(data[data.length - 1].year)]) // ! the domain of a time scale describes two date objects
  .range([0, width])
  .nice();

// y-axis: linear scale using the percentages
const yScale = d3
  .scaleLinear()
  .domain(d3.extent(data, ({ percentage }) => percentage)) // consider the [minimum, maximum] values
  .range([height, 0]) // flip the range considering the top down nature of the SVG coordinate system
  .nice();

// describe the line function to plot the data through a path element
// for each data point the line function computes the coordinates based on the input year and percentage
const line = d3
  .line()
  .x(({ year }) => xScale(new Date(year))) // to obtain the value from the time scale the input needs to be a date object (like the domain)
  .y(({ percentage }) => yScale(percentage));

// add a path element using the line function
group
  .append('path')
  .attr('d', line(data))
  .attr('fill', 'none')
  .attr('stroke', 'currentColor');

// include the axes based on the defined scales
const xAxis = d3
  .axisBottom(xScale);

group
  .append('g')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

const yAxis = d3
  .axisLeft(yScale);

group
  .append('g')
  .call(yAxis);
