/* globals d3 */
// array describing the name and general information of fictional planets
const data = [
  {
    planet: 'Abydos',
    source: 'Stargate and later in the TV Series Stargate SG-1',
    year: '1994',
    medium: 'Film',
  },
  {
    planet: 'Altair IV',
    source: 'Forbidden Planet',
    year: '1956',
    medium: 'Film',
  },
  {
    planet: 'Anarres',
    source: 'The Dispossessed by Ursula K. Le Guin',
    year: '1974',
    medium: 'Books',
  },
  {
    planet: 'Arrakis (aka Dune)',
    source: 'Dune by Frank Herbert, and subsequent works in the Dune universe',
    year: '1965',
    medium: 'Books',
  },
  {
    planet: 'Athas',
    source: 'Dark Sun setting for Dungeons & Dragons',
    year: '1991',
    medium: 'Game',
  },
  {
    planet: 'Bara Magna',
    source: 'Bionicle',
    year: '2009',
    medium: 'Game',
  },
  {
    planet: 'Beachworld',
    source: '"Beachworld" by Stephen King',
    year: '1985',
    medium: 'Books',
  },
  {
    planet: 'Byss',
    source: 'Star Wars: Dark Empire',
    year: '1991 – 1992',
    medium: 'Books',
  },
  {
    planet: 'Canopus III',
    source: 'Star Trek: The Animated Series episode "The Eye of the Beholder"',
    year: '1974',
    medium: 'Animated',
  },
  {
    planet: 'Cardassia IV',
    source: 'Star Trek: Deep Space Nine episode "The Homecoming"',
    year: '1993',
    medium: 'TV Series',
  },
  {
    planet: 'Ceti Alpha V',
    source: 'Star Trek: The Original Series episode "Space Seed", Star Trek II: The Wrath of Khan',
    year: '1967 - 1982',
    medium: 'TV Series',
  },
  {
    planet: 'Dorvan V',
    source: "Star Trek: The Next Generation episode \"Journey's End\"",
    year: '1994',
    medium: 'TV Series',
  },
  {
    planet: 'Dozaria',
    source: 'Star Trek: Deep Space Nine episode "Indiscretion"',
    year: '1995',
    medium: 'TV Series',
  },
  {
    planet: 'Fire',
    source: 'Lexx season 3',
    year: '1999',
    medium: 'TV Series',
  },
  {
    planet: 'Fyrine IV',
    source: 'Enemy Mine',
    year: '1985',
    medium: 'Film',
  },
  {
    planet: 'Gamma X',
    source: 'Les Maîtres du temps',
    year: '1982',
    medium: 'Animated',
  },
  {
    planet: 'Geonosis',
    source: 'Star Wars: Episode II – Attack of the Clones',
    year: '2002',
    medium: 'Film',
  },
  {
    planet: 'Gunsmoke',
    source: 'Trigun',
    year: '1995',
    medium: 'Animated',
  },
  {
    planet: 'Hellywood',
    source: 'Now and Then, Here and There',
    year: '1999 - 2000',
    medium: 'Animated',
  },
  {
    planet: 'Home',
    source: 'Worldwar',
    year: '1994 - 2004',
    medium: 'Books',
  },
  {
    planet: 'Imecka',
    source: 'Dragonball GT',
    year: '1996',
    medium: 'Animated',
  },
  {
    planet: 'Jakku',
    source: 'Star Wars: The Force Awakens',
    year: '2015',
    medium: 'Film',
  },
  {
    planet: 'Katina',
    source: 'Star Fox 64 and Star Fox Assault',
    year: '1997',
    medium: 'Game',
  },
  {
    planet: 'Kerona',
    source: 'Space Quest: The Sarien Encounter',
    year: '1986',
    medium: 'Game',
  },
  {
    planet: 'Kharak',
    source: 'Homeworld',
    year: '1999',
    medium: 'Game',
  },
  {
    planet: 'Khoros',
    source: 'Ben 10',
    year: '2005 – 2008',
    medium: 'Animated',
  },
  {
    planet: 'Klendathu',
    source: 'Starship Troopers by Robert A. Heinlein, and subsequent works',
    year: '1959',
    medium: 'Books',
  },
  {
    planet: 'Kolarus III',
    source: 'Star Trek Nemesis',
    year: '2002',
    medium: 'Film',
  },
  {
    planet: 'Korhal',
    source: 'StarCraft and subsequent games in the StarCraft franchise',
    year: '1998',
    medium: 'Game',
  },
  {
    planet: 'Korriban',
    source: 'Star Wars: Knights of the Old Republic',
    year: '2003',
    medium: 'Game',
  },
  {
    planet: 'M6-117',
    source: 'Pitch Black',
    year: '2000',
    medium: 'Film',
  },
  {
    planet: "Marak's World",
    source: "Hammerfall (and later 2004's Forge of Heaven) by C. J. Cherryh",
    year: '2001',
    medium: 'Books',
  },
  {
    planet: 'Motavia',
    source: 'Phantasy Star',
    year: '1987',
    medium: 'Game',
  },
  {
    planet: 'Ocampa',
    source: 'Star Trek: Voyager',
    year: '1994 – 1997',
    medium: 'TV Series',
  },
  {
    planet: 'Osiris IV',
    source: 'Futurama episode "A Pharaoh to Remember"',
    year: '2002',
    medium: 'Animated',
  },
  {
    planet: 'Perdide',
    source: 'Les Maîtres du temps',
    year: '1982',
    medium: 'Animated',
  },
  {
    planet: 'Plyuk',
    source: 'Kin-dza-dza!',
    year: '1986',
    medium: 'Film',
  },
  {
    planet: 'Resurgam',
    source: 'Revelation Space by Alastair Reynolds',
    year: '2000',
    medium: 'Books',
  },
  {
    planet: 'Rock Star',
    source: 'Kirby 64: The Crystal Shards',
    year: '2000',
    medium: 'Game',
  },
  {
    planet: 'Salt',
    source: 'Salt by Adam Roberts',
    year: '2000',
    medium: 'Books',
  },
  {
    planet: 'Sand Ocean',
    source: 'F-Zero',
    year: '1991',
    medium: 'Game',
  },
  {
    planet: 'Socorro',
    source: 'Star Wars: The Roleplaying Game adventure The Black Sands of Socorro',
    year: '1997',
    medium: 'Game',
  },
  {
    planet: 'Starbuck',
    source: 'Galactica 1980 episode "The Return of Starbuck"',
    year: '1980',
    medium: 'TV Series',
  },
  {
    planet: 'Tallarn and other planets',
    source: 'Warhammer 40,000 universe',
    year: '1987',
    medium: 'Game',
  },
  {
    planet: 'Tatooine',
    source: 'Star Wars Episode IV: A New Hope and Star Wars Episode VI: Return of the Jedi',
    year: '1977 - 1983',
    medium: 'Film',
  },
  {
    planet: 'Titania',
    source: 'Star Fox 64 for Nintendo 64',
    year: '1997',
    medium: 'Game',
  },
  {
    planet: 'Tophet',
    source: 'Roughnecks: Starship Troopers Chronicles',
    year: '1999',
    medium: 'Animated',
  },
  {
    planet: 'Torga IV',
    source: 'Star Trek: Deep Space Nine episode "The Ship"',
    year: '1996',
    medium: 'TV Series',
  },
  {
    planet: 'Toroth',
    source: 'Star Trek: Enterprise episode "Desert Crossing"',
    year: '2002',
    medium: 'TV Series',
  },
  {
    planet: 'Trisol',
    source: 'Futurama episode "My Three Suns"',
    year: '1999',
    medium: 'Animated',
  },
  {
    planet: 'Tyree',
    source: 'Star Trek: Deep Space Nine episodes "Image in the Sand" and "Shadows and Symbols"',
    year: '1998',
    medium: 'TV Series',
  },
  {
    planet: 'Unnamed planet',
    source: 'Snare by Katharine Kerr',
    year: '2003',
    medium: 'Books',
  },
  {
    planet: 'Unnamed planet',
    source: 'Star Trek episode "Arena"',
    year: '1967',
    medium: 'TV Series',
  },
  {
    planet: 'Vega',
    source: 'Spaceballs',
    year: '1987',
    medium: 'Film',
  },
  {
    planet: 'Vulcan',
    source: 'Star Trek: The Original Series and subsequent works in the Star Trek universe',
    year: '1966',
    medium: 'TV Series',
  },
];

