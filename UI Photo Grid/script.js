// target the anchor links and div container
const links = document.querySelectorAll('a');
const overlay = document.querySelector('div');

// following a click event on the links show the overlay
function showOverlay() {
  // use the src & alt attribute of the selected image in the overlay
  const src = this.querySelector('img').getAttribute('src');
  const alt = this.querySelector('img').getAttribute('alt');
  overlay.querySelector('img').setAttribute('src', src);
  overlay.querySelector('img').setAttribute('alt', alt);

  overlay.classList.add('overlay');

  // to remove the anchor links from reach set the tabindex attribute to a negative value
  links.forEach(link => link.setAttribute('tabindex', -1));
}

links.forEach(link => link.addEventListener('click', showOverlay));

// following a click event on the overlay, consider if the click was registered on the button
// if so hide the overlay back
function hideOverlay(e) {
  if (e.target.tagName === 'BUTTON') {
    overlay.classList.remove('overlay');
    // restore the default value of the anchor links
    links.forEach(link => link.setAttribute('tabindex', 0));
  }
}

overlay.addEventListener('click', hideOverlay);
