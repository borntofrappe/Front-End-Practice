const links = document.querySelectorAll('a');
links.forEach(link => link.addEventListener('click', (e) => {
  link.parentNode.className = link.innerText.toLowerCase();
}));
