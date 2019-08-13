// json file providing a geometry for each country, differentiated by numerical ID
const urlJSON = 'https://unpkg.com/world-atlas@1.1.4/world/110m.json';
// tsv file providing general information for the different countries of the world
const urlTSV = 'https://unpkg.com/world-atlas@1.1.4/world/110m.tsv';

// add an svg element in which to plot the world map
const width = 500;
const height = 250;

const world = d3
  .select('.world')
  .append('svg')
  .attr('viewBox', `0 0 ${width} ${height}`);

// function adding countries through the d3.geo module
// called once the data from the url(s) is retrieved
// accepting as argument an object describing the features of the different countries
function addCountries(countries) {
  // projection used in the geoPath generator
  const projection = d3
    .geoEquirectangular()
    // use the size of the svg for the boundaries of the projection
    .fitSize([width, height], countries);

  // generator function to draw the countries
  const geoPath = d3
    .geoPath()
    .projection(projection);

  // generator function to draw the graticule
  const geoGraticule = d3
    .geoGraticule();

  // before the path elements describing the countries draw a path element for the graticule
  world
    .append('path')
    .attr('d', geoPath(geoGraticule()))
    .attr('stroke', 'currentColor')
    .attr('fill', 'none')
    .attr('opacity', 0.1);

  // for each feature of the countries object add a path element
  world
    .selectAll('path.country')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('class', 'country')
    .attr('d', geoPath)
    // specify a title describing the name of the country
    .append('title')
    .text(({ name }) => name);
}

// retrieve the data from the json and tsv references
Promise
  .all([d3.json(urlJSON), d3.tsv(urlTSV)])
  .then(([json, tsv]) => {
    // convert topojson to json features
    const countries = topojson.feature(json, json.objects.countries);

    // add the name of the countries to the matching feature
    countries.features.forEach((feature) => {
      const { name } = tsv.find(({ iso_n3: id }) => id === feature.id);
      feature.name = name;
    });

    // call the function to draw path elements through the geo module
    addCountries(countries);
  })
  .catch(err => console.error(err));
