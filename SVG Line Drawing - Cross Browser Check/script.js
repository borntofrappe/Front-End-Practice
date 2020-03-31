// for browsers not supporting the pathLength feature override the stroke-dash properties
// looking at you edge :p
const paths = document.querySelectorAll('path');
paths.forEach(path => {
  if (!path.pathLength) {
    const length = path.getTotalLength();

    /* setting the attribute won't work, see _presentational attributes_
    https://css-tricks.com/whats-the-difference-between-width-height-in-css-and-width-height-html-attributes/

      path.setAttribute('stroke-dasharray', length);
      path.setAttribute('stroke-dashoffset', length);
    */

    /* using just the length leaves a rather annoying dot at the beginning
    1. create a longer gap after the first dash
    1. offset to hide the excess
    */
    path.style.strokeDasharray = `${Math.ceil(length)}  ${Math.ceil(length) *
      2}`;
    path.style.strokeDashoffset = Math.ceil(length) + 1;
  }
});
