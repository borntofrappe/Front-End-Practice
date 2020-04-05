const href = 'https://developers.google.com/tech-writing';

const exercises = [
  {
    assignment: 'Identify the three pronouns in the following passage:',
    passage:
      'The cafeteria featured peashew butter and pluot jam on pumperye toast. Employees found it awesome and wished they could eat this every day.',
    matches: ['it', 'they', 'this'],
  },
  {
    assignment: 'Identify the verbs in the following passage:',
    passage:
      'Samantha is coding Operation Bullwinkle in C++. This project currently consumes over 80,000 lines of code. She previously used Python, but recently gravitated to C++. Samantha leads a team of four software engineers, which will grow to six software engineers next quarter.',
    matches: [
      'is coding',
      'consumes',
      'used',
      'gravitated',
      'leads',
      'will grow',
    ],
  },
];

/* markup
article
  h2
  p {assignment}
  p {passage}
  details
    summary Click
    p {answer}
      strong {matches}

*/

const markupExercise = ({ assignment, passage, matches }) => {
  let answer = passage;
  matches.forEach(match => {
    const regex = new RegExp(match, 'gi');
    answer = answer.replace(regex, match => `<strong>${match}</strong>`);
  });

  return `
  <article>
    <h2>Exercise</h2>
    <p>${assignment}</p>
    <p>${passage}</p>
    <details>
      <summary>
        Click to see the answer
      </summary>
      <p>
        ${answer}
      </p>
    </details>
  </article>
  `;
};

document.body.innerHTML = `
  <div id="root">
    <h1>Grammar Exercises</h1>
    <p>Inspired by
      <a href="${href}">
        this insightful course
      </a>
      on technical writing
    </p>

    ${exercises.map(exercise => markupExercise(exercise)).join('')}
  </div>

`;
