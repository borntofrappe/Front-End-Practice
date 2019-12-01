# Twitch's Logo

<!-- ## [Live Demo]() -->

## Goal

Recreate Twitch's logo with a single div, `clip-path` and `filter` properties.

## Notes

I decided to try and annotate my journey from a single `div` to the animated logo.

### Setup

The markup is rather straightforward.

```html
<div></div>
```

The stylesheet provides a few key value pairs to center the `div` container in the viewport.

```css
body {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
```

Before the body element I decided to specify the colors being used with custom properties. Probably overkill, but this way I can forget about the actual values.

```css
:root {
    --background: #18181b;
    --div: #ffffff;
    --accent: #9147ff;
}
body {
    background: var(--background);
}
div {
    background: var(--div);
}
```

The `div` is then initialized to be a square.

```css
div {
    width: 100px;
    height: 100px;
    background: var(--div);
}
```

## Clip Path

Being rather lazy, [clippy](https://bennettfeely.com/clippy/) provides a quick reference to the `clip-path` element.

The _message_ clip is actually eerily similar to what we'd like.

```css
div {
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 75%, 75% 100%, 50% 75%, 0% 75%);
}
```

Change a bit the values and you end up with something familiar.

```css
div {
    clip-path: polygon(5% 0%, 95% 0%, 95% 55%, 75% 80%, 45% 80%, 25% 100%, 25% 80%, 5% 80%);
}
```

Okay, truth be told it looks nothing like the copied `clip-path`, but at least I saved a few keystrokes for the commas and the CSS property.

The issue is that there is a square, but also a nasty triangle protruding from the bottom.

## Pseudo Element/ 1

Perhaps a pseudo element might help.

```css
div:before {
    content: "";
    background: inherit;
    position: absolute;
    width: 25%;
    height: 25%;
    top: 100%;
    left: 25%;
    clip-path: polygon(0% 0%, 100% 0%, 0% 100%);
}
```

It should draw a circle, but alas, it does not.

Ah! The `clip-path` on the div hides the content outside of the polygon.

Luckily CSS gives us two pseudo elements.

## Pseudo Element/ 2

The idea is to have one pseudo element for the triangle, one for the nudged square.

Guess it doesn't matter the order, so I'll use `:after` for the box.

```css
div {
    width: 150px;
    height: 150px;
    background: var(--div);
    position: relative;
}
div:after {
    content: "";
    background: inherit;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    clip-path: polygon(0% 0%, 100% 0%, 100% 75%, 75% 100%, 0% 100%);
}
```

Uh. The background property on the `div` doesn't let us show the new clip. Kinda glad I put that value in a custom property.

```css
div:before,
div:after {
    background: var(--div);
}
```

There's a thin line between the pseudo elements. Pretty annoying, but I don't have a fix... yet.

Let me add the purple color with a shadow.

### Shadow

```css
box-shadow: -1rem 1rem var(--accent);
```

Doesn't really work, does it.

```css
filter: drop-shadow(-1rem 1rem var(--accent));
```

Does the trick.

I can specify multiple values separating the drop-shadows with a space.

```css
filter: drop-shadow(-1rem 1rem var(--accent)) drop-shadow(-1rem 1rem var(--accent));
```

It seems the second one picks up after the first one. Nice.

### Upsie

I just realized there's no accent border around the box. Seems like the clip-path should have drawn the entire shape.

```css
div:after,
div:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0%;
    left: 0%;
    clip-path: polygon(10% 10%, 90% 10%, 90% 60%, 70% 80%, 50% 80%, 30% 100%, 30% 80%, 10% 80%);
}
```

Getting there.

```css
div:before {
    background: var(--accent);
    transform: scale(1.2);
}
```

Imperfect, but almost good looking.

### Hover

Translate to the top right, increase the drop shadow to the bottom left.

### Eyes

Clip-path frame.
