# SVG Line Drawing

## [Live Demo](https://codepen.io/borntofrappe/full/KKwmvmN)

## Goal

Recreate the Star Wars title with SVG syntax and anime.js.

## Notes

-   the title is actually meant to provide something akin to a loading screen, for a soon-to-be project themed around Star Wars and its opening crawls.

-   for the background, the following SVG syntax is repeated to draw a starry's sky.

    ```html
    <svg viewBox="0 0 200 200">
        <defs>
            <circle id="circle" r="1" fill="hsl(0, 0%, 100%)" />
        </defs>
        <use href="#circle" x="50" y="50" />
        <use href="#circle" x="150" y="50" />
        <use href="#circle" x="50" y="150" />
        <use href="#circle" x="150" y="150" />
        <use href="#circle" transform="translate(100 100) scale(2.5)" />
    </svg>
    ```

-   the `textLength` and `lengthAdjust` properties are used to have "coming soon" stretch to cover the viewBox's width. [This article on CSS Tricks highlights how](https://css-tricks.com/snippets/svg/text-lock-up/).

-   the line is drawn using the `strokeDashoffset` property. [anime.js describes how in the interactive docs](https://animejs.com/documentation/#lineDrawing).
