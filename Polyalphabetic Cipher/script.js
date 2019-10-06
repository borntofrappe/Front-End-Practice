// target the table element and add 26 rows and 26 cells for each row
const alphabet = 26;
const firstLetter = 65;
const table = document.querySelector('table');

table.innerHTML = Array(alphabet)
    .fill()
    .map((row, rows) => `<tr>${Array(alphabet)
        .fill()
        // add a odd number of animatios to show the cells as if in a wave
        .map((column, columns) => `<td style="animation: highlight 0.2s ${((rows + columns) * 0.1)}s ${alphabet / 2} alternate ease both; background: ${(rows % 2 === 0) ? 'hsl(0, 0%, 10%)' : 'hsl(0, 0%, 20%)'};">${(firstLetter + columns + rows) >= (firstLetter + alphabet) ? String.fromCharCode((firstLetter + columns + rows) % (firstLetter + alphabet) + firstLetter) : String.fromCharCode(firstLetter + columns + rows)}</td>`)
        .join('')}</tr>`)
    .join('');