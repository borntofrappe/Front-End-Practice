# Button UI Kit

## [Live Demo](https://codepen.io/borntofrappe/full/VNBRwo)

## Goal

Participate to the #weeklycodingchallenge creating a series of buttons.

## The idea

Show a set of buttons, styled in the following variants:

- primary: with a colored background and white text;

- secondary: with white text and a colored border;

- tertiary: with a small underline, no border, no colored background;

- disabled: a washed out color, a matching cursor.

It would be additionally neat to:

- make it so that any time a button is clicked a new set of buttons is included with a different color;

- use HSL and CSS custom properties.

## Notes

Turned out to be quite the teaching project. As I mentioned whilst sharing it online, it seems firefox trips up when using the `transform-origin` attribute in an SVG element. The fix? Use the `translate()` value to have the wrapping element literally move the center of the transform property.

Moving from this:

```html
<svg>
  <circle transform-origin="80 20" cx="50" cy="50" r="20" />
</svg>
```

To this:

```html
<svg>
  <g transform="translate(80 20)">
    <circle cx="-30" cy="30" r="20" />
  </g>
</svg>
```

It is a trivial example, but the point is you need to adjust your coordinates in light of the translation.
