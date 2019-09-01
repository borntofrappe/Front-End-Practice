// describe the design of the level through x(s) and o(s)
const level = [
  'ooxoo',
  'ooxoo',
  'xxxxx',
  'oxxxo',
  'oxoxo',
];

// target the table and for each string add a row
// for each row add a cell describing the x(s) or o(s)
const table = document.querySelector('table');
table.innerHTML = level.map((row) => `<tr>${row.split('').map((cell) => `<td><button data-cell=${cell}></button></td>`).join('')}</tr>`).join('');
