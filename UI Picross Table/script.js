// array describing different levels from the ds game
const levels = [
  // o describing the drawing, x the spaces in between
  {
    name: 'Star',
    cells:
    [
      'ooxoo',
      'ooxoo',
      'xxxxx',
      'oxxxo',
      'oxoxo',
    ],
  },
  {
    name: 'Mobile phone',
    cells: [
      'xxxox',
      'xooox',
      'xoxox',
      'xooox',
      'xooox',
    ],
  },
  {
    name: 'Heart',
    cells: [
      'ooxoo',
      'ooooo',
      'ooooo',
      'xooox',
      'xxoxx',
    ],
  },
  {
    name: 'Musical note',
    cells: [
      'xxooo',
      'xxoxo',
      'xxoxo',
      'oooxx',
      'oooxx',
    ],
  },
  {
    name: 'Moon',
    cells: [
      'xxoox',
      'xxxoo',
      'oxxoo',
      'ooooo',
      'xooox',
    ],
  },
  {
    name: 'Information sign',
    cells: [
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
  },
  {
    name: 'Battery',
    cells: [
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
  },
  {
    name: 'Antenna',
    cells: [
      'oooooxxxxx',
      'oxoxoxxxxx',
      'xoooxxxxxx',
      'xxoxxxxoox',
      'xxoxxxxoox',
      'xxoxooxoox',
      'xxoxooxoox',
      'xxoxooxoox',
      'xxoxooxoox',
      'xxoxooxoox',
    ],
  },
  {
    name: 'Finger',
    cells: [
      'xxxxxxxxxx',
      'oooooooooo',
      'oxxxxoxxxo',
      'ooooooxxxo',
      'xxxoxoxoxo',
      'xxxoooooxo',
      'xxxoxxxoxo',
      'xxxoooooxo',
      'xxxoxxxooo',
      'xxxoooooxx',
    ],
  },
  {
    name: 'Rubbish bin',
    cells: [
      'xxxxooxxxx',
      'xxooooooxx',
      'xoxxxxxxox',
      'oooooooooo',
      'xoxoxxoxox',
      'xoxoxxoxox',
      'xoxoxxoxox',
      'xoxoxxoxox',
      'xoxoxxoxox',
      'xoooooooox',
    ],
  },
  {
    name: 'Toilet sign',
    cells: [
      'xoooxxooox',
      'xoooxxooox',
      'xoooxxooox',
      'xxoxxxxoxx',
      'xoooxxooox',
      'xoooxxooox',
      'xoooxxooox',
      'xoooxooooo',
      'xoxoxxxoxx',
      'xoxoxxxoxx',
    ],
  },
  {
    name: 'Scales',
    cells: [
      'xxxooooxxx',
      'xxxxooxxxx',
      'xxxxooxxxx',
      'xoooooooox',
      'xoxxooxxox',
      'xoxxooxxox',
      'oxoxooxoxo',
      'oooxooxooo',
      'xxxxooxxxx',
      'xxooooooxx',
    ],
  },
  {
    name: 'Ball',
    cells: [
      'xxooooooxx',
      'xooxxxxoox',
      'oxooxxooxo',
      'oxxoxxoxxo',
      'oxxoxxoxxo',
      'oxxoxxoxxo',
      'oxxoxxoxxo',
      'oxooxxooxo',
      'xooxxxxoox',
      'xxooooooxx',
    ],
  },
  {
    name: 'Postbox',
    cells: [
      'xxxooxxxxx',
      'xxxoooxxxx',
      'xxxoxxxxxx',
      'xoooooooox',
      'ooxxoxxxoo',
      'oxxxxoxxxo',
      'oxooxoxxxo',
      'oxxxxoxxxo',
      'oooooooooo',
      'xxxxoxoxxx',
    ],
  },
  {
    name: 'Pencil',
    cells: [
      'xxxxxoooox',
      'xxxxooxxoo',
      'xxxooxxooo',
      'xxooxxoooo',
      'xooxxooooo',
      'oooxooooox',
      'oxxoooooxx',
      'oxxxoooxxx',
      'ooxxooxxxx',
      'oooooxxxxx',
    ],
  },
];

// loop through the .levels array and include a table for each level
const tables = document.querySelector('.tables');
levels.forEach(({ name, cells }) => {
  // wrapping container
  const level = document.createElement('div');
  level.classList.add('level');

  // heading describing the level
  const heading = document.createElement('h2');
  heading.textContent = name;
  level.appendChild(heading);

  // table drawing the level through a table and as many cells as there are x(s) and o(s)
  const table = document.createElement('table');
  // in each cell add an svg element describing the x or o
  table.innerHTML = cells.map(row => `<tr>${row.split('').map(cell => `<td><svg viewBox="0 0 100 100" width="40" height="40"><use href="#${cell}"></use></svg></td>`).join('')}</tr>`).join('');
  level.appendChild(table);

  tables.appendChild(level);
});
