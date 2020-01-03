# SVG Repeating Patterns

## [Live Demo](https://codepen.io/borntofrappe/full/GRgOByZ)

## Goal

Use SVG syntax to create several patterns out of basic shapes.

## Notes

This project was inspired by [Doodle.com](https://doodle.com/), and the recept provided by the scheduling service following an appointment.

It was also made possible thanks to [this video on CSS Tricks](https://css-tricks.com/lodge/svg/06-using-svg-svg-background-image/), explaining how SVG syntax can be handily used in the `background` property of any HTML element.

Beside SVG syntax, it was also a good excuse to practice with semantic elements and several CSS property value pairs.

## Patterns

For the card's bottom:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 4"><path fill="hsl(0, 0%, 100%)" d="M 0 0 c 2.5 0 2.5 4 5 4 c 2.5 0 2.5 -4 5 -4" /></svg>
```

For the rounded boxes:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <pattern id="pattern-box" viewBox="-2.5 -2.5 10 10" width="0.1" height="0.1">
      <rect rx="1" width="5" height="5" fill="none" stroke="hsl(210, 80%, 80%)" stroke-width="0.5" />
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#pattern-box)" />
</svg>
```

For the nifty checkmarks:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
  <defs>
    <pattern id="pattern-tick" viewBox="-3.5 -3.5 10 10" width="0.1" height="0.1">
      <path d="M 0 0 l 1.5 1.5 2.5 -3" fill="none" stroke="hsl(210, 80%, 80%)" stroke-width="0.5" />
    </pattern>
  </defs>
  <rect width="100" height="100" fill="url(#pattern-tick)" />
</svg>
```
