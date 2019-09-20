/* globals d3 topojson */
// include an svg wide as tall
const width = 800;
const height = 800;

const world = d3
  .select('.viz')
  .append('svg')
  .attr('viewBox', `0 0 ${width} ${height}`);

// function called as the geometries are retrieved from the world atlas
function mapData(countries, landings) {
  // set up a projection using the size of the svg as a reference
  const projection = d3
    // for the other projections browse the docs
    // https://github.com/d3/d3-geo/blob/master/README.md#geoOrthographic
    .geoOrthographic()
    .fitSize([width, height], countries);

  // create a generator function to use the projection in order to map the geometries to the svg
  const geoPath = d3
    .geoPath()
    .projection(projection);

  // include the world elements in a group
  const group = world.append('g');


  // sphere for the world's outline
  group
    .append('path')
    .attr('class', 'sphere')
    .datum({ type: 'Sphere' })
    .attr('d', geoPath)
    .attr('fill', 'hsl(215, 40%, 40%)');

  // countries
  group
    .selectAll('path.country')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('d', geoPath)
    .attr('fill', 'hsl(215, 40%, 50%)');


  // graticule
  const geoGraticule = d3
    .geoGraticule();

  group
    .append('path')
    .attr('class', 'graticule')
    .attr('d', geoPath(geoGraticule()))
    .attr('stroke', 'hsl(215, 40%, 0%)')
    .attr('fill', 'none')
    .attr('opacity', 0.15);

  // landing sites
  group
    .selectAll('path.landing')
    .data(landings.features)
    .enter()
    .append('path')
    .attr('class', 'landing')
    .attr('d', geoPath)
    .attr('fill', 'hsl(40, 40%, 60%)');

  // allow to rotate the projection following mouse events
  const rotation = {
    x: 0,
    y: 0,
  };
  let isMouseDown = false;

  d3.select('body')
    .on('mouseup', () => { isMouseDown = false; })
    .on('mouseleave', () => { isMouseDown = false; });

  world
    .on('mousedown', () => { isMouseDown = true; })
    .on('mouseup', () => { isMouseDown = false; })
    .on('mousemove', () => {
      if (isMouseDown) {
        // update the rotation using the horizontal and vertical movement
        // ! greater y values should be reflected in a rotation in the opposite direction
        const { movementX, movementY } = d3.event;
        rotation.x += movementX;
        rotation.y -= movementY;

        // update the projection and the d attribute of all elements which rely on the projection
        projection
          .rotate([rotation.x, rotation.y]);

        d3.select('path.sphere')
          .attr('d', geoPath);

        d3.selectAll('path.country')
          .attr('d', geoPath);

        d3.selectAll('path.graticule')
          .attr('d', geoPath(geoGraticule()));

        d3.selectAll('path.landing')
          .attr('d', geoPath);
      }
    });
}

// topojson describing the world atlas
const worldAtlas = 'https://unpkg.com/world-atlas@1.1.4/world/110m.json';
const meteoriteLandings = 'https://raw.githubusercontent.com/freeCodeCamp/ProjectReferenceData/master/meteorite-strike-data.json';

// fetch the data from the provided url(s) and call the function mapping the geometries to path elements
Promise
  .all([d3.json(worldAtlas), d3.json(meteoriteLandings)])
  .then(([atlas, landings]) => {
    // convert the topojson to geojson
    const countries = topojson.feature(atlas, atlas.objects.countries);
    mapData(countries, landings);
  });
