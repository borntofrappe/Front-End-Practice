// target the svg and the nested anchor links
const svg = document.querySelector('svg');
const svgLinks = document.querySelectorAll('svg a');

// function updating the viewbox based on the input x and y value
// ! given the regex x and y values are strings, be wary of that
function updateViewBox(x, y) {
  const viewBox = `${x} ${y} 100 100`;

  // animate the viewBox to its new values
  anime({
    targets: svg,
    viewBox,
    duration: 750,
    easing: 'easeOutQuart',
  });
}

// on click extract the x and y value for the viewBox and call the function to update the viewBox
svgLinks.forEach(link => link.addEventListener('click', (e) => {
  const dataViewBox = link.getAttribute('data-viewbox');
  const regex = /(\d+) (\d+)/;
  const [, x, y] = dataViewBox.match(regex);
  updateViewBox(x, y);
}));
