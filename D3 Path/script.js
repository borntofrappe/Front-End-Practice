/* globals d3 */
// top 10 records retrieved from the wiki page
const href = 'https://en.wikipedia.org/wiki/Long_jump#Records';
// sorted chronologically
const data = [
  {
    value: 8.9,
    date: '18 October 1968',
  },
  {
    value: 8.86,
    date: '22 May 1987',
  },
  {
    value: 8.74,
    date: '18 July 1988',
  },
  {
    value: 8.95,
    date: '30 August 1991',
  },
  {
    value: 8.87,
    date: '30 August 1991',
  },
  {
    value: 8.74,
    date: '2 April 1994',
  },
  {
    value: 8.71,
    date: '18 July 1995',
  },
  {
    value: 8.73,
    date: '24 May 2008',
  },
  {
    value: 8.71,
    date: '8 March 2009',
  },
  {
    value: 8.74,
    date: '7 June 2009',
  },
];

// introductory markup
const main = d3.select('body').append('main');

main.append('h1').text('Long Jump');
main
  .append('p')
  .html(
    `Highlighting the <a href="${href}">top ten records</a> in chronological order`
  );

// d3
const width = 500;
const height = 350;
const margin = 10;
const duration = 1250;
const delay = 750;
const strokeWidth = 4;

// scales used in the project
// mapping the values horizontally
const xScale = d3
  .scaleLinear()
  .domain(d3.extent(data, d => d.value))
  .range([0, width])
  .nice();

// mapping the data points to have later values more opaque
const opacityScale = d3
  .scalePow()
  .domain([0, data.length])
  .range([0.2, 1])
  .exponent(2);

// svg
const svg = d3
  .select('main')
  .append('svg')
  .attr(
    'viewBox',
    `${-margin} ${-margin} ${width + margin * 2} ${height + margin * 2}`
  );

// add a group for each data point
// translated at the center of the svg
const groups = svg
  .selectAll('g')
  .data(data)
  .enter()
  .append('g')
  .attr('transform', `translate(0 ${height / 2})`);

// path for each datum
const strokes = groups
  .append('path')
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', strokeWidth)
  .attr('stroke-linecap', 'round')
  // use the d3-path module to create a quadratic curve based on the value
  .attr('d', ({ value }) => {
    const jump = xScale(value);
    const x = jump;
    const cpx = jump * 0.7;
    const cpy = jump * 0.4 * -1;

    const context = d3.path();
    context.moveTo(0, 0);
    context.quadraticCurveTo(cpx, cpy, x, 0);
    const d = context.toString();
    return d;
  })
  .attr('stroke-linecap', 'round');

// two-stage transition
strokes
  // stroke
  // find the actual length of the path
  // the pathLength attribute would help, but it's less supported
  .attr('stroke-dasharray', function() {
    const length = this.getTotalLength();
    return length;
  })
  .attr('stroke-dashoffset', function() {
    const length = this.getTotalLength();
    return length;
  })
  .transition()
  .ease(d3.easeCubicOut)
  .delay((d, i) => (duration + delay) * i)
  .duration(duration)
  .attr('stroke-dashoffset', '0')
  .attr('opacity', 1)
  // opacity and stroke-width
  // reduce the importance of the stroke according to its index
  .transition()
  .delay(delay)
  .attr('opacity', (d, i) => opacityScale(i))
  // for all but the last stroke
  .attr('stroke-width', (d, i, { length }) =>
    i === length - 1 ? strokeWidth : 1
  );

// text accompanying each stroke
const text = groups
  .append('text')
  .attr('transform', ({ value }) => `translate(${xScale(value)} 0)`)
  .text(({ value }) => value)
  .attr('y', '5')
  .attr('font-size', 20)
  .style('writing-mode', 'vertical-rl')
  .style('text-orientation', 'upright');

// paired with the stroke's transitions, show the text after the
text
  .attr('opacity', 0)
  .transition()
  .delay((d, i) => (duration + delay) * i + duration)
  .attr('opacity', 1)
  .attr('stroke-dashoffset', '0')
  .transition()
  .delay(delay)
  .attr('opacity', (d, i) => opacityScale(i));
