# SVG Faux Conic Gradient

## [Live Demo](https://codepen.io/borntofrappe/full/vYYMENR)

## Goal

Use SVG syntax to fake a conic gradient by repeating a series of slices around the center.

## Notes

The project actually uses **pug** to provide a more flexible demo. It is possible to tinker with the number of slices, the space between the slices and also the size of the innerRadius to create a variety of shapes. One thing I haven't accounted, yet, it that is is actually possible to tinker with a specific set of colors.

Consider for instance how the following allows to have a nice shade of red-to-orange around the wheel.

```pug
g
    - for (let i = 0; i < slices; i+= 1)
        use(href="#slice" stroke="none" fill=`hsl(${50 / slices * i}, 90%, 60%)` transform=`rotate(${360 / slices * i})`)
```

## Update

In the **res** folder you find the source code ultimately responsible for the repeating background. I've been experimenting with different patterns, and this one replicating the shape at the four corners of the viewBox has proved to be a rather flexible approach.
