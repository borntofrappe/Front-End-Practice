const button = document.querySelector('button');

let timeout;
function handleMousedown() {
  if (this.classList.contains('active')) {
    this.classList.remove('active');
  } else {
    timeout = setTimeout(() => {
      this.classList.add('active');
      timeout = null;
    }, 2000);
  }
}
function handleMouseup() {
  if (timeout) {
    clearTimeout(timeout);
  }
}
button.addEventListener('mousedown', handleMousedown);
button.addEventListener('mouseup', handleMouseup);
