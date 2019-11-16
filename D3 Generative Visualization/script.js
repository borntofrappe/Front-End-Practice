const watchThis = 'https://www.learnwithjason.dev/generative-data-visualization-design-and-planning';
const followThem = {
  jason: 'https://twitter.com/jlengstorf',
  shirley: 'https://twitter.com/sxywu',
};

/* setting up the project with a random dataset */

// to build a random dataset, start with an array of hard coded values
const adjective = [
  'insightful',
  'inspiring',
  'motivational',
  'encouraging',
  'teaching',
  'whimsical',
  'practical',
  'uplifting',
  'cheerful',
  'playful',
  'charismatic',
];
const noun = ['story', 'novel', 'movie', 'series', 'book', 'tale', 'history'];
const color = [
  'crimson',
  'coral',
  'moccasin',
  'chartreuse',
  'turquoise',
  'navy',
  'lavender',
  'pink',
  'ivory',
  'silver',
  'chocolate',
];
const animal = [
  'chicken',
  'lamb',
  'turtle',
  'hummingbird',
  'narwhal',
  'albatross',
  'kangaroo',
  'hamster',
  'porcupine',
  'moose',
  'panther',
];

// array describing three ordinal values
const levels = ['beginner', 'intermediate', 'advanced'];

// array describing categorical values and most importantly their color values
// ! this is a task better solved by a color scale
const topics = [
  {
    name: 'romance',
    color: 'hsl(0, 80%, 60%)',
  },
  {
    name: 'comedy',
    color: 'hsl(90, 80%, 50%)',
  },
  {
    name: 'tragedy',
    color: 'hsl(180, 80%, 60%)',
  },
  {
    name: 'other',
    color: 'hsl(270, 80%, 60%)',
  },
];

// utility function returning an integer up to an optional maximum
const randomInteger = (max = 1) => Math.floor(Math.random() * max);
// utility function returning a random item from an array
const randomItem = arr => arr[randomInteger(arr.length)];

// function generating the title for each data point, from the hard coded arrays
const randomTitle = () =>
  `The ${randomItem(adjective)} ${randomItem(noun)} of the ${randomItem(
    color
  )} ${randomItem(animal)}`;

// function returning the individual data point describing the prescribed metrics
const randomMetrics = () => ({
  title: randomTitle(),
  views: randomInteger(20000),
  shares: randomInteger(1000),
  twitter: randomInteger(5000),
  level: randomItem(levels),
  topic: randomItem(topics),
  isTeaching: Math.random() > 0.5,
});

// build the array using the utility functions
const datapoints = 20;
const data = Array(datapoints)
  .fill()
  .map(() => randomMetrics());


/* d3 code */

/* SCALES */
// create three linear scales for the views, shares and twitter following
// mapping to a range of [x, 1] to later scale the appropriate group elements
const range = [0.4, 1];

const scaleViews = d3
  .scaleLinear()
  .domain(d3.extent(data, ({ views }) => views))
  .range(range);

const scaleShares = d3
  .scaleLinear()
  .domain(d3.extent(data, ({ shares }) => shares))
  .range(range);

const scaleTwitter = d3
  .scaleLinear()
  .domain(d3.extent(data, ({ twitter }) => twitter))
  .range(range);

/* DOM ELEMENTS */
// following a couple of html element, include the elements for the data points
// add a heading and a container in the #root node
const root = d3.select('#root');
root
  .append('h1')
  .text('Generative data viz')
  .style('text-anchor', 'middle');

root
  .append('p')
  .html(
    `Inspired by <a href="${watchThis}">this insightful stream</a> from <a href="${
      followThem.jason
    }">Jason Lengstorf</a> and <a href="${followThem.shirley}">Shirley Wu</a>.`
  );

// include the data points in a wrapping flex container
const container = root
  .append('div')
  .style('display', 'flex')
  .style('flex-wrap', 'wrap')
  .style('justify-content', 'center');

// include the datapoints in an article element
// this allows to have the svg atop a heading describing the title of the data point
const articles = container
  .selectAll('article')
  .data(data)
  .enter()
  .append('article')
  .style('display', 'flex')
  .style('flex-direction', 'column')
  .style('align-items', 'center')
  .style('margin', '1rem')
  .style('max-width', '180px');

/* the following replicates this illustration with d3
https://codepen.io/borntofrappe/pen/abbQgOp

it is a rather tedious process which can be definitely improved with a framework
*/
const svg = articles
  .append('svg')
  .attr('viewBox', '0 0 200 200')
  .attr('width', '100%');

const groupCenter = svg.append('g').attr('transform', 'translate(100 0)');

const groupStars = groupCenter
  .append('g')
  .attr('transform', 'translate(0 10)')
  .attr('fill', 'hsl(0, 0%, 100%)')
  .attr('stroke', 'hsl(160, 80%, 60%)')
  .attr('stroke-width', '2');

// include one, three, five stars according to the level
// this is a bit hacky, and there must be a better way to include 1-2-3 stars according to the level
const stars = groupStars
  .selectAll('g.stars')
  .data(d => levels.slice(0, levels.findIndex(level => level === d.level) + 1))
  .enter()
  .append('g')
  .attr('class', 'stars');

stars
  .append('path')
  .attr(
    'd',
    'M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10'
  )
  .attr('transform', (d, i) => `translate(${i * 25} ${i * 15})`);

