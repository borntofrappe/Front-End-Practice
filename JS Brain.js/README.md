# Brain JS

Neural networks with JavaScript. Prompted by [this Scrimba Course](https://scrimba.com/g/gneuralnetworks), this folder includes the notes I made through the playlist and the different neural nets each in its own file.

## Getting started

A neural network essentially works on the basis of _training data_. You include properly formatted data in the net, train it and later run the net with a distinct input to have it produce a result, an output based on the training accumulated in the previous stages.

## Including Brain.js

You can include the library locally, after downloading the package, or reference a version of the code online, as follows.

```html
<script src="https://unpkg.com/brain.js@1.6.0/browser.js"></script>
```

## XOR net - Numbers

In a first example, the lecturer introduces a neural net for the XOR function; this is a function accepting as input two values, either `0` or `1`, and returns as output one value, with the following conditions:

- if the values match return `0`;

- else return `1`

The goal of the first example is to show how a net can be trained to implement such logic, on the basis of training data. The net is not told the XOR logic, but it learns it by assessing the value of the input and output specified in the training data.

### Training data

The training data is an _array_ of _objects_, each describing the input and output values as follows:

```js
{
  input: [0, 0],
  output: [0]
}
```

With the input values and the output value specified themselves in an _array_.

```js
const trainingData = [
  { input: [0, 0], output: [0] },
  { input: [0, 1], output: [1] },
  { input: [1, 0], output: [1] },
  { input: [1, 1], output: [0] }
];
```

The idea is to ultimately run the net with a set of input values: `[1, 0]`, and have it produce a fitting result.

### Creating the net

Brain.js provides a few neural networks in its code. A first net is created through the `NeuralNetwork()` function available on the `brain` object.

This function accepts as argument an object of options, specifying the behavior of the net. To get started, the single option specified in this first net is a property called _hiddenLayers_, more on this later.

```js
const options = {
  hiddenLayers: [3]
}
const net = new brain.NeuralNetwork(options);
```

### Training the net

Once created, the net can be trained with the training data and through the `train()` function. This function is made available on every instance of a neural network.

```js
net.train(trainingData);
```

### Running the net

Once created and trained, the net is able to produce a result by passing a fitting input in the `.run()` function.

```js
const firstInput = [0, 0];
const firstOutput = net.run(firstInput);
console.log(`First input: ${firstInput}\nFirst output: ${firstOutput}`);
```

The net produces a result matching the structure of the `output` property, which can be displayed in the console, or used as needed.

```js
// First input: 0,0
// First output: 0.05709110572934151
```

Notice how the output is not `0`. This is to be expected, as the net functions on the basis of training data, learning from the input values and refining itself until it reaches a solid conclusion.

With another input it is possible to see how the output value approaches once more the correct solution.

```js
const secondInput = [1, 0];
const secondOutput = net.run(secondInput);
console.log(`Second input: ${secondInput}\nSecond output: ${secondOutput}`);
```

Producing a value close to `1`

```js
// Second input: 1,0
// Second output: 0.9341405034065247
```

## How does a net learn

### Forward, Backward Propagation

A neural network learns with _forward_ and _backward_ propagation.

Forward: predict the result based on a set out input and assumptions.

Backwards: measure the result and learn from the measurement.

By continuously implementing forward and backward propagation, the net is able to approach the solution. It is basically what happens within the `train()` function.


### Error

In the `run()` function, the net is run, and produces an output based on the accrued learning.

Throughout the learning process, the net produces a measurement referred to as _error_. You can highlight it in the `train()` function.

```js
net.train(trainingData, {
  log: (error) => console.log(error),
  logPeriod: 100
})
```

You can then see in the log statements how the _training error_ incrementally and consistently reduces itself. Once it reaches a certain threshold (by default set to `0.005`), the net has learned enough to stop the training process.

Highlighting the last iterations, the log statement shows something akin to:

```js
// iterations: 4300, training error: 0.0059488336443352
// iterations: 4400, training error: 0.005231886661277552
```

### Structure

The neural net can be described in the following components.

- **function**. Fundamentally a neural network takes in a certain input(s) and produces a certain output(s)

- **random values**. From the input values, the net starts learning from random values. Over times it learns from how these random values face against the expected output, and produces more appropriate values.

- **activation function**. A function which allows to describe an output value, which is then used in the iteration which follows as a new input. A popular _relu_ function looks as follows

```js
function relu(value) {
  return value < 0 ? 0 : value
}
```

[More on activation functions](https://en.wikipedia.org/wiki/Activation_function).

### Layers

The function instantiating the neural net sets out a value in the field _hiddenLayers_. To understand this element, think of a neural network as a series of neurons.

From input to output, you can have the XOR function described in the following schema.

```text
inputNeuron --- \
                 outputNeuron
inputNeuron --- /
```

You have an _input layer_ and an _output layer_. In this visualization, _hidden layers_ are simply additional layers placed in between the input and output fields.


```text
inputNeuron ---  hiddenNueron ---- \
             \
             /                    outputNeuron
inputNeuron ---  hiddenNeuron ---- /
```

This is a visualization of 1 hidden layer with 2 neurons, but the actual snippet of code used a hidden layer of 3 neurons.

By changing the number of neurons of a hidden layer, by even changing the number of hidden layers themselves, it is possible to examine a different learning process.

```js
// two hidden layers with 3 neurons and 2 neurons
const options = {
  hiddenLayers: [3, 2]
}
const net = new brain.NeuralNetwork(options);
```

Generally speaking, lowering the number of neurons, increassing the number of layers decreases the speed of the net to reach a conclusion.

As a side note: in a _feed forward net_, the math occurring between layers can be described as follows:

```code
activate((inputWeights * input) + biases)
```

More research is however warranted.

[More options available on the net](https://github.com/BrainJS/brain.js#options).

## Color Net - Objects

Moving from arrays to objects, it is possible to train a net as to return a more complex output.

The input will be an object with properties describing the hue of a color, and the output an object describing certain characteristics of that hue.

```js
input = {
  red,
  green,
  blue,
}
output = {
  light,
  dark,
  neutral,
}
```

### Training Data

Starting from two arrays describing the input colors and the output bightness values.

```js
const colors = [
    { green: 0.2, blue: 0.4 },
    { green: 0.4, blue: 0.6 },
    { red: 0.2, green: 0.8, blue: 0.8 },
    { green: 1, blue: 1 },
    { red: 0.8, green: 1, blue: 1 },
    { red: 1, green: 1, blue: 1 },
    { red: 1, green: 0.8, blue: 0.8 },
    { red: 1, green: 0.6, blue: 0.6 },
    { red: 1, green: 0.4, blue: 0.4 },
    { red: 1, green: 0.31, blue: 0.31 },
    { red: 0.8 },
    { red: 0.6, green: 0.2, blue: 0.2 }
];

const brightnesses = [
    { dark: 0.8 },
    { neutral: 0.8 },
    { light: 0.7 },
    { light: 0.8 },
    { light: 0.9 },
    { light: 1 },
    { light: 0.8 },
    { neutral: 0.7, light: 0.5 },
    { dark: 0.5, neutral: 0.5 },
    { dark: 0.6, neutral: 0.3 },
    { dark: 0.85 },
    { dark: 0.9 }
];
```

It is first necessary to create a valid data structure for the training data. The `.train()` function expects an array of objects, separated in input and output properties, like so:


```code
[
  { input, output},
  { input, output},
  { input, output},
]
```

In this instance, the input and output properties refer to an object instead of a 2D array, but the logic is the same: input values mapping to output values.

With the desired data structure, the training and running of the net is rather similar. The only difference occurs in the `run()` function, when the input is specified as an object instead of an array.

```js
const color = { red: 0.3, green: 0.5 };
const brightness = netColor.run(color);
```

A small note: give the structure of the output, the log statement will highlight `[object Object]`. Use `JSON.stringify()` to include the value as a string. This is true for the input and the stats as well.

Another small note: to highlight statistics from the training stage, you can retrieve the last error and the number of iterations the net took by considering the return value of the train function.

```js
const stats = netColor.train(trainingColorData);
```

### Dynamism

With this net is it already possible to highlight a rather important feature of neural networks and Brain.js specifically: the net is trained and run with input values of variable lengths. If an input field is missing, the net assumes its value to be `0` and acts accordingly.

### Reversing the net

As added practice, the lecturer highlights how the net can run the reverse logic to the mentioned color net, detailing a net which accepts as input a brightness value and produces as output a color value.

To achieve this result it is necessary to train a net with the opposite training data.

## Restaurant net - String

Instead of leveraging just numbers, a net can be modeled to reason with other data types, like string values. The idea is to assign a neuron to a particular value, signalling its existence with a boolean: on and off.

In this example we have a dataset of restaurants, with a particular open day. The idea is to have the neural network return the restaurants by specifying a day instead of number values.

```js
const restaurants = {
    "Brilliant Yellow Corral": "Monday",
    "Penny’s": "Tuesday",
    "Right Coast Wings": "Wednesday",
    "The Delusion Last Railway Car": "Thursday",
    "Fun Day Inn": "Friday",
    "JHOP": "Saturday",
    "Owls": "Sunday"
};
```

As per the argument of the train function, this is a 2D array with input and output fields. Each value of the input and output is however an object describing the properties through a 0 or 1.

```js
{
  input: { "Monday": 1 }
  output: { "Brilliant Yellow Corral": 1 }
}
```

A small note on `for in` loop: applied to an object, it allows to retrieve the properties one iteration after another.

```js
const object = {
  name: 'tim',
  age: 21
};

for(prop in obj) {console.log(prop)}; // name, age
```

With this in mind, it is possible to fabricate the training data with the mentioned boolean values.

```js
const trainingData = [];
for(let name in restaurants) {
  const day = restaurants[name];
  trainingData.push({
    input: { [day]: 1},
    output: { [name]: 1}
  })
}
```

For the first restaurant's name, for instance, this has the effect of creating an input value of `{ 'Monday': 1 }`, and output value of `{ 'Brilliant Yellow Corral': 1 }`. The way brain.js works, any other day is considered by default as 0.

Beyond this massaging of data, the example proceeds as earlier: set up the net, train it. Come runnning time, pass as input an object detailing the day to be considered, as in `{ 'Monday': 1 }`.

The output of the net is a giant object with every single restaurant's name, and associated to this name a value falling in the `[0-1]` range. For the restaurants matching the input day, this value will approach `1`, while for the others it will approach `0`.

This is all well and good, but the example is meant to accept as argument and return as ouput a string value, not an object. To accommodate this need, a separate function is created to inject an input value the net can understand and produce a string in the desired format.

```js
// day: string value
function restaurantForDay(day) {
  // input for the net: object value
  const input = {
    [day]: 1,
  }
  // output of the net: giant object describing values in the [0-1] range for the restaurants' names
  const output = net.run(input);

  // result of the function: string value describing the restaurant with the greater measurement
  const result = Object
    .entries(output)
    .sort(([nameA, errorA], [nameB, errorB]) => errorA >= errorB ? -1 : 1)[0][0];

  return result;
}

const day = 'Tuesday';
const restaurant = restaurantsForDay(day);
console.log(`Day: ${day}\nRestaurant: ${restaurant}`);
```

The function is connected to the net and is able to reason with string values instead of object values.

```js
// Day: Tuesday
// Restaurant: Penny’s
```

The extra challenge, just like for the color net, is reversing the network.

## Counter net - Recurrence

Consider a counter, highlighting each number one at a time. Number after number, a neural network can be taught to continue on the basis of _recurrence_.

If you were to consider a representations of single digit numbers, you could structure the numbers in frames of a defined with and height. For `1` and `2` for instance.

```text
ooooooo
oooxooo
oooxooo
oooxooo
oooxooo
oooxooo
ooooooo
```

```text
ooooooo
oxxxxxo
oooxoxo
oxxxxxo
oxooooo
oxxxxxo
ooooooo
```

Starting by manually defining the training data.

```js
const trainingData = [
  [1,2,3,4,5],
  [5,4,3,2,1]
]
```

A recurrent neural net is set up through a custom function.

```js
const net = new brain.recurrent.LSTMTimeStep();
```

Where _LSTM_ stand for long short term memory. Training this net is no different from previous networks.

```js
net.train(trainingData);
```

Running the net is however a tad different.

```js
net.run([1, 2, 3, 4]);
net.run([5, 4, 3, 2]);
```

Giving a partial array and having the net return the following number.

Extra challenge: count from 10 to 5.

## Stock Predictor - Normalization & Multiple Results

Building up from the counter neural network, we start by considering the input data of a stock predictor net.

This is data in the format:

```js
{
  date, // yyyy-mm-dd
  open, // float
  high, // float
  ... // floats
}
```

Given that the float can be number greater than 1, but the neural net functions with values in the `[0-1]` range, it is necessary need to normalize the input accordingly.

```js
function scaleDown(step) {
  return {
    open: step.open / 138,
    high: step.high / 138,
    low: step.low / 138,
    close: step.close / 138
  }
}
```

The function takes as argument a single object and scales down its values according to 138. 138 representing a low point in the dataset.

It is necessary to specify a function to also de-normalize, scale up the input values. This to have the code ultimately return the result expected from the input values.


```js
function scaleDown(step) {
  return {
    open: step.open * 138,
    high: step.high * 138,
    low: step.low * 138,
    close: step.close * 138
  }
}
```

The more generalized approach to scale a value is following this mathematical formula.

Using the data available in `rawData`, the `scaleUp()` and `scaleDown()` functions are built as follows.

```js
const highest = rawData.reduce((acc, curr) => curr.high > acc ? curr.high : acc , 0);
const lowest = rawData.reduce((acc, curr) => curr.low < acc ? curr.low : acc , highest);

function scaleDown(step) {
  return {
    open: (step.open - lowest) / (highest - lowest),
    high: (step.high - lowest) / (highest - lowest),
    low: (step.low - lowest) / (highest - lowest),
    close: (step.close - lowest) / (highest - lowest)
  }
}
function scaleUp(step) {
  return {
    open: step.open * (highest - lowest) + lowest,
    high: step.high * (highest - lowest) + lowest,
    low: step.low * (highest - lowest) + lowest,
    close: step.close * (highest - lowest) + lowest
  }
}
```

The net begins by scaling the entire dataset.

```js
const scaledData = rawData.map(scaleDown);
```

This applies the scaleDown function to every item.

The training data is fabricated by using the larger dataset in smaller structures (to have the net work on prediction in smaller scopes).

```js
const trainingData = [
  scaledData.slice(0, 5),
  scaledData.slice(5, 10),
  scaledData.slice(10, 15),
  scaledData.slice(15, 20)
];
```

A recurrent neural network is then set up exactly like in the counter example.

The lecturer specifies a couple more options, both for the neural network and the training function, but the logic is rather intuitive.

```js
// recurrent neural network with 4 input and output values (the properties of the object specified in the input and output vales)
// with two hidden layers of 8 neurons each

const net = new brain.recurrent.LSTMTimeStep({
  inputSize: 4,
  hiddenLayers: [8, 8],
  outputSize: 4
});

// train the net tweaking the learning rate (how much it gains in knowledge at each iteration) and the error threshold (how much error before stopping the training process, to avoid excessive computation times)
net.train(trainingData, {
  learningRate: 0.005,
  errorThresh: 0.02
});
```

Beside the input and output size, made to match as the net is expected to receive and return a similar data structure, the training of the net occurs under specific values for:

- learning rate: how much knowledge is gained at each iteration;

- error threshold: how much to accept as error before stopping the training process.

These values are tweaked to avoid excessive computing, and have the net run at a reasonable pace in the browser.

Based on this structure, the net can be then provided with an input value such as the first set of training data and return a prediction.

```js
const input = trainingData[0];
const output = net.run(input);
```

Instead of returning one single data, you can also use the `forecast()` function instead of `run()`. Specify the training data, or the data points, and afterwards the steps, number of output values which need to be returned.

```js
net.forecast([
  trainingData[0][0],
  trainingData[0][1],
], 3);
```

This will return 3 values based on the two data points. Just be careful to have the values scaled back up to the magnitude expected by the stock value, as the training data represents the scaled down version.

## Resources

- [Scrimba Course](https://scrimba.com/g/gneuralnetworks)