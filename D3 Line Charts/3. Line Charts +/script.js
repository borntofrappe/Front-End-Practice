// data describing google trends for the seasons since 2018
// https://trends.google.com/trends/explore?date=2018-01-01%202020-02-21&q=spring,summer,autumn,winter
const data = [
  { date: '2018-01-07', spring: 34, summer: 25, autumn: 2, winter: 49 },
  { date: '2018-01-14', spring: 34, summer: 25, autumn: 2, winter: 42 },
  { date: '2018-01-21', spring: 33, summer: 27, autumn: 2, winter: 35 },
  { date: '2018-01-28', spring: 35, summer: 27, autumn: 2, winter: 35 },
  { date: '2018-02-04', spring: 36, summer: 30, autumn: 2, winter: 66 },
  { date: '2018-02-11', spring: 38, summer: 30, autumn: 2, winter: 85 },
  { date: '2018-02-18', spring: 43, summer: 31, autumn: 2, winter: 69 },
  { date: '2018-02-25', spring: 50, summer: 33, autumn: 3, winter: 40 },
  { date: '2018-03-04', spring: 52, summer: 33, autumn: 3, winter: 25 },
  { date: '2018-03-11', spring: 54, summer: 33, autumn: 3, winter: 21 },
  { date: '2018-03-18', spring: 65, summer: 37, autumn: 3, winter: 21 },
  { date: '2018-03-25', spring: 49, summer: 37, autumn: 2, winter: 17 },
  { date: '2018-04-01', spring: 46, summer: 38, autumn: 2, winter: 17 },
  { date: '2018-04-08', spring: 44, summer: 41, autumn: 2, winter: 16 },
  { date: '2018-04-15', spring: 42, summer: 44, autumn: 2, winter: 16 },
  { date: '2018-04-22', spring: 38, summer: 45, autumn: 3, winter: 14 },
  { date: '2018-04-29', spring: 35, summer: 48, autumn: 3, winter: 15 },
  { date: '2018-05-06', spring: 34, summer: 51, autumn: 2, winter: 15 },
  { date: '2018-05-13', spring: 32, summer: 52, autumn: 2, winter: 14 },
  { date: '2018-05-20', spring: 30, summer: 58, autumn: 3, winter: 15 },
  { date: '2018-05-27', spring: 28, summer: 64, autumn: 2, winter: 15 },
  { date: '2018-06-03', spring: 27, summer: 65, autumn: 2, winter: 15 },
  { date: '2018-06-10', spring: 26, summer: 62, autumn: 2, winter: 14 },
  { date: '2018-06-17', spring: 25, summer: 73, autumn: 2, winter: 15 },
  { date: '2018-06-24', spring: 26, summer: 62, autumn: 2, winter: 15 },
  { date: '2018-07-01', spring: 26, summer: 69, autumn: 2, winter: 16 },
  { date: '2018-07-08', spring: 25, summer: 65, autumn: 2, winter: 16 },
  { date: '2018-07-15', spring: 26, summer: 59, autumn: 3, winter: 16 },
  { date: '2018-07-22', spring: 26, summer: 53, autumn: 3, winter: 16 },
  { date: '2018-07-29', spring: 26, summer: 48, autumn: 3, winter: 17 },
  { date: '2018-08-05', spring: 25, summer: 45, autumn: 3, winter: 17 },
  { date: '2018-08-12', spring: 24, summer: 39, autumn: 4, winter: 18 },
  { date: '2018-08-19', spring: 25, summer: 35, autumn: 4, winter: 20 },
  { date: '2018-08-26', spring: 26, summer: 31, autumn: 5, winter: 23 },
  { date: '2018-09-02', spring: 25, summer: 30, autumn: 6, winter: 22 },
  { date: '2018-09-09', spring: 25, summer: 23, autumn: 6, winter: 24 },
  { date: '2018-09-16', spring: 27, summer: 23, autumn: 9, winter: 25 },
  { date: '2018-09-23', spring: 26, summer: 21, autumn: 10, winter: 30 },
  { date: '2018-09-30', spring: 26, summer: 21, autumn: 8, winter: 31 },
  { date: '2018-10-07', spring: 25, summer: 20, autumn: 8, winter: 33 },
  { date: '2018-10-14', spring: 26, summer: 19, autumn: 7, winter: 37 },
  { date: '2018-10-21', spring: 25, summer: 20, autumn: 6, winter: 40 },
  { date: '2018-10-28', spring: 26, summer: 19, autumn: 6, winter: 43 },
  { date: '2018-11-04', spring: 25, summer: 19, autumn: 6, winter: 45 },
  { date: '2018-11-11', spring: 26, summer: 19, autumn: 5, winter: 55 },
  { date: '2018-11-18', spring: 25, summer: 19, autumn: 4, winter: 56 },
  { date: '2018-11-25', spring: 26, summer: 20, autumn: 3, winter: 59 },
  { date: '2018-12-02', spring: 27, summer: 21, autumn: 3, winter: 58 },
  { date: '2018-12-09', spring: 27, summer: 20, autumn: 2, winter: 59 },
  { date: '2018-12-16', spring: 27, summer: 20, autumn: 2, winter: 64 },
  { date: '2018-12-23', spring: 26, summer: 21, autumn: 2, winter: 53 },
  { date: '2018-12-30', spring: 31, summer: 24, autumn: 2, winter: 52 },
  { date: '2019-01-06', spring: 34, summer: 26, autumn: 2, winter: 46 },
  { date: '2019-01-13', spring: 33, summer: 26, autumn: 2, winter: 43 },
  { date: '2019-01-20', spring: 33, summer: 26, autumn: 2, winter: 41 },
  { date: '2019-01-27', spring: 34, summer: 28, autumn: 3, winter: 40 },
  { date: '2019-02-03', spring: 37, summer: 27, autumn: 2, winter: 31 },
  { date: '2019-02-10', spring: 37, summer: 27, autumn: 3, winter: 28 },
  { date: '2019-02-17', spring: 42, summer: 30, autumn: 2, winter: 27 },
  { date: '2019-02-24', spring: 48, summer: 31, autumn: 3, winter: 23 },
  { date: '2019-03-03', spring: 53, summer: 32, autumn: 3, winter: 22 },
  { date: '2019-03-10', spring: 55, summer: 33, autumn: 3, winter: 19 },
  { date: '2019-03-17', spring: 70, summer: 36, autumn: 3, winter: 18 },
  { date: '2019-03-24', spring: 48, summer: 38, autumn: 3, winter: 16 },
  { date: '2019-03-31', spring: 46, summer: 40, autumn: 3, winter: 16 },
  { date: '2019-04-07', spring: 44, summer: 43, autumn: 3, winter: 17 },
  { date: '2019-04-14', spring: 40, summer: 47, autumn: 3, winter: 16 },
  { date: '2019-04-21', spring: 39, summer: 47, autumn: 3, winter: 15 },
  { date: '2019-04-28', spring: 35, summer: 49, autumn: 3, winter: 17 },
  { date: '2019-05-05', spring: 33, summer: 48, autumn: 3, winter: 16 },
  { date: '2019-05-12', spring: 31, summer: 51, autumn: 3, winter: 16 },
  { date: '2019-05-19', spring: 31, summer: 57, autumn: 2, winter: 16 },
  { date: '2019-05-26', spring: 28, summer: 61, autumn: 2, winter: 15 },
  { date: '2019-06-02', spring: 28, summer: 64, autumn: 2, winter: 15 },
  { date: '2019-06-09', spring: 27, summer: 64, autumn: 2, winter: 15 },
  { date: '2019-06-16', spring: 26, summer: 76, autumn: 3, winter: 17 },
  { date: '2019-06-23', spring: 26, summer: 67, autumn: 2, winter: 15 },
  { date: '2019-06-30', spring: 25, summer: 67, autumn: 2, winter: 15 },
  { date: '2019-07-07', spring: 27, summer: 65, autumn: 3, winter: 16 },
  { date: '2019-07-14', spring: 26, summer: 55, autumn: 3, winter: 16 },
  { date: '2019-07-21', spring: 26, summer: 53, autumn: 3, winter: 16 },
  { date: '2019-07-28', spring: 25, summer: 47, autumn: 3, winter: 17 },
  { date: '2019-08-04', spring: 25, summer: 43, autumn: 3, winter: 18 },
  { date: '2019-08-11', spring: 25, summer: 40, autumn: 4, winter: 19 },
  { date: '2019-08-18', spring: 26, summer: 38, autumn: 4, winter: 20 },
  { date: '2019-08-25', spring: 26, summer: 34, autumn: 5, winter: 22 },
  { date: '2019-09-01', spring: 26, summer: 28, autumn: 7, winter: 23 },
  { date: '2019-09-08', spring: 26, summer: 26, autumn: 9, winter: 25 },
  { date: '2019-09-15', spring: 27, summer: 24, autumn: 7, winter: 27 },
  { date: '2019-09-22', spring: 26, summer: 23, autumn: 9, winter: 31 },
  { date: '2019-09-29', spring: 25, summer: 22, autumn: 7, winter: 33 },
  { date: '2019-10-06', spring: 26, summer: 23, autumn: 7, winter: 36 },
  { date: '2019-10-13', spring: 26, summer: 21, autumn: 7, winter: 35 },
  { date: '2019-10-20', spring: 26, summer: 22, autumn: 6, winter: 37 },
  { date: '2019-10-27', spring: 25, summer: 23, autumn: 5, winter: 43 },
  { date: '2019-11-03', spring: 27, summer: 21, autumn: 5, winter: 50 },
  { date: '2019-11-10', spring: 26, summer: 22, autumn: 4, winter: 60 },
  { date: '2019-11-17', spring: 26, summer: 21, autumn: 4, winter: 51 },
  { date: '2019-11-24', spring: 24, summer: 20, autumn: 4, winter: 51 },
  { date: '2019-12-01', spring: 26, summer: 20, autumn: 3, winter: 61 },
  { date: '2019-12-08', spring: 25, summer: 19, autumn: 3, winter: 55 },
  { date: '2019-12-15', spring: 26, summer: 20, autumn: 2, winter: 64 },
  { date: '2019-12-22', spring: 26, summer: 22, autumn: 2, winter: 100 },
  { date: '2019-12-29', spring: 29, summer: 24, autumn: 2, winter: 52 },
];

