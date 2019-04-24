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

## Resources

- [Scrimba Course](https://scrimba.com/g/gneuralnetworks)