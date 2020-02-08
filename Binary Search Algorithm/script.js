const binarySearch = (data, number) => {
  let dataset = data
    // sort
    .sort((a, b) => (a > b ? 1 : -1))
    // remove duplicates
    .reduce((acc, curr) => (acc.includes(curr) ? acc : [...acc, curr]), []);

  // binary search algorithm
  while (dataset.length > 1) {
    // identify the central value
    const { length } = dataset;
    const center = Math.floor(length / 2);
    const candidate = dataset[center];
    // if it matches the input number, return the number itself
    if (number === candidate) {
      return candidate;
    }
    // slice the data structure to consider the relevant half
    if (candidate > number) {
      dataset = dataset.slice(0, center);
    } else {
      dataset = dataset.slice(center);
    }
  }
  // no match found
  return false;
};

// create an array with random integer values
const randomInt = (max = 1000) => Math.floor(Math.random() * max);
const dataPoints = 1500;
const data = Array(dataPoints)
  .fill('')
  .map(value => randomInt());

// display the data in the #data container
document.querySelector('#data').innerHTML = data
  .map(value => `<span data-value="${value}">${value}</span>`)
  .join(' ');

// following the submit event on the form consider the input integer and check if the value is present in the data array
const form = document.querySelector('form');

function handleSubmit(e) {
  e.preventDefault();
  const value = parseInt(this.number.value, 10);
  const number = binarySearch(data, value);

  if (number) {
    this.className = 'match';
    const matches = document.querySelectorAll(`span[data-value="${value}"]`);
    matches.forEach(match => (match.className = 'match'));
  } else {
    this.className = 'not-found';
  }
}

form.addEventListener('submit', handleSubmit);

// following the input event remove the applied classes
function handleInput() {
  if (this.className) {
    this.className = '';
    document.querySelectorAll('span').forEach(match => (match.className = ''));
  }
}

form.addEventListener('input', handleInput);
