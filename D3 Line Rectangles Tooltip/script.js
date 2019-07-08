/*
for each stage the data is structured to provide general information regarding the stage and detailed information for the visualizations
details in the schedule property, highlighting
- noteworthy segments by name
- mountainous segments by a category
! sprint identifies the segment in the schedule which is highlighted through a green triangle

where these properties are not included, the visualization accommodates by showing default values (semi transparent rectangles, straight lines)
*/
const data = [
  {
    stage: 1,
    kilometers: 194.5,
    from: 'Bruxelles',
    to: 'Bruxelles',
    date: 'July 6 2019',
    starting: '12:00',
    ending: '17:10',
    sprint: 'Les Bons Villers',
    schedule: [
      {
        starting: '12:00',
        ending: '13:20',
      },
      {
        name: 'Mur de Grammont',
        starting: '13:20',
        ending: '13:35',
        category: 3,
      },
      {
        name: 'Cote de Bosberg',
        starting: '13:35',
        ending: '13:45',
        category: 4,
      },
      {
        starting: '13:45',
        ending: '15:15',

      },
      {
        name: 'Les Bons Villers',
        starting: '15:15',
        ending: '15:32',
      },
      {
        starting: '15:32',
        ending: '16:22',
      },
      {
        name: 'Tervuren',
        starting: '16:22',
        ending: '16:46',

      },
      {
        name: 'Bruxelles',
        starting: '16:46',
        ending: '17:10',

      },
    ],
  },
  {
    stage: 2,
    kilometers: 27.6,
    from: 'Bruxelles Palais Royal',
    to: 'Bruxelles Atomium',
    date: 'July 7 2019',
    starting: '14:30',
    ending: '16:40',
    schedule: [
      {
        starting: '14:30',
        ending: '16:00',
      },
      {
        name: 'Atomium',
        starting: '16:00',
        ending: '16:40',
      },
    ],
  },
  {
    stage: 3,
    kilometers: 215,
    from: 'Binche',
    to: 'Epernay',
    date: 'July 8 2019',
    starting: '12:10',
    ending: '17:50',
    sprint: 'Dizy-Le-Gros',
    schedule: [
      {
        starting: '12:10',
        ending: '14:42',
      },
      {
        name: 'Dizy-Le-Gros',
        starting: '14:42',
        ending: '14:57',
      },
      {
        starting: '14:57',
        ending: '16:21',
      },
      {
        name: 'Cote de Nanteuil-La-Foret',
        starting: '16:21',
        ending: '16:39',
        category: 4,

      },
      {
        name: 'Cote d\'Hautvillers',
        starting: '16:39',
        ending: '17:00',
        category: 3,

      },
      {
        name: 'Cote de Champillon',
        starting: '17:00',
        ending: '17:12',
        category: 3,

      },
      {
        name: 'Cote de Mutigny',
        starting: '17:12',
        ending: '17:26',
        category: 3,

      },
      {
        name: 'Oiry',
        starting: '17:26',
        ending: '17:30',
      },
      {
        name: 'Epernay',
        starting: '17:30',
        ending: '17:50',
      },
    ],
  },
  {
    stage: 4,
    kilometers: 213.5,
    from: 'Reims',
    to: 'Nancy',
    date: 'July 9 2019',
    starting: '12:10',
    ending: '17:30',
    sprint: 'Lerouville',
    schedule: [
      {
        starting: '12:10',
        ending: '15:06',
      },
      {
        name: 'Cote de Rosieres',
        starting: '15:06',
        ending: '15:22',
        category: 4,
      },
      {
        starting: '15:22',
        ending: '15:41',
      },
      {
        name: 'Lerouville',
        starting: '15:41',
        ending: '16:00',
      },
      {
        starting: '16:00',
        ending: '16:49',
      },
      {
        name: 'Cote de Maron',
        starting: '16:49',
        ending: '17:15',
        category: 4,

      },
      {
        name: 'Villers-Les-Nancy',
        starting: '17:15',
        ending: '17:23',
      },
      {
        name: 'Nancy',
        starting: '17:23',
        ending: '17:30',
      },
    ],
  },
  {
    stage: 5,
    kilometers: 175.5,
    from: 'Saint Die des Vosges',
    to: 'Colmar',
    date: 'July 10 2019',
    starting: '13:10',
    ending: '17:40',
    sprint: 'Heiligenstein',
    schedule: [
      {
        starting: '13:10',
        ending: '14:25',
      },
      {
        name: 'Cote de Grendelbruch',
        starting: '14:25',
        ending: '14:31',
        category: 3,
      },
      {
        starting: '14:31',
        ending: '15:02',
      },
      {
        name: 'Heiligenstein',
        starting: '15:02',
        ending: '15:11',
      },
      {
        starting: '15:11',
        ending: '15:55',
      },
      {
        name: 'Cote du Haut-Koenigsbourg',
        starting: '15:55',
        ending: '16:09',
        category: 2,
      },
      {
        starting: '16:09',
        ending: '16:36',
      },
      {
        name: 'Cote des Trois-Epis',
        starting: '16:36',
        ending: '16:55',
        category: 2,
      },
      {
        name: 'Cote des Cinq-Chateaux',
        starting: '16:55',
        ending: '17:19',
        category: 3,
      },
      {
        name: 'Eguisheim',
        starting: '17:19',
        ending: '17:24',
      },
      {
        name: 'Colmar',
        starting: '17:24',
        ending: '17:40',
      },
    ],
  },
  {
    stage: 6,
    kilometers: 160.5,
    from: 'Mulhouse',
    to: 'La Planche des Belles Filles',
    date: 'July 11 2019',
    starting: '13:00',
    ending: '17:50',
    sprint: 'Linthal',
    schedule: [
      {
        starting: '13:00',
        ending: '14:05',
      },
      {
        name: 'Linthal',
        starting: '14:05',
        ending: '14:08',
      },
      {
        starting: '14:08',
        ending: '14:36',
      },
      {
        name: 'Le Markstein',
        starting: '14:36',
        ending: '14:44',
        category: 1,
      },
      {
        name: 'Grand-Ballon',
        starting: '14:44',
        ending: '14:53',
        category: 3,
      },
      {
        starting: '14:53',
        ending: '15:16',
      },
      {
        name: 'Col du Hundsruck',
        starting: '15:16',
        ending: '15:28',
        category: 2,
      },
      {
        starting: '15:28',
        ending: '16:07',
      },
      {
        name: 'Ballon d\'Alsace',
        starting: '16:07',
        ending: '16:25',
        category: 1,
      },
      {
        name: 'Col des Croix',
        starting: '16:25',
        ending: '16:53',
        category: 3,
      },
      {
        name: 'Col des Chevreres',
        starting: '16:53',
        ending: '17:23',
        category: 2,
      },
      {
        name: 'Planche des Belles Filles',
        starting: '17:23',
        ending: '17:50',
        category: 1,
      },
    ],
  },
  {
    stage: 7,
    kilometers: 230,
    from: 'Belfort',
    to: 'Chalon-sur-Saone',
    date: 'July 12 2019',
    starting: '11:20',
    ending: '17:20',
    sprint: 'Mervans',
    schedule: [
      {
        starting: '11:20',
        ending: '12:26',
      },
      {
        name: 'Col de Ferriere',
        starting: '12:26',
        ending: '12:31',
        category: 4,
      },
      {
        starting: '12:31',
        ending: '13:45',
      },
      {
        name: 'Cote de Chassaigne-Saint-Denis',
        starting: '13:45',
        ending: '13:58',
        category: 3,
      },
      {
        starting: '13:58',
        ending: '14:18',
      },
      {
        name: 'Cote de Nans-sous-Sainte-Anne',
        starting: '14:18',
        ending: '14:34',
        category: 4,
      },
      {
        starting: '14:34',
        ending: '16:03',
      },
      {
        name: 'Mervans',
        starting: '16:03',
        ending: '16:29',
      },
      {
        name: 'La Tuilerie',
        starting: '16:29',
        ending: '16:51',
      },
      {
        name: 'Chalon-sur-Saone',
        starting: '16:51',
        ending: '17:20',
      },
    ],
  },
];

