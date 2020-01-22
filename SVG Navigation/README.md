# SVG Navigation

## [Live Demo](https://codepen.io/borntofrappe/full/JjoxRwG)

## Goal

Create a navigation menu with SVG syntax, the textPath element and the startOffset attribute.

## Notes

The `startOffset` attribute is animated with anime.js, but the hamburger menu instead relies on CSS animation. This makes for a rather mixed project, but I wanted to try out different techniques.

The background uses the following SVG syntax to create the wavy pattern:

```html
<svg viewBox="0 0 40 30" width="80" height="60">
  <path d="M 0 15 q 10 -5 20 0 t 20 0" fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="1" />
</svg>
```
