# SVG Android Lollipop

## [Live Demo](https://codepen.io/borntofrappe/full/KKKGjvM)

## Goal

Practice with SVG syntax to create the assets displayed in one of Android's "hidden games".

## Notes

After a bit of research, I found a way to use the svg in the `background` property and have it display on Microsoft Edge as well:

- escape the characters describing the opening and closing tags `<`, `>`, with `%3C` and `%3E` respectively;

- do not use `hsl()` color values.