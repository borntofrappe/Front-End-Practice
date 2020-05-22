# [CSS Animation Steps](https://codepen.io/borntofrappe/full/oNjmRbN)

Experiment with CSS animation and the steps() function.

## Notes

Refer to the [mdn docs](https://developer.mozilla.org/en-US/docs/Web/CSS/easing-function) for the easing functions and the different values accepted by `steps()`.

In the demo, the idea is to use the specific function to have the shape of a pencil move rightwards, and with a staggered translation. The SVG is a tad convoluted, so to have a mask effectively hide the dots, and the SVG elements visually behind the pencil.

## threshold

In the script, I remove the animation following the `animationiteration` event, and if a number is larger than a given threshold. It is important to note a quirk however: the function is called at every iteration of the animation property, and in the scope of the SVG element, it is called thrice. One time for each element being repositioned through the class of `translate`, the event is registered and the condition against the threshold is checked.
