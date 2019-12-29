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
  '❄',
  '⛸',
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
  <label>
    <input type="checkbox" />
    <div></div>
    <span>${emoji}</span>
  </label>
`).join('');