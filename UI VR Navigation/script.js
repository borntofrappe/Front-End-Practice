// select all anchor link elements
const links = document.querySelectorAll('a');
// when a click is registered on the link consider the text of the span element and use it for the class of the parent nav
links.forEach(link => link.addEventListener('click', (e) => {
  link.parentNode.className = link.innerText.toLowerCase();
}));