// SETUP
// list the categories for the different properties
// planet, describing ranges of letters in the alphabet
// ["A", "E"], ["F", "J"], ...
const planet = [];
const letterA = 'A'.charCodeAt(0);
const letterZ = 'Z'.charCodeAt(0);
for (let i = letterA; i < letterZ; i += 5) {
  planet.push([String.fromCharCode(i), String.fromCharCode(i + 4)]);
}
planet[planet.length - 1][1] = 'Z';
// medium categories using unique values from the medium property
const medium = new Set(data.map(item => item.medium));

// year categories describing five periods between the oldest and newest release
const oldest = data.reduce((acc, curr) => {
  const current = curr.year.match(/\d{4}/);
  if (current) {
    return current[0] < acc ? current[0] : acc;
  }
  return acc;
}, 2000);
const newest = data.reduce((acc, curr) => {
  const current = curr.year.match(/\d{4}/);
  if (current) {
    return current[0] > acc ? current[0] : acc;
  }
  return acc;
}, 2000);

const difference = parseInt(newest, 10) - parseInt(oldest, 10);
const range = Math.floor(difference / 4);
const year = [];
for (let i = parseInt(newest, 10); i > parseInt(oldest, 10); i -= range) {
  year.push([i - (range - 1), i]);
}

// object describing each category in an array
// ! for the medium and year the array is multidimensional, itself describing the starting/ending letter/year for each range
const categories = {
  planet,
  medium: [...medium],
  year: year.reverse(),
};


