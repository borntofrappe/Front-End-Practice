// the idea is to create a set of random data first and visualize it later one point at a time

// CREATE DATA
// function returning a random value between 0, 1, 2 and 3
const randomPoint = () => Math.floor(Math.random() * 4);

// data array describing one object for each team
const data = [
  /*
  each object has a few root properties
    name
    score
    breakdown
    players

  furthermore, players is itself an array, with one object for each player
  each player has properties which mirror the team
    name
    score
    breakdown
    weight
  */
  {
    name: 'Turtles',
    score: 0,
    breakdown: [],
    players: [
      /*
      ! weight, describing the likelihood of the player taking a show
      the idea is to use Math.random() and a quick comparison to decide which player in the team scores (the higher the weight, the higher the likelihood of the player scoring)
      */
      {
        name: 'William',
        score: 0,
        breakdown: [],
        weight: 0.4,
      },
      {
        name: 'Bill',
        score: 0,
        breakdown: [],
        weight: 0.7, // consider the _cumulative_ weight (in this instance a value of 0.6 would identify the second player)
      },
      {
        name: 'Jimmy',
        score: 0,
        breakdown: [],
        weight: 0.82,

      },
      {
        name: 'Gerald',
        score: 0,
        breakdown: [],
        weight: 0.92,

      },
      {
        name: 'Richard',
        score: 0,
        breakdown: [],
        weight: 1,

      },
    ],
  },
  {
    name: 'Hummingbirds',
    score: 0,
    breakdown: [],
    players: [
      {
        name: 'Ronald',
        score: 0,
        breakdown: [],
        weight: 0.5,
      },
      {
        name: 'George',
        score: 0,
        breakdown: [],
        weight: 0.75,
      },
      {
        name: 'Benjamin',
        score: 0,
        breakdown: [],
        weight: 0.85,
      },
      {
        name: 'Andrew',
        score: 0,
        breakdown: [],
        weight: 0.94,
      },
      {
        name: 'Martin',
        score: 0,
        breakdown: [],
        weight: 1,
      },
    ],
  },
];

/*
populate the data by adding a series of points to the teams and players

the idea is to consider one team, one player, one set of points
- increase the score of the team and the player
- add the point to the breakdown array of the affected team and player
- add 0 to the breakdown array of the other team and every other player
*/
const dataPoints = 200;

for (let i = 0; i < dataPoints; i += 1) {
  const point = randomPoint();

  // select the scoring team at random
  const indexTeam = Math.floor(Math.random() * data.length);
  const indexOtherTeam = indexTeam === 0 ? 1 : 0;
  data[indexTeam].score += point;

  // select the scoring player using the weight variable
  const { players } = data[indexTeam];
  const weightPlayer = Math.random();
  const indexPlayer = players.findIndex(({ weight }) => weight >= weightPlayer);
  data[indexTeam].players[indexPlayer].score += point;

  // fill in the breakdown arrays
  data[indexTeam].breakdown.push(point);
  data[indexOtherTeam].breakdown.push(0);

  players.forEach((player, index) => {
    if (index === indexPlayer) {
      player.breakdown.push(point);
    } else {
      player.breakdown.push(0);
    }
  });
  const { players: otherPlayers } = data[indexOtherTeam];
  otherPlayers.forEach((player) => {
    player.breakdown.push(0);
  });
}

// VISUALIZE DATA
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

// above the visualization, in the space made available through the margin, introduce the visualization
group
  .append('text')
  .attr('x', width / 2)
  .attr('y', -margin.top / 2)
  .attr('text-anchor', 'middle')
  .attr('font-size', '10px')
  .text(`Junior finals - ${(new Date()).toDateString()}`);

// include a group nesting the visualization
// position the group in the bottom center of the svg
const game = group
  .append('g')
  .attr('class', 'game')
  .attr('transform', `translate(${width / 2} ${height})`);

// define the scales used in the visualization

// scale mapping the score to the height of the  svg

// scaled for the teams' names and scores
const teamScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, ({ score }) => score) * 1.05]) // 5% more to create some distance from the text above the visualization
  .range([50, height]) // starting at 50 to have the teams and score visible above the line describing the end of the visualization
  .nice();

// scale for the players' elements
const playerScale = d3
  .scaleLinear()
  .domain(teamScale.domain())
  .range([0, height - 64]) // ending at -64 to distance the elements from the teams' names and scores
  .nice();

// include the path elements highlighting the winning side
const highlight = game
  .append('g')
  // ! the group is translated according to the input data
  // the scale allows to have the nested element scaled relative to its coordinates (by centering the path elements in the group the scale has the effect of scaling the shape uniformly)
  .attr('transform', 'translate(0 0) scale(0.75)');

// ! the d attribute depends on the input data
highlight
  .append('path')
  .attr('class', 'area')
  .attr('stroke-width', '1.5')
  .attr('opacity', 0.4);

// line
highlight
  .append('path')
  .attr('class', 'line')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '1.5')
  .attr('stroke-linecap', 'round');


