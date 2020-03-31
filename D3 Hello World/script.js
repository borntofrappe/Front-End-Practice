// copy pasted from google translate :p
const expressions = [
  'hello world',
  'hola mundo',
  'hallo welt',
  'bonjour le monde',
  'ciao mondo',
  'hallo wereld',
  'こんにちは世界',
  '你好，世界',
  'مرحبا بالعالم'
]
const randomExpression = () => expressions[Math.floor(Math.random() * expressions.length)];

// json file providing a geometry for each country, differentiated by numerical ID
const urlJSON = 'https://unpkg.com/world-atlas@1.1.4/world/110m.json';
// tsv file providing general information for the different countries of the world
const urlTSV = 'https://unpkg.com/world-atlas@1.1.4/world/110m.tsv';

// add an svg element in which to plot the world map
const width = 400;
const height = 400;

const world = d3
  .select('.world')
  .append('svg')
  .attr('viewBox', `0 0 ${width} ${height}`);

// add a path element describing a curve from the bottom left to the top right corner
world
  .append('path')
  .attr('id', 'path')
  .attr('d', `M ${-width / 2} ${height / 4} h ${width / 2} c ${width / 2} 0 ${width / 2} ${height / 2} ${width} ${height / 2} h ${width / 2}`)
  .attr('fill', 'none')
  .attr('stroke', 'none');

// function adding countries through the d3.geo module
// called once the data from the url(s) is retrieved
// accepting as argument an object describing the features of the different countries
function addCountries(countries, x, y, w, h, rx) {
  // projection used in the geoPath generator
  const projection = d3
    .geoOrthographic()
    // use the size of the svg for the boundaries of the projection
    .fitExtent([[x, y], [x + w, y + h]], countries)
  .rotate([rx, 0, 0]);

  // generator function to draw the countries
  const geoPath = d3
    .geoPath()
    .projection(projection);

  // generator function to draw the graticule
  const geoGraticule = d3
    .geoGraticule();

  // add the elements in a group element
  const group = world.append('g');
  // before the path elements describing the countries draw a path element for the graticule
  group
    .append('path')
    .attr('d', geoPath(geoGraticule()))
    .attr('stroke', 'hsl(220, 80%, 25%)')
    .attr('fill', 'hsl(220, 80%, 20%)');

  // for each feature of the countries object add a path element
  group
    .selectAll('path.country')
    .data(countries.features)
    .enter()
    .append('path')
    .attr('class', 'country')
  .attr('stroke', 'hsl(220, 90%, 30%)')
  .attr('stroke-width', '0.1')
  .attr('fill', 'hsl(215, 80%, 60%)')
    .attr('d', geoPath)
    // specify a title describing the name of the country
    .append('title')
    .text(({ name }) => name);
}

function drawText(text) {
  world
    .append('text')
    .append('textPath')
    .attr('font-size', '28')
    .text(text)
    .attr('text-anchor', 'middle')
    .attr('dominant-baseline', 'middle')
    .attr('fill', 'hsl(50, 90%, 90%)')
    .attr('href', '#path')
    .attr('startOffset', '0%')
    .transition()
    .duration(10000)
    .ease(d3.easeLinear)
    .attr('startOffset', '100%')
    .on('end', () => {
    world.select('text').remove();
    drawText(randomExpression());
  });
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
    // twice to draw the different faces
    addCountries(countries, 0, height / 2, width / 2, height / 2, 90);
      addCountries(countries, width / 2, 0, width / 2, height / 2, 270);

  // call the function to draw the text across the screen
  drawText(randomExpression());
  })
  .catch(err => console.error(err));
