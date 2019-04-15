// array describing the color for each team
// using camel case where the team names include a space
const colors = {
  mercedes: '#00D2BE',
  ferrari: '#DC0000',
  redBull: '#1E41FF',
  renault: '#FFF500',
  racingPoint: '#F596C8',
  alfaRomeo: '#9B0000',
  toroRosso: '#469BFF',
  haas: '#BD9E57',
  mclaren: '#FF8700',
  williams: '#FFFFFF'
}

// array describing the drivers, sorted by position and with a gap describing the distance from the leading driver
const leaderboard = [
  {
    name: 'Lewis Hamilton',
    team: 'mercedes',
    gap: 'Leader'
  },
  {
    name: 'Valteri Bottas',
    team: 'mercedes',
    gap: '+6.552s'
  },
  {
    name: 'Sebastian Vettel',
    team: 'ferrari',
    gap: '+13.744s'
  },
  {
    name: 'Max Verstappen',
    team: 'red bull',
    gap: '+27.627s'
  },
  {
    name: 'Charles Leclerc',
    team: 'ferrari',
    gap: '+31.627s'
  },
  {
    name: 'Pierre Gasly',
    team: 'red bull',
    gap: '+89.307s'
  },
  {
    name: 'Daniel Ricciardo',
    team: 'renault',
    gap: '+1 lap'
  }, {
    name: 'Sergio Perez',
    team: 'racing point',
    gap: '+1 lap'
  },
  {
    name: 'Kimi Räikkönen',
    team: 'alfa romeo',
    gap: '+1 lap'
  },
  {
    name: 'Alexander Albon',
    team: 'toro rosso',
    gap: '+1 lap'
  },
  {
    name: 'Romain Grosjean',
    team: 'haas',
    gap: '+1 lap'
  },
  {
    name: 'Lance Stroll',
    team: 'racing point',
    gap: '+1 lap'
  },
  {
    name: 'Kevin Magnussen',
    team: 'haas',
    gap: '+1 lap'
  },
  {
    name: 'Carlos Sainz',
    team: 'mclaren',
    gap: '+1 lap'
  },
  {
    name: 'Antonio Giovinazzi',
    team: 'alfa romeo',
    gap: '+1 lap'
  },
  {
    name: 'George Russell',
    team: 'williams',
    gap: '+2 laps'
  },
  {
    name: 'Robert Kubica',
    team: 'williams',
    gap: '+2 laps'
  },
  {
    name: 'Lando Norris',
    team: 'mclaren',
    gap: 'DNF'
  },
  {
    name: 'Daniil Kvyat',
    team: 'toro rosso',
    gap: 'DNF'
  },
  {
    name: 'Nico Hulkenberg',
    team: 'renault',
    gap: 'DNF'
  }
];

// target the table element in which to add one div for each driver
const main = d3
  .select('table');

// for each driver add one table row
// ! add a class to the row to differentiate the rows from the existing one
// otherwise the select method would target the existing one and include one row less than the required amount
const drivers = main
  .selectAll('tr.driver')
  .data(leaderboard)
  .enter()
  .append('tr')
  .attr('class', 'driver');

// in each row add the information specified by the dataset in td elements
// specify a class to style the elements differently with CSS

// position using the index of the data points
drivers
  .append('td')
  .text((d, i) => i + 1)
  .attr('class', 'position');


// name followed by the team
drivers
  .append('td')
  // include the last name in a separate element to style it differently
  // include the team also in another element for the same reason
  .html (({name, team}) => `${name.split(' ').map((part, index) => index > 0 ? `<strong>${part}</strong>` : `${part}`).join(' ')} <span>${team}</span>`)
  // include a border with the color matching the team
  .style('border-left', ({team}) => {
    // find the color using the string value found in d.team
    // ! if the string value has a space, camelCase the value
    const color = team.split(' ').map((word, index) => index > 0 ? `${word[0].toUpperCase()}${word.slice(1)}` : `${word}` ).join('');
    return `4px solid ${colors[color]}`;
  })
  .attr('class', 'driver');

// gap from the first driver
drivers
  .append('td')
  .attr('class', 'gap')
  .append('span')
  .text(({gap}) => gap);