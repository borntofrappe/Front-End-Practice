// create a reusable element through a template tag
const template = document.createElement('template');

/* element structure
<a>
  text shown on page
  <div>text shown on hover/focus</div>
</a>

by default the div container includes three dots
*/
template.innerHTML = `
<style>
  a {
    text-decoration: none;
    color: inherit;
    font-weight: bold;
    position: relative;
    line-height: 1.5;
    font-size: 1em;
  }

  a .tooltip {
    position: absolute;
    font-size: 0.9em;
    font-weight: normal;
    padding: 0.25rem 0.75rem;
    white-space: nowrap;
    background: #0580ed;
    color: #fff;
    box-shadow: 0 0 5px -3px #000;

    transition: all 0.2s ease-out;
    transform: scale(0);
  }

  a:hover .tooltip,
  a:focus .tooltip {
    transform: scale(1);
  }

  a .tooltip span.tool {
    display: inline-block;
  }

  a:hover .tooltip span.tool,
  a:focus .tooltip span.tool {
    animation: wait 0.75s 0.3s ease-out 2;
  }
  a .tooltip span.tool:nth-of-type(2) {
    animation-delay: 0.45s;
  }
  a .tooltip span.tool:nth-of-type(3) {
    animation-delay: 0.6s;
  }

  @keyframes wait {
    25% {
      transform: translateY(-3px);
    }
    50% {
      transform: translateY(3px);
    }
    75% {
      transform: translateY(0);
    }
  }
</style>

<a>
  <slot></slot>
  <div class="tooltip"><span class="tool">•</span><span class="tool">•</span><span class="tool">•</span></div>
</a>
`;

// class describing the custom element
class CustomLinkComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });

    // boolean to manage the state of the tooltip
    this.isShowing = false;

    // functions updating the tooltip's appearance and markup
    this.updateTooltip = this.updateTooltip.bind(this);
    this.showTooltip = this.showTooltip.bind(this);
    this.hideTooltip = this.hideTooltip.bind(this);
  }

  /* function called to update the tooltip
  - when the three dots have done animating the function updates the tooltip with the informative text and scales the tooltip up
  - when the tooltip is scaled down following the blur/mouseout event the function resets the tooltip's html and removes the inline transform property
  */
  updateTooltip() {
    const { isShowing } = this;
    const tooltip = this.shadowRoot.querySelector('a .tooltip');
    tooltip.innerHTML = isShowing ? this.getAttribute('tip') : Array(3).fill('').map(dot => '<span class="tool">•</span>').join('');
    tooltip.style.transform = isShowing ? 'scale(1)' : '';

    // remove the event listener to be able to fire it once more through the showTooltip/hideTooltip functions
    tooltip.removeEventListener('transitionend', this.updateTooltip);
  }

  // function called following the mouseenter/focus events
  showTooltip() {
    // proceed only if the tooltip is not in the process of being shown
    const { isShowing } = this;
    if (!isShowing) {
      this.isShowing = true;
      // target the .tooltip container, the nested span elements
      const tooltip = this.shadowRoot.querySelector('a .tooltip');
      const spans = tooltip.querySelectorAll('span');
      // identify the last span (last to be animated)
      const lastSpan = spans[spans.length - 1];

      // when the last span has done animating, scale the tooltip back to 0
      lastSpan.addEventListener('animationend', () => {
        tooltip.style.transform = 'scale(0)';
        // as the tooltip finishes its transition, call the update function to show the tooltip's text
        tooltip.addEventListener('transitionend', this.updateTooltip);
      });
    }
  }

  // function called following the mouseout/blur events
  hideTooltip() {
  // ! proceed only if the tooltip is in the process of being shown
    const { isShowing } = this;
    if (isShowing) {
      this.isShowing = false;
      // target the tooltip
      const tooltip = this.shadowRoot.querySelector('a .tooltip');
      // scale the tooltip to 0
      tooltip.style.transform = 'scale(0)';
      // as the tooltip disappears from sight call the update function to reset the tooltip's markup
      tooltip.addEventListener('transitionend', this.updateTooltip);
    }
  }

  // when instantiated create a copy of the template
  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    // target the elements in the template which need updating
    const link = this.shadowRoot.querySelector('a');
    const tooltip = link.querySelector('.tooltip');

    // set the href attribute through the href attribute of the custom element itself
    const href = this.getAttribute('href');
    link.setAttribute('href', href);
    // if the link references an actual page open the page in another tab
    if (href !== '#') {
      link.setAttribute('target', '_blank');
    }

    // retrieve the corner to modify the appearance of the tooltip box
    const corner = Number.parseInt(this.getAttribute('corner'), 10);

    /* based on the corner value update the following properties
    -
    -
    */
    // border-radius to have 20px for every corner except the one closes to the anchor link element
    const borderZero = (corner + 2) % 4;
    const borderRadius = Array(4).fill('20px');
    borderRadius[borderZero] = '0';
    tooltip.style.borderRadius = borderRadius.join(' ');

    // top, right, bottom, left to position the tooltip
    if (corner < 2) {
      tooltip.style.bottom = '100%';
    } else {
      tooltip.style.top = '100%';
    }
    if (corner % 3 === 0) {
      tooltip.style.right = '100%';
    } else {
      tooltip.style.left = '100%';
    }

    // transform-origin to determine from where the tooltip should spawn
    const originX = corner % 3 === 0 ? '100%' : '0%';
    const originY = corner < 2 ? '100%' : '0%';
    tooltip.style.transformOrigin = `${originX} ${originY}`;

    // attach event listeners on the anchor link to show/hide the tooltip as needed
    link.addEventListener('focus', this.showTooltip);
    link.addEventListener('mouseenter', this.showTooltip);

    link.addEventListener('blur', this.hideTooltip);
    link.addEventListener('mouseout', this.hideTooltip);
  }
}

// define the custom-link element referencing the custom element
window.customElements.define('custom-link', CustomLinkComponent);
