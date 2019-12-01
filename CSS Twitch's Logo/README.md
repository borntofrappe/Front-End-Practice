# Twitch's Logo

## [Live Demo](https://codepen.io/borntofrappe/full/qBEWeLE)

## Goal

Recreate Twitch's logo with a single div and a few CSS properties.

## Lessons learned

-   [clippy](https://bennettfeely.com/clippy/) from [Bennet Feely](@bennettfeely) is a great tool to tinker with the `clip-path` property.

-   `clip-path` can actually be animated. As long as the number of points is the same, the change can be smoothly managed with `transition` and `animation` properties.

-   there's no `clip-path` for Microsoft Edge, so prepare to be disappointed.

-   it is possible to actually multiple shadows included through the `filter` properties and the `drop-shadow` syntax. Furthermore, it seems, further shadows will be included _after_ the previous ones.