// identify the root node
const viz = d3
  .select('.viz');

// specify global values, shared by every visualization
const margin = {
  top: 20,
  right: 40,
  bottom: 20,
  left: 40,
};
const width = 500 - (margin.left + margin.right);
const height = 70 - (margin.top + margin.bottom);

// for the horizontal scale specify a time scale, spanning the width of the visualization
// ! the domain is specified for each stage depending on its start and end date
const xScale = d3
  .scaleTime()
  .range([0, width]);

// for the vertical scale specify a linear scale, considering the height
// ! for the domain consider the extreme given by the categories, to have higher categories displayed lower smaller ones (a climb of 3rd category is steeper than a 4th one)
// ! the scale is used exclusively for the line segment
const yScale = d3
  .scaleLinear()
  .domain([1, 5]) // 5 as in 1 over the highest category, assigned to all segments with no category at all to push them downwards
  .range([0, height]);

// function called for every item of the data array, to display the information connected to the stage
function displayStage(stage) {
  // specify a div container for the stage
  const container = viz
    .append('div')
    .attr('class', 'stage');

  // add HTML elements introducing the stage by name and number of kilometers
  const { stage: number, kilometers } = stage;

  const header = container
    .append('header');
  header
    .append('h2')
    .text(`Stage ${number} - ${kilometers} Km`);

  // below the header specify the starting/ending location as well as the date
  const { date, from, to } = stage;
  // ! for the date consider an instance of the date object as well as an instance of the current date
  // this last one to include a label if the stage has already been completed
  const stageDate = new Date(date);
  const currentDate = new Date();

  const section = container
    .append('section');

  section
    .append('h3')
    .html(`${stageDate < currentDate ? '<strong>Stage Completed</strong>' : ''} ${from}-${to} <span>- ${date}</span>`);

  // LINE SEGMENT
  // below the HTML elements specify an svg to draw the line segment highlighting the mountaineous segments
  const lineGroup = container
    .append('svg')
    .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
    .append('g')
    .attr('transform', `translate(${margin.left} ${margin.top})`);

  // specify the domain of the horizontal scale from the start to the end of the stage's date
  /* ! the date object can specify the hour in the following format
    July 6 2019 14:32
  */
  const { starting, ending } = stage;
  const startingDate = new Date(`${date} ${starting}`);
  const endingDate = new Date(`${date} ${ending}`);

  xScale
    .domain([startingDate, endingDate]);

  // line function
  // horizontally consider the instance of the date object
  // vertically consider the category
  const line = d3
    .line()
    .x(({ time }) => xScale(time))
    .y(({ category }) => yScale(category))
    .curve(d3.curveStepAfter);

  // data massaging
  // the line function requires an instance of the date object in the `time` property
  // most importantly, each step needs to consider the category from the starting hour to the ending hour of the segment
  // for each item of the category array create two points, detailing the starting and ending value
  const { schedule } = stage;
  const scheduleData = schedule.reduce((acc, curr) => {
    const {
      starting: start, ending: end, name, category,
    } = curr;

    const startingStep = new Date(`${date} ${start}`);
    const endingStep = new Date(`${date} ${end}`);

    // ! where the category is undefined include a default value of 5, representing the lowest category drawn at the bottom of the line chart
    const step = [
      {
        name,
        time: startingStep,
        category: category || 5,
      },
      {
        name,
        time: endingStep,
        category: category || 5,
      },
    ];
    // spread the arrays to specify a single array for all data points
    return [...acc, ...step];
  }, []);

  // include a path element drawing the line
  lineGroup
    .append('path')
    .attr('d', line(scheduleData))
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', '0.5');

  // on top of the line, include circle elements at the beginning and ending values
  const startEndGroup = lineGroup
    .selectAll('g.start-end')
    .data([startingDate, endingDate])
    .enter()
    .append('g')
    .attr('class', 'start-end')
    // translate the circles at the height of the line
    .attr('transform', `translate(0 ${height})`);

  // for each group add a small black circle and a label describing the starting hour and minutes
  startEndGroup
    .append('circle')
    .attr('cx', d => xScale(d))
    .attr('cy', 0)
    .attr('r', 2)
    .attr('fill', '#000');

  startEndGroup
    .append('text')
    .attr('x', d => xScale(d))
    .attr('y', -5)
    .attr('text-anchor', (d, i) => (i === 0 ? 'end' : 'start'))
    .text(d => (d.getMinutes() > 0 ? `${d.getHours()}h ${d.getMinutes()}m` : `${d.getHours()}h`))
    .attr('fill', '#000')
    .attr('font-size', '0.6rem');

  // on top of the line, include also circle elements to highlight the mountainous segment
  // data massaging
  // from the schedule array consider only the items with a category
  const climbsData = schedule.filter(({ category }) => category).map(({
    name, starting: start, ending: end, category,
  }) => {
    // ! for the time consider the midpoint between start and end date
    const startingStep = new Date(`${date} ${start}`);
    const endingStep = new Date(`${date} ${end}`);

    return ({
      name,
      time: new Date((startingStep.getTime() + endingStep.getTime()) / 2),
      category,
      start,
      end,
    });
  });

  // add a group for each climb
  const climbsGroup = lineGroup
    .selectAll('g.climb')
    .data(climbsData)
    .enter()
    .append('g')
    .attr('class', 'climb')
    // horizontally position the group according to the date instance
    // vertically position the group according to the category
    .attr('transform', d => `translate(${xScale(d.time)} ${yScale(d.category)})`);

  // for each group include a small red circle and a red label describing the category
  climbsGroup
    .append('circle')
    .attr('cx', 0)
    .attr('cy', 0)
    .attr('r', 4)
    .attr('fill', '#fff')
    .attr('stroke', '#f00')
    .attr('stroke-width', '1.5');

  climbsGroup
    .append('text')
    .attr('x', 0)
    .attr('y', -8)
    .attr('text-anchor', 'middle')
    .attr('font-weight', 'bold')
    .attr('fill', '#f00')
    .attr('font-size', '0.7rem')
    .text(({ category }) => category);

    // RECTANGLES
  // identify the segment described by the sprint property, if existing
  const { sprint } = stage;

  // below the SVG detailing the line segment, include another vector graphic for the rectangles stacked horizontally
  const rectGroup = container
    .append('svg')
    .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`)
    .append('g')
    // avoid vertical margin to have the visualization cover a smaller height
    .attr('transform', `translate(${margin.left} 0)`);

  // add a group for each item of the schedule array
  const rectanglesGroup = rectGroup
    .selectAll('g')
    .data(schedule)
    .enter()
    .append('g')
    // translate the group horizontally according to the starting value
    .attr('transform', ({ starting: start }) => `translate(${xScale(new Date(`${date} ${start}`))} 0)`);

  // add a colored rectangle spanning the width given by the start and end values
  rectanglesGroup
    .append('rect')
    .attr('x', 0)
    .attr('y', 0)
    .attr('width', ({ starting: start, ending: end }) => xScale(new Date(`${date} ${end}`)) - xScale(new Date(`${date} ${start}`)))
    .attr('height', height / 2)
    .attr('fill', 'hsl(44, 100%, 60%)')
    // opacity according to whether or not the segment is named
    .attr('opacity', ({ name }) => (name ? 1 : 0.25));


  // if a sprint exist include a triangle and label for the matching segment
  if (sprint) {
    const { starting: start, ending: end } = schedule.find(({ name }) => name === sprint);
    const startingStep = new Date(`${date} ${start}`);
    const endingStep = new Date(`${date} ${end}`);
    // horizontally centered in the segment
    const time = new Date((startingStep.getTime() + endingStep.getTime()) / 2);

    const sprintGroup = rectGroup
      .append('g')
      .attr('transform', `translate(${xScale(time)} ${height / 2})`);

    sprintGroup
      .append('path')
      .attr('d', 'M -7.5 0 l 7.5 -10 l 7.5 10 z')
      .attr('fill', 'hsl(123, 44%, 81%)')
      .attr('stroke', '#ffffff')
      .attr('stroke-width', 2);

    sprintGroup
      .append('text')
      .attr('x', 0)
      .attr('y', 10)
      .attr('font-size', '0.65rem')
      .attr('text-anchor', 'middle')
      .attr('font-style', 'italic')
      .text('Intermediate Sprint');
  }

  // include a line to separate the visualizations
  rectGroup
    .append('path')
    .attr('d', `M 0 ${height} h ${width}`)
    .attr('fill', 'none')
    .attr('stroke', 'currentColor')
    .attr('stroke-width', '1')
    .attr('opacity', 0.2);
}

// for each item of the array call the displayStage function passing the item as argument
data.forEach(stage => displayStage(stage));
