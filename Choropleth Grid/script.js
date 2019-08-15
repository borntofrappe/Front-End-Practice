/* globals d3 */
// data describing the presence, or lack thereof, of French tennis players at the French Open
// each item describes a year and the men and women who gained access to the different stages
const data = [
  {
    year: 2000,
    men: {
      eights: [
        'Cedric Pioline',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Amelie Mauresmo',
        'Mary Pierce',
      ],
      fourths: [
        'Mary Pierce',
      ],
      semi: [
        'Mary Pierce',
      ],
      final: [
        'Mary Pierce',
      ],
    },
  },
  {
    year: 2001,
    men: {
      eights: [
        'Sebastien Grosjean',
        'Fabrice Santoro',
      ],
      fourths: [
        'Sebastien Grosjean',
      ],
      semi: [
        'Sebastien Grosjean',
      ],
      final: [],
    },
    women: {
      eights: [
        'Sandrine Testud',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2002,
    men: {
      eights: [
        'Sebastien Grosjean',
        'Paul-Henri Mathieu',
        'Arnaud Di Pasquale',
      ],
      fourths: [
        'Sebastien Grosjean',
      ],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Mary Pierce',
        'Amelie Mauresmo',
      ],
      fourths: [
        'Mary Pierce',
      ],
      semi: [],
      final: [],
    },
  },
  {
    year: 2003,
    men: {
      eights: [
        'Arnaud Clement',
      ],
      fourths: [],
      semi: [],
      final: [],

    },
    women: {
      eights: [
        'Amelie Mauresmo',
      ],
      fourths: [
        'Amelie Mauresmo',
      ],
      semi: [],
      final: [],
    },
  },
  {
    year: 2004,
    men: {
      eights: [
        'Nicolas Escude',
        'Michael Llordra',
        'Olivier Mutis',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Amelie Mauresmo',
      ],
      fourths: [
        'Amelie Mauresmo',
      ],
      semi: [],
      final: [],
    },
  },
  {
    year: 2005,
    men: {
      eights: [
        'Sebastien Grosjean',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Mary Pierce',
      ],
      fourths: [
        'Mary Pierce',
      ],
      semi: [
        'Mary Pierce',
      ],
      final: [
        'Mary Pierce',
      ],
    },
  },
  {
    year: 2006,
    men: {
      eights: [
        'Julien Benneteau',
        'Gael Monfils',
      ],
      fourths: [
        'Julien Benneteau',
      ],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Amelie Mauresmo',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2007,
    men: {
      eights: [],
      fourths: [],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Marion Bartoli',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2008,
    men: {
      eights: [
        'Julien Benneteau',
        'Gael Monfils',
        'Michael Llodra',
        'Paul-Henri Mathieu',
        'Jeremy Chardy',
      ],
      fourths: [
        'Gael Monfils',
      ],
      semi: [
        'Gael Monfils',
      ],
      final: [],
    },
    women: {
      eights: [],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2009,
    men: {
      eights: [
        'Gael Monfils',
        'Jo-Wilfried Tsonga',
      ],
      fourths: [
        'Gael Monfils',
      ],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Aravane Rezai',
        'Virginie Razzano',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2010,
    men: {
      eights: [
        'Jo-Wilfried Tsonga',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
    women: {
      eights: [],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2011,
    men: {
      eights: [
        'Gilles Simon',
        'Gael Monfils',
        'Richard Gasquet',
      ],
      fourths: [
        'Gael Monfils',
      ],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Marion Bartoli',
      ],
      fourths: [
        'Marion Bartoli',
      ],
      semi: [
        'Marion Bartoli',
      ],
      final: [],
    },
  },
  {
    year: 2012,
    men: {
      eights: [
        'Jo-Wilfried Tsonga',
        'Richard Gasquet',
      ],
      fourths: [
        'Jo-Wilfried Tsonga',
      ],
      semi: [],
      final: [],
    },
    women: {
      eights: [],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2013,
    men: {
      eights: [
        'Jo-Wilfried Tsonga',
        'Richard Gasquet',
        'Gilles Simon',
      ],
      fourths: [
        'Jo-Wilfried Tsonga',
      ],
      semi: [
        'Jo-Wilfried Tsonga',
      ],
      final: [],
    },
    women: {
      eights: [],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2014,
    men: {
      eights: [
        'Jo-Wilfried Tsonga',
        'Gael Monfils',
      ],
      fourths: [
        'Gael Monfils',
      ],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Pauline Parmentier',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2015,
    men: {
      eights: [
        'Richard Gasquet',
        'Jeremy Chardy',
        'Jo-Wilfried Tsonga',
        'Gilles Simon',
        'Gael Monfils',
      ],
      fourths: [
        'Jo-Wilfried Tsonga',
      ],
      semi: [
        'Jo-Wilfried Tsonga',
      ],
      final: [],
    },
    women: {
      eights: [
        'Alize Cornet',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2016,
    men: {
      eights: [
        'Richard Gasquet',
      ],
      fourths: [
        'Richard Gasquet',
      ],
      semi: [],
      final: [],
    },
    women: {
      eights: [],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2017,
    men: {
      eights: [
        'Gael Monfils',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Caroline Garcia',
        'Kristina Mladenovic',
        'Alize Cornet',
      ],
      fourths: [
        'Caroline Garcia',
        'Kristina Mladenovic',
      ],
      semi: [],
      final: [],
    },
  },
  {
    year: 2018,
    men: {
      eights: [],
      fourths: [],
      semi: [],
      final: [],
    },
    women: {
      eights: [
        'Caroline Garcia',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
  },
  {
    year: 2019,
    men: {
      eights: [
        'Gael Monfils',
        'Benoit Paire',
      ],
      fourths: [],
      semi: [],
      final: [],
    },
    women: {
      eights: [],
      fourths: [],
      semi: [],
      final: [],
    },
  },
];

// create two scales for the button's background
/* ! use the maximum value for the arrays' lengths in the domain
d3.max(data.map(({men}) => Object.values(men)).map(stage => d3.max(stage, d => d.length)))
  \- max value            \- 2D array describing the stages     \- array describing the lenghts of the stages
*/
const colorScaleMen = d3
  .scaleLinear()
  .domain([0, d3.max(data.map(({men}) => Object.values(men)).map(stage => d3.max(stage, d => d.length)))])
  .range(['hsl(108, 71%, 91%)', 'hsl(120, 76%, 30%)']);

const colorScaleWomen = d3
  .scaleLinear()
  .domain([0, d3.max(data.map(({women}) => Object.values(women)).map(stage => d3.max(stage, d => d.length)))])
  .range(['hsl(11, 67%, 88%)', 'hsl(0, 82%, 45%)']);

// target the .grid container and for every item in the data array add 9 items
// four buttons, followed by a span, followed by four more buttons
// ! buttons are used to rapidly handle the hover & focus interaction, but might not be the best elements for the job
const grid = d3
  .select('.grid');

data.forEach(({ year, men, women }) => {
  // ! reverse the order for the men' stages, to mirror the women' stages
  const stagesMen = Object.entries(men).reverse();
  const stagesWomen = Object.entries(women);

  // apply the background according to the color scale
  // nest a span to describe the number of players
  grid
    .selectAll(`button.men-${year}`)
    .data(stagesMen)
    .enter()
    .append('button')
    .style('background', ([, players]) => colorScaleMen(players.length))
    .attr('class', `men men-${year}`)
    .append('span')
    .text(([, players]) => players.length);

  grid
    .append('span')
    .style('justify-self', 'center')
    .style('color', '#777')
    .text(year);

  grid
    .selectAll(`button.women-${year}`)
    .data(stagesWomen)
    .enter()
    .append('button')
    .style('background', ([, players]) => colorScaleWomen(players.length))
    .attr('class', `women women-${year}`)
    .append('span')
    .text(([, players]) => players.length);
});

// filter all the buttons with no player and disable the elements
// ! this makes it possible to skip the 0-button when tabbing through the keyboard
d3
  .selectAll('button')
  .filter(([, players]) => players.length === 0)
  .attr('disabled', true);

// filter all the buttons with at least 1 player and show a tooltip describing the actual players
const tooltip = grid
  .append('div')
  .attr('id', 'tooltip')
  .style('position', 'absolute')
  .style('visibility', 'hidden')
  .style('pointer-events', 'none')
  .style('opacity', '0');

// function to remove the tooltip from sight
function removePlayers() {
  tooltip
    .style('visibility', 'hidden')
    .style('opacity', '0')
    .selectAll('p')
    .remove();
}

// function to show the tooltip
function showPlayers(players) {
  // call the remove function to avoid duplicating the tooltip when the mouseenter and the focus event follow one another
  removePlayers();

  // retrieve the target button and its coordinates
  const { target } = d3.event;
  const {
    top, left, width, height,
  } = target.getBoundingClientRect();

  // show the tooltip with the desired information below the target
  tooltip
    .append('p')
    .append('strong')
    .text(`${players.length} ${players.length === 1 ? 'player' : 'players'}:`);

  tooltip
    .append('p')
    .text(players.join(', '));

  tooltip
    .style('visibility', 'visible')
    .style('opacity', 1)
    .style('left', `${left - width / 2}px`)
    .style('top', `${top + height * 1.2}px`);
}

// call the functions for the prescribed buttons and following the keyboard/mouse events
d3
  .selectAll('button')
  .filter(([, players]) => players.length > 0)
  .style('cursor', 'pointer')
  .on('focus', ([, players]) => showPlayers(players))
  .on('mouseenter', ([, players]) => showPlayers(players))
  .on('blur', () => removePlayers())
  .on('mouseout', () => removePlayers());
