const emojis = [
  '🍇',
  '🍊',
  '🥑',
  '🥜',
  '🦐',
  '🦞',
  '🍰',
  '🍫',
  '🍾',
  '🎉',
  '📝',
  '🌟',
  '🎅',
  '⛄',
  '👼',
  '📅',
  '🚀',
  '🥌',
  '🎿',
  '🧦',
  '🔔',
  '🎶',
  '🎁',
  '🎄',
];

const calendar = document.querySelector('form');
calendar.innerHTML = emojis.map(emoji => `
  <label style="order: ${Math.floor(Math.random() * 100)}">
    <input type="checkbox" />
    <div></div>
    <span>${emoji}</span>
  </label>
`).join('');