const colorScheme = ['#2E9901', '#F1A854', '#C22602', '#0B7B90'];

/* data massaging: create four objects describing the values of the seasons separately
for instance
{
  season: 'spring',
  values: [
    { date, value },
    { date, value },
    ...
  ]
}
*/
const seasons = ['spring', 'summer', 'autumn', 'winter'];
const dataSeasons = seasons.map(season => {
  const values = data.map(d => ({
    date: d.date,
    value: d[season],
  }));
  return ({
    season,
    values
  });
});


const container = d3
  .select('body')
  .append('article');

container
  .append('p')
  .html(`Google trends for the ${seasons.length} seasons: ${seasons.map((season, i) => `<strong style="color: ${colorScheme[i]}">${season}</strong>`).join(", ")}.`)

container
  .append('p')
  .html('Sadly, autumn has a <a href="https://trends.google.com/trends/explore?date=2018-01-01%202020-02-21&q=spring,summer,autumn,winter">lackluster search history</a>.');


  const margin = 50;
  const width = 600;
  const height = 350;

  // scales
  // horizontally consider the dates
  // ! parse the date to a date object to work with a time scale
  const timeParse = d3.timeParse("%Y-%m-%d");
  const xScale = d3.scaleTime().domain(d3.extent(data, d => timeParse(d.date))).range([0, width]).nice();

  // vertically consider the 0-100 range desribing percentage values
  const yScale = d3.scaleLinear().domain([0, 100]).range([height, 0])


