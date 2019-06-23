// data for the line chart, detailing the number of people covered by the UN refugee agency across the years
const lineData = [2.12, 1.95, 1.85, 1.75, 1.72, 1.77, 1.74, 1.69, 1.67, 1.66, 1.79, 1.77, 1.68, 3.08, 3.57, 3.53, 2.36, 2.49, 2.56, 2.48, 5.34, 13.17, 3.02, 3.12, 3.62, 4.28, 4.52, 5.33, 6.85, 9.23, 9.95, 10.72, 10.72, 11.1, 12.26, 12.96, 13.37, 14.58, 14.94, 17.54, 19.04, 20.08, 21.39, 24.11, 20.36, 20.29, 19.02, 19.15, 19.79, 21.87, 19.9, 20.89, 17.01, 19.52, 21.05, 32.86, 31.68, 34.46, 36.47, 33.92, 35.44, 35.85, 42.87, 54.96, 63.91, 67.64, 71.44, 74.79];

// data for the row chart, describing the resettlements for the countries with more than 100.000 observations
const rowData = [
  {
    country: 'Colombia',
    value: 7816472,
  },
  {
    country: 'Syria',
    value: 6183920,
  },
  {
    country: 'DR Congo',
    value: 4516865,
  },
  {
    country: 'Somalia',
    value: 2648000,
  },
  {
    country: 'Ethiopia',
    value: 2615800,
  },
  {
    country: 'Nigeria',
    value: 2167924,
  },
  {
    country: 'Yemen',
    value: 2144718,
  },
  {
    country: 'Afghanistan',
    value: 2106893,
  },
  {
    country: 'South Sudan',
    value: 1878153,
  },
  {
    country: 'Sudan',
    value: 1864195,
  },
  {
    country: 'Irak',
    value: 1802832,
  },
  {
    country: 'Ukraine',
    value: 1500000,
  },
  {
    country: 'Ukraine',
    value: 668494,
  },
  {
    country: 'Central African Republic',
    value: 640969,
  },
  {
    country: 'Azerbaijan',
    value: 620422,
  },
  {
    country: 'Myanmar',
    value: 370305,
  },
  {
    country: 'Georgia',
    value: 282381,
  },
  {
    country: 'Serbia and Kosovo',
    value: 199584,
  },
  {
    country: 'Honduras',
    value: 174000,
  },
  {
    country: 'Libya',
    value: 170490,
  },
];

// data for the sankey diagram, describing the refugees recorded from country to country
const dataSankey = [
  {
    country: 'Bangladesh',
    origin: 'Myanmar',
    value: 906635,
  },
  {
    country: 'Germany',
    origin: 'Afghanistan',
    value: 126018,
  },
  {
    country: 'Germany',
    origin: 'Syria',
    value: 532065,
  },
  {
    country: 'Egypt',
    origin: 'Syria',
    value: 132871,
  },
  {
    country: 'Ethiopia',
    origin: 'Somalia',
    value: 257199,
  },
  {
    country: 'Ethiopia',
    origin: 'South Sudan',
    value: 422135,
  },
  {
    country: 'Iran',
    origin: 'Afghanistan',
    value: 951142,
  },
  {
    country: 'Iraq',
    origin: 'Syria',
    value: 252526,
  },
  {
    country: 'Jordan',
    origin: 'Syria',
    value: 676283,
  },
  {
    country: 'Kenya',
    origin: 'Somalia',
    value: 252498,
  },
  {
    country: 'Kenya',
    origin: 'South Sudan',
    value: 115202,
  },
  {
    country: 'Lebanon',
    origin: 'Syria',
    value: 944181,
  },
  {
    country: 'Malaysia',
    origin: 'Myanmar',
    value: 114227,
  },
  {
    country: 'Pakistan',
    origin: 'Afghanistan',
    value: 1403521,
  },
  {
    country: 'Sudan',
    origin: 'South Sudan',
    value: 852080,
  },
  {
    country: 'Sweden',
    origin: 'Syria',
    value: 109343,
  },
  {
    country: 'Turkey',
    origin: 'Syria',
    value: 3622366,
  },
  {
    country: 'Uganda',
    origin: 'South Sudan',
    value: 788848,
  },
  {
    country: 'Yemen',
    origin: 'Somalia',
    value: 248955,
  },
];

// object describing the theme colors for the visualizations
const colors = {
  line: 'hsl(359, 97%, 65%)',
  row: 'hsl(198, 81%, 51%)',
};
// URL referencing the website providing the data
const href = 'http://popstats.unhcr.org/en/overview';


