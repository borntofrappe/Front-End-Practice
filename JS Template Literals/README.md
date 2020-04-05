# JS Template Literals

## [Live Demo](https://codepen.io/borntofrappe/full/PoqrdWz)

## Goal

Use template literals to replicate [these exercises](https://developers.google.com/tech-writing/one/just-enough-grammar#exercise_1) on technical writing.

## Notes

This project was inspired by the [#codepenchallenge](https://codepen.io/challenges/2020/march/3) for the third week of March, as well as [this insightful course](https://developers.google.com/tech-writing) on technical writing.

The idea is to show an exercise

```html
Samantha is coding Operation Bullwinkle in C++.
```

And then highlight the desired keywords through a `<strong>` element.

```html
Samantha <strong>is coding</strong> Operation Bullwinkle in C++.
```

In this trivial example the task of the exercise is to highlight the verbs, hence the wrapping element around the verb **is coding**.

## Markup

```pug
#root
  h1 Grammar Exercises
  p inspired by
    a(href="...") this insightful course
  article
    h2 Exercise
    p {assignment}
    p {passage}
    details
      summary Click to see the answer
      p {answer}
        strong {matches}
```
