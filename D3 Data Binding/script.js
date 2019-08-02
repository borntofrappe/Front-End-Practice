// utility functions to generate a random data point
const randomInt = (max = 10) => Math.floor(Math.random() * max);
const randomLetter = () => String.fromCharCode(Math.floor(Math.random() * ('Z'.charCodeAt() - 'A'.charCodeAt()) + 'A'.charCodeAt()));

// specify a unique identifier to differentiate the data points
const randomDataPoint = () => ({
  value: `${randomInt()}${randomLetter()}`,
  id: Math.random(),
});

const dataPoints = 10;
// array describing the data
let data = Array(dataPoints).fill('').map(() => randomDataPoint());

// function visualizing the data points
function visualizeData(inputData) {
  const visualization = d3
    .select('.visualization');

  // update selection, existing nodes
  const updateSelection = visualization
    .selectAll('div')
    .data(inputData, d => d.id); // object constancy, bind each element according to the id of the connected data point

  // enter selection, to be added
  const enterSelection = updateSelection
    .enter();

  // exit selection, to be removed
  const exitSelection = updateSelection
    .exit();

  // style the update selection with the matching class
  updateSelection
    .attr('class', 'selection--update');

  // add a div for each new data point
  enterSelection
    .append('div')
    .attr('class', 'selection--enter')
    .text(d => d.value)
    // transition the div from 0 to 1
    .style('transform', 'scale(0)')
    .transition()
    .delay((d, i) => 200 + 50 * i)
    .duration(500)
    .style('transform', 'scale(1)');

  // remove the div for each no-longer-existing data point
  exitSelection
    .attr('class', 'selection--exit')
    // remove after the transition
    // ! if two elements are removed in succession and before the transition is complete the exit selection will consider both
    .transition()
    .delay(200)
    .duration(1000)
    .style('transform', 'scale(0)')
    .remove();


  // complete the visualization updating the UI of the application
  // include the data points in the prescribed span
  d3
    .select('.input p span')
    .html(inputData.map(({ value }) => value));

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
}

// immediately call the function to visualize the existing data
visualizeData(data);

// call the function following a click event on the .controls buttons, afte adding / removing a data point from the array
// ! add / remove a data point at a random index of the array
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

// bind the function
d3
  .select('.controls--add')
  .on('click', addDataPoint);
d3
  .select('.controls--remove')
  .on('click', removeDataPoint);
