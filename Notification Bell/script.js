const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

const messageTitle = [
  'info',
  'success',
  'warning',
  'danger',
];

// p*20>lorem8
const messageText = ['Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  'Fugit sequi nobis, eum quae voluptas laborum nam.',
  'Nesciunt ipsa magnam, ab quia praesentium cumque ex.',
  'Ea, at. Pariatur repudiandae necessitatibus veritatis at ea!',
  'Culpa eaque facere nemo sed quod praesentium voluptatum?',
  'Amet minima earum quas corporis autem rerum sequi.',
  'Ullam nobis deleniti porro aspernatur necessitatibus minima eum?',
  'Deleniti totam nisi doloremque laudantium alias? Impedit, unde.',
  'Labore molestias, sequi neque illo earum eius ipsam?',
  'Eveniet, pariatur id tempora libero aut omnis ipsa.',
  'Doloribus eaque reiciendis officiis perspiciatis recusandae doloremque laboriosam.',
  'Asperiores doloremque iusto alias incidunt dignissimos dolor reprehenderit.',
  'Natus reprehenderit aliquid tempore quae, itaque nihil fugiat.',
  'Doloribus maxime recusandae deserunt error vitae sint assumenda.',
  'Repellendus voluptate dolores ut modi rem veritatis! Praesentium?',
  'Impedit labore facere delectus et ipsum voluptas reprehenderit?',
  'Illum dolor vel, odit suscipit ratione architecto tempora?',
  'Nisi voluptate cumque dicta pariatur commodi corrupti nostrum.',
  'Saepe doloremque quaerat perspiciatis odio non dicta aspernatur.',
  'Esse harum possimus, animi libero reprehenderit atque inventore?',
];

const notification = document.querySelector('.notification');

// function showing the message by adding a class of .received to the .notification container
function showMessage() {
  notification.classList.add('received');

  // attach an event listener on the button to dismiss the message
  // include the once flag to have the button register the click only one time
  const button = document.querySelector('.notification__message button');
  button.addEventListener('click', dismissMessage, { once: true });
}

// function generating a message with a random modifier and text
function generateMessage() {
  // after an arbitrary and brief delay create the message and call the function to show the element
  const delay = Math.floor(Math.random() * 1000) + 1500;
  const timeoutID = setTimeout(() => {
    // retrieve a random value from the two arrays
    const title = randomItem(messageTitle);
    const text = randomItem(messageText);

    // update the message with the random values and changing the class name to the title's option
    const message = document.querySelector('.notification__message');

    message.querySelector('h1').textContent = title;
    message.querySelector('p').textContent = text;
    message.className = `notification__message message--${title}`;

    // call the function to show the message
    showMessage();
    clearTimeout(timeoutID);
  }, delay);
}

// function called when the button to dismiss the message is clicked
function dismissMessage() {
  // remove the .received class from the .notification widget
  notification.classList.remove('received');

  // call the generateMessage function to show another message after a brief delay
  generateMessage();
}


generateMessage();
