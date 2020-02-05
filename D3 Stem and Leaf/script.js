// data describing the top 25 jumpers
// https://en.wikipedia.org/wiki/Long_jump#All-time_top_25_long_jumpers
const data = {
  men: [
    '8.95',
    '8.90',
    '8.87',
    '8.86',
    '8.74',
    '8.74',
    '8.74',
    '8.73',
    '8.71',
    '8.71',
    '8.69',
    '8.68',
    '8.66',
    '8.65',
    '8.63',
    '8.62',
    '8.59',
    '8.58',
    '8.56',
    '8.56',
    '8.54',
    '8.54',
    '8.53',
    '8.52',
    '8.52',
  ],
  women: [
    '7.52',
    '7.49',
    '7.48',
    '7.43',
    '7.42',
    '7.39',
    '7.37',
    '7.33',
    '7.31',
    '7.31',
    '7.31',
    '7.30',
    '7.27',
    '7.26',
    '7.24',
    '7.24',
    '7.21',
    '7.21',
    '7.20',
    '7.20',
    '7.20',
    '7.20',
    '7.17',
    '7.17',
    '7.16',
    '7.16',
    '7.16',
  ],
};


const root = d3.select('#root');
root.append('h1').text('Long Jump Records');

Object.entries(data).forEach(([gender, marks]) => {
  const marksObject = marks.reduce((acc, curr) => {
    const key = parseFloat(curr.slice(0, -1));
    const value = parseInt(curr[curr.length - 1], 10);
    if(acc[key]) {
      acc[key].push(value);
    } else {
      acc[key] = [value];
    }
    return acc;
  }, {});

  const marksArray = Object.entries(marksObject).sort((a, b) => b[0] - a[0]);

  const table = root
    .append('table');

  const headRow = table
    .append('thead')
    .append('tr');

  headRow
    .append('td')
    .text(gender)
    .style('text-transform', 'capitalize')
    .style('text-align', 'center');

  headRow
    .append('td')
    .attr('colspan', d3.max(marksArray, d => d[1].length));

  const bodyRows = table
    .append('tbody')
    .selectAll('tr')
    .data(marksArray)
    .enter()
    .append('tr');

  bodyRows
    .append('td')
    .text(d => d[0]);

  bodyRows
    .selectAll('td.value')
    .data(d => d[1].sort((a, b) => a - b))
    .enter()
    .append('td')
    .attr('class', 'value')
    .text(d => d);

});







