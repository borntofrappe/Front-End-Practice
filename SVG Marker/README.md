# SVG Marker

<!-- ## [Live Demo]() -->

## Goal

Define marker elements at the beginning and end of path elements.

## Notes

In the **Marker** folder you find a proof of concept for the marker elements added on the path element edges. The idea is to ultimately use the marker elements in a data visualization plotting Google trends for the python language.

For future reference regarding the `<marker>` elements:

I consider the `viewBox` to be one of the essential attributes. It describes the coordinate system of the elements nested in the element, and it allows you to make due without the `refX` and `refY` attribute if you play your cards right.

Silly example: say you have the following marker element.

```html
<marker viewBox="0 0 10 10"> </marker>
```

If you want to vertically align the marker relative to the stroke, you need to update its coordinate with the `refY` attribute.

```html
<marker viewBox="0 0 10 10" refY="5"> </marker>
```

By toying with the `viewBox`, you can achieve the same effect as follows.

```html
<marker viewBox="0 -5 10 10"> </marker>
```

It takes some getting use to it.

It also takes some getting use to the `markerWidth` and `markerHeight` attributes. I'll throw in the `markerUnits` attribute as well. By default, the width and height of the marker element is relative to the stroke. You can change this value with `markerUnits`, setting a value of `userSpaceOnUse`, and have the dimensions relative to the wrapping `svg` element.

`markerWidth` and `markerHeight` are then responsible for the actual size. It seems the two attributes follow the same rules that `svg` elements have for the `width` and `height` attributes: the element is scaled while trying to preserve the aspect ratio and avoid cropping.