// PROJECT ORGANIZATION: for each project add an article wrapping HTML elements and the SVG visualization

// tooltip shared by the visualizations
const tooltip = d3
  .select('body')
  .append('div')
  .attr('id', 'tooltip')
  .style('position', 'absolute')
  .style('opacity', 0)
  .style('visibility', 'hidden')
  .style('pointer-events', 'none');

// LINE CHART
const lineChart = d3
  .select('.viz')
  .append('article')
  .attr('class', 'viz__line-chart');

// html elements briefly describing the visualization and its core message
const lineChartOverview = lineChart
  .append('div');

lineChartOverview
  .append('h1')
  .text('A positive trend which doesn\'t slow down');

lineChartOverview
  .append('p')
  .text('This chart highlights the number of people covered by the UN Refugee Agency between 1951 and 2018.');


// svg describing the line chart
// include the svg following the margin convention
const lineChartMargin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

// describe the width and height to detail a square
const lineChartWidth = 500 - (lineChartMargin.left + lineChartMargin.right);
const lineChartHeight = 500 - (lineChartMargin.top + lineChartMargin.bottom);

// svg container
const lineChartSVG = lineChart
  .append('svg')
  .attr('viewBox', `0 0 ${lineChartWidth + (lineChartMargin.left + lineChartMargin.right)} ${lineChartHeight + (lineChartMargin.top + lineChartMargin.bottom)}`);

// group in which to draw the SVG elements
const lineChartGroup = lineChartSVG
  .append('g')
  .attr('transform', `translate(${lineChartMargin.left} ${lineChartMargin.top})`);

// SCALES
// band scale for the x axis, with one band for each data point
const lineChartXScale = d3
  .scaleBand()
  .domain(d3.range(lineData.length))
  .range([0, lineChartWidth]);

// linear scale for the y axis, from 0 up to the maximum value of the input data
const lineChartYScale = d3
  .scaleLinear()
  .domain([0, d3.max(lineData)])
  .range([lineChartHeight, 0]);

// AXES
// for the x axis show the number of years starting from 2018 minus the number of data points
// ! show a subset of the possible labels
const lineChartXAxis = d3
  .axisBottom(lineChartXScale)
  .tickFormat((d) => {
    const year = 2018 - lineData.length + d + 1;
    return year % 10 === 0 ? year : '';
  })
  .tickSize(0)
  .tickPadding(10);

const lineChartYAxis = d3
  .axisLeft(lineChartYScale)
  .ticks(6);

