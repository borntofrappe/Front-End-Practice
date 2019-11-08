/* describe a series of snippets
the language is picked up by an svg icon
the code is nested in a `<pre>` element

! more research is warranted as to which characters should be escaped, beside the smaller than sign <
*/
const snippets = [
    {
      language: 'html',
      code: `
  &lt;pre>
    &lt;code>let a = 5;&lt;/code>
    &lt;code>let b = 10;&lt;/code>
    &lt;code>[a, b] = [b, a]&lt;/code>
  &lt;/pre>
      `,
    },
    {
      language: 'css',
      code: `
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
      `,
    },
    {
      language: 'svg',
      code: `
  &lt;svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    &lt;use href="#icon--svg"/>
  &lt;/svg>
      `,
    },
    {
      language: 'js',
      code: `
  let a = 5;
  let b = 10;
  // swap
  [a, b] = [b, a];
      `,
    },
  ];

  // regular expression to find the lines of code
  // ! the expression includes the new line character
  const regexLines = /.+\n/gi;

  // function accepting as input an object describing the language and the code
  function markupSnippet({ language, code }) {
    // find the lines of code
    const lines = code.match(regexLines);

    // include a div container describing the language through an icon and the code in between the <pre> tags
    // ! add one code element for each line of code
    return `
          <div class="snippet">
              <svg viewBox="0 0 100 100">
                  <use href="#icon--${language}"/>
              </svg>
              <pre>${lines
                .map(line => `<code>${line.slice(0, line.length - 1)}</code>`)
                .join('')}</pre>
          </div>`;
  }

  // loop through the array and add the code elements in the prescribed #root element
  snippets.forEach(snippet => (window.root.innerHTML += markupSnippet(snippet)));