stars
.append('path')
  .attr(
    'd',
    'M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10'
  )
  .attr('transform', (d, i) => `scale(-1 1) translate(${i * 25} ${i * 15})`);


const groupHalo = groupCenter
  .append('g')
  .attr('transform', 'translate(0 65)')
  .attr('fill', 'hsl(50, 95%, 60%)');

// scale the halo according to the shares
const groupShares = groupHalo
  .append('g')
  .attr('transform', ({ shares }) => `scale(${scaleShares(shares)})`);

// ! the reference for use element is repeated across svg elements
// in this project I decided to change the id to be unique to the title being used, but it might be best to make due without <use> elements
groupShares
  .append('ellipse')
  .attr('id', ({ title }) => `ellipse-${title.replace(' ', '-')}`)
  .attr('cy', '-4')
  .attr('rx', '50')
  .attr('ry', '15');

groupShares
  .append('use')
  .attr('href', ({ title }) => `#ellipse-${title.replace(' ', '-')}`)
  .attr('fill', 'hsl(0, 0%, 100%)')
  .attr('transform', 'scale(0.7 0.6)');

const groupBucket = groupCenter
  .append('g')
  .attr('transform', 'translate(0 150)');

// scale the bucket according to the views
const groupViews = groupBucket
  .append('g')
  .attr('transform', ({ views }) => `scale(${scaleViews(views)})`);

groupViews
  .append('path')
  .attr(
    'd',
    'M -50 -55 l 10 95 a 100 100 0 0 0 80 0 l 10 -95 a 120 120 0 0 0 -100 0 110 110 0 0 0 100 0'
  )
  .attr('fill', 'hsl(0, 0%, 100%)')
  .attr('stroke', 'hsl(0, 0%, 25%)')
  .attr('stroke-width', '3')
  .attr('stroke-linejoin', 'round');

// color the jam according to the topic's color
groupViews
  .append('path')
  .attr(
    'd',
    'M -47 -55 a 108 108 0 0 0 94 0 q -9.9 -5 -18.8 0 t -18.8 0 t -18.8 0 t -18.8 0 t -18.8 0'
  )
  .attr('fill', d => d.topic.color);

// ! the reference for use element is repeated across svg elements
// in this project I decided to change the id to be unique to the title being used, but it might be best to make due without <use> elements
groupViews
  .append('circle')
  .attr('id', ({ title }) => `eye-${title.replace(' ', '-')}`)
  .attr('fill', 'hsl(0, 0%, 25%)')
  .attr('cx', '15')
  .attr('cy', '-20')
  .attr('r', '5');

groupViews
  .append('use')
  .attr('href', ({ title }) => `#eye-${title.replace(' ', '-')}`)
  .attr('transform', 'scale(-1 1)');

// hide the mustache when the data point has the corresponding boolean set to false
// ! ideally you wouldn't add the group altogether
const groupMustache = groupViews
  .append('g')
  .attr('opacity', d => (d.isTeaching ? 1 : 0))
  .attr('class', 'mustache');

// ! the reference for use element is repeated across svg elements
// in this project I decided to change the id to be unique to the title being used, but it might be best to make due without <use> elements
groupMustache
  .append('path')
  .attr('id', ({ title }) => `mustache-${title.replace(' ', '-')}`)
  .attr('d', 'M 0 0 c 14 -9 14 10 18 9 q -14 5 -20 -9')
  .attr('fill', 'hsl(0, 0%, 25%)')
  .attr('stroke', 'hsl(0, 0%, 25%)')
  .attr('stroke-width', '2')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round');

groupMustache
  .append('use')
  .attr('href', ({ title }) => `#mustache-${title.replace(' ', '-')}`)
  .attr('transform', 'scale(-1 1)');

groupViews
  .append('path')
  .attr('d', 'M -48 -20 a 48 48 0 0 0 96 0')
  .attr('fill', 'none')
  .attr('stroke', 'hsl(0, 0%, 25%)')
  .attr('stroke-width', '3')
  .attr('stroke-linecap', 'round');

const groupWings = groupCenter
  .append('g')
  .attr('transform', 'translate(0 145)');

// ! the reference for use element is repeated across svg elements
// in this project I decided to change the id to be unique to the title being used, but it might be best to make due without <use> elements
const groupWing = groupWings
  .append('g')
  .attr('id', ({ title }) => `wing-${title.replace(' ', '-')}`)
  .attr('transform', 'translate(52 0) rotate(10)');

// scale the group nesting the path element according to the tweets
const groupTwitter = groupWing
  .append('g')
  .attr('transform', ({ twitter }) => `scale(${scaleTwitter(twitter)})`);

groupTwitter
  .append('path')
  .attr(
    'd',
    'M 0 0 v -20 q 0 -25 35 -25 q 0 20 -20 20 h 10 q 0 15 -15 15 h 5 q 0 10 -15 10'
  )
  .attr('fill', 'hsl(0, 0%, 100%)')
  .attr('stroke', 'hsl(200, 80%, 55%)')
  .attr('stroke-width', '3')
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round');

groupWings
  .append('use')
  .attr('href', ({ title }) => `#wing-${title.replace(' ', '-')}`)
  .attr('transform', 'scale(-1 1)');

articles
  .append('h2')
  .text(({ title }) => title)
  .style('font-size', '1rem')
  .style('font-weight', '500')
  .style('margin-top', '0.5rem');
