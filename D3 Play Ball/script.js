// data describing two hypothetical teams with a specific score and array of players
// the score of the team _and_ the score of the players is broken down in what are 150 data points
// for every observation one of the two teams scores, one of its players scores
// ! it is possible that no team scores for a few observations
const data = [
  {
    name: 'Turtles',
    score: 113,
    breakdown: [0, 0, 3, 1, 3, 3, 0, 2, 0, 2, 0, 0, 0, 1, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 3, 0, 1, 0, 0, 0, 2, 3, 3, 3, 0, 3, 0, 0, 3, 2, 0, 2, 0, 1, 0, 1, 3, 1, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 1, 0, 1, 0, 1, 0, 1, 2, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 2, 0, 1, 1, 0, 1, 3, 3, 3, 2, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 3, 3, 2, 0, 0, 3, 0, 1, 2, 1, 1, 0],
    players: [
      {
        name: 'William',
        score: 55,
        breakdown: [0, 0, 3, 0, 0, 3, 0, 2, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 3, 3, 3, 0, 3, 0, 0, 0, 0, 0, 2, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 2, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0],
      },
      {
        name: 'Bill',
        score: 33,
        breakdown: [0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 1, 0, 0, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 1, 2, 0, 0, 0],
      },
      {
        name: 'Jimmy',
        score: 15,
        breakdown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0],
      },
      {
        name: 'Gerald',
        score: 5,
        breakdown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'Richard',
        score: 5,
        breakdown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
  {
    name: 'Hummingbirds',
    score: 106,
    breakdown: [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 1, 3, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 2, 0, 2, 3, 0, 0, 1, 1, 3, 2, 0, 2, 0, 2, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, 0, 3, 0, 0, 3, 2, 3, 1, 0, 2, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 3, 0, 1, 0, 0, 0, 1, 2, 0, 3, 0, 0, 1, 0, 2, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 2, 0, 0, 1, 3, 0, 0, 0, 0, 3, 3, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0],
    players: [
      {
        name: 'Ronald',
        score: 76,
        breakdown: [0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 3, 0, 3, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 2, 0, 0, 2, 3, 0, 0, 0, 1, 3, 2, 0, 0, 0, 2, 3, 0, 1, 2, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 2, 0, 2, 0, 0, 3, 0, 0, 0, 0, 0, 1, 2, 0, 3, 0, 0, 1, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 2, 0, 0, 0, 0, 0, 2, 0, 2, 0, 0, 0, 0, 0],
      },
      {
        name: 'George',
        score: 19,
        breakdown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 1, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'Benjamin',
        score: 5,
        breakdown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'Andrew',
        score: 5,
        breakdown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
      {
        name: 'Martin',
        score: 1,
        breakdown: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      },
    ],
  },
];

// include an svg element in the prescribed node
const margin = {
  top: 20,
  right: 25,
  bottom: 20,
  left: 25,
};

const width = 250 - (margin.left + margin.right);
const height = 400 - (margin.top + margin.bottom);

const svg = d3
  .select('.viz')
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

const group = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// above the visualization, in the space allocated by the margin, introduce the visualization
group
  .append('text')
  .attr('x', width / 2)
  .attr('y', -margin.top / 2)
  .attr('text-anchor', 'middle')
  .attr('font-size', '10px')
  .text(`Pretend Basketball - ${(new Date()).toDateString()}`);

// include a group nesting the visualization
// position the group in the bottom center of the svg
const game = group
  .append('g')
  .attr('class', 'game')
  .attr('transform', `translate(${width / 2} ${height})`);

// include two groups for the teams, and at either side of the center of the svg element
const teams = game
  .selectAll('g.team')
  .data(data)
  .enter()
  .append('g')
  .attr('class', 'team')
  .attr('transform', (d, i) => `translate(${-width / 10 + width / 5 * i} 0)`);

// scale mapping the score to the height of the svg
const teamScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, ({ score }) => score)])
  .range([0, height])
  .nice();

