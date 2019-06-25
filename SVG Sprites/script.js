const buttons = document.querySelectorAll('button');

// on click add a class of .active to the selected button and update the viewBox attribute with the value held by data-translate
function handleClick() {
  // ! proceed only if the button is not already selected
  const isActive = this.classList.contains('active');
  if (!isActive) {
    buttons.forEach(button => (button === this ? button.classList.add('active') : button.classList.remove('active')));

    // the original viewBox describes the four values `x y width height`
    // extract the latter three and use the data-translate value for the `x` coordinate
    const svg = document.querySelector('svg');
    const viewBox = svg.getAttribute('viewBox');
    const viewBoxRegex = /(\d+) (\d+) (\d+) (\d+)/;
    const [, , y, width, height] = viewBox.match(viewBoxRegex);
    const x = this.getAttribute('data-translate');
    svg.setAttribute('viewBox', `${x} ${y} ${width} ${height}`);
  }
}
buttons.forEach(button => button.addEventListener('click', handleClick));
