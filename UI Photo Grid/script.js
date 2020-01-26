const links = document.querySelectorAll('a');
const modal = document.querySelector('div.modal');
function showModal() {
  console.log(this);
  const src = this.querySelector('img').getAttribute('src');
  const alt = this.querySelector('img').getAttribute('alt');
  modal.querySelector('img').setAttribute('src', src);
  modal.querySelector('img').setAttribute('alt', alt);
  console.log(src);
  modal.classList.add('show');
  links.forEach(link => link.setAttribute('tabindex', -1));
}

links.forEach(link => link.addEventListener('click', showModal));

function closeModal(e) {
  if (e.target.tagName === 'BUTTON') {
    modal.classList.remove('show');
    links.forEach(link => link.setAttribute('tabindex', 1));
  }
}

modal.addEventListener('click', closeModal);
