// create a template to be included in the shadow DOM
// making up the header with the h1, h2 elements describing the online/offline status
// ! add an icon to match the connection
const template = document.createElement('template');
template.innerHTML = `
  <style>

  header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    min-height: 100vh;
    display: grid;
    place-content: center;
    text-align: center;
    grid-row-gap: 1rem;
    background: #162447;
    color: #9DE1FF;
  }
  h1 {
    font-family: "Raleway", sans-serif;
    text-transform: uppercase;
    letter-spacing: 0.5rem;
    font-weight: 800;
    font-size: 10vw;
  }

  h2 {
    font-family: 'Lato', sans-serif;
    margin-top: 1.25rem;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 1rem;
    letter-spacing: 0.4rem;
    word-spacing: 1rem;
  }

  svg {
    position: absolute;
    top: 0.25rem;
    right: 0.5rem;
    width: 25px;
    height: 25px;
  }

  </style>
  <header>
    <svg viewBox="0 0 68 60">
      <g class="signal">
          <path d="M 5 14 a 58 58 0 0 1 58 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
          <path d="M 12 27 a 44 44 0 0 1 44 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
          <path d="M 19 40 a 30 30 0 0 1 30 0" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
          <circle cx="34" cy="52.5" r="5" fill="currentColor" />
      </g>
      <path class="bar" d="M 5 5 L 60 55" fill="none" stroke="currentColor" stroke-width="7" stroke-linecap="round" />
    </svg>
    <h1 class="status">
    </h1>

    <h2 class="notice">
    </h2>
  </header>
`;

// define the status component
class StatusComponent extends HTMLElement {
  // template.innerHTML = '';
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    // include a property to specify and later update a date instance
    // this to show when the online/offline status was marked
    this.lastOnline = new Date();
  }

  // function called when the component is instantiated
  // function called also when registering an online/offline event on the window
  updateStatus() {
    // based on the online property of on the window's object alter the text and change the opacity of the icons elements
    const isOnline = window.navigator.onLine;

    const status = this.shadowRoot.querySelector('h1');
    const notice = this.shadowRoot.querySelector('h2');
    status.textContent = isOnline ? 'Online' : 'Offline';
    notice.textContent = isOnline ? `Since ${this.lastOnline.toUTCString()}` : `Last seen ${this.lastOnline.toUTCString()}`;

    const signal = this.shadowRoot.querySelector('svg .signal');
    const bar = this.shadowRoot.querySelector('svg .bar');
    signal.setAttribute('opacity', isOnline ? 1 : 0.7);
    bar.setAttribute('opacity', isOnline ? 0 : 1);
  }

  // when instantiated
  connectedCallback() {
    // create a deep copy of the template element
    this.shadowRoot
      .appendChild(template.content.cloneNode(true));

    // call the function to specify the necessary text/opacity
    this.updateStatus();

    // register the online and offline events, at which point update the date instance and the elements of the component
    window.addEventListener('online', () => {
      this.lastOnline = new Date();
      this.updateStatus();
    });

    window.addEventListener('offline', () => {
      this.lastOnline = new Date();
      this.updateStatus();
    });
  }
}

// create the element ultimately used in the DOM, leveraging the class
customElements.define('status-component', StatusComponent);
