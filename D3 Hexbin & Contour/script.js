/* eslint-disable func-names */
/* globals d3 */
// data describing the length and width of the petals for three subspecies of the iris flowers
const data = [
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.7,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.1,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.2,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.7,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.7,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.7,
    width: 0.5,
    species: 'setosa',
  },
  {
    length: 1.9,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.2,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.1,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.3,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.6,
    species: 'setosa',
  },
  {
    length: 1.9,
    width: 0.4,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.3,
    species: 'setosa',
  },
  {
    length: 1.6,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.5,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 1.4,
    width: 0.2,
    species: 'setosa',
  },
  {
    length: 4.7,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.9,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.6,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.7,
    width: 1.6,
    species: 'versicolor',
  },
  {
    length: 3.3,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.6,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 3.9,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 3.5,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.2,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.7,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 3.6,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.4,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.1,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 3.9,
    width: 1.1,
    species: 'versicolor',
  },
  {
    length: 4.8,
    width: 1.8,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.9,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.7,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 4.3,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.4,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 4.8,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 5,
    width: 1.7,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 3.5,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 3.8,
    width: 1.1,
    species: 'versicolor',
  },
  {
    length: 3.7,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 3.9,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 5.1,
    width: 1.6,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.5,
    width: 1.6,
    species: 'versicolor',
  },
  {
    length: 4.7,
    width: 1.5,
    species: 'versicolor',
  },
  {
    length: 4.4,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.1,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.4,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 4.6,
    width: 1.4,
    species: 'versicolor',
  },
  {
    length: 4,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 3.3,
    width: 1,
    species: 'versicolor',
  },
  {
    length: 4.2,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.2,
    width: 1.2,
    species: 'versicolor',
  },
  {
    length: 4.2,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 4.3,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 3,
    width: 1.1,
    species: 'versicolor',
  },
  {
    length: 4.1,
    width: 1.3,
    species: 'versicolor',
  },
  {
    length: 6,
    width: 2.5,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 5.9,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.8,
    width: 2.2,
    species: 'virginica',
  },
  {
    length: 6.6,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 4.5,
    width: 1.7,
    species: 'virginica',
  },
  {
    length: 6.3,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.8,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 6.1,
    width: 2.5,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 2,
    species: 'virginica',
  },
  {
    length: 5.3,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 5.5,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 5,
    width: 2,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 2.4,
    species: 'virginica',
  },
  {
    length: 5.3,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.5,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 6.7,
    width: 2.2,
    species: 'virginica',
  },
  {
    length: 6.9,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5,
    width: 1.5,
    species: 'virginica',
  },
  {
    length: 5.7,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 4.9,
    width: 2,
    species: 'virginica',
  },
  {
    length: 6.7,
    width: 2,
    species: 'virginica',
  },
  {
    length: 4.9,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.7,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 6,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 4.8,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 4.9,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 5.8,
    width: 1.6,
    species: 'virginica',
  },
  {
    length: 6.1,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 6.4,
    width: 2,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 2.2,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 1.5,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 1.4,
    species: 'virginica',
  },
  {
    length: 6.1,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 2.4,
    species: 'virginica',
  },
  {
    length: 5.5,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 4.8,
    width: 1.8,
    species: 'virginica',
  },
  {
    length: 5.4,
    width: 2.1,
    species: 'virginica',
  },
  {
    length: 5.6,
    width: 2.4,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 5.9,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.7,
    width: 2.5,
    species: 'virginica',
  },
  {
    length: 5.2,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5,
    width: 1.9,
    species: 'virginica',
  },
  {
    length: 5.2,
    width: 2,
    species: 'virginica',
  },
  {
    length: 5.4,
    width: 2.3,
    species: 'virginica',
  },
  {
    length: 5.1,
    width: 1.8,
    species: 'virginica',
  },
];


// BOTH VISUALIZATIONS
// describe the margin and size(s) of the svg element
const margin = {
  top: 40,
  right: 55,
  bottom: 40,
  left: 55,
};

const width = 700 - (margin.right + margin.left);
const height = 500 - (margin.top + margin.bottom);

