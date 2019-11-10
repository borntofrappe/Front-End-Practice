// the code for each snippet has been processed locally through the shiki package
// this is to give an idea of the final syntax highlighting
const snippets = [
  {
    name: 'index',
    color: 'hsl(10, 90%, 60%)',
    language: 'html',
    code: `<pre>
    <code>let a = 5;</code>
    <code>let b = 10;</code>
    <code>[a, b] = [b, a]</code>
</pre>`,
    shiki: `<pre class="shiki"><code><span style="color: #2BA8FF">&lt;pre&gt;</span>
  <span style="color: #2BA8FF">&lt;code&gt;</span><span style="color: #FFFFFF">let a = 5;</span><span style="color: #2BA8FF">&lt;/code&gt;</span>
  <span style="color: #2BA8FF">&lt;code&gt;</span><span style="color: #FFFFFF">let b = 10;</span><span style="color: #2BA8FF">&lt;/code&gt;</span>
  <span style="color: #2BA8FF">&lt;code&gt;</span><span style="color: #FFFFFF">[a, b] = [b, a]</span><span style="color: #2BA8FF">&lt;/code&gt;</span>
<span style="color: #2BA8FF">&lt;/pre&gt;</span></code></pre>`,
  },
  {
    name: 'style',
    color: 'hsl(210, 90%, 60%)"',
    language: 'css',
    code: `* {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
    }`,
    shiki: `<pre class="shiki"><code><span style="color: #2BA8FF">*</span><span style="color: #FFFFFF"> </span><span style="color: #EFEFEF">{</span>
  <span style="color: #FFFFFF"></span><span style="color: #2BA8FF">box-sizing</span><span style="color: #FFFFFF">:</span><span style="color: #9FBDE0"> border-box</span><span style="color: #EFEFEF">;</span>
<span style="color: #FFFFFF">  </span><span style="color: #2BA8FF">margin</span><span style="color: #FFFFFF">:</span><span style="color: #9FBDE0"> </span><span style="color: #2BA8FF">0</span><span style="color: #EFEFEF">;</span>
<span style="color: #FFFFFF">  </span><span style="color: #2BA8FF">padding</span><span style="color: #FFFFFF">:</span><span style="color: #9FBDE0"> </span><span style="color: #2BA8FF">0</span><span style="color: #EFEFEF">;</span>
<span style="color: #EFEFEF">}</span></code></pre>`,
  },
  {
    name: 'icon',
    color: 'hsl(35, 100%, 60%)',
    language: 'svg',
    code: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
    <use href="#icon--svg"/>
</svg>`,
    shiki: `<pre class="shiki"><code><span style="color: #2BA8FF">&lt;svg</span><span style="color: #FFFFFF"> </span><span style="color: #FAC863">xmlns</span><span style="color: #FFFFFF">=</span><span style="color: #50E3C2">"http://www.w3.org/2000/svg"</span><span style="color: #FFFFFF"> </span><span style="color: #FAC863">viewBox</span><span style="color: #FFFFFF">=</span><span style="color: #50E3C2">"0 0 100 100"</span><span style="color: #2BA8FF">&gt;</span>
  <span style="color: #2BA8FF">&lt;use</span><span style="color: #FFFFFF"> </span><span style="color: #FAC863">href</span><span style="color: #FFFFFF">=</span><span style="color: #50E3C2">"#icon--svg"</span><span style="color: #FFFFFF">/</span><span style="color: #2BA8FF">&gt;</span>
<span style="color: #2BA8FF">&lt;/svg&gt;</span></code></pre>`,
  },
  {
    name: 'script',
    color: 'hsl(50, 90%, 60%)',
    language: 'js',
    code: `let a = 5;
    let b = 10;
    // swap
    [a, b] = [b, a];`,
    shiki: `<pre class="shiki"><code><span style="color: #2BA8FF">let</span><span style="color: #FFFFFF"> a </span><span style="color: #EFEFEF">=</span><span style="color: #FFFFFF"> </span><span style="color: #2BA8FF">5</span><span style="color: #EFEFEF">;</span>
<span style="color: #2BA8FF">let</span><span style="color: #FFFFFF"> b </span><span style="color: #EFEFEF">=</span><span style="color: #FFFFFF"> </span><span style="color: #2BA8FF">10</span><span style="color: #EFEFEF">;</span>
<span style="color: #888">// swap</span>
<span style="color: #FFFFFF">[a</span><span style="color: #EFEFEF">,</span><span style="color: #FFFFFF"> b] </span><span style="color: #EFEFEF">=</span><span style="color: #FFFFFF"> [b</span><span style="color: #EFEFEF">,</span><span style="color: #FFFFFF"> a]</span><span style="color: #EFEFEF">;</span></code></pre>`,
  },
  {
    name: 'data',
    color: 'hsl(45, 90%, 60%)',
    language: 'json',
    code: `{
      "language": ["html", "css", "js", "json"],
    }`,
    shiki: `<pre class="shiki"><code><span style="color: #EFEFEF">{</span>
<span style="color: #FFFFFF">  </span><span style="color: #2BA8FF">"language"</span><span style="color: #EFEFEF">:</span><span style="color: #FFFFFF"> </span><span style="color: #EFEFEF">[</span><span style="color: #FFF">"html"</span><span style="color: #EFEFEF">,</span><span style="color: #FFFFFF"> </span><span style="color: #FFF">"css"</span><span style="color: #EFEFEF">,</span><span style="color: #FFFFFF"> </span><span style="color: #FFF">"js"</span><span style="color: #EFEFEF">,</span><span style="color: #FFFFFF"> </span><span style="color: #FFF">"json"</span><span style="color: #EFEFEF">],</span>
<span style="color: #EFEFEF">}</span></code></pre>`,
  },
];

// function creating the necessary markup for each snippet of code
function markupSnippet({ name, color, language, shiki }) {
  /* describe the following markup
  .snippet
    svg#icon
    span#language

    pre#shiki
  */
  return `
          <div class="snippet">
              <svg viewBox="0 0 100 100" width="20" height="20">
                  <use href="#icon--${language}"/>
              </svg>
              <span style="color: ${color};">${name}.${language}</span>
              ${shiki}
          </div>`;
}

// loop through the array and add the code elements in the prescribed #root element
snippets.forEach(snippet => (window.root.innerHTML += markupSnippet(snippet)));
