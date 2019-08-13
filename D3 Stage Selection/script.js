// json file providing a geometry for each country, differentiated by numerical ID
const urlJSON = 'https://unpkg.com/world-atlas@1.1.4/world/50m.json';
// tsv file providing general information for the different countries of the world
const urlTSV = 'https://unpkg.com/world-atlas@1.1.4/world/50m.tsv';

// array describing the countries which can be selected
// picked from the Formula 1 calendar in 2019
const stages = [
  'australia',
  'qatar',
  'china',
  'azerbaijan',
  'spain',
  'monaco',
  'canada',
  'france',
  'austria',
  'united kingdom',
  'germany',
  'hungary',
  'belgium',
  'italy',
  'singapore',
  'russia',
  'japan',
  'mexico',
  'united states',
  'brazil',
  'united arab emirates',
];

// variable desribing the current selection
let selection = stages[0];

// add an svg element in which to plot the world map
const width = 500;
const height = 250;

const world = d3
  .select('.world')
  .append('svg')
  .attr('viewBox', `0 0 ${width} ${height}`);

// function called when the buttons are clicked
function updateSelection(direction) {
  // find the index of the current selection
  const index = stages.findIndex(stage => stage === selection);
  // according to the direction update the selection
  if(direction === 'prev') {
    selection = (index === 0) ? stages[stages.length - 1] : stages[index - 1];
  } else {
    selection = (index === stages.length - 1) ? stages[0] : stages[index + 1];
  }

  // according to the selection style the matching path and update the text
  d3
    .selectAll('path.stage')
    .attr('id', ({ name }) => name.toLowerCase() === selection ? 'selection' : null);

  d3
    .select('text')
    .text(selection);
}

// function adding countries through the d3.geo module
// called once the data from the url(s) is retrieved
// accepting as argument an object describing the features of the different countries
function addCountries(countries) {
  // projection used in the geoPath generator
  const projection = d3
    .geoEquirectangular()
    // use the size of the svg for the boundaries of the projection
    .fitSize([width, height], countries)
    // scale and translate the projection to focus on the world map sans antartica
    .scale([80])
    .translate([width / 2, height / 2 + 40]);

  // generator function to draw the countries
  const geoPath = d3
    .geoPath()
    .projection(projection);

  // add a text element in the very top of the svg
  // ! the translation included in the projection allows to include the element without risk of overlap
  world
    .append('text')
    .attr('x', width / 3)
    .attr('y', 30)
    .attr('text-anchor', 'middle')
  // immediately describe the first stage
    .text(selection);

  // for each feature of the countries object add a path element
  world
    .selectAll('path.country')
    .data(countries.features)
    .enter()
    .append('path')
    // add a class of stage for the countries listed in the stages array
    .attr('class', ({ name }) => (stages.includes(name.toLowerCase()) ? 'country stage' : 'country'))
    // add an identifier to the selection
    .attr('id', ({ name }) => ((selection === name.toLowerCase()) ? 'selection' : null))
    .attr('d', geoPath);

  // select the path elements with a class of .stage and listen for mouseevent on the specific elements
  d3
    .selectAll('path.stage')
    // on hover highlight the element with an identifier and include the name in the prescribed text element
    // ! update the selection variable
    .on('mouseenter', function ({ name }) {
      d3
        .selectAll('path.stage')
        .attr('id', '');
      d3
        .select(this)
        .attr('id', 'selection');

      // include in the text element the name of the selected country
      d3
        .select('text')
        .text(name);

      selection = name.toLowerCase();
    });

  // show the .controls container as the countries are successfully drawn
  d3
    .select('.controls')
    .style('visibility', 'visible')
    .style('opacity', 1);

  // attach event listeners on the buttons to change the selection
  d3
    .select('.controls .prev')
    .on('click', () => updateSelection('prev'));
    d3
    .select('.controls .next')
    .on('click', () => updateSelection('next'));

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
      // fix a weird specific issue with australia
      // the iso_n3 value for the path seems to describe an australian island instead
      if (name.toLowerCase() === 'ashmore and cartier is.') {
        feature.name = 'australia';
      } else {
        feature.name = name;
      }
    });

    // call the function to draw path elements through the geo module
    addCountries(countries);
  })
  .catch(err => console.error(err));
