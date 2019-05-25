/* globals d3 */
// data array describing for each planet its name and connected information
const data = [
  {
    planet: 'Abydos',
    source: 'Stargate and later in the TV series Stargate SG-1',
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
    medium: 'Books & Novels',
  },
  {
    planet: 'Arrakis (aka Dune)',
    source: 'Dune by Frank Herbert, and subsequent works in the Dune universe',
    year: '1965',
    medium: 'Books & Novels',
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
    medium: 'Books & Novels',
  },
  {
    planet: 'Byss',
    source: 'Star Wars: Dark Empire',
    year: '1991–1992',
    medium: 'Books & Novels',
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
    medium: 'TV series',
  },
  {
    planet: 'Ceti Alpha V',
    source: 'Star Trek: The Original Series episode "Space Seed", Star Trek II: The Wrath of Khan',
    year: '1967, 1982',
    medium: 'TV series',
  },
  {
    planet: 'Dorvan V',
    source: "Star Trek: The Next Generation episode \"Journey's End\"",
    year: '1994',
    medium: 'TV series',
  },
  {
    planet: 'Dozaria',
    source: 'Star Trek: Deep Space Nine episode "Indiscretion"',
    year: '1995',
    medium: 'TV series',
  },
  {
    planet: 'Fire',
    source: 'Lexx season 3',
    year: '1999',
    medium: 'TV series',
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
    year: '',
    medium: 'Anime & Manga',
  },
  {
    planet: 'Hellywood',
    source: 'Now and Then, Here and There',
    year: '1999-2000',
    medium: 'Anime & Manga',
  },
  {
    planet: 'Home',
    source: 'Worldwar',
    year: '1994-2004',
    medium: 'Books & Novels',
  },
  {
    planet: 'Imecka',
    source: 'Dragonball GT',
    year: '1996',
    medium: 'Anime & Manga',
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
    year: '',
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
    year: '2005–2008',
    medium: 'Animated',
  },
  {
    planet: 'Klendathu',
    source: 'Starship Troopers by Robert A. Heinlein, and subsequent works',
    year: '1959',
    medium: 'Books & Novels',
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
    medium: 'Books & Novels',
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
    year: '1994–1997',
    medium: 'TV series',
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
    medium: 'Books & Novels',
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
    medium: 'Books & Novels',
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
    medium: 'TV series',
  },
  {
    planet: 'Tallarn and other planets',
    source: 'Warhammer 40,000 universe',
    year: '',
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
    medium: 'TV series',
  },
  {
    planet: 'Toroth',
    source: 'Star Trek: Enterprise episode "Desert Crossing"',
    year: '2002',
    medium: 'TV series',
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
    medium: 'TV series',
  },
  {
    planet: 'Unnamed planet',
    source: 'Snare by Katharine Kerr',
    year: '2003',
    medium: 'Books & Novels',
  },
  {
    planet: 'Unnamed planet',
    source: 'Star Trek episode "Arena"',
    year: '1967',
    medium: 'TV series',
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
    medium: 'TV series',
  },
];

// SETUP
// list the categories for the different properties

// planet categories describing ranges of letters in the alphabeh
const planet = [];
const letterA = 'A'.charCodeAt(0);
const letterZ = 'Z'.charCodeAt(0);

for (let i = letterA; i < letterZ; i += 5) {
  planet.push([String.fromCharCode(i), String.fromCharCode(i + 5)]);
}

// medium categories using unique values from the medium property
const medium = new Set(data.map(item => item.medium));

// year categories describing decades ending in the current year
const oldest = data.reduce((acc, curr) => {
  const current = curr.year.match(/\d{4}/);
  if (current) {
    return current[0] < acc ? current[0] : acc;
  }
  return acc;
}, 2000);
const now = new Date();
const currentYear = now.getFullYear();

const year = [];
for (let i = currentYear; i > parseInt(oldest, 10); i -= 10) {
  year.push([i - 10, i]);
}

// object describing each category
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

input.appendChild(select);

// TOOLTIP element
// add a div in the html to show the bubble being selected/hovered upon
const tooltip = d3
  .select('body')
  .append('div')
  .attr('id', 'tooltip');

