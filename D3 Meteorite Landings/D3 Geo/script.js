/* globals d3 topojson */
// include an svg wide as tall
const width = 800;
const height = 800;

const world = d3
  .select('.viz')
  .append('svg')
  .attr('viewBox', `0 0 ${width} ${height}`);

// function called as the geometries are retrieved from the world atlas
function mapCountries(countries) {
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


  // add a sphere for the world's outline
  world
    .append('path')
    .attr('class', 'sphere')
    .datum({ type: 'Sphere' })
    .attr('d', geoPath)
    .attr('fill', 'hsl(215, 40%, 40%)');

  // add a path element for each country
  world
    .selectAll('path.country')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('d', geoPath)
    .attr('fill', 'hsl(215, 40%, 50%)');

  // add lines for the longitude and latitude
  const geoGraticule = d3
    .geoGraticule();

  world
    .append('path')
    .attr('class', 'graticule')
    .attr('d', geoPath(geoGraticule()))
    .attr('stroke', 'hsl(215, 40%, 0%)')
    .attr('fill', 'none')
    .attr('opacity', '0.15');

}

// topojson describing the world atlas
const worldAtlas = 'https://unpkg.com/world-atlas@1.1.4/world/110m.json';
// fetch the data from the provided url and call the function mapping the geometries to path elements
d3
  .json(worldAtlas)
  .then((json) => {
    // convert the topojson to geojson
    const countries = topojson.feature(json, json.objects.countries);
    mapCountries(countries);
  });
