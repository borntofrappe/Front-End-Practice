# Canvas Static

## [Live Demo](https://codepen.io/borntofrappe/full/jOPqMyV)

## Goal

Use the Canvas API to recreate the static texture for a television set without connection.

## Links

- [MDN Docs on the output element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/output). The output's value can actually be modified inline, using the `onsubmit` handler

  ```html
  <form oninput="this.status.value=this.isOn.checked?'On':'Off'"></form>
  ```

- [MDN Docs on the form element API](https://developer.mozilla.org/en-US/docs/Web/API/HTMLFormElement/elements). Helpful to rapidly retrieve the form's fields using their respective identifier.
