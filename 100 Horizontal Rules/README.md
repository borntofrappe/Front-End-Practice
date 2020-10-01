# 100 Horizontal Rules

The codepen challenge in the last week of September asks to experiment with 100 `<hr>` elements. With this demo, I set out to use the horizontal rules to create a music sheet.

## overflow

This is something I discovered while testing the demo on Chrome devices. It seems the user-agent stylesheet of some browsers, Chrome included, modified the `hr` style to have `overflow: hidden;` by default. It is necessary to remove this default to let the browser render the clef key and the other graphics included through pseudo elements.

## nth selector

The idea is to use the `nth-of-type` and `nth-last-of-type` selectors to include different styles for the border describing the beginning and the end of the music sheet. Using the `nth-of-type` selector once more, the idea is to then add notes at arbitrary interval.