// include the name of the teams and the final score at the top of the visualization
teams
  .append('text')
  .attr('x', 0)
  .attr('y', ({ score }) => -teamScale(score))
  .attr('text-anchor', (d, i) => (i === 0 ? 'end' : 'start'))
  .attr('font-size', '12px')
  .attr('font-weight', '700')
  .text(({ name }) => name);

teams
  .append('text')
  .attr('x', 0)
  .attr('y', ({ score }) => -teamScale(score) + 36)
  .attr('text-anchor', (d, i) => (i === 0 ? 'end' : 'start'))
  .attr('font-size', '36px')
  .attr('font-weight', '900')
  .text(({ score }) => score)
  .attr('fill', (d, i) => ((i === 0) ? 'hsl(79, 70%, 40%)' : 'hsl(198, 70%, 40%)'));


// scale mapping the scores of the players to the remaining vertical space
// below the text des
const playerScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, ({ score }) => score)])
  .range([0, height - 64])
  .nice();

// for each player add a group element
const players = teams
  .selectAll('g.player')
  .data(d => d.players.sort((a, b) => d3.descending(a.score, b.score)).reduce((acc, curr, index) => {
    const { name, score, breakdown } = curr;
    const cumulative = index > 0 ? acc[index - 1].cumulative + score : score;
    return [...acc, {
      name,
      score,
      breakdown,
      cumulative,
    }];
  }, []))
  .enter()
  .append('g')
  .attr('class', 'player')
  .attr('data-player', ({ name }) => name)
  // translate the group vertically to position the boxes above one another
  // ! consider the cumulative score accrued by the players
  // scale the boxes for the first team with a negative value to have the rectangles drawn away from the center
  .attr('transform', ({ name, cumulative }) => (data[0].players.find(player => player.name === name) ? `scale(-1 1) translate(0 ${-playerScale(cumulative)})` : `translate(0 ${-playerScale(cumulative)})`));


// scale mapping the index of the rectangles to the width allocated beyond the group elements
const playersWidth = (width / 2) - (width / 5);
const widthScale = d3
  .scaleLinear()
  .domain([0, 5])
  .range([playersWidth, 0]);

// for each player add a rectangle describing the score through its height
// ! the width considers the order with which the rectangles are included
players
  .append('rect')
  .attr('x', 0)
  .attr('y', 0)
  .attr('width', (d, i) => widthScale(i))
  .attr('height', ({ score }) => playerScale(score))
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '0.5px')
  .attr('fill', ({ name }) => (data[0].players.find(player => player.name === name) ? 'hsl(79, 70%, 40%)' : 'hsl(198, 70%, 40%)'));

// for each player and next to the corresponding rectangle add a text element with its name
players
  .append('text')
  .attr('x', 0)
  .attr('y', ({ score }) => playerScale(score) / 2)
  .attr('font-size', '8px')
  .text(({ name }) => name)
  .attr('text-anchor', ({ name }) => (data[0].players.find(player => player.name === name) ? 'end' : 'start'))
  .attr('transform', ({ name }, i) => (data[0].players.find(player => player.name === name) ? `translate(${widthScale(i) + 5} 0) scale(-1 1)` : `translate(${widthScale(i) + 5} 0)`));

// add a path element connecting the top of the rectangles
const yMin = playerScale(d3.min(data, d => d.score));
const yMax = playerScale(d3.max(data, d => d.score));

const summary = game
  .append('g')
  .attr('transform', `translate(0 ${(-yMax - yMin) / 2}) scale(0.75)`);

summary
  .append('path')
  .attr('d', `M ${-width / 10} -${(yMax - yMin) / 2} L ${width / 10} ${(yMax - yMin) / 2} H ${-width / 10}z`)
  .attr('fill', 'hsl(79, 70%, 50%)')
  .attr('stroke', 'hsl(79, 70%, 50%)')
  .attr('stroke-width', '1.5')
  .attr('opacity', 0.4);

summary
  .append('path')
  .attr('d', `M ${-width / 10} -${(yMax - yMin) / 2} L ${width / 10} ${(yMax - yMin) / 2}`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '1.5')
  .attr('stroke-linecap', 'round');
