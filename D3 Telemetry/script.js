// data to be displayed in the visualization
const driver = {
  firstName: 'Max',
  lastName: 'Verstappen',
  threeLetterName: 'VER',
  team: 'Red Bull Racing',
  lastLap: '1.29.104',
  tyre: 'S',
  // the SVG leverages mostly the values specified in the telemetry object
  telemetry: {
    speed: 228, // value in the [0-360] range, measured in km/h
    rpm: 10228, // measured in rpm
    drs: false, // boolean, highlighting the DRS string if true
    throttle: 0.8, // value in the [0-1] range, highlighted in the green band of the inner circle
    brake: false, // boolean, highlighting the red band next to the throttle area
    gear: 6,
  },
};

const main = d3
  .select('main');

// add in the main element a container with HTML elements, and with general purpose information
const overview = main
  .append('div')
  .attr('class', 'overview');

overview
  .append('h2')
  .text(driver.lastName);

overview
  .append('span')
  .text(driver.lastLap);

overview
  .append('h3')
  .text(driver.team);

overview
  .append('strong')
  .text(driver.tyre);

// following the HTML-centric section, include an SVG to highlight the telemetry
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};
const width = 400 - (margin.left + margin.right);
const height = 400 - (margin.top + margin.bottom);

const details = main
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
  .append('g')
  .attr('transform', `translate(${margin.top} ${margin.left})`);

// group describing the text elements for the speed
// positioned in the center of the SVG with the unit of measure right below the number
const speed = details
  .append('g')
  .attr('transform', `translate(${width / 2} ${height / 21 * 10.5})`);

speed
  .append('text')
  .attr('x', 0)
  .attr('y', 0)
  .attr('text-anchor', 'middle')
  .attr('font-size', '1.8rem')
  .attr('fill', '#fff')
  .text(driver.telemetry.speed);

speed
  .append('text')
  .attr('x', 0)
  .attr('y', 18)
  .attr('text-anchor', 'middle')
  .attr('font-size', '0.7rem')
  .attr('fill', '#fff')
  .text('Km/h');

// group describing the text elements for the rotation per minutes
// similar to the speed section, but with smaller fonts and positioned right below it
const rpm = details
  .append('g')
  .attr('transform', `translate(${width / 2} ${height / 21 * 15})`);

rpm
  .append('text')
  .attr('x', 0)
  .attr('y', 0)
  .attr('text-anchor', 'middle')
  .attr('font-size', '1.4rem')
  .attr('fill', '#fff')
  .text(driver.telemetry.rpm);

rpm
  .append('text')
  .attr('x', 0)
  .attr('y', 18)
  .attr('text-anchor', 'middle')
  .attr('font-size', '0.7rem')
  .attr('fill', '#fff')
  .text('RPM');

// group describing the drs
// with a text element laid on top of a wrapping rectangle
const drs = details
  .append('g')
  .attr('transform', `translate(${width / 2} ${height / 21 * 18})`);

drs
  .append('rect')
  .attr('x', -22)
  .attr('y', -13)
  .attr('width', 44)
  .attr('height', 26)
  .attr('fill', driver.telemetry.drs ? '#059801' : '#34343488')
  .attr('rx', 5);
drs
  .append('text')
  .attr('x', 0)
  .attr('y', 5)
  .attr('text-anchor', 'middle')
  .attr('font-size', 12)
  .attr('fill', '#fff')
  .text('DRS');

// group describing the gear
// showing the gear in a separate tspan element to resize the important number
const gear = details
  .append('g')
  .attr('transform', `translate(${width / 2} ${height})`);

gear
  .append('text')
  .attr('x', 0)
  .attr('y', 0)
  .attr('text-anchor', 'middle')
  .attr('alignment-baseline', 'central')
  .attr('font-size', '0.7rem')
  .attr('fill', '#fff')
  .style('text-transform', 'uppercase')
  .text('Gear ')
  .append('tspan')
  .text(driver.telemetry.gear)
  .attr('dx', 5)
  .attr('font-size', '1.3rem')
  .attr('alignment-baseline', 'middle');


// MAIN VIZ showing the speed and throttle/brake through slices of a partial dounut chart

// both dounuts use the same pie function, describing a partial donut beginning and ending before/after the center of the visualization
// this to have the donuts wrap around the text-based elements
const pie = d3
  .pie()
  .sort(null)
  .startAngle(-0.8 * Math.PI)
  .endAngle(0.8 * Math.PI);

