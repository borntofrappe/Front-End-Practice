// tabular data
const alphabet = {
    a: '.-',
    b: '-...',
    c: '-.-.',
    d: '-..',
    e: '.',
    f: '..-.',
    g: '--.',
    h: '....',
    i: '..',
    j: '.---',
    k: '-.-',
    l: '.-..',
    m: '--',
    n: '-.',
    o: '---',
    p: '.--.',
    q: '--.-',
    r: '.-.',
    s: '...',
    t: '-',
    u: '..-',
    v: '...-',
    w: '.--',
    x: '-..-',
    y: '-.--',
    z: '--..',
};

const entries = Object.entries(alphabet);

const svgMarkup = (code, addOffset = false) => {
    const width = 5;
    const height= 5;
    return `
    <svg viewBox="0 0 ${width * code.length} ${height}" width="${width * code.length * 5}" height="${height * 5}">
        ${code.split('').map((letter, index) => `
        <g stroke="currentColor" stroke-linecap="round" stroke-width="${height / 4}">
            <g transform="translate(${width * index} 0)">
                ${letter === '.'
                ?
                `<path d="M ${width / 2} ${height / 2} h 0" ${addOffset && `stroke-dasharray="${height / 4}"  stroke-dashoffset="${height / 4}"`} />`
                :
                `<path d="M ${width / 4} ${height / 2} h ${width / 2}"  ${addOffset && `stroke-dasharray="${width / 2}"  stroke-dashoffset="${width / 2}"`} />`
                }
            </g>
        </g>
        `).join('')}
    </svg>
`;
};
const markup = `
    <table>
        <thead>
            <tr>
                <th>Letter</th>
                <th>Code</th>
                <th>Animation</th>
            </tr>
        </thead>
        <tbody>
            ${entries.map(([letter, code]) => `
                <tr>
                    <td>${letter}</td>
                    <td>${svgMarkup(code)}</td>
                    <td>
                        <button>Play</button>
                        ${svgMarkup(code, true)}
                    </td>
                </tr>
            `).join('')}
        </tbody>
    </table>
`;
document.querySelector('#root').innerHTML = markup;