const svg = container
  .append('svg')
  .attr('viewBox', `0 0 ${width + margin * 2} ${height + margin * 2}`)

const visualization = svg
  .append('g')
  .attr('transform', `translate(${margin} ${margin})`);

// line function
// ! be sure to parse the string describing the year to a date object
const line = d3
  .line()
  .x(({date}) => xScale(timeParse(date)))
  .y(({value}) => yScale(value))
  .curve(d3.curveCatmullRom);

visualization
  .selectAll('path.line')
  .data(dataSeasons)
  .enter()
  .append('path')
  .attr('class', 'line')
  .attr('d', d => line(d.values))
  .attr('stroke', (d, i) => colorScheme[i])
  .attr('stroke-width', '3')
  .attr('stroke-linecap', 'round')
  .attr('fill', 'none');

// area function
// the idea is to color the curve under the line, and use a series of masks to show the color only when it matches the greatest value
const area = d3
  .area()
  .x(({date}) => xScale(timeParse(date)))
  .y0(() => yScale(0))
  .y1(({value}) => yScale(value))
  .curve(d3.curveCatmullRom);

// define path elements and the accompanying mask(s) in a defs block
const defs = svg.append('defs');

const areas = defs
  .selectAll('path')
  .data(dataSeasons)
  .enter()
  .append('path')
  .attr('id', ({season}) => `area-${season}`)
  .attr('d', d => area(d.values));

// add one mask for each season
const masks = defs
  .selectAll('mask')
  .data(seasons)
  .enter()
  .append('mask')
  .attr('id', d =>`mask-${d}`);

// in each mask show everything...
masks.append('rect').attr('width', width).attr('height', height).attr('fill', 'hsl(0, 0%, 100%)');

// ...but the portion covered by the area functions of the other seasons
masks
  .selectAll('use')
  .data(d => seasons.filter(season => season !== d))
  .enter()
  .append('use')
  .attr('href', d => `#area-${d}`)
  .attr('fill', 'hsl(0, 0%, 0%)')
  .attr('stroke', 'none');

// back in the visualization, add use elements describing the seasons
// and, using the matching mask
visualization
    .selectAll('use')
    .data(seasons)
    .enter()
    .append('use')
    .attr('href', d => `#area-${d}`)
    .attr('fill', (d, i) => colorScheme[i])
    .attr('stroke', 'none')
    .attr('opacity', '0.2')
    .attr('mask', d => `url(#mask-${d})`);

const timeFormat = d3.timeFormat("%b");
// axes
const xAxis = d3
  .axisBottom(xScale)
  .tickPadding(5)
  .tickFormat(d => timeFormat(d));

const yAxis = d3
  .axisLeft(yScale)
  .ticks(5)
  .tickPadding(8)
  .tickFormat(d => `${d}%`);

const axes = visualization.append('g').attr('class', 'axes');

axes
  .append('g')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

axes
  .append('g')
  .call(yAxis)
  // add grid lines for every other tick
  .selectAll('.tick:nth-of-type(odd)')
  .append('path')
  .attr('d', `M 0 0 h ${width}`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '1')
  .attr('stroke-linecap', 'round')
  .attr('stroke-dasharray', '3 6')
  .attr('fill', 'none')
  .attr('opacity', '0.25');

axes.selectAll('text').attr('font-size', '18');