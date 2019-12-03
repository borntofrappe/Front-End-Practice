// object describing the alphabet through the dots and dashes matching each letter
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

// multi-dimensional array describing the letters and codes in pairs
const entries = Object.entries(alphabet);

// utility function generating the svg syntax for the morse code
// the idea is to use path elements to have the possibility of animating the drawing through stroke-dash properties
const svgMarkup = (code) => {
    // for each code add an SVG element with a fixed height, but a variable width
    const height= 5;
    const x = 5;
    const width = x * code.length;

    // ! given stroke-linecap="round" and the stroke-width property, creating a path element through `h 0` allows to draw a dot
    return `
    <svg viewBox="0 -${height / 2} ${width} ${height}" width="${width}" height="${height}">
        <g stroke="currentColor" stroke-linecap="round" stroke-width="${height / 4}">
        ${code.split('').map((letter, index) => `
            <g transform="translate(${x * index} 0)">
                ${letter === '.'
                ?
                `<path d="M ${x / 2} 0 h 0"/>`
                :
                `<path d="M ${x / 4} 0 h ${x / 2}" />`
                }
            </g>
            `).join('')}
        </g>
    </svg>
`;
};


// table describing the alphabet and codes, using the svgMarkup function
const markup = `
    <table>
        <thead>
            <tr>
                <th>Letter</th>
                <th>Code</th>
                <th>Send Letter</th>
            </tr>
        </thead>
        <tbody>
            ${entries.map(([letter, code]) => `
                <tr>
                    <td>${letter}</td>
                    <td>${svgMarkup(code)}</td>
                    <td>
                        <button aria-label="Send letter in morse code">
                            <svg viewBox="0 0 100 100" width="20" height="20">
                                <path d="M 25 10 l 60 40 -60 40 z"/>
                            </svg>
                        </button>
                    </td>
                </tr>
            `).join('')}
        </tbody>
    </table>
`;
document.querySelector('body').innerHTML = markup;