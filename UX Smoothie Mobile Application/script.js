/* with global variables
- describe the list of ingredients
- describe the state of the order
*/
const state = {
  ingredients: [ // an array of ingredients by name and matching color
    {
      name: 'pineapple',
      color: 'rgb(255, 208, 66)',
    },
    {
      name: 'peach',
      color: 'rgb(242, 110, 73)',
    },
    {
      name: 'raspberry',
      color: 'rgb(228, 41, 57)',
    },
  ],
  order: { // an object detailing the selection as well as variables used for the size and position of the rectangles
    ingredients: [],
    left: 2,
    base: 50, // where the rectangles ought to be positioned, vertically (atop the existing rect element)
    measure: 25, // height of each rectangle
  }
}

/* based on the list of ingredients add one button in the .phone__ingredients section
 with the following markup (but using the name and color of the ingredients)
<button>
    <svg style="color: #fbe054;" width="20" height="20">
        <use href="#pineapple-button"></use>
    </svg>
    <span>Add +</span>
</button>
*/
const phoneIngredients = document.querySelector('.phone__ingredients');


// function called on the order button
function handleOrder() {
  // proceed updating the UI to show the final mixture
  this.removeEventListener('click', handleOrder);

  // shake the svg
  const phoneDrink = document.querySelector('.phone__drink');
  anime({
    targets: phoneDrink,
    rotate: [4, 0, -4],
    loop: 4,
    direction: 'alternate',
    duration: 100,
    easing: 'easeInOutSine',
  })

  // include a rectangle element spanning the entirety of the g.drink 100 height
  // this rectangle using the color dictated by the selected ingredients
  const { ingredients } = state;
  const { ingredients: ingredientsOrder } = state.order;
  const colors = ingredientsOrder.map(nameOrder => ingredients.find(({name}) => name === nameOrder).color);
  // add up the rgb values of each ingredient
  const regexRGB = /rgb\((\d+), (\d+), (\d+)\)/;
  const color = colors.reduce((acc, curr) => {
    const [, r, g, b] = curr.match(regexRGB);
    return [r, g, b].map((value, index) => parseInt(value, 10) + acc[index]);
  },[239, 225, 153]); // initialize the array with the color of the soya drink (this would technically weigh for twice the intensity, but to avoid too similar a color, I consider it diluted)

  // include the color using the sum of all rgb codes, divided by the number of colors present
  phoneDrink.querySelector('g.drink').innerHTML += `
  <g id="mix" transform="translate(0 50)">
    <rect
        transform="scale(1 0)"
        x="0"
        y="-50"
        width="100"
        height="100"
        fill="rgb(${color.map(value => value / 3).join(',')})">
    </rect>
  </g>
  `;

  // after a small delay animate the rectangle to its full y scale
  anime({
    targets: `g#mix rect`,
    transform: 'scale(1 1)',
    duration: 300,
    delay: 300,
    easing: 'easeInOutSine',
  });

  // once the shaking is complete remove the ingredients
  // before removing the ingredients hide them from view
  anime({
    targets: phoneIngredients,
    opacity: 0,
    visibility: 'hidden',
    duration: 250,
    delay: 600,
    easing: 'easeInOutSine',
    complete: () => {
      anime({
        targets: phoneIngredients,
        height: 0,
        duration: 250,
        easing: 'easeInOutSine',
        complete: () => {
          phoneIngredients.parentElement.removeChild(phoneIngredients);
        }
      })
    }
  });

  // remove the order button and update the phoneState/phoneOrder text elements to highlight the final screen
  const phoneState = document.querySelector('.phone__state');
  const phoneOrder = document.querySelector('.phone__order');


  // phoneState.querySelector('p').innerHTML = 'And here it is!<br/><strong>Hope you\'ll enjoy</strong>';
  anime({
    targets: this,
    scale: 0,
    duration: 250,
    delay: 750,
    easing: 'easeInOutSine',
    complete: () => {
      this.parentElement.removeChild(this);
    }
  });
  anime({
    targets: phoneState,
    opacity: 0,
    visibility: 'hidden',
    duration: 250,
    delay: 750,
    easing: 'easeInOutSine',
    complete: () => {
      phoneState.innerHTML = `
        <h2>Here it is</h2>
        <p>Hope you'll enjoy<br/>your smoothie!</p>
      `;
      anime({
        targets: phoneState,
        opacity: 1,
        visibility: 'visible',
        duration: 200,
        easing: 'easeInOutSine',
      });
    }
  });
  anime({
    targets: phoneOrder,
    opacity: 0,
    visibility: 'hidden',
    duration: 250,
    delay: 850,
    easing: 'easeInOutSine',
    complete: () => {
      phoneOrder.querySelector('div').innerHTML = `
        <h3>Your great choice</h3>
        <p>A ${ingredientsOrder.join('-')} flavored refreshment.</p>
      `;
      anime({
        targets: phoneOrder,
        opacity: 1,
        visibility: 'visible',
        duration: 200,
        easing: 'easeInOutSine',
      });
    }
  });

}