// SELECT & OPTION ELEMENTS
// target the .input div and add a select element with one option for each category
const options = Object.keys(categories);
const input = document.querySelector('.input');
const select = document.createElement('select');

options.forEach((option) => {
  const optionElement = document.createElement('option');
  optionElement.value = option;
  optionElement.textContent = option;
  select.appendChild(optionElement);
});

// select the planet option
select.value = 'planet';
input.appendChild(select);


// TOOLTIP element
// add a div in the to show the bubble being hovered upon
const tooltip = d3
  .select('body')
  .append('div')
  .attr('id', 'tooltip');


// D3 VIZ
// the idea is to include the planets from the get-go and then position them according to the selected option

// add an SVG element in the .output container
const margin = {
  top: 80,
  right: 80,
  bottom: 80,
  left: 80,
};
const width = 500 - (margin.left + margin.right);
const height = 350 - (margin.top + margin.bottom);

const output = d3
  .select('.output');

const outputSVG = output
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

// immediately add a defs block for the gradients used in the project
// gradient for the outline of the circle
const outputDefs = outputSVG
  .append('defs');

// linear gradients included for each planet
// the idea is to have a color closely resembling the fill ultimately picked up by each circle
const gradientsStroke = outputDefs
  .selectAll('linearGradient')
  .data(data)
  .enter()
  .append('linearGradient')
  .attr('id', (d, i) => `gradient-stroke${i}`)
  .attr('x1', '100%')
  .attr('x2', '0%')
  .attr('y1', '0%')
  .attr('y2', '100%');

// stop color describing a lighter variation in the bottom left corner of the shape
gradientsStroke
  .append('stop')
  .attr('stop-color', (d, i) => `hsl(${360 / data.length * i}, 99%, 52%)`)
  .attr('offset', '0%');

