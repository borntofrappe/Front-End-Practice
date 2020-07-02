# SVG Google Photos

With this project I set out to draw two versions of the logo for Google Photos. Using anime.js then, I try to animate the change between the two visuals.

## SVG syntax

To draw the new version of the logo, I actually approached the visual with two different styles:

- [with the `use` element](https://codepen.io/borntofrappe/pen/QWyaNep)

- [with Pug as a templating engine](https://codepen.io/borntofrappe/pen/gOPoMOp)

In the first instance, I define and re-use the same `path` element. In the second instance, I repeat `path` elements for every color in the input array.

```pug
- const colors = ['hsl(5, 81%, 56%)', 'hsl(217, 89%, 61%)', 'hsl(136, 53%, 43%)', 'hsl(45, 97%, 50%)'];
```
