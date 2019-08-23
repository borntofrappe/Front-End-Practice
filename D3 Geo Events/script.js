// array describing events according to their name and location
// ! for each location, describe an array of events
const dataEvents = [
  {
    location: 'Salt Lake City',
    // for each event, describe an array depicting the nature of the event itself
    // ! the nature matches the id of one of the symbols defined in the markup
    events: [
      {
        name: 'React Rally',
        event: ['talk'],
      },
      {
        name: 'Utah JS',
        event: ['talk'],
      },
    ],
  },
  {
    location: 'Las Vegas',
    events: [
      {
        name: 'Las Vegas',
        event: ['workshop'],
      },
    ],
  },
  {
    location: 'Raleigh',
    events: [
      {
        name: 'All Things Open',
        event: ['workshop'],
      },
    ],
  },
  {
    location: 'Atlanta',
    events: [
      {
        name: 'Connect. Tech',
        event: [
          'talk',
          'workshop',
        ],
      },
    ],
  },
];

// array describing the coordinates for the cities included in the events array
// ! the coordinates refer to the position of the cities in the [width, height] container and not the actual longitude/latitude value
// a more accurate visualization would project the cities in the actual map
const dataLocations = [
  {
    name: 'Salt Lake City',
    county: 'Salt Lake',
    coordinates: [130, 95],
  },
  {
    name: 'Raleigh',
    county: 'Wake',
    coordinates: [375, 150],
  },
  {
    name: 'Atlanta',
    county: 'Fulton',
    coordinates: [350, 185],
  },
  {
    name: 'Las Vegas',
    county: 'Clark',
    coordinates: [100, 130],
  },
];

// in the .viz container add an svg element
// include the visualization in the nested group
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};

const width = 500 - (margin.left + margin.right);
const height = 300 - (margin.top + margin.bottom);

const svg = d3
  .select('.viz')
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

const group = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// function plotting the visualization following a successful fetch request
// the argument `coordinates` refers to a topojson object describing the US
function drawMap(coordinates) {
  // build the geojson coordinates from the topojson values
  // ! consider the outline of the country only
  const nation = topojson.feature(coordinates, coordinates.objects.nation);

  // since the topojson describes a map which is already projected, all is required is scaling/translating the geometries relative to the svg container
  // geoIdentity() allows to specify the fitSize method to center and scale the coordinates
  const projection = d3
    .geoIdentity()
    .fitSize([width, height], nation);

  // path generator
  const geoPath = d3
    .geoPath()
    .projection(projection);

  // ! before the us map include a series of path elements to emulate depth
  const depth = d3.min([margin.left, margin.bottom]);
  for (let i = 0; i < depth; i += 1) {
    group
      .append('path')
      .attr('d', geoPath(nation))
      .attr('fill', '#ccc')
      // ! make the path elements increasingly transparent to give the impression of a blur
      .attr('opacity', (depth - i) / depth)
      .attr('transform', `translate(${-i} ${i})`);
  }

  // plot the US
  group
    .append('path')
    .attr('d', geoPath(nation))
    .attr('fill', '#fff');

  // add a group element for each event
  // ! translate the group at the coordinates described by the location and its state
  const locations = group
    .selectAll('g.location')
    .data(dataEvents)
    .enter()
    .append('g')
    .attr('class', 'location')
    // location retrieved from the dataLocations array and the matching location
    .attr('transform', ({ location }) => {
      const [x, y] = dataLocations.find(({ name }) => name === location).coordinates;
      return `translate(${x} ${y})`;
    });

  // for each group add the pin icon
  // ! move the svg to have the icon visually point toward the precise location
  const pinSize = 16;
  locations
    .append('svg')
    .attr('viewBox', '0 0 105 105')
    .attr('width', pinSize)
    .attr('height', pinSize)
    .attr('x', -pinSize / 2)
    .attr('y', -pinSize)
    .style('color', '#12AEC4') // color inherited through the currentColor attribute
    .append('use')
    .attr('href', '#pin');

  // for each group add an additional g element gathering the individual events
  const iconSize = 14;
  const events = locations
    .selectAll('g.event')
    .data(d => d.events)
    .enter()
    .append('g')
    .attr('class', 'event')
    // translate the groups to separate them vertically
    .attr('transform', (d, i) => `translate(${iconSize * 0.85} ${-iconSize / 2 + iconSize * i})`);

  // for each event consider the array describing the nature of the event (talk, workshop) and add an additional group gathering the icons
  events
    .selectAll('svg.icon')
    .data(d => d.event)
    .enter()
    .append('svg')
    .attr('class', 'icon')
    .attr('viewBox', '0 0 105 105')
    .attr('width', iconSize)
    .attr('height', iconSize)
    .attr('x', (d, i) => i * iconSize * 1.2)
    .attr('y', -pinSize / 2)
    .style('color', '#064c61')
    .append('use')
    // leverage the event's string to differentiate the icon
    .attr('href', d => `#${d}`);

  // following the icon(s) describing the event(s) include the text depicting the location
  events
    .append('text')
    .attr('x', d => iconSize * 1.25 * d.event.length)
    .attr('y', 0)
    .attr('dominant-baseline', 'middle')
    .attr('fill', '#12AEC4')
    .text(d => d.name);
}

// the coordinates to draw the us are retrieved from a topojson file created by Mike Bostock's
// json described in the **us-atlas** package
// https://github.com/topojson/us-atlas
fetch('https://unpkg.com/us-atlas@2.1.0/us/states-10m.json')
  .then(response => response.json())
  .then(topojson => drawMap(topojson))
  .catch(err => console.error(`Something went wrong: ${err}`));