gradientsStroke
  .append('stop')
  .attr('stop-color', (d, i) => `hsl(${360 / data.length * i}, 100%, 56%)`)
  .attr('offset', '100%');

// radial gradient for the subtle light source include in the top right corner of each shape
const gradientFill = outputDefs
  .append('radialGradient')
  .attr('id', 'gradient-fill')
  .attr('cx', 0.7)
  .attr('cy', 0.3);

gradientFill
  .append('stop')
  .attr('stop-color', '#fff7c3')
  .attr('offset', '0%');

gradientFill
  .append('stop')
  .attr('stop-color', '#ffe1c0')
  .attr('offset', '100%');

// group in which to plot the visualization
const outputGroup = outputSVG
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);


// before the circle element(s) describing the planets add the labels describing the category
// labels included around the coordinates ultimately used to separate the elements in the force graph
// centers of gravity according to the categories
const categoriesCenter = [
  {
    x: (-width / 2),
    y: -30,
  },
  {
    x: 0,
    y: (-height / 2),
  },
  {
    x: (width / 2),
    y: -30,
  },
  {
    x: -width / 6,
    y: (height / 2),
  },
  {
    x: width / 6,
    y: (height / 2),
  },
];

// group used to center the shapes in the svg
const planetsGroup = outputGroup
  .append('g')
  .attr('transform', `translate(${width / 2} ${height / 2})`);

// TEXT LABELS
// add the labels in the coordinates specified by the categoriesCenter array
const labels = planetsGroup
  .selectAll('text.label')
  .data(categoriesCenter)
  .enter()
  .append('text')
  // include the text specified by the selected category
  .text((d, i) => categories[select.value][i])
  .attr('x', d => d.x)
  .attr('y', (d, i) => (i % 2 === 0 ? d.y - 60 : d.y + 60))
  .attr('fill', '#fff')
  .style('font-size', '20')
  .style('opacity', '0.2')
  .style('text-transform', 'uppercase')
  .style('letter-spacing', '0.1rem')
  .attr('text-anchor', 'middle')
  .attr('dominant-baseline', 'middle');

// BUBBLES
// for each planet add a wrapping group
// this to gather together multiple shapes
const planets = planetsGroup
  .selectAll('g.planet')
  // bind each group element with the name of the planet
  .data(data, d => d.planet)
  .enter()
  .append('g')
  .attr('class', 'planet')
  // on enter show the tooltip and add the information through paragraph elements
  .on('mouseenter', (d, i) => {
    tooltip
      .append('p')
      .attr('class', 'planet')
      .append('strong')
      .text(d.planet);

    tooltip
      .append('p')
      .attr('class', 'year')
      .text(d.year);

    tooltip
      .append('p')
      .attr('class', 'medium')
      .text(d.medium);

    tooltip
      .append('p')
      .attr('class', 'source')
      .text('From ')
      .append('em')
      .text(d.source);

    // show the tooltip where the cursor lies
    tooltip
      .style('opacity', '1')
      .style('visibility', 'visible')
      .style('left', `${d3.event.pageX}px`)
      .style('top', `${d3.event.pageY}px`)
      .style('border-bottom', `5px solid hsl(${360 / data.length * i}, 90%, 67%)`);
  })
  // on exit hide the tooltip and remove the nested paragraph elements
  .on('mouseout', () => {
    tooltip
      .style('opacity', '0')
      .style('visibility', 'hidden')
      .selectAll('p')
      .remove();
  });


// for each planet add a circle
planets
  .append('circle')
  .attr('r', 12)
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('class', 'bubble')
  .attr('fill', (d, i) => `hsl(${360 / data.length * i}, 90%, 67%)`)
  // use the matching gradient for the stroke
  .attr('stroke', (d, i) => `url(#gradient-stroke${i})`)
  .attr('stroke-width', '2');