// function visualizing the data
// the idea is to recursively call the function to progressively show the score
function showData(dex = 0) {
  // consider the points awarded in the breakdown arrays and for the dex-th entries
  // consider the score for the same spread
  const partialData = data.map(({ name, breakdown, players }) => ({
    name,
    score: breakdown.slice(0, dex).reduce((acc, curr) => acc + curr, 0),
    breakdown: breakdown.slice(0, dex),
    players: players.map(({ name: namePlayer, breakdown: breakdownPlayer }) => ({
      name: namePlayer,
      score: breakdownPlayer.slice(0, dex).reduce((acc, curr) => acc + curr, 0),
      breakdown: breakdownPlayer.slice(0, 1),
    })),
  }));

  // ! the update-enter loop is complicated by the nested structure of the visualization
  const updateTeams = game
    .selectAll('g.teams')
    .data(partialData);

  // add two groups for the teams
  const enterTeams = updateTeams
    .enter();

  const groupTeams = enterTeams
    .append('g')
    .attr('class', 'teams')
    .attr('transform', (d, i) => `translate(${-width / 10 + width / 5 * i} 0)`);

  // include the name of the teams and the score described by the partial data
  groupTeams
    .append('text')
    .attr('class', 'team')
    .attr('x', 0)
    .attr('y', ({ score }) => -teamScale(score))
    .attr('text-anchor', (d, i) => (i === 0 ? 'end' : 'start'))
    .attr('font-size', '12px')
    .attr('font-weight', '700')
    .text(({ name }) => name);

  groupTeams
    .append('text')
    .attr('class', 'score')
    .attr('x', 0)
    .attr('y', ({ score }) => -teamScale(score) + 36)
    .attr('text-anchor', (d, i) => (i === 0 ? 'end' : 'start'))
    .attr('font-size', '36px')
    .attr('font-weight', '900')
    .attr('fill', (d, i) => ((i === 0) ? 'hsl(79, 70%, 40%)' : 'hsl(198, 70%, 40%)'))
    .text(({ score }) => score);

  // update the position of the name, the position and text of the score
  updateTeams
    .select('text.team')
    .attr('y', ({ score }) => -teamScale(score));

  updateTeams
    .select('text.score')
    .attr('y', ({ score }) => -teamScale(score) + 36)
    .text(({ score }) => score);

  // add oe group for each player
  const groupPlayers = updateTeams
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
    // translate the group vertically to position the boxes above one another
    // ! consider the cumulative score accrued by the players
    // scale the boxes for the first team with a negative value to have the rectangles drawn away from the center
    .attr('transform', ({ name, cumulative }) => (partialData[0].players.find(player => player.name === name) ? `scale(-1 1) translate(0 ${-playerScale(cumulative)})` : `translate(0 ${-playerScale(cumulative)})`));

  // ! the width considers the order with which the rectangles are included
  groupPlayers
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', (d, i, { length }) => (width / 3) / length * (length - i))
    .attr('height', ({ score }) => playerScale(score))
    .attr('stroke', 'currentColor')
    .attr('stroke-width', '0.5px')
    .attr('fill', ({ name }) => (partialData[0].players.find(player => player.name === name) ? 'hsl(79, 70%, 40%)' : 'hsl(198, 70%, 40%)'));

  // by default hide the text elements
  groupPlayers
    .append('text')
    .attr('class', 'name')
    .attr('x', 0)
    .attr('y', ({ score }) => playerScale(score) / 2)
    .attr('font-size', '8px')
    .text(({ name }) => name)
    .attr('opacity', 0)
    .attr('text-anchor', ({ name }) => (partialData[0].players.find(player => player.name === name) ? 'end' : 'start'))
    .attr('transform', ({ name }, i, { length }) => (partialData[0].players.find(player => player.name === name) ? `translate(${(width / 3) / length * (length - i) + 5} 0) scale(-1 1)` : `translate(${(width / 3) / length * (length - i) + 5} 0)`));


  // update the position of the groups for the players
  updateTeams
    .selectAll('g.player')
    .attr('transform', ({ name, cumulative }) => (partialData[0].players.find(player => player.name === name) ? `scale(-1 1) translate(0 ${-playerScale(cumulative)})` : `translate(0 ${-playerScale(cumulative)})`));

  // update the size of the players' rectangles
  updateTeams
    .selectAll('g.player')
    .select('rect')
    .attr('height', ({ score }) => playerScale(score));

  // update the position of the players' names
  updateTeams
    .selectAll('g.player')
    .select('text.name')
    .attr('opacity', ({ score }) => (score > 5 ? 1 : 0));


  // update the highlight element to show a line and area below the line connecting the two sides
  // vertically consider the top of the column by using the player scale with the score of the entire team
  const yMin = playerScale(d3.min(partialData, d => d.score));
  const yMax = playerScale(d3.max(partialData, d => d.score));
  const yCoordinate = (yMax - yMin) / 2;

  // horizontally pick the coordinates considering once again the team which scored the most
  // [-width/10, width/10] being the range describing the gap between the columns
  const xCoordinate = (partialData[0].score > partialData[1].score) ? -width / 10 : width / 10;

  const colorShadow = (partialData[0].score > partialData[1].score) ? 'hsl(79, 70%, 50%)' : 'hsl(198, 70%, 50%)';

  // translate the group to center the element between the two scores
  highlight
    .attr('transform', `translate(0 ${(-yMax - yMin) / 2}) scale(0.75)`);

  // update the path element to connect the two sides
  highlight
    .select('path.area')
    .attr('d', `M ${xCoordinate} -${yCoordinate} L ${xCoordinate * -1} ${yCoordinate} H ${xCoordinate}z`)
    .attr('fill', colorShadow)
    .attr('stroke', colorShadow);

  highlight
    .select('path.line')
    .attr('d', `M ${xCoordinate} -${yCoordinate} L ${xCoordinate * -1} ${yCoordinate}`);

  // as long as the visualization doesn't reach the last point call the function with the incremented index
  if (dex < data[0].breakdown.length - 1) {
    const timeoutID = setTimeout(() => {
      showData(dex + 1);
      clearTimeout(timeoutID);
    }, 100);
  }
}

// kickstart the visualization
showData();

// add a line at the bottom of the visualization
game
  .append('path')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 2)
  .attr('d', `M ${-width / 2} 0 H ${width / 2}`);
