# D3 EU Member States

## [Live Demo](https://codepen.io/borntofrappe/full/PoYOqzP)

## Goal

Inspired by [this visualization](https://lemonde.fr/les-decodeurs/article/2019/08/22/de-la-lituanie-au-kazakhstan-visualisez-la-dislocation-progressive-de-l-union-sovietique_5501717_4355770.html) highlight the member states of the European Union through the years and through scroll.

## Update

Upon further testing, a cross-compatibility issue rose with Firefox. This issue was caused by the string used to create a date object, which initially displayed the day followed by the month and year. When using a string, the object works passing the year first, followed by the month and day. This is a rather finnicky behavior, and one which should motivate me to further create date instances not with strings, but with arguments.

See [this article for further analysis](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/).