// each donut has its own arc function, to have one arc atop the other

const arcInner = d3
  .arc()
  .innerRadius(height / 3.5)
  .outerRadius(height / 3.5 + height / 10);

// first donut, encapsulated in a group element
const groupInner = details
  .append('g');

// add one group with a class of .slice for the following values
// this to have the slice for the throttle occupy twice the space of the slice for the brake
// with a 0.05 made-up slice to separate the throttle and brake sections
const valuesInner = [driver.telemetry.throttle * 2, 2 - driver.telemetry.throttle * 2, 0.05, 1];
// color the sections according to the purpose behind each value
const colorsInner = ['#059801', '#34343455', 'none', driver.telemetry.brake ? '#EF1A03' : '#34343455'];

const slicesInner = groupInner
  .selectAll('g.slice')
  .data(pie(valuesInner))
  .enter()
  .append('g')
  .attr('class', 'slice')
  // horizontally and vertically centered
  .attr('transform', `translate(${width / 2} ${height / 2})`);

// for each slice add a path element with the matching value
slicesInner
  .append('path')
  .attr('d', arcInner)
  // using the colors defined in the appropriate array
  .attr('fill', (d, i) => colorsInner[i]);


// to add text elements _around_ the donut charts include invisible path elements to use in the textPath element
// for the inner dounut include two arcs for the throttle and brake strings
const textInner = ['throttle', 'brake'];
const fillerInner = [2, 1];

const slicesFillerInner = groupInner
  .selectAll('g.filler')
  .data(pie(fillerInner))
  .enter()
  .append('g')
  .attr('class', 'filler')
  .attr('transform', `translate(${width / 2} ${height / 2})`);

slicesFillerInner
  .append('path')
  .attr('d', arcInner)
  .attr('fill', 'none')
  // id to identify the path in the textPath element
  .attr('id', (d, i) => textInner[i]);

// include the text within the made-up arcs
slicesFillerInner
  .append('text')
  .attr('x', 15)
  .attr('dy', height / 14)
  .attr('fill', '#ccc')
  .attr('font-size', '0.9rem')
  .style('text-transform', 'uppercase')
  .style('letter-spacing', '0.3rem')
  .append('textPath')
  .attr('startOffset', '12%')
  .attr('xlink:href', (d, i) => `#${textInner[i]}`)
  .text((d, i) => textInner[i]);

// second donut, with a similar methodoloy
// arc function, expressing a larger arc
const arcOuter = d3
  .arc()
  .innerRadius(height / 3.5 + height / 8)
  .outerRadius(height / 3.5 + height / 8 + height / 12);

// group element encapsulating the donut chart
const groupOuter = details
  .append('g');

// one slice for each of the following values
// this to have the first slice represent the speed relative to 360km/h, considered as upper threshold
const topSpeed = d3
  .min([driver.telemetry.speed, 360]);
const valuesOuter = [topSpeed, 360 - topSpeed];
const colorsOuter = ['#0059D9', '#34343455'];

const slicesOuter = groupOuter
  .selectAll('g.slice')
  .data(pie(valuesOuter))
  .enter()
  .append('g')
  .attr('class', 'slice')
  .attr('transform', `translate(${width / 2} ${height / 2})`);

slicesOuter
  .append('path')
  .attr('d', arcOuter)
  .attr('fill', (d, i) => colorsOuter[i]);

// for the outer dounut, include as many arcs as there are speed values to be highlighted
const textOuter = [0, 60, 120, 180, 240, 300, 360];
// evenly distributed around the dounut chart
const fillerOuter = Array(textOuter.length).fill(1);

const slicesFillerOuter = groupOuter
  .selectAll('g.filler')
  .data(pie(fillerOuter))
  .enter()
  .append('g')
  .attr('class', 'filler')
  .attr('transform', `translate(${width / 2} ${height / 2})`);

slicesFillerOuter
  .append('path')
  .attr('d', arcOuter)
  .attr('fill', 'none')
  // id to identify the path in the textPath element
  .attr('id', (d, i) => `speed-${textOuter[i]}`);


slicesFillerOuter
  .append('text')
  .attr('x', 15)
  .attr('dy', height / 18)
  .attr('fill', '#ccc')
  .attr('font-size', '0.7rem')
  .style('letter-spacing', '0.1rem')
  .append('textPath')
  .attr('startOffset', '12%')
  .attr('xlink:href', (d, i) => `#speed-${textOuter[i]}`)
  .text((d, i) => textOuter[i]);
