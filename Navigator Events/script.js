const main = document.querySelector('main');
const strokeDash = document.querySelector('.stroke-dash');

const length = strokeDash.getTotalLength();
strokeDash.setAttribute('stroke-dasharray', length);
strokeDash.setAttribute('stroke-dashoffset', length);

window.addEventListener('load', () => {
  function updateStatus() {
    const isOnline = navigator.onLine;
    main.className = isOnline ? 'online' : '';
  }
  updateStatus();
  window.addEventListener('online', updateStatus);
  window.addEventListener('offline', updateStatus);
});