// add a semi transparent circle with the chosen radial gradient
planets
  .append('circle')
  .attr('r', 12)
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('fill', 'url(#gradient-fill)')
  .attr('opacity', '0.3')
  .style('pointer-events', 'none');

// add a small line to reinforce the idea of a light source
planets
  .append('path')
  .attr('d', 'M 0 -8 a 8 8 0 0 1 8 8')
  .attr('cx', 5)
  .attr('cy', -5)
  .attr('class', 'bubble')
  .attr('fill', 'none')
  .attr('stroke', (d, i) => `hsl(${360 / data.length * i}, 100%, 88%)`)
  .attr('stroke-width', '2')
  .attr('stroke-linecap', 'round')
  .style('pointer-events', 'none');


// D3 FORCE

/* utility function for the forceX and forceY forces
input
  - d, representing each piece of data with the properties included through the simulation
output
  - {x, y}, object representing the coordinates dictating where the shapes ought to be positioned

the idea is to return the x and y coordinate in the categoriesCenter array according to the specific value of the selected category
*/
function centerOfGravity(d) {
  const { value } = select;
  // property of the bound object matching the select element's value
  const selectedCategory = d[value];
  // array describing the possible categories for the selected value
  const matchingCategories = categories[value];
  // retrieve the index describing the matching category
  // ! selectedCategory is a 2D array for the planet and year values, in which case a bit of computation is needed
  const index = matchingCategories.findIndex((category) => {
    if (value === 'medium') {
      return category === selectedCategory;
    }
    const [startingValue, endingValue] = category;
    const matchingValue = value === 'planet' ? selectedCategory[0] : parseInt(selectedCategory.match(/\d{4}/)[0], 10);
    return matchingValue >= startingValue && matchingValue <= endingValue;
  });
  // return the coordinates of the center for the matching category
  return categoriesCenter[index];
}


// FORCE FUNCTIONS
// force to avoid excessive overlaps
const collision = d3
  .forceCollide()
  .radius(12);

// force to push the shapes horizontally according to the value returned by the utility function
const forceX = d3
  .forceX()
  .x(d => centerOfGravity(d).x)
  .strength(1);

// force to push the shapes vertically
const forceY = d3
  .forceY()
  .y(d => centerOfGravity(d).y)
  .strength(1);


// function run following the simulation, as the tick event is registered
function tick() {
  // translate the planets to the location described by the .x and .y properties
  // properties included through the forceSimulation function and on the basis of the established forces
  planets
    .attr('transform', ({ x, y }) => `translate(${x} ${y})`);
}

// create a simulation with the chosen forces
const simulation = d3
  .forceSimulation(data)
  .force('collision', collision)
  .force('x', forceX)
  .force('y', forceY)
  // small alpha to have the elements move at a slower pace
  .alpha(0.1)
  // call the tick function running the simulation
  .on('tick', tick);


// SELECT LISTENER
// listen for the change event on the select element to modify the visualization
function handleSelection() {
  // retrieve the value from the selected option
  const { value } = this;

  // transition the labels to the new values
  labels
    .transition()
    .style('opacity', 0)
    .transition()
    .style('opacity', 0.2)
    // ! as the planet and year categories return a 2D array, include a string joining said values if need be
    .text((d, i) => (Array.isArray(categories[value][i]) ? categories[value][i].join('-') : categories[value][i]));


  // establish new forces to reposition the planets according to the new selection
  const pushX = d3
    .forceX()
    .x(d => centerOfGravity(d).x)
    .strength(1);

  const pushY = d3
    .forceY()
    .y(d => centerOfGravity(d).y)
    .strength(1);

  // run the simulation anew and with the new forces
  simulation
    .force('collision', collision)
    .force('x', pushX)
    .force('y', pushY)
    // "reheat" the simulation resetting alpha to its previous value
    .alpha(0.1)
    .restart();
}
select.addEventListener('change', handleSelection);
