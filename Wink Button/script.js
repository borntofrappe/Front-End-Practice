const button = document.querySelector('button');
const notifications = document.querySelector('.notifications');

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
const addNotification  = () => {
    const { length } = notifications.querySelectorAll('.notification');
    const notification = document.createElement('article');
    notification.style.top = `${20 * length}px`;
    notification.addEventListener('click', (e) => e.target.tagName === 'BUTTON' && removeElement(notification));
    notification.classList.add('notification');

    notification.innerHTML = `
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

    notifications.appendChild(notification);
}

// following a click on the button handle the promise and specifically the .catch statement, as to show the error message
const sendWink = () => {
    sendWinkPromise()
        .then(() => {
            console.log('This should never actually happen');
        })
        .catch(err => addNotification());
}

button.addEventListener('click', sendWink);