// describe the scales and axes (they are later added with the .call() function on each separate visualization)
// x scale: petal width
const xScale = d3
  .scaleLinear()
  // consider the maximum value found in the dataset
  .domain([0, d3.max(data, d => d.width)])
  .range([0, width])
  .nice();

// y scale: petal length
const yScale = d3
  .scaleLinear()
  .domain([0, d3.max(data, d => d.length)])
  // given the top-down coordinate system of the svg element invert the range
  .range([height, 0])
  .nice();

// describe axes to show the length and width in centimeters
const xAxis = d3
  .axisBottom(xScale)
  .ticks(7)
  .tickPadding(4)
  .tickFormat(d => `${d}cm`);

const yAxis = d3
  .axisLeft(yScale)
  .ticks(4)
  .tickPadding(4)
  .tickFormat(d => `${d}cm`);

// describe the fill according to the sub-specie of flower
const fill = {
  setosa: 'hsl(360, 40%, 45%)',
  versicolor: 'hsl(300, 40%, 45%)',
  virginica: 'hsl(240, 40%, 45%)',
};


// HEXBIN
// in the .viz__hexbin container add an svg element for the first visualization
const vizHexbin = d3
  .select('.viz__hexbin');

const svgHexbin = vizHexbin
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.right + margin.left)} ${height + (margin.top + margin.bottom)}`);

const groupHexbin = svgHexbin
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// include the axes
groupHexbin
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

groupHexbin
  .append('g')
  .attr('class', 'axis y-axis')
  .call(yAxis);

// define the hexbin function to consider the data points' values
const hexbin = d3
  .hexbin()
  .radius(10) // a greater radius means a greater aggregation of data points (practically it means fewer, bigger hexagons)
  .x(d => xScale(d.width))
  .y(d => yScale(d.length))
  .size([width, height]); // the size is helpful to build the mesh

// include the mesh and hide it by default
groupHexbin
  .append('path')
  .attr('class', 'mesh')
  .attr('d', hexbin.mesh())
  .attr('fill', 'none')
  .attr('opacity', 0)
  .attr('stroke', 'currentColor');

/* add an hexagon for each data point
 the hexbin(data) function creates an array aggregating the data point
 the x and `y` property are added to describe the origin of the shape
*/
groupHexbin
  .selectAll('path.hexagon')
  .data(hexbin(data)) // the hexbin function creates an array aggregating the data points
  .enter()
  .append('path')
  .attr('class', 'hexagon')
  .attr('d', hexbin.hexagon())
  .attr('transform', ({ x, y }) => `translate(${x} ${y})`)
  .attr('fill', d => fill[d[0].species]);

// when the checkbox for the first viz is checked show the mesh behind the hexagons
d3
  .select('input#mesh')
  .on('input', function () {
    const { checked } = this;
    if (checked) {
      d3
        .select('path.mesh')
        .attr('opacity', 0.7);
    } else {
      d3
        .select('path.mesh')
        .attr('opacity', 0);
    }
  });


// CONTOUR
// the process replicates much of the logic introduced for the hexbin
// add an svg element
const vizContour = d3
  .select('.viz__contour');

const svgContour = vizContour
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.right + margin.left)} ${height + (margin.top + margin.bottom)}`);

const groupContour = svgContour
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// include the axes
groupContour
  .append('g')
  .attr('class', 'axis x-axis')
  .attr('transform', `translate(0 ${height})`)
  .call(xAxis);

groupContour
  .append('g')
  .attr('class', 'axis y-axis')
  .call(yAxis);

// define the contour function to estimate the density of the dataset
const contour = d3
  .contourDensity()
  .x(d => xScale(d.width))
  .y(d => yScale(d.length))
  .size([width, height]);

/* to visualize the subspecies with a different color massage the data to describe the petals as follows:

{
  setosa: [
    {
      width,
      length
    },
    {
      width,
      length
    },
    ...
  ],
  versicolor: [
    ...
  ],
  ...
}

for each subspecies describing an array of objects detailing the flower's values
*/
const contourData = data.reduce((acc, curr) => {
  // if the species is already included in the accumulator push the data point's width and length in the array
  const { species } = curr;
  if (acc[species]) {
    acc[species].push({ width: curr.width, length: curr.length });
  } else {
    // else initialize the property with an empty array
    acc[species] = [];
  }
  return acc;
}, {});