// function called by the ingredients button
function handleIngredient() {
  // retrieve the name of the ingredient and based on the state.order.ingredients, state.order.left values proceed adding/removing the ingredients
  const ingredient = this.getAttribute('data-ingredient');
  const { ingredients, left, base, measure } = state.order;


  /* possible scenarios
  1. ingredient is present in the ingredients array, proceed to remove it
  1. ingredient is not present, analyse the number of ingredients left
    1. more than 0, proceed to add the ingredient
    1. 0, do nothing

    all the while updating the state and the UI where needed (heading, order section, but most importantly the drink)
  */
 if(ingredients.includes(ingredient)) {
    // update the state removing the ingredient
    const index = ingredients.indexOf(ingredient);
    state.order.ingredients = [...ingredients.slice(0, index), ...ingredients.slice(index + 1)];
    state.order.left = left + 1;

    // update the UI
    // number of ingredients left
    const phoneState = document.querySelector('.phone__state');
    phoneState.querySelector('p').innerHTML = `You can choose<br/><strong>${state.order.left} more</strong> ingredients.`

    // possibility to add the now removed ingredient
    this.querySelector('span').textContent = 'Add +';

    // list of selected ingredients
    const phoneOrder = document.querySelector('.phone__order');
    phoneOrder.querySelector('ul li:last-of-type').textContent = state.order.ingredients.join(', ');

    // class for the order button
    phoneOrder.classList.remove('complete');
    // remove the event listener to avoid running the function accidentally
    phoneOrder.querySelector('button').removeEventListener('click', handleOrder);

    // update the SVG to remove the selected ingredient and possibly translate the ingredients chosen afterwards
    const phoneDrink = document.querySelector('.phone__drink');
    // before removing the element have the selected rectangled scaled back to 0
    anime({
      targets: phoneDrink.querySelector(`g#${ingredient} rect`),
      transform: 'scale(1 0)',
      duration: 200,
      easing: 'easeInOutSine',
      complete: () => {
        const selectedIngredient = phoneDrink.querySelector(`g#${ingredient}`)
        selectedIngredient.parentElement.removeChild(selectedIngredient);
      }
    });
    // translate the remaining ingredient, if any downwards
    const remainingIngredient = ingredients.find(ingr => ingr !== ingredient);
    anime({
      targets: phoneDrink.querySelector(`g#${remainingIngredient}`),
      transform: `translate(0 ${base - measure * 2})`,
      duration: 200,
      easing: 'easeInOutSine',
    });


    // reduce the base value
    state.order.base = base - measure;

 } else if(left > 0) {
    // update the state adding the ingredient
    state.order.ingredients.push(ingredient);
    state.order.left = left - 1;

    // update the UI
    // ! display different content if left is now equal to 0, to direct toward the mixing step
    const phoneState = document.querySelector('.phone__state');

    const phoneOrder = document.querySelector('.phone__order');

    if(state.order.left === 0) {
      phoneOrder.classList.add('complete');
      phoneOrder.querySelector('button').addEventListener('click', handleOrder);
      phoneState.querySelector('p').innerHTML = '<strong>You are all set</strong><br/>Proceed mixing.';
    } else {
      phoneState.querySelector('p').innerHTML = `You can choose<br/><strong>${state.order.left} more</strong> ingredients.`;
    }

    this.querySelector('span').textContent = 'Remove';

    phoneOrder.querySelector('ul li:last-of-type').textContent = state.order.ingredients.join(', ');

    // update the SVG to add the rectangle element
    const phoneDrink = document.querySelector('.phone__drink');
    const {color} = state.ingredients.find(({name}) => name === ingredient);
    // ! initially set the vertical scale to 0 and animate the rectangle with anime.js
    phoneDrink.querySelector('g.drink').innerHTML += `
    <g id="${ingredient}" transform="translate(0 ${base})">
      <rect
          transform="scale(1 0)"
          x="0"
          y="0"
          width="100"
          height="${measure}"
          fill="${color}">
      </rect>
    </g>
    `;

    anime({
      targets: `g#${ingredient} rect`,
      transform: 'scale(1 1)',
      duration: 200,
      easing: 'easeInOutSine'
    })

    // increase the base variable to move the following rectangle upwards
    state.order.base = base + measure;
 }
}

state.ingredients.forEach(({ name, color }) => {
  // create and append a button specifying the markup described above
  const button = document.createElement('button');
  // data attribute to rapidly identify the selected ingredient
  button.setAttribute('data-ingredient', name);
  button.addEventListener('click', handleIngredient);
  button.innerHTML = `
  <svg style="color: ${color};" width="20" height="20">
      <use href="#${name}-button"></use>
  </svg>
  <span>Add +</span>
  `;
  phoneIngredients.appendChild(button);
});


// orderButton.addEventListener('click', handleOrder);

// bonus: add the current hour and minutes in the span element
// using the hh:mm format
const now = new Date();
const hours = now.getHours();
const minutes = now.getMinutes();
const zeroPadded = num => (num >= 10 ? num.toString() : `0${num}`);

const span = document.querySelector('nav span');
span.textContent = `${zeroPadded(hours)}:${zeroPadded(minutes)}`;