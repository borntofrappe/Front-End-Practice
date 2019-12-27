// data describing an increase in depth for every ul element
const data = {
  name: '🌟',
  children: [
    {
      name: '🌲',
    },
    {
      name: '🌲',
      children: [
        {
          name: '🌲',
        },
        {
          name: '🌲',
        },
        {
          name: '🌲',
          children: [
            {
              name: '🌲',
            },
            {
              name: '🌲',
            },
            {
              name: '🌲',
            },
            {
              name: '🌲',
            },
            {
              name: '🌲',
              children: [
                {
                  name: '🌲',
                },
                {
                  name: '🌲',
                },
                {
                  name: '🌲',
                },
                {
                  name: '🌲',
                },
                {
                  name: '🌲',
                },
                {
                  name: '🌲',
                },
              ],
            },
          ],
        },
      ],
    },
  ],
};

// create a tree-like diagram expanding vertically
const margin = 30;
const width = 600;
const height = 400;

const root = d3
  .select('body')
  .append('div')
  .attr('id', 'root');

const svg = root
  .append('svg')
  .attr('viewBox', `0 0 ${width + margin * 2} ${height + margin * 2}`)
  .attr('width', width)
  .attr('height', height);

const group = svg
  .append('g')
  .attr('transform', `translate(${margin} ${margin})`);

const hierarchy = d3.hierarchy(data);
const tree = d3.tree().size([width, height]);

const treeData = tree(hierarchy);

// add one path element for each link
// ! keep track of the x and y coordinate for each last child
// this is used to manufacture the crude shape-outside property
const links = group.append('g').attr('class', 'links');

links
  .selectAll('path.link')
  .data(treeData.links())
  .enter()
  .append('path')
  .attr('class', 'link')
  .attr('stroke', 'currentColor')
  .attr('fill', 'none')
  .attr('stroke-width', '2')
  .attr(
    'd',
    d3
      .linkVertical()
      .x(d => d.x)
      .y(d => d.y)
  );

// add a text element for the star and the trees
// for the root node and every last child take note of the x and y coordinates
const coordinates = [];
const descendants = group
  .selectAll('g.descendant')
  .data(treeData.descendants())
  .enter()
  .append('g')
  .attr('class', 'descendant')
  .attr('transform', d => {
    const { x, y, parent } = d;
    if (!parent || parent.children[d.parent.children.length - 1] === d) {
      coordinates.push([x, y]);
    }

    return `translate(${x} ${y})`;
  });

descendants
  .append('text')
  .attr('text-anchor', 'middle')
  .attr('font-size', '45')
  .attr('y', 10)
  .attr('fill', 'black')
  .text(d => d.data.name);

// float the svg to the left and add a shape-outside property
// compute the percentages from the coordinates and the width/height of the svg
const percentages = coordinates.map(([x, y]) => [
  Math.ceil((x / width) * 100),
  Math.ceil((y / height) * 100),
]);

// comma separated values
const syntax = percentages.reduce((acc, [x, y]) => `${acc}, ${x}% ${y}%`, '');
svg
  .style('float', 'left')
  // define the edges of the shape starting in the top left corner of the svg
  .style(
    'shape-outside',
    `polygon(0% 0%, ${percentages[0][0]}% 0% ${syntax}, 0% 100%)`
  )
  // to avoid overlaps, increase the margin from the defined shape
  .style('shape-margin', '4.5rem');

// add markup to introduce the project and most importantly wrap around the svg
const div = root.append('div');

div.append('h1').text('DTree');
div
  .append('p')
  .text('With this project I set out to create an entry for the current ')
  .append('strong')
  .text('codepenchallenge.');

div
  .append('p')
  .html(
    'The <a href="https://codepen.io/challenges/2019/december/4">topic of week</a> is quite suited for a data viz using <code>d3-hierarchy</code> and a tree structure.'
  );

div
  .append('p')
  .html(
    '<code>shape-outside</code> is an added bonus. I tried to use the position of the elements on the right side to define a polygon around the visualization.'
  );

div
  .append('p')
  .text(
    'In browsers supporting the feature. In viewports large enough. The text should wrap.'
  );
