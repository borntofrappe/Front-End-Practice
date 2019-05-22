// target all paragraph elements
const paragraphs = document.querySelectorAll('p');

// function ensuring that at least one anchor link element is included in the paragraphs
function addLinks() {
  // loop through the paragraphs and include anchor link elements with a certain probability
  paragraphs.forEach((paragraph) => {
    const { textContent } = paragraph;
    const html = textContent.split(' ').map(word => (Math.random() < 0.1 ? `<a href="#">${word}</a>` : word)).join(' ');
    paragraph.innerHTML = html;
  });

  // if an anchor link element is not present, call the function once more
  const link = document.querySelector('a');
  if (!link) {
    addLinks();
  }
}
// call the function to add anchor link elements in the paragraph elements
addLinks();

// function to add the svg background to all anchor link elements
function addBackground() {
  // target all link elements
  const links = document.querySelectorAll('a');
  // retrieve the width and height from each link, to have the svg element maintain the correct aspect ratio
  links.forEach((link) => {
    const { offsetWidth: width, offsetHeight: height } = link;
    const strokeWidth = 2;

    // to each anchor link element add an SVG rectangle with the defined gradients and pre-established stroke width
    link.innerHTML += `
      <svg viewBox="0 0 ${width} ${height}" >
        <rect
          x="${strokeWidth / 2}"
          y="${strokeWidth / 2}"
          width="${width - 5}"
          height="${height - 5}"
          rx="5"
          fill="url(#gradient-fill)"
          stroke="url(#gradient-stroke)"
          stroke-width="${strokeWidth}">
        </rect>
      </svg>
    `.trim();
  });
}

// since the anchor link elements are generated with the ScriptProcessorNode, call the addBackground function with a trivial delay
setTimeout(() => {
  addBackground();
}, 100);
