// made up dataset
const sales = {
  total: 234076,
  growth: 4076,
  months: {
    results: [0.6, 0.4, 0.2, 0.5, 0.4, 0.7, 0.8, 0.9, 0.6, 0.3, 0.7, 0.8],
    forecast: [0.3, 0.2, 0.3, 0.2, 0.4, 0.5, 0.6, 0.7, 0.2, 0.2, 0.6, 0.5],
  },
  items: [
    {
      name: 'Classic white demin skirt',
      inventory: 293,
      price: 134.99,
      sales: 133,
    },
    {
      name: 'Open cable-knit sweater',
      inventory: 478,
      price: 234.54,
      sales: -85,
    },
    {
      name: 'Bandana shirt with a lapel collar',
      inventory: 120,
      price: 154.99,
      sales: 218,
    },
  ],
};

// array of months
const months = [
  'january',
  'february',
  'march',
  'april',
  'may',
  'june',
  'july',
  'august',
  'september',
  'october',
  'november',
  'december',
];

// function formatting the price through the internationalization API
const formatPrice = (price, minimumFractionDigits = 2) => {
  // create the formatter function and return the value formatted with US currency
  // ! use the fraction unit optionally passed as second argument
  const options = {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits,
  };
  const numberFormat = new Intl.NumberFormat('en-US', options);
  return numberFormat.format(price);
};

// function returning a green/red icon pointing upwards/downwards
const arrow = isGrowing => `
<svg viewBox="0 0 100 100" width="20" height="20">
  <g
    fill="none"
    stroke-linecap="round"
    stroke-width="10">
    <path
      d="M 50 20 v 60"
      stroke="${isGrowing ? '#5dcb93' : '#ff5a53'}"
      >
    </path>
    ${isGrowing ? `
      <path
        d="M 35 40 l 15 -20 l 15 20"
        stroke="#5dcb93">
      </path>
    ` : `
      <path
        d="M 35 60 l 15 20 l 15 -20"
        stroke="#ff5a53">
      </path>
    `}
  </g>
</svg>
`;

// select the node in which to add the viz
const dashboard = d3
  .select('main section');

// overview information
const overview = dashboard
  .append('div')
  .attr('class', 'overview');

overview
  .append('h3')
  .text('Total Sales');

overview
  .append('h2')
  .text(formatPrice(sales.total));

overview
  .append('h4')
  .html(`
    ${arrow(sales.growth >= 0)}
    ${formatPrice(sales.growth)}
  `)
  .style('color', sales.growth > 0 ? '#5dcb93' : '#ff5a53');


// column chart
const margin = {
  top: 20,
  right: 20,
  bottom: 30,
  left: 20,
};
const width = 1000 - (margin.left + margin.right);
const height = 250 - (margin.top + margin.bottom);

const monthlyBreakdown = dashboard
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// horizontally: ordinal scale showing the months with each band
const xScale = d3
  .scaleBand()
  .domain(months.map((d, i) => i))
  .range([0, width]);

const xAxis = d3
  .axisBottom(xScale)
  .tickSize(0)
  .tickPadding(10)
  .tickFormat(d => months[d].substring(0, 3));

const groupXAxis = monthlyBreakdown
  .append('g')
  .call(xAxis)
  .attr('transform', `translate(0 ${height})`);

groupXAxis
  .selectAll('text')
  .attr('font-size', 15)
  .attr('font-weight', 'bold')
  .attr('fill', '#3d3d3d');

groupXAxis
  .select('path')
  .attr('stroke-width', 2)
  .attr('stroke', '#d3d3d3');

// vertically: adding lines spanning the width of the visualization
const yScale = d3
  .scaleLinear()
  .domain([0, 1])
  .range([height, 0]);

const yAxis = d3
  .axisLeft(yScale)
  .ticks(3)
  .tickSize(0);

const groupYAxis = monthlyBreakdown
  .append('g')
  .call(yAxis)
  .attr('transform', 'translate(0 0)');

groupYAxis
  .selectAll('text')
  .style('display', 'none');

groupYAxis
  .select('path')
  .style('display', 'none');

groupYAxis
  .selectAll('g.tick')
  .append('path')
  .attr('d', `M 0 0 h ${width}`)
  .attr('stroke', '#d3d3d3')
  .attr('stroke-width', '2')
  .attr('stroke-dasharray', '5 10');

// add one group for each month
const monthlyBreakdownGroups = monthlyBreakdown
  .selectAll('g.month')
  // creating an array describing both the results and the forecast
  .data(Array(months.length).fill('').map((item, i) => ({
    results: sales.months.results[i],
    forecast: sales.months.forecast[i],
  })))
  .enter()
  .append('g')
  .attr('class', 'month')
  // center the groups in the bands
  .attr('transform', (d, i) => `translate(${xScale(i) + xScale.bandwidth() / 2} 0)`);

// for each group add two rectangles, around the centered location
monthlyBreakdownGroups
  .append('rect')
  .attr('x', -xScale.bandwidth() / 10)
  .attr('y', d => yScale(d.results))
  .attr('width', xScale.bandwidth() / 10)
  .attr('height', d => height - yScale(d.results))
  .attr('fill', '#3d3d3d');

monthlyBreakdownGroups
  .append('rect')
  .attr('x', xScale.bandwidth() / 10)
  .attr('y', d => yScale(d.forecast))
  .attr('width', xScale.bandwidth() / 10)
  .attr('height', d => height - yScale(d.forecast))
  .attr('fill', '#aaaaaa');


// table for the items
const details = dashboard
  .append('table');

// add one row for each item
const detailsRows = details
  .selectAll('tr.item')
  .data(sales.items)
  .enter()
  .append('tr')
  .attr('class', 'item');

// add one cell for each element of the items array
detailsRows
  .selectAll('td')
  .data(d => Object.entries(d))
  .enter()
  .append('td')
  // include the property/value pairs according to the design
  // 1. just the value for the first cell
  // 1. property-value for the second
  // 1. property and formatted value for the third
  // 1. property and icon and formatted value for the fourth (without fractional units)
  .html(([property, value], i) => {
    if (i === 0) {
      return `<h4>${value}</h4>`;
    }
    return `
      <p>${property}</p>
      <strong>${i === 1 ? value : i === 2 ? formatPrice(value) : `${arrow(value > 0)} <span>${formatPrice(value, 0)}</span>`}</strong>
    `;
  });