// D3 VIZ
// the idea is to include the planets through circle elements and only afterwards position/color the element according to the selection
// add an SVG element in the .output container
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};
const width = 500 - (margin.left + margin.right);
const height = 350 - (margin.top + margin.bottom);

const output = d3
  .select('.output');

const outputSVG = output
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

// add a gradient to emulate a small tint on the circle
const gradientStroke = outputSVG
  .append('defs')
  .append('linearGradient')
  .attr('id', 'gradient-stroke')
  .attr('x1', '100%')
  .attr('x2', '0%')
  .attr('y1', '0%')
  .attr('y2', '100%');

gradientStroke
  .append('stop')
  .attr('stop-color', '#FE130A')
  .attr('offset', '0%');

gradientStroke
  .append('stop')
  .attr('stop-color', '#FF6420')
  .attr('offset', '100%');

const gradientFill = outputSVG
  .append('defs')
  .append('radialGradient')
  .attr('id', 'gradient-fill')
  .attr('cx', 0.7)
  .attr('cy', 0.3);

gradientFill
  .append('stop')
  .attr('stop-color', '#FFEC68')
  .attr('offset', '0%');

gradientFill
  .append('stop')
  .attr('stop-color', '#FEAD57')
  .attr('offset', '100%');

const outputGroup = outputSVG
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// include the planets in the center of the SVG
const planetsGroup = outputGroup
  .append('g')
  .attr('transform', `translate(${width / 2} ${height / 2})`);

// for each planet add a wrapping group
// this to potentially include more than just circle elements
const planets = planetsGroup
  .selectAll('g.planet')
  // bind each group element with the name of the planet
  .data(data, d => d.planet)
  .enter()
  .append('g')
  .attr('class', 'planet')
  .attr('data-name', d => d.planet)
  .on('mouseenter', (d) => {
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
      .text(`From ${d.source}`);


    tooltip
      .style('opacity', '1')
      .style('visibility', 'visible')
      .style('left', `${d3.event.pageX}px`)
      .style('top', `${d3.event.pageY}px`);
  })
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
  .attr('r', 16)
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('class', 'bubble')
  .attr('fill', '#FEAD57')
  .attr('stroke', 'url(#gradient-stroke)')
  .attr('stroke-width', '2');

planets
  .append('circle')
  .attr('r', 16)
  .attr('cx', 0)
  .attr('cy', 0)
  .attr('fill', 'url(#gradient-fill)')
  .attr('opacity', '0.3')
  .style('pointer-events', 'none');

planets
  .append('path')
  .attr('d', 'M 0 -11 a 11 11 0 0 1 11 11')
  .attr('cx', 5)
  .attr('cy', -5)
  .attr('class', 'bubble')
  .attr('fill', 'none')
  .attr('stroke', '#FFEC68')
  .attr('stroke-width', '3')
  .attr('stroke-linecap', 'round')
  .style('pointer-events', 'none');


const center = d3
  .forceCenter()
  .x(0)
  .y(0);

const charge = d3
  .forceManyBody()
  .strength(10);

const collision = d3
  .forceCollide()
  .radius(16);


const simulation = d3
  .forceSimulation(data)
  .force('charge', charge)
  .force('collision', collision)
  .on('tick', ticked);

function ticked() {
  simulation
    .force('center', center);

  planets
    .attr('transform', ({ x, y }) => {
      const translateX = x > 0 ? Math.min(x, (width / 2 - 5)) : Math.max(x, (-width / 2 + 5));
      const translateY = y > 0 ? Math.min(y, (height / 2 - 5)) : Math.max(y, (-height / 2 + 5));
      return `translate(${translateX} ${translateY})`;
    });
}

// function regulating the visualization
// the idea is to consider a center of gravity for each particular category and have the planets gravitate toward the matching value
function highlightPlanets(selection = 'planet') {
  const category = categories[selection];
  console.log(category);
}

// highlightPlanets();


// SELECT LISTENER
// listen for the submit event on the select element to modify the visualization
function handleSelection() {
  // retrieve the value from the selected option
  const { value } = this;
  highlightPlanets(value);
}
select.addEventListener('input', handleSelection);
