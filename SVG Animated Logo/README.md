# [SVG Animated Logo](https://codepen.io/borntofrappe/full/xxZqLjN)

Recreate [starlink.com](https://www.starlink.com/) logo with SVG syntax and anime.js.

## Notes

The animation is twofold and affects the path elements of the logo as well as the text underneath. It is managed with the library [anime.js](http://animejs.com/), which undoubtedly simplifies the way the animation is setup and restarted.

## Progressive Enhancement

Even in the small project, I considered carefully how the logo is ultimately rendered on the browser. This means:

- the SVG element has a `width` and `height` attribute, sizing the logo in the instance the stylesheet fails to load

- the animation is introduced after checking the `prefers-reduced-motion` media query

- the animation hides, and only then animates the elements into view. In the instance JavaScript fails, the logo is shown in full

## textLength

The attribute allows to manage the spacing of the text element, so that it aligns perfectly with the logo.

```html
<text textLength="82.5">
  starlink
</text>
```

When the word is split into characters, each in a `tspan` element, it seems it is necessary to reiterate its value.

```html
<text textLength="82.5">
  <tspan textLength="82.5">s</tspan>
  <tspan textLength="82.5">t</tspan>
  <!-- ... -->
</text>
```

## mask(s)

In a `defs` block, the project describes three mask elements.

- one mask is used to create the whitespace between the overlapping path elements. The larger dash is actually re-used in the mask, so that the space follows the same curve

- two masks are used to progressively hide and then show the path elements. These include a `circle` element, which hepls maintaining the illusion that the path elements are actually drawn
