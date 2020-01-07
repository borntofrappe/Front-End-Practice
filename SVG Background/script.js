function updatePath({x}) {
  const {innerWidth } = window;
  const value = Math.round(x / innerWidth * 100);

  const body = document.querySelector('body');
  const path = body.querySelector('svg path');
  path.setAttribute('d', `M -50 40 l 50 -${value} 50 ${value} m 0 -50 l -50 -${value} -50 ${value}`);
  body.style.background = `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='-50 -50 100 100'%3E%3Cg fill='none' stroke='hsl(0, 0%25, 65%25)' stroke-width='1' stroke-linecap='square'%3E%3Cpath id='pattern' d='M -50 20 l 50 -${value} 50 ${value} m 0 -50 l -50 -${value} -50 ${value}' /%3E%3Cuse href='%23pattern' transform='rotate(90)' /%3E%3Cuse href='%23pattern' transform='rotate(180)' /%3E%3Cuse href='%23pattern' transform='rotate(270)' /%3E%3C/g%3E%3C/svg%3E") 0 0 / 10vmax`;
}

window.addEventListener('click', updatePath);
window.addEventListener('mousemove', updatePath);