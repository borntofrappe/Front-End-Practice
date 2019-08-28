// CREATE DATA
// function returning a random value between 0, 1, 2 and 3
// considering the scoring achievable in a basketball game (0 for a missing shot)
const randomPoint = () => Math.floor(Math.random() * 4);

// array describing the initial data with one object for each team
// the idea is to have a player and team score and have the visualization updated accordingly
const data = [
  /*
  each object has a few root properties
    name
    score
    breakdown

  as well as players, referencing an array of objects with additional properties
  */
  {
    name: 'Turtles',
    score: 0, // score will keep track of the total number of points
    breakdown: [], // breakdown will describe each set of point scored in the game (0, 1, 2, 3)
    players: [
      /* for each player repeat the structure used for the team
      ! in addition to the score and breakdown properties add weight, describing the likelihood of the player taking a show
      the idea is to use Math.random() and a comparison to decide which player in the team scores (the higher the weight, the higher the likelihood of the player scoring)
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
        weight: 0.7, // consider the _cumulative_ weight (0.7 as in 0.4 for the previous player + 0.3 for the current one)
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

// number of data points included in each `breakdown` array
// the idea is to consider one team, one player, one set of points
// increase then the score of the specific player and team, while adding a 0 to every other player, every other team
const dataPoints = 200;

for (let i = 0; i < dataPoints; i += 1) {
  // a random set of point
  const point = randomPoint();
  // index referring to the scoring and other team
  const indexTeam = Math.floor(Math.random() * data.length);
  const indexOtherTeam = indexTeam === 0 ? 1 : 0;

  // increase the score of the team
  // add the score to the respective breakdown array, whilst adding 0 to the remaining one
  data[indexTeam].score += point;
  data[indexTeam].breakdown.push(point);
  data[indexOtherTeam].breakdown.push(0);

  // find the players of the scoring team
  const { players } = data[indexTeam];

  // consider a random value to pick the player scoring a point
  const weightPlayer = Math.random();
  // increase the score of the described player
  const indexPlayer = players.findIndex(({ weight }) => weight >= weightPlayer);
  data[indexTeam].players[indexPlayer].score += point;
  // add the point to the breakdown array of the selected player
  // add 0 to the other players
  players.forEach((player, index) => {
    if (index === indexPlayer) {
      player.breakdown.push(point);
    } else {
      player.breakdown.push(0);
    }
  });
  const { players: otherPlayers } = data[indexOtherTeam];
  otherPlayers.forEach((player) => {
    player.breakdown.push([0]);
  });
}

// VISUALIZE DATA
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
  .text(`Junior finals - ${(new Date()).toDateString()}`);

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
  .domain([0, d3.max(data, ({ score }) => score) * 1.05]) // 5% more to create some distance from the text above the visualization
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
  .domain(teamScale.domain())
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
// to have the line connect the two sides, but occupy a portion of the available width, include the path elements in a group element
// translate the group element in the center of the line, so that by scaling the group the line is scaled uniformly

// vertically consider the top of the column by using the player scale with the score of the entire team
const yMin = playerScale(d3.min(data, d => d.score));
const yMax = playerScale(d3.max(data, d => d.score));
const yCoordinate = (yMax - yMin) / 2;

// horizontally pick the coordinates considering once again the team which scored the most
// [-width/10, width/10] being the range describing the gap between the columns
const xCoordinate = (data[0].score > data[1].score) ? -width / 10 : width / 10;

const colorShadow = (data[0].score > data[1].score) ? 'hsl(79, 70%, 50%)' : 'hsl(198, 70%, 50%)';
const summary = game
  .append('g')
  .attr('transform', `translate(0 ${(-yMax - yMin) / 2}) scale(0.75)`);

// area below the line
summary
  .append('path')
  .attr('d', `M ${xCoordinate} -${yCoordinate} L ${xCoordinate * -1} ${yCoordinate} H ${xCoordinate}z`)
  .attr('fill', colorShadow)
  .attr('stroke', colorShadow)
  .attr('stroke-width', '1.5')
  .attr('opacity', 0.4);

// line
summary
  .append('path')
  .attr('d', `M ${xCoordinate} -${yCoordinate} L ${xCoordinate * -1} ${yCoordinate}`)
  .attr('stroke', 'currentColor')
  .attr('stroke-width', '1.5')
  .attr('stroke-linecap', 'round');

// above every element a line at the bottom of the visualization
game
  .append('path')
  .attr('stroke', 'currentColor')
  .attr('stroke-width', 2)
  .attr('d', `M ${-width / 2} 0 H ${width / 2}`);