lineChartGroup
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${lineChartHeight})`)
  .call(lineChartXAxis);

  d3.select('.viz__line-chart .x-axis')
  .selectAll('text')
  .style('font-size', '0.75rem');

// for the y axis remove the segment in favor of text labels and horizontal lines spanning the width
lineChartGroup
  .append('g')
  .attr('class', 'axis y-axis')
  .call(lineChartYAxis);

d3
  .select('.viz__line-chart .y-axis')
  .selectAll('text')
  .remove();

d3.select('.viz__line-chart .y-axis')
  .select('path')
  .remove();

d3.select('.y-axis')
  .selectAll('line')
  .remove();

d3.select('.viz__line-chart .y-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('d', `M 0 0 h ${lineChartWidth}`)
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '0.5')
  .attr('stroke-dasharray', '2 1')
  .attr('opacity', 0.2);

// for every other tick include a text describing the value on the axis
d3.select('.viz__line-chart .y-axis')
  .selectAll('g.tick')
  .append('text')
  .attr('x', 5)
  .attr('text-anchor', 'start')
  .attr('y', -5)
  .attr('fill', 'currentColor')
  .style('font-size', '0.8rem')
  .text((d, i) => (i % 2 !== 0 ? `${d} Millions` : ''));

// line function
// leveraging the scales use the index of the data point and its actual value
const line = d3
  .line()
  .x((d, i) => lineChartXScale(i))
  .y(d => lineChartYScale(d));

// include a path element using the line function and the theme color
lineChartGroup
  .append('path')
  .attr('d', line(lineData))
  .attr('fill', 'none')
  .attr('stroke', colors.line)
  .attr('stroke-width', 2);

// area function
// using the same data include a path element describing the area below the previous line
const area = d3
  .area()
  .x((d, i) => lineChartXScale(i))
  .y1(d => lineChartYScale(d))
  .y0(d => lineChartYScale(0));

lineChartGroup
  .append('path')
  .attr('d', area(lineData))
  .attr('fill', colors.line)
  .attr('opacity', 0.18);

// for each data point include a group element
// the idea is to include not only circle elements, at the height described by the data point, but also rectangle elements spanning the entirety of the visualization's height
// the rectangles are made to be transparent and are purely used to show a tooltip regardless of the vertical coordinate
const lineChartGroups = lineChartGroup
  .selectAll('g.group')
  .data(lineData)
  .enter()
  .append('g')
  .attr('class', 'group')
  .attr('transform', (d, i) => `translate(${lineChartXScale(i)} 0)`)
  // on hover highlight the nested circle element and show the tooltip
  .on('mouseenter', function (d, i, {length}) {
    d3
      .select(this)
      .select('circle')
      .attr('opacity', 1)
      .attr('r', 5.75)
      .attr('stroke-width', 2.5);

    // show the tooltip detailing the year and value in two paragraph elments
    tooltip
      .append('p')
      .append('strong')
      .text(2018 - length + i + 1);

    // for the second paragraph include a circle colored with the same hue of the visualization
    tooltip
      .append('p')
      .style('display', 'flex')
      .style('align-items', 'center')
      .html(`
      <svg width="6" height="6" viewBox="0 0 10 10" style="margin: 0; margin-right: 0.35rem;">
        <circle cx="5" cy="5" r="5" fill="${colors.line}"></circle>
      </svg>
      Persons of concern: <strong>${d}</strong> Millions
      `);


    // position the tooltip
    // horizontally to center the div around the cursor coordinate
    // vertically above the connected circle element
    const { width: tooltipWidth } = document.querySelector('#tooltip').getBoundingClientRect();
    const { top: offset } = document.querySelector('.viz__line-chart svg').getBoundingClientRect();
    tooltip
      .style('opacity', 1)
      .style('visibility', 'visible')
      .style('left', `${d3.event.pageX - tooltipWidth / 2}px`)
      .style('top', `${offset}px`);

  })
  // when exiting the group reset the appearance of the circle and remove the tooltip
  // ! do not hide the circle for the first and last data point
  .on('mouseout', function (d, i, {length}) {
    d3
      .select(this)
      .select('circle')
      .attr('r', 3.5)
      .attr('stroke-width', 2)
      .attr('opacity', i !== 0 && i !== length - 1 ? 0 : 1);

    tooltip
      .style('opacity', 0)
      .style('visibility', 'hidden')
      .selectAll('p')
      .remove();
  });

// rectangles to show information on hover
lineChartGroups
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', lineChartXScale.bandwidth())
  .attr('height', lineChartHeight)
  .attr('opacity', 0);

// circle elements to highlight the data point
// ! by default show only the first and last data point, highlighting the other elements on hover
lineChartGroups
  .append('circle')
  .attr('cx', 0)
  .attr('cy', d => lineChartYScale(d))
  .attr('r', 3.5)
  .attr('stroke', colors.line)
  .attr('stroke-width', 2)
  .attr('fill', 'hsl(0, 100%, 100%)')
  .attr('opacity', (d, i, {length}) => (i === 0 || i === length - 1 ? 1 : 0));

// link forwarding toward the source URL
lineChart
  .append('p')
  .attr('class', 'link')
  .text('Source: ')
  .append('a')
  .attr('target', '_blank')
  .attr('href', href)
  .text('HCR');


// ROW CHART
const rowChart = d3
  .select('.viz')
  .append('article')
  .attr('class', 'viz__row-chart');

// html elements briefly describing the visualization and its core message
const rowChartOverview = rowChart
  .append('div');

rowChartOverview
  .append('h1')
  .text('The majority of people move within their country');

rowChartOverview
  .append('p')
  .text('This chart highlights the resettlements for the states covered by the UN Refugee Agency with more than 100,000 concerned people.');

// svg visualization
const rowChartMargin = {
  top: 30,
  right: 20,
  bottom: 20,
  left: 140, // more whitespace on the left side, to allocate the axis's labels
};

// describe a rectangle taller than wider
const rowChartWidth = 400 - (rowChartMargin.left + rowChartMargin.right);
const rowChartHeight = 500 - (rowChartMargin.top + rowChartMargin.bottom);

const rowChartSVG = rowChart
  .append('svg')
  .attr('viewBox', `0 0 ${rowChartWidth + (rowChartMargin.left + rowChartMargin.right)} ${rowChartHeight + (rowChartMargin.top + rowChartMargin.bottom)}`);

const rowChartGroup = rowChartSVG
  .append('g')
  .attr('transform', `translate(${rowChartMargin.left} ${rowChartMargin.top})`);


// scales and axes
// horizontally specify a linear scale from 0 up to an indefinite amount larger than the maximum found in the dataset
const rowChartXScale = d3
  .scaleLinear()
  .domain([0, d3.max(rowData, d => d.value) * 1.5])
  .range([0, rowChartWidth]);

// vertically detail a ordinal scale with one band for each country
const rowChartYScale = d3
  .scaleBand()
  .domain(rowData.map(({country}) => country))
  .range([0, rowChartHeight]); // display the countries from top to bottom

// for the x axis remove the segment and show a subset of labels
const rowChartXAxis = d3
  .axisTop(rowChartXScale) // include the axis at the top of the visualization
  .ticks(5)
  .tickPadding(10);

rowChartGroup
  .append('g')
  .attr('class', 'axis x-axis')
  .call(rowChartXAxis);

d3.select('.viz__row-chart .x-axis')
  .select('path')
  .remove();

d3.select('.viz__row-chart .x-axis')
  .selectAll('text')
  .attr('fill', 'currentColor')
  .attr('opacity', (d, i) => i % 2 !== 0 ? 1 : 0)
  .style('font-size', '0.6rem')
  .style('letter-spacing', '0');

// for every other tick add lines spanning the entire height of the visualization
d3.select('.viz__row-chart .x-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('d', `M 0 0 v ${rowChartHeight}`)
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '0.5')
  .attr('stroke-dasharray', '3 2')
  .attr('opacity', (d, i) => i % 2 !== 0 ? 0.2 : 0);

// ! add the y axis **after** the visualization, to have the segment on top of the rectangles

// format function for the number of millions of people described in the rows
const format = d3.format(',');

// viz elements
// include one group for each data point
const rowChartGroups = rowChartGroup
  .selectAll('g.group')
  .data(rowData)
  .enter()
  .append('g')
  .attr('class', 'group')
  .attr('transform', ({country}) => `translate(0 ${rowChartYScale(country)})`)
  // on hover show the tooltip always on the right of the visualization, but vertically matching the cursor's coordinate
  .on('mouseenter', function({country, value}) {
    // show the selected line by highlighting the previously hidden rectangle
    d3
      .select(this)
      .select('rect:nth-of-type(2)')
      .transition()
      .attr('opacity', 0.2);

    // in the tooltip detail the country and value in two paragraph elments
    tooltip
      .append('p')
      .append('strong')
      .text(country);

    // for the second paragraph include a circle colored with the same hue of the visualization
    tooltip
      .append('p')
      .style('display', 'flex')
      .style('align-items', 'center')
      .html(`
      <svg width="6" height="6" viewBox="0 0 10 10" style="margin: 0; margin-right: 0.35rem;">
        <circle cx="5" cy="5" r="5" fill="${colors.row}"></circle>
      </svg>
      Resettlements: <strong>${format(value)}</strong>
      `);

    const {left, width} = document.querySelector('.viz__row-chart svg').getBoundingClientRect();
    const {width: tooltipWidth, height: tooltipHeight} = document.querySelector('#tooltip').getBoundingClientRect();
    tooltip
      .style('opacity', 1)
      .style('visibility', 'visible')
      .style('left', `${left + width - tooltipWidth}px`)
      .style('top', `${d3.event.pageY - tooltipHeight / 2}px`);

  })
  // when exiting the group remove the tooltip and reset the opacity of the second rectangle
  .on('mouseout', function() {
    d3
      .select(this)
      .select('rect:nth-of-type(2)')
      .transition()
      .attr('opacity', 0);


    tooltip
      .style('opacity', 0)
      .style('visibility', 'hidden')
      .selectAll('p')
      .remove();
});

// rectangle proportionate to the data point's value
rowChartGroups
  .append('rect')
  .attr('x', 0)
  .attr('y', rowChartYScale.bandwidth() / 4)
  .attr('width', ({value}) => rowChartXScale(value))
  .attr('height', rowChartYScale.bandwidth() / 2)
  .attr('fill', colors.row);

// rectangle spanning the entirety of the visualization's width, for the tooltip
rowChartGroups
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', rowChartWidth)
  .attr('height', rowChartYScale.bandwidth())
  .attr('fill', colors.row)
  .attr('opacity', 0); // hide the rectangles from sight, and use them only for the hover state


// y axis, on top of the rectangles
const rowChartYAxis = d3
  .axisLeft(rowChartYScale);

rowChartGroup
  .append('g')
  .attr('class', 'axis y-axis')
  .call(rowChartYAxis);

// for the y axis reshape the path making up the segment to be a vertical line, without horizontal lines
d3.select('.viz__row-chart .y-axis')
  .select('path')
  .attr('d', `M 0 0 v ${rowChartHeight}`);

d3.select('.viz__row-chart .y-axis')
  .selectAll('text')
  .attr('font-size', `0.68rem`);

// remove the ticks from both axes
d3.selectAll('.viz__row-chart .axis')
  .selectAll('line')
  .remove();


// link forwarding toward the source URL
rowChart
  .append('p')
  .attr('class', 'link')
  .text('Source: ')
  .append('a')
  .attr('target', '_blank')
  .attr('href', href)
  .text('HCR');


// SANKEY DIAGRAM
const sankeyDiagram = d3
  .select('.viz')
  .append('article')
  .attr('class', 'viz__sankey-diagram');

// html elements briefly describing the visualization and its core message
const sankeyDiagramOverview = sankeyDiagram
  .append('div');

sankeyDiagramOverview
  .append('h1')
  .text('The flows outside of the countries reflect the conflicts of the years 2010s');

sankeyDiagramOverview
  .append('p')
  .text('This chart highlights the flow of people covered by the UN Refugee Agency for few countries.');

// svg visualization
const sankeyDiagramMargin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

// describe a rectangle taller than wider
const sankeyDiagramWidth = 400 - (sankeyDiagramMargin.left + sankeyDiagramMargin.right);
const sankeyDiagramHeight = 500 - (sankeyDiagramMargin.top + sankeyDiagramMargin.bottom);

const sankeyDiagramSVG = sankeyDiagram
  .append('svg')
  .attr('viewBox', `0 0 ${sankeyDiagramWidth + (sankeyDiagramMargin.left + sankeyDiagramMargin.right)} ${sankeyDiagramHeight + (sankeyDiagramMargin.top + sankeyDiagramMargin.bottom)}`);

const sankeyDiagramGroup = sankeyDiagramSVG
  .append('g')
  .attr('transform', `translate(${sankeyDiagramMargin.left} ${sankeyDiagramMargin.top})`);

// color scale to color the sankey chords differently
var sankeyColor = d3.scaleOrdinal(d3.schemeSet2);

/* the sankey function requires an object detailing the nodes and links in two properties
{
  nodes,
  links
}
*/
/* nodes describes one object for each country
{
  country,
}
*/
// retrieve the countries from the dataSankey array
const countries = dataSankey.map(({country}) => country);
const origins = dataSankey.map(({origin}) => origin);
const uniqueCountries = new Set([...countries, ...origins]);

const nodes = [...uniqueCountries].map(country => ({
  country,
}));

/* links describes one object with source, target and value properties
{
  source,
  target,
  value,
}
the structure is simular to the dataSankey array, just with different labels
*/
const links = dataSankey.map(({country: target, origin: source, value}) => ({
  source,
  target,
  value,
}));

// larger object for the sankey function
const data = {
  nodes,
  links,
};

// sankey function
const sankey = d3.sankey()
  .nodeWidth(4)
  .nodePadding(15)
  .nodeId(d => d.country)
  .size([sankeyDiagramWidth, sankeyDiagramHeight]);

// process the data to retrieve the values necessary to draw the nodes and connections
const {nodes: nds, links: lnks} = sankey(data);

// for each link add a path element connecting the source and target
// gengerator function
const sankeyLinks = d3
    .sankeyLinkHorizontal();

// path elements
sankeyDiagramGroup
  .selectAll('path.link')
  .data(lnks)
  .enter()
  .append('path')
  .attr('class', 'link')
  .attr('d', sankeyLinks)
  .attr('fill', 'none')
  .attr('stroke', (d, i) => sankeyColor(i))
  .attr('stroke-width', ({width}) => width)
  .attr('opacity', 0.5);


// for each node draw include a group element to group the rectangle and text labels
// position the group (and the subsequent elements) using the computed properties x0, x1, y0, y1
const sankeyDiagramNodes = sankeyDiagramGroup
  .selectAll('g.node')
  .data(nds)
  .enter()
  .append('g')
  .attr('class', 'node')
.attr('transform', ({x0, y0}) => `translate(${x0} ${y0})`);

sankeyDiagramNodes
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', ({x0, x1}) => x1 - x0)
  .attr('height', ({y0, y1}) => y1 - y0)
  .attr('fill', 'currentColor');

// position the labels inwards
sankeyDiagramNodes
  .append('text')
  .attr('x', ({depth}) => depth === 0 ? 10 : -10)
  .attr('y', ({y0, y1}) => (y1 - y0) / 2)
  .attr('text-anchor', ({depth}) => depth === 0 ? 'start' : 'end')
  .attr('dominant-baseline', 'middle')
  .attr('font-size', '0.7rem')
  .attr('font-weight', 'bold')
  .text(({country}) => country);