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
## Resources

- [Scrimba Course](https://scrimba.com/g/gneuralnetworks)