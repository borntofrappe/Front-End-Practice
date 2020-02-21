// data describing google trends for the seasons since 2016
// https://trends.google.com/trends/explore?date=2016-01-01%202020-02-21&q=spring,summer,winter
const data =  [
  {
    season: 'Spring',
    values: [33,32,32,33,36,35,38,43,52,57,56,59,47,42,41,39,35,33,31,30,29,28,26,26,24,25,24,24,24,25,24,24,24,25,26,25,25,25,25,25,25,26,25,26,25,26,24,26,26,26,26,27,32,33,34,34,35,35,43,46,52,54,54,65,49,48,46,42,38,36,33,31,30,29,27,26,26,25,26,26,26,26,26,25,25,25,28,26,26,26,25,25,26,26,27,26,28,27,24,26,27,26,26,26,32,34,34,34,35,36,38,43,50,52,53,64,48,45,44,41,38,36,34,31,30,28,27,26,25,25,26,25,26,26,26,25,25,25,26,25,25,26,25,26,26,26,26,26,25,26,25,26,26,26,27,26,30,33,33,33,33,36,37,42,47,52,54,69,49,45,45,40,39,34,33,31,30,28,28,27,26,26,25,26,26,25,25,25,25,26,26,26,25,27,26,25,25,26,26,25,26,26,26,24,26,25,26,25,30,33,33,33,32,35,37,42],
  },
  {
    season: 'Summer',
    values: [28,27,29,30,40,32,32,33,35,37,38,40,41,43,44,45,50,50,53,55,61,66,69,62,82,65,66,61,57,52,53,68,63,45,31,28,24,22,20,20,20,19,20,20,19,20,19,20,20,20,20,21,25,26,27,27,28,27,28,31,34,34,35,38,40,42,43,43,45,47,47,53,59,62,63,65,83,63,67,65,56,48,48,45,38,35,30,26,23,23,21,19,20,19,19,19,19,19,18,19,20,19,19,20,24,25,26,27,27,29,31,31,33,33,33,37,37,38,41,44,45,49,51,52,58,63,63,61,73,62,66,64,59,52,49,45,39,35,31,30,23,23,20,21,20,19,19,19,19,19,19,20,21,20,20,21,24,26,26,26,27,27,27,29,31,32,33,36,38,39,44,46,48,49,49,51,55,61,63,63,75,66,66,64,55,52,46,42,40,38,34,28,25,24,23,22,22,21,22,23,21,21,22,20,20,19,20,22,24,25,26,26,26,27,27,30],
  },
  {
    season: 'Winter',
    values: [48,41,45,36,34,27,26,23,20,19,18,18,17,18,17,17,18,18,18,16,16,17,16,16,20,21,18,17,17,17,20,22,23,22,21,23,23,26,28,30,34,34,37,41,44,49,51,58,60,63,67,50,54,47,37,33,30,28,25,23,20,19,22,17,16,16,15,15,15,16,15,15,14,17,15,15,17,15,16,17,19,17,18,19,19,20,21,24,27,29,26,30,31,33,38,45,53,53,51,57,63,68,67,61,63,49,42,35,34,66,84,69,40,25,20,21,17,16,16,16,15,15,15,14,15,15,15,15,15,15,15,16,16,16,17,18,18,20,23,23,23,25,29,31,32,37,39,42,45,55,55,59,57,58,64,51,51,45,43,40,39,30,29,27,23,22,20,18,16,16,17,16,15,17,16,15,15,15,15,15,17,15,15,16,16,16,17,18,20,20,22,23,25,27,30,33,36,35,36,44,50,60,51,50,60,55,64,100,53,45,38,35,29,27,26,25]
  }
];

// consider an array for the name of the seasons
// helpful to specify the mask(s)
const seasons = data.map(({season}) => season);
// consider an array for the values, helpful to find the minimum/maximum values
const dataValues = data.reduce((acc, curr) => [...acc, ...curr.values] , []);

const colorScheme = d3.schemeCategory10;

const margin = 50;
const width = 600;
const height = 350;

const container = d3
  .select('body')
  .append('article');

container
  .append('p')
  .html(`Google trends for the ${data.length} seasons: ${seasons.map((season, i) => `<strong style="color: ${colorScheme[i]}">${season}</strong>`).join(", ")}`)

container
  .append('p')
  .html('Sadly, autumn has a <a href="https://trends.google.com/trends/explore?date=2016-01-01%202020-02-21&q=spring,summer,autumn,winter">lackluster search history</a>.');

const svg = container
  .append('svg')
  .attr('viewBox', `0 0 ${width + margin * 2} ${height + margin * 2}`)

const visualization = svg
  .append('g')
  .attr('transform', `translate(${margin} ${margin})`);


const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(dataValues)])
  .range([height, 0])
  .nice();

// horizontally map the values according to their index and with an point scale
// not ordinal as that one would require a discrete range
const xScale = d3
  .scalePoint()
  .domain(d3.range(dataValues.length / data.length))
  .range([0, width]);


// line function
// ! be sure to parse the string describing the year to a date object
const line = d3
  .line()
  .x((d, i) => xScale(i))
  .y(d => yScale(d))
  .curve(d3.curveCatmullRom);

visualization
  .selectAll('path.line')
  .data(data)
  .enter()
  .append('path')
  .attr('class', 'line')
  .attr('d', d => line(d.values))
  .attr('stroke', (d, i) => colorScheme[i])
  .attr('stroke-width', '3')
  .attr('stroke-linecap', 'round')
  .attr('fill', 'none');

// area function
// the idea is to color the curve under the line, and use a mask to hide the color when another area function has a higher value
const area = d3
  .area()
  .x((d, i) => xScale(i))
  .y0(d => height)
  .y1(d => yScale(d))
  .curve(d3.curveCatmullRom);

const masks = svg
  .append('defs')
  .selectAll('mask')
  .data(data)
  .enter()
  .append('mask')
  .attr('id', ({season}) =>`mask-${season}`);

masks.append('rect').attr('width', width).attr('height', height).attr('fill', 'hsl(0, 0%, 100%)');

// for each season that is not the current one, add a mask in the form of the designated area
masks
  .selectAll('path')
  .data(({season}) => seasons.filter(d => d !== season))
  .enter()
  .append('path')
  .attr('d', d => area(data.find(({season}) => season === d).values))
  .attr('fill', 'hsl(0, 0%, 0%)')
  .attr('stroke', 'none');

visualization
  .selectAll('path.area')
  .data(data)
  .enter()
  .append('path')
  .attr('class', 'area')
  .attr('d', d => area(d.values))
  .attr('fill', (d, i) => colorScheme[i])
  .attr('stroke', 'none')
  .attr('opacity', '0.2')
  .attr('mask', ({season}) => `url(#mask-${season})`);


const yAxis = d3
  .axisLeft(yScale)
  .tickPadding(8)
  .tickFormat(d => `${d}%`);

const axes = visualization.append('g').attr('class', 'axes');
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

axes.selectAll('text').attr('font-size', '18');