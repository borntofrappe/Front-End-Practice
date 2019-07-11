// utility function returning a random item from the input array
const randomItem = arr => arr[Math.floor(Math.random() * arr.length)];

// possible values for the message title and modifier
const messageTitle = [
  'info',
  'success',
  'warning',
  'danger',
];

// possible values for the body of the message
// end result of the emmet shortcut p*10>lorem10
const messageText = [
  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem, quaerat.',
  'Ab asperiores inventore tempora maiores, est et magni harum maxime?',
  'Laboriosam, vel maxime. Doloremque saepe aut quis mollitia corporis illo?',
  'Cum eum magnam facere commodi quae voluptate suscipit doloribus architecto?',
  'Ipsa veniam tempora necessitatibus corporis voluptate nobis, ut quam magni.',
  'Veritatis obcaecati non dolorum vero? Ipsam aperiam optio sint dicta.',
  'Itaque quod amet a. Voluptate nostrum temporibus ipsa explicabo exercitationem.',
  'Quasi veritatis inventore mollitia ipsum, aut voluptatibus suscipit a labore.',
  'Iusto alias eius quae ducimus quibusdam veniam sint soluta nam!',
  'Corrupti temporibus sequi laboriosam alias magni? Nam consectetur amet odit!'
];

/* logic
- create a message
- show the message
- allow to dismiss the message through the dismiss button

once the message is dismissed the idea is to go through the loop one more time, with a different title and text values
*/
const notification = document.querySelector('.notification');

// function called when the button to dismiss the message is clicked
function dismissMessage() {
  // remove the .received class from the .notification widget
  notification.classList.remove('received');

  // call the generateMessage function to show another message after a brief delay
  generateMessage();
}

// function showing the message
function showMessage() {
  // add a class of .received to the .notification container
  notification.classList.add('received');

  // attach an event listener on the button to dismiss the message
  // include the once flag to have the button register the click only one time
  const button = document.querySelector('.notification__message button');
  button.addEventListener('click', dismissMessage, { once: true });
}

// function generating a message with a random title and text
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

// immediately call the generateMessage function to kickstart the loop
generateMessage();
