// utility functions to generate a random data point
const randomInt = (max = 10) => Math.floor(Math.random() * max);
const randomLetter = () => String.fromCharCode(Math.floor(Math.random() * ('Z'.charCodeAt() - 'A'.charCodeAt()) + 'A'.charCodeAt()));
const randomDataPoint = () => ({
  value: `${randomInt()}${randomLetter()}`,
  id: Math.random(),
});

// number of data points at the beginning of the visualization
const dataPoints = 10;
// array describing the data
let data = Array(dataPoints).fill('').map(() => randomDataPoint());

// describe the function visualizing the data points
function visualizeData(inputData) {
  const visualization = d3.select('.visualization');

  const updateSelection = visualization
    .selectAll('div')
    .data(inputData, d => d.id);

  const enterSelection = updateSelection
    .enter();

  const exitSelection = updateSelection
    .exit();

  // add a div for each new data point
  enterSelection
    .append('div')
    .attr('class', 'selection--enter')
    .text(d => d.value)
    .style('transform', 'scale(0)')
    .transition()
    .delay((d, i) => 200 + 50 * i)
    .duration(500)
    .style('transform', 'scale(1)');

  updateSelection
    .attr('class', 'selection--update');

  exitSelection
    .attr('class', 'selection--exit')
    .transition()
    .delay(200)
    .duration(1000)
    .style('transform', 'scale(0)')
    .remove();

  // add the selections to their respective container
  d3
    .select('.selection .selection--enter p')
    .text(enterSelection._groups[0].map(group => group.__data__.value));

  d3
    .select('.selection .selection--update p')
    .text(updateSelection._groups[0].map(group => group.__data__.value));

  d3
    .select('.selection .selection--exit p')
    .text(exitSelection._groups[0].map(group => group.__data__.value));

  d3
    .select('.data-points p span')
    .html(inputData.map(({ value }) => value));
}

visualizeData(data);


// function adding data a data point
function addDataPoint() {
  const randomIndex = randomInt(data.length);
  data = [...data.slice(0, randomIndex), randomDataPoint(), ...data.slice(randomIndex)];
  visualizeData(data);
}

// function removing a data point
function removeDataPoint() {
  const randomIndex = randomInt(data.length);
  data = [...data.slice(0, randomIndex), ...data.slice(randomIndex + 1)];
  visualizeData(data);
}

d3
  .select('.controls--add')
  .on('click', addDataPoint);
d3
  .select('.controls--remove')
  .on('click', removeDataPoint);
