/* eslint-disable func-names */
/* globals d3 */

// the idea is to include the line chart by default and update its appearance through the checkbox
// DATA
const data = [
  {
    product: 'purple',
    color: '#9B48EC',
  },
  {
    product: 'blue',
    color: '#2EB1F5',
  },
  {
    product: 'green',
    color: '#4BE887',
  },
];

// include an arbitrary amount of sales measure
const observations = 6;
// function to add a measure between a min and max value, rounded to 2 decimal digits
const addSale = () => {
  const min = 1;
  const max = 5;
  const sale = Math.random() * (max - min) + min;
  return Math.floor(sale * 100) / 100;
};

// for each product add a random value as per the addSale function
data.forEach((product) => {
  const sales = Array(observations).fill('').map(addSale);
  Object.assign(product, { sales });
});

// ACTUAL VIZ
const main = d3
  .select('main');

// tooltip showing additional information upon hovering the path elements making up the lines
const tooltip = main
  .append('div')
  .attr('id', 'tooltip')
  .style('opacity', 0)
  .style('visibility', 'hidden')
  .style('pointer-events', 'none')
  .style('position', 'absolute');

// SVG frame
const margin = {
  top: 30,
  right: 30,
  bottom: 30,
  left: 30,
};

const width = 600 - (margin.left + margin.right);
const height = 280 - (margin.top + margin.bottom);

const svg = main
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

// in a defs block include a clipPath
// this to clip the path elements when displaying the column chart (otherwise the stroke would overflow past the x axis)
const defs = svg
  .append('defs');

defs
  .append('clipPath')
  .attr('id', 'clip')
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', width)
  .attr('height', height);