// create a multidimensional array to bind both the species and values in the svg element
// [species, values], where values is the array of objects
const contourDataEntries = Object.entries(contourData);
const contourDataGroups = groupContour
  .selectAll('g.species')
  .data(contourDataEntries)
  .enter()
  .append('g')
  .attr('class', 'species')
  .attr('fill', ([species]) => fill[species]); // the fill cascades down to the nested elements, and specifically the density area

// returns an array of objects of type MultiPolygon, a value describing the density and an array describing the coordinates
// console.log(contour(data));
/* the contour() function, when the data is passed as argument, provides an array of objects
  {
    type: 'MultiPolygon',
    coordinates,
    value
  }

  while the value describes the density, the coordinates can be used by the geoPath generator function to draw the desired shapes
*/

// create a linear scale mapping the density values to a range of [0, 1]
const valueScale = d3
  .scaleLinear()
  // ! use the entire dataset and not the dataset separated by subspecies to consider the maximum value between all flowers
  .domain([0, d3.max(contour(data), ({ value }) => value)])
  .range([0, 1]);

// add the areas using the valueScale to describe the opacity
// ! the fill is inherited from the parent container
contourDataGroups
  .selectAll('path.areas')
  .data(([, points]) => contour(points))
  .enter()
  .append('path')
  .attr('class', 'areas')
  .attr('opacity', ({ value }) => valueScale(value))
  .attr('d', d3.geoPath());

// include path elements describing the contours of the density areas
// lines hidden by default
contourDataGroups
  .selectAll('path.lines')
  .data(([, points]) => contour(points))
  .enter()
  .append('path')
  .attr('class', 'lines')
  .attr('opacity', 0)
  .attr('fill', 'none')
  .attr('stroke', 'currentColor')
  .attr('d', d3.geoPath());

// when the checkbox for the second visualization is checked toggle the opacity of the lines delimiting the density areas
d3
  .select('input#lines')
  .on('input', function () {
    const { checked } = this;
    if (checked) {
      d3
        .selectAll('path.lines')
        .attr('opacity', 0.7);
    } else {
      d3
        .selectAll('path.lines')
        .attr('opacity', 0);
    }
  });


// BOTH VISUALIZATIONS
// once the visualizations are set up, style the axes
// remove the path elements describing the axes and the line elements behind the ticks
d3
  .selectAll('g.axis')
  .selectAll('path')
  .remove();

d3
  .selectAll('g.axis')
  .selectAll('line')
  .remove();

// remove the first tick from both axes and add a single '0cm' shared by both
d3
  .selectAll('g.axis')
  .select('g.tick')
  .remove();

d3
  .selectAll('g.x-axis')
  .append('text')
  .attr('x', -18)
  .attr('y', 18)
  .text('0cm');

// add grid lines for the existing ticks
d3
  .selectAll('g.x-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('stroke', 'currentColor')
  .attr('fill', 'none')
  .attr('d', `M 0 0 v${-height}`);

d3
  .selectAll('g.y-axis')
  .selectAll('g.tick')
  .append('path')
  .attr('stroke', 'currentColor')
  .attr('fill', 'none')
  .attr('d', `M 0 0 h${width}`);

// style the grid lines
d3
  .selectAll('g.axis')
  .selectAll('g.tick')
  .select('path')
  .attr('stroke-width', '2')
  .attr('stroke-dasharray', '5')
  .attr('opacity', 0.1);

// include two labels for the axes
d3
  .selectAll('g.x-axis')
  .append('text')
  .attr('class', 'label')
  .attr('x', width / 2)
  .attr('y', margin.bottom)
  .attr('text-anchor', 'middle')
  .text('Petal\'s Width');

d3
  .selectAll('g.y-axis')
  .append('text')
  .attr('class', 'label')
  .attr('x', -margin.left + 5)
  .attr('y', height / 2)
  .attr('text-anchor', 'middle')
  .style('writing-mode', 'vertical-rl')
  .text('Petal\'s Length');
