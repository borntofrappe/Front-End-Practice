const button = document.querySelector('button');
const buttonAudio = button.querySelector('audio');
const rejections = document.querySelector('.rejections');
const rejectionAudio = rejections.querySelector('audio');

// create a promise which always produces a rejection
const sendWinkPromise = () => new Promise((resolve, reject) => {
    const timeout = setTimeout(() => {
            reject('Unable to perform request');
            clearTimeout(timeout);
    }, 2000);
});

// function removing an element from the page
const removeElement = (element) => {
    element.parentElement.removeChild(element);
}

// function adding an error message in the .notifications container
const addRejection  = () => {
    const { length } = rejections.querySelectorAll('.rejection');
    rejectionAudio.play();

    const rejection = document.createElement('article');

    rejection.style.top = `${20 * length}px`;
    rejection.addEventListener('click', (e) => {
      if(e.target.tagName === 'BUTTON') {
        buttonAudio.play();
        removeElement(rejection);
      }
    });
    rejection.classList.add('rejection');

    rejection.innerHTML = `
        <svg viewBox="-50 -50 100 100" width="40" height="40">
            <g stroke-linecap="round" stroke-linejoin="round" >
                <path stroke="hsl(45, 75%, 50%)" stroke-width="10" fill="hsl(45, 75%, 50%)" d="M -45 40 l 45 -80 45 80 z"/>
                <path stroke="currentColor" stroke-width="12" fill="none" d="M 0 -18 v 30 m 0 16 v 0"/>
            </g>
        </svg>
        <h2>Unable to perform request</h2>
        <button aria-label="Remove notification">
            <svg viewBox="-50 -50 100 100" width="40" height="40">
                <g fill="none" stroke="currentColor" stroke-width="5" >
                    <path d="M -17.5 -20 h 5 l 30 40 h -5 z"/>
                    <path transform="scale(-1 1)" d="M -17.5 -20 h 5 l 30 40 h -5 z"/>
                </g>
            </svg>
        </button>
    `;

    rejections.appendChild(rejection);
}

// following a click on the button handle the promise and specifically the .catch statement, as to show the error message
function sendWink() {
    buttonAudio.play();

    sendWinkPromise()
        .then(() => {
            console.log('This should never actually happen');
        })
        .catch(err => addRejection());
}

button.addEventListener('click', sendWink);