# Input Type Password

## [Live Demo](https://codepen.io/borntofrappe/full/gOpgbNZ)

## Goal

Animate SVG paths with CSS transitions, for browsers supporting the feature.

## Notes

This project was inspired by [this article on animating SVG paths in CSS](https://css-tricks.com/animate-svg-path-changes-in-css/).

The following SVG element is included in the background to create a repeating pattern.

```html
<svg viewBox="-5 -5 10 10">
  <circle id="dot" r="1" />
  <use href="#dot" x="5" y="5" />
  <use href="#dot" x="-5" y="5" />
  <use href="#dot" x="5" y="-5" />
  <use href="#dot" x="-5" y="-5" />
</svg>
```
