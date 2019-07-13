/* globals d3 */

/* the idea is to include in the .viz container the following elements
- a donut describing the hours of the day, using noon/6pm/midnight/6am instead of the cardinal points
- the project of a world map, rotated to have the nations match the current time zone

the map should rotate, while the outermost donut should remain fixed
*/
const viz = d3
  .select('.viz');

// use the margin convention to have the visualization slightly padded inside the svg
// given the circular nature of the visualiation, width and height can be substituted by a single value
const margin = 10;
const size = 500 - (margin * 2);

const svg = viz
  .append('svg')
  .attr('viewBox', `0 0 ${size + (margin * 2)} ${size + (margin * 2)}`);

/* in a defs block, define linear gradients for the outermost donut
- one to color the donut
- one to color the text elements and the gaps between the donut (by including another donut behind the first one)
the idea is to have a hard-stop change in color and have the top half represent the day, the bottom half the night
*/
const defs = svg
  .append('defs');

const gradientDonut = defs
  .append('linearGradient')
  .attr('id', 'gradient-donut')
  .attr('gradientUnits', 'userSpaceOnUse')
  .attr('x1', 0.5)
  .attr('x2', 0.5)
  .attr('y1', 0)
  .attr('y2', 1);

gradientDonut
  .append('stop')
  .attr('stop-color', '#FCC548')
  .attr('offset', 0);

gradientDonut
  .append('stop')
  .attr('stop-color', '#3a3a3a')
  .attr('offset', 1);

const gradientText = defs
  .append('linearGradient')
  .attr('id', 'gradient-text')
  .attr('gradientUnits', 'userSpaceOnUse')
  .attr('x1', 0.5)
  .attr('x2', 0.5)
  .attr('y1', 0)
  .attr('y2', 1);

gradientText
  .append('stop')
  .attr('stop-color', '#3a3a3a')
  .attr('offset', 0);

gradientText
  .append('stop')
  .attr('stop-color', '#f8f5f1')
  .attr('offset', 1);


const group = svg
  .append('g')
  .attr('transform', `translate(${margin} ${margin})`);

/* for the donut around the map, the idea is to include a pie chart with the following characteristics
- considerable inner radius, to leave the space for the world map
- one arc for each hour of the day

considering the arcs
- noon, 6pm, midnight and 6am should occupy twice the space of the other segments
- noon should be at the top of the svg
*/
const cardinal = [
  {
    point: 0,
    label: 'Midnight',
  },
  {
    point: 6,
    label: '6',
  },
  {
    point: 12,
    label: 'Noon',
  },
  {
    point: 18,
    label: '6',
  },
];

// create an array with the 24 hours, giving each segment a value of 1, except for the chosen hours
const hours = d3.range(24).map(hour => ({
  hour,
  value: cardinal.map(({ point }) => point).includes(hour) ? 2 : 1,
}));


// arc function
// specify a large inner radius to have a donut chart with a small outline
const arc = d3
  .arc()
  .innerRadius(size / 2 - 25)
  .outerRadius(size / 2);

// pie function
// the value references the property of the input object
const pieBackground = d3
  .pie()
  .value(d => d.value)
  // avoid sorting, otherwise the segments with a larger value would be positioned close together
  .sort(null)
  // start the visualization from the bottom of the svg (0 representing midnight)
  // the default values for the start and end angle are 0 and Math.PI * 2, starting and ending at the top of the svg
  // add Math.PI to both, to have the donut start at the bottom
  // remove half the size of the larger segments to have them cenetered at the cardinal points
  .startAngle(Math.PI - Math.PI / 14) // (24 + 4) / 2
  .endAngle(Math.PI * 3 - Math.PI / 14);

const pieForeground = d3
  .pie()
  .value(d => d.value)
  .sort(null)
  .padAngle(0.008)
  .startAngle(Math.PI - Math.PI / 14) // (24 + 4) / 2
  .endAngle(Math.PI * 3 - Math.PI / 14);

// group centered in the svg
// the idea is to add the slices from the center of the svg
const center = group
  .append('g')
  .attr('transform', `translate(${size / 2} ${size / 2})`);

// in a first group add path elements for the donut used as background
center
  .append('g')
  .selectAll('path')
  .data(pieBackground(hours))
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', 'url(#gradient-text)');

// in another group add path elements for the donut colored half day and half night
center
  .append('g')
  .selectAll('path')
  .data(pieForeground(hours))
  .enter()
  .append('path')
  .attr('d', arc)
  .attr('fill', 'url(#gradient-donut)')
  .attr('data-hour', d => d.data.hour);

// include 4 text labels for noon, 6pm, midnight and 6am

center
  .append('g')
  .selectAll('text')
  .data(pieForeground(hours))
  .enter()
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', d => (d.data.hour === 0 || d.data.hour === 12 ? 'middle' : 'initial'))
  .attr('fill', 'url(#gradient-text)')
  .text((d) => {
    const cardinalIndex = cardinal.findIndex(({ point }) => point === d.data.hour);
    return cardinalIndex !== -1 ? cardinal[cardinalIndex].label : '';
  })
  .attr('x', (d) => {
    const [x] = arc.centroid(d);
    return x;
  })
  .attr('y', (d) => {
    const [, y] = arc.centroid(d);
    return y;
  })
  .attr('dy', d => (d.data.hour === 6 || d.data.hour === 18 ? -5 : 1));

center
  .append('g')
  .selectAll('text')
  .data(pieForeground(hours))
  .enter()
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', d => (d.data.hour === 0 || d.data.hour === 12 ? 'middle' : 'initial'))
  .attr('fill', 'url(#gradient-text)')
  .text((d) => {
    if (d.data.hour === 6) {
      return 'am';
    }
    if (d.data.hour === 18) {
      return 'pm';
    }
    return '';
  })
  .attr('x', (d) => {
    const [x] = arc.centroid(d);
    return x;
  })
  .attr('y', (d) => {
    const [, y] = arc.centroid(d);
    return y;
  })
  .attr('dy', 15);

// inside the donut add the world map
d3
  .json('https://unpkg.com/world-atlas@1.1.4/world/110m.json')
  .then((data) => {
    const date = new Date();
    const utcHours = date.getUTCHours(); // 0-23 range
    const countries = topojson.feature(data, data.objects.countries);
    const projection = d3.geoAzimuthalEquidistant().rotate([utcHours * 360 / 24 + 180, 90, 0]).scale(size / 7);
    const geoPath = d3.geoPath().projection(projection);
    group
      .append('g')
      .attr('transform', `translate(${-size / 2} -10)`)
      .selectAll('path')
      .data(countries.features)
      .enter()
      .append('path')
      .attr('d', geoPath)
      .attr('fill', (d, i) => `hsl(${20 * i}, 50%, 70%)`);
  });