const visualization = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.right})`);

// SCALES & AXES
// x: ordinal scale with one point per observation
const xScale = d3
  .scalePoint()
  .domain(d3.range(observations))
  .range([0, width]);

// y: linear scale
const yScale = d3
  .scaleLinear()
  // from 0 up to the integer value above the highest sale's figure
  .domain([0, Math.ceil(d3.max(data.reduce((acc, curr) => [...acc, ...curr.sales], []))) + 1])
  .range([height, 0]);

// labels used on the x-axis
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'];
// formatting function used for the tooltip
const format = d3.format('$.2f');

// include the x axis through a subdued line and the months labels in stead of the 0-1-2 default values
const xAxis = d3
  .axisBottom(xScale)
  .tickSize(0)
  .tickPadding(10)
  .tickFormat(d => months[d]);

const groupXAxis = visualization
  .append('g')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

groupXAxis
  .selectAll('text')
  .style('text-transform', 'uppercase')
  .attr('font-size', '14px')
  .attr('font-weight', '800')
  .attr('fill', '#777');

groupXAxis
  .select('path')
  .attr('stroke', '#777')
  .attr('stroke-width', '2');

// include the y axis exclusively through text elements, displaying 5 ticks expression the number of sales
const yAxis = d3
  .axisLeft(yScale)
  .ticks(5)
  .tickSize(0)
  .tickFormat(d => (d !== 0 ? `${d}m` : ''));

const groupYAxis = visualization
  .append('g')
  .call(yAxis);

groupYAxis
  .selectAll('text')
  .attr('font-size', '12px')
  .attr('font-weight', '800')
  .attr('fill', '#777');

groupYAxis
  .select('path')
  .attr('display', 'none');

// line function describing the sales figure
const line = d3
  .line()
  // horizontally considering the index of the observation
  .x((d, i) => xScale(i))
  // vertically considering the sale's value
  .y(d => yScale(d))
  // using a curve to avoid a jagged shape
  .curve(d3.curveNatural);

// in a wrapping group add one group for each observation
const productsGroup = visualization
  .append('g');

const products = productsGroup
  .selectAll('g.product')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'product');

// for each product add a path element using the line function on the sales figure
products
  .append('path')
  .attr('d', d => line(d.sales))
  .attr('stroke', d => d.color)
  .attr('stroke-width', '10px')
  .attr('stroke-linecap', 'round')
  .attr('fill', 'none')
  // on hover show the tooltip with the sales figure
  .on('mouseenter', function (d) {
    // ! if the checkbox is checked, this means the column chart highlights the data through larger lines
    // in this instance avoid resizing the lines on hover
    const { checked } = document.querySelector('input[type="checkbox"]');
    if (!checked) {
      d3
        .select(this)
        .transition()
        .duration(300)
        .attr('stroke-width', '15px');
    }
    // remove existing elements
    tooltip
      .selectAll('p')
      .remove();

    // add in the tooltip the product's name and the sale's figure
    tooltip
      .append('p')
      .text(`${d.product} icon set`);

    // ! when displaying the line chart, highlight the total
    // else highlight the latest observation
    const salesFigure = checked ? d.sales[d.sales.length - 1] : d.sales.reduce((acc, curr) => acc + curr, 0);

    tooltip
      .append('p')
      .text(format(salesFigure));

    tooltip
      .style('opacity', 1)
      .style('visibility', 'visible')
      .style('top', `${d3.event.pageY}px`)
      .style('left', `${d3.event.pageX}px`);
  })
  .on('mouseout', function () {
    // when removing the focus from the line, hide the tooltip
    // ! if the checkbox is not checked, reset the stroke of the lines to the default size
    const { checked } = document.querySelector('input[type="checkbox"]');
    if (!checked) {
      d3
        .select(this)
        .transition()
        .duration(300)
        .attr('stroke-width', '10px');
    }
    tooltip
      .style('opacity', 0)
      .style('visibility', 'hidden');
  });


// target the form
const form = document.querySelector('form');

// function called when registering the change event on the form
function handleChange(e) {
  // retrieve the state of the nested checkbox
  const { checked } = this.querySelector('input[type="checkbox"]');

  // target the svg icons in the checkbox and animate them
  // the idea is to slightly change the path of the lines while reducing the weight of the unchecked option through its opacity
  d3
    .select('svg #line-chart path')
    .transition()
    .duration(500)
    .delay(checked ? 50 : 120)
    .style('opacity', checked ? 0.2 : 1)
    .attr('d', checked ? 'M 12.5 60 l 25 0 20 -30 30 40' : 'M 12.5 70 l 27.5 -27.5 20 20 27.5 -27.5');

  // starting and ending values for the path elements describing the column chart
  const starting = [22, 40, 5];
  const ending = [5, 25, 40];

  d3
    .selectAll('svg #column-chart path')
    .transition()
    .duration(500)
    .delay(checked ? 120 : 50)
    .style('opacity', checked ? 1 : 0.2)
    .attr('d', (d, i) => (checked ? `M 0 75 v -${ending[i]}` : `M 0 75 v -${starting[i]}`));

  // toggle the class of .checked on the form so to move the :after pseudo element
  form.classList.toggle('checked');

  // change the appearance of the visualization according to the state of the checkbox
  // if checked, repurpose the lines to display the column chart
  if (checked) {
    // for the column chart, and to maintain the same number of points (to animate between d values)
    // create an additional line function
    const latestLine = d3
      .line()
      // with a fixed horizontal coordinate
      .x(0)
      // using the linear scale for the vertical coordinate
      .y(d => yScale(d))
      // using the curve function to maintain the syntax of the previous line function
      .curve(d3.curveNatural);

    // for each path element increase its stroke
    d3.selectAll('g.product path')
      .transition()
      .delay(50)
      .duration(500)
      .attr('stroke-width', '50px')
      // for the d attribute create a fake array of data leading up to the latest sale's figure
      .attr('d', (d) => {
        // ! the array is built in increments to maintain a consistent number of nodes
        const latestFigure = d.sales[d.sales.length - 1];
        const latestData = [];
        // + 0.1 to avoid rounding errors when accounting for the latest observation
        for (let i = 0; i <= latestFigure + 0.1; i += latestFigure / (observations - 1)) {
          latestData.push(i);
        }
        return latestLine(latestData);
      })
      // translate each line around the center by a measure larger than the stroke's width
      .attr('transform', (d, i, items) => `translate(${width / 2 + 100 * (i - ((items.length - 1) / 2))} 0)`);

    // after a brief delay include the clip path to cut the stroke past the x-axis
    productsGroup
      .transition()
      .delay(200)
      .attr('clip-path', 'url(#clip)');

    // on the x axis hide every month value except the last one, and translate the entire lot to center the visible label
    groupXAxis
      .selectAll('text')
      .transition()
      .duration(500)
      .style('opacity', (d, i, labels) => (i < labels.length - 1 ? 0 : 1))
      .attr('transform', `translate(-${width / 2} 0)`);
  } else {
    // if unchecked restore the path elements to describe the line chart
    d3.selectAll('g.product path')
      .transition()
      .duration(500)
      .attr('stroke-width', '10px')
      .attr('d', d => line(d.sales))
      .attr('transform', 'translate(0 0)');

    // remove the clip-path
    productsGroup
      .transition()
      .delay(200)
      .attr('clip-path', 'initial');

    // show the x axis's labels
    groupXAxis
      .selectAll('text')
      .transition()
      .duration(500)
      .style('opacity', 1)
      .attr('transform', 'translate(0 0)');
  }
}
form.addEventListener('change', handleChange);
