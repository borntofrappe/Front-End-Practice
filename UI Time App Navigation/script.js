const buttons = document.querySelectorAll('button');
buttons.forEach(button => {
    button.addEventListener('click', () => {
        buttons.forEach(button => button.classList.remove('active'));
        button.classList.add('active');
    })
})