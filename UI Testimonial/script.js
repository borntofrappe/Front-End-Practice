const article = document.querySelector('article');
const {
  x, y, width, height,
} = article.getBoundingClientRect();


const cx = x + width / 2;
const cy = y + height / 2;
function handleMove(e) {
  const { pageX, pageY } = e;

  const dx = (cx - pageX) / (width / 2);
  const dy = (cy - pageY) / (height / 2);

  this.style.transform = `rotateX(${10 * dy * -1}deg) rotateY(${10 * dx}deg)`;
}
function handleOut() {
  this.style.transform = 'initial';
}

article.addEventListener('mousemove', handleMove);
article.addEventListener('mouseout', handleOut);
