// object describing the color palette of the application
const themeColors = {
    light: {
      color: 'hsl(230, 11%, 31%)',
      background: 'hsl(0, 0%, 100%)'
    },
    dark: {
      color: 'hsl(0, 0%, 100%)',
      background: 'hsl(230, 11%, 31%)'
    },
    accent: 'hsl(163, 56%, 60%)',
    subdued: 'hsl(96, 5%, 60%)'
  };

  // string describing the theme, and matching the properties described in the themeColors object
  let theme = 'dark';

  // target the body, to change the custom properties relative to this element
  const body = document.querySelector('body');

  // target the button allowing to toggle the theme
  const buttonTheme = document.querySelector('button.theme');

  // on click
  buttonTheme.addEventListener('click', () => {
    // change the text of the button to describe the _other_ theme
    buttonTheme.textContent = `${theme} mode`;
    // toggle the value
    theme = theme === 'dark' ? 'light' : 'dark';

    // retrieve the property value pairs in a 2D array with Object.entries
    const colors = Object.entries(themeColors[theme]);
    // loop through the property-value pairs and modify the value of the custom properties matching the first value with the hsl code matching the second value
    colors.forEach(([property, value]) => body.style.setProperty(`--${property}`, value));
  });