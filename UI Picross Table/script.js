// describe different picross levels through arrays describing rows with x(s) and o(s)
const levels = [
  // o describing the drawing, x the spaces in between
  // star
  [
    'ooxoo',
    'ooxoo',
    'xxxxx',
    'oxxxo',
    'oxoxo',
  ],
  // mobile phone
  [
    'xxxox',
    'xooox',
    'xoxox',
    'xooox',
    'xooox',
  ],
  // heart
  [
    'ooxoo',
    'ooooo',
    'ooooo',
    'xooox',
    'xxoxx',
  ],
  // musical note
  [
    'xxooo',
    'xxoxo',
    'xxoxo',
    'oooxx',
    'oooxx',
  ],
  // moon
  [
    'xxoox',
    'xxxoo',
    'oxxoo',
    'ooooo',
    'xooox',
  ],
  // information sign
  [
    'oooooooooo',
    'ooooxxoooo',
    'ooooxxoooo',
    'oooooooooo',
    'oooxxxoooo',
    'ooooxxoooo',
    'ooooxxoooo',
    'ooooxxoooo',
    'oooxxxxooo',
    'oooooooooo',
  ],
  // battery level
  [
    'xxxooooxxx',
    'xxooxxooxx',
    'xxoxxxxoxx',
    'xxoxxxxoxx',
    'xxoxooxoxx',
    'xxoxxxxoxx',
    'xxoxooxoxx',
    'xxoxooxoxx',
    'xxoxxxxoxx',
    'xxooooooxx',
  ],
];

// loop through the .levels array and include a table for each level
const grid = document.querySelector('.grid');
levels.forEach(level => {
  const table = document.createElement('table');
  table.innerHTML = level.map((row, indexRow) => `<tr>${row.split('').map((column, indexColumn) => `<td data-cell=${column}></td>`).join('')}</tr>`).join('');
  grid.appendChild(table);
});
