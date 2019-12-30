// in no particular order, 24 emojis
const emojis = ['🍇','🍊','🥑','🥜','🦐','🦞','🍰','🎄','🍾','🎉','📝','🌟','🎅','⛄','👼','📅','🚀','🥌','🎿','🧦','🔔','🎶','🎁','🍫'];
// without much fantasy, a 24 characters long message
const message = 'wait,is there chocolate?';

/* for each emoji add the following markup
label
  input (the toggle to rotate the window)
  div (the window)
  span (the actual emoji)

! for the label mess up the order in the grid by changing the order property
inaccessible, but most advent calendars are

! for the div add two div containers to describe the front and the back of the cell
the back hiding the not-so-secret message
*/
const calendar = document.querySelector('form');
calendar.innerHTML = emojis.map((emoji, index) => `
  <label style="order: ${Math.floor(Math.random() * 100)}">
    <input type="checkbox" />
    <div class="window">
      <div class="side side--front">${index + 1}</div>
      <div class="side side--back">${message[index]}</div>
    </div>
    <span>${emoji}</span>
  </label>
`).join('');