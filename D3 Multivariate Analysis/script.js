// dataset describing the length and width of the sepal and petal for the different iris flowers
const data = [
  {
    sepalLength: 5.1,
    sepalWidth: 3.5,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.9,
    sepalWidth: 3.0,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.7,
    sepalWidth: 3.2,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.6,
    sepalWidth: 3.1,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.6,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: "setosa"
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.9,
    petalLength: 1.7,
    petalWidth: 0.4,
    species: "setosa"
  },
  {
    sepalLength: 4.6,
    sepalWidth: 3.4,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: "setosa"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.4,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.4,
    sepalWidth: 2.9,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.9,
    sepalWidth: 3.1,
    petalLength: 1.5,
    petalWidth: 0.1,
    species: "setosa"
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.7,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.4,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.0,
    petalLength: 1.4,
    petalWidth: 0.1,
    species: "setosa"
  },
  {
    sepalLength: 4.3,
    sepalWidth: 3.0,
    petalLength: 1.1,
    petalWidth: 0.1,
    species: "setosa"
  },
  {
    sepalLength: 5.8,
    sepalWidth: 4.0,
    petalLength: 1.2,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.7,
    sepalWidth: 4.4,
    petalLength: 1.5,
    petalWidth: 0.4,
    species: "setosa"
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.9,
    petalLength: 1.3,
    petalWidth: 0.4,
    species: "setosa"
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.5,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: "setosa"
  },
  {
    sepalLength: 5.7,
    sepalWidth: 3.8,
    petalLength: 1.7,
    petalWidth: 0.3,
    species: "setosa"
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.8,
    petalLength: 1.5,
    petalWidth: 0.3,
    species: "setosa"
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.4,
    petalLength: 1.7,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.7,
    petalLength: 1.5,
    petalWidth: 0.4,
    species: "setosa"
  },
  {
    sepalLength: 4.6,
    sepalWidth: 3.6,
    petalLength: 1.0,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.3,
    petalLength: 1.7,
    petalWidth: 0.5,
    species: "setosa"
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.4,
    petalLength: 1.9,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.0,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.4,
    petalLength: 1.6,
    petalWidth: 0.4,
    species: "setosa"
  },
  {
    sepalLength: 5.2,
    sepalWidth: 3.5,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.2,
    sepalWidth: 3.4,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.7,
    sepalWidth: 3.2,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.1,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.4,
    petalLength: 1.5,
    petalWidth: 0.4,
    species: "setosa"
  },
  {
    sepalLength: 5.2,
    sepalWidth: 4.1,
    petalLength: 1.5,
    petalWidth: 0.1,
    species: "setosa"
  },
  {
    sepalLength: 5.5,
    sepalWidth: 4.2,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.9,
    sepalWidth: 3.1,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.2,
    petalLength: 1.2,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.5,
    sepalWidth: 3.5,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.9,
    sepalWidth: 3.6,
    petalLength: 1.4,
    petalWidth: 0.1,
    species: "setosa"
  },
  {
    sepalLength: 4.4,
    sepalWidth: 3.0,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.4,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.5,
    petalLength: 1.3,
    petalWidth: 0.3,
    species: "setosa"
  },
  {
    sepalLength: 4.5,
    sepalWidth: 2.3,
    petalLength: 1.3,
    petalWidth: 0.3,
    species: "setosa"
  },
  {
    sepalLength: 4.4,
    sepalWidth: 3.2,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.5,
    petalLength: 1.6,
    petalWidth: 0.6,
    species: "setosa"
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.8,
    petalLength: 1.9,
    petalWidth: 0.4,
    species: "setosa"
  },
  {
    sepalLength: 4.8,
    sepalWidth: 3.0,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: "setosa"
  },
  {
    sepalLength: 5.1,
    sepalWidth: 3.8,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 4.6,
    sepalWidth: 3.2,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.3,
    sepalWidth: 3.7,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 3.3,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: "setosa"
  },
  {
    sepalLength: 7.0,
    sepalWidth: 3.2,
    petalLength: 4.7,
    petalWidth: 1.4,
    species: "versicolor"
  },
  {
    sepalLength: 6.4,
    sepalWidth: 3.2,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 6.9,
    sepalWidth: 3.1,
    petalLength: 4.9,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.3,
    petalLength: 4.0,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 6.5,
    sepalWidth: 2.8,
    petalLength: 4.6,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.8,
    petalLength: 4.5,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 6.3,
    sepalWidth: 3.3,
    petalLength: 4.7,
    petalWidth: 1.6,
    species: "versicolor"
  },
  {
    sepalLength: 4.9,
    sepalWidth: 2.4,
    petalLength: 3.3,
    petalWidth: 1.0,
    species: "versicolor"
  },
  {
    sepalLength: 6.6,
    sepalWidth: 2.9,
    petalLength: 4.6,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 5.2,
    sepalWidth: 2.7,
    petalLength: 3.9,
    petalWidth: 1.4,
    species: "versicolor"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 2.0,
    petalLength: 3.5,
    petalWidth: 1.0,
    species: "versicolor"
  },
  {
    sepalLength: 5.9,
    sepalWidth: 3.0,
    petalLength: 4.2,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 6.0,
    sepalWidth: 2.2,
    petalLength: 4.0,
    petalWidth: 1.0,
    species: "versicolor"
  },
  {
    sepalLength: 6.1,
    sepalWidth: 2.9,
    petalLength: 4.7,
    petalWidth: 1.4,
    species: "versicolor"
  },
  {
    sepalLength: 5.6,
    sepalWidth: 2.9,
    petalLength: 3.6,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.1,
    petalLength: 4.4,
    petalWidth: 1.4,
    species: "versicolor"
  },
  {
    sepalLength: 5.6,
    sepalWidth: 3.0,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 4.1,
    petalWidth: 1.0,
    species: "versicolor"
  },
  {
    sepalLength: 6.2,
    sepalWidth: 2.2,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 5.6,
    sepalWidth: 2.5,
    petalLength: 3.9,
    petalWidth: 1.1,
    species: "versicolor"
  },
  {
    sepalLength: 5.9,
    sepalWidth: 3.2,
    petalLength: 4.8,
    petalWidth: 1.8,
    species: "versicolor"
  },
  {
    sepalLength: 6.1,
    sepalWidth: 2.8,
    petalLength: 4.0,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.5,
    petalLength: 4.9,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 6.1,
    sepalWidth: 2.8,
    petalLength: 4.7,
    petalWidth: 1.2,
    species: "versicolor"
  },
  {
    sepalLength: 6.4,
    sepalWidth: 2.9,
    petalLength: 4.3,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 6.6,
    sepalWidth: 3.0,
    petalLength: 4.4,
    petalWidth: 1.4,
    species: "versicolor"
  },
  {
    sepalLength: 6.8,
    sepalWidth: 2.8,
    petalLength: 4.8,
    petalWidth: 1.4,
    species: "versicolor"
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.0,
    petalLength: 5.0,
    petalWidth: 1.7,
    species: "versicolor"
  },
  {
    sepalLength: 6.0,
    sepalWidth: 2.9,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.6,
    petalLength: 3.5,
    petalWidth: 1.0,
    species: "versicolor"
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.4,
    petalLength: 3.8,
    petalWidth: 1.1,
    species: "versicolor"
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.4,
    petalLength: 3.7,
    petalWidth: 1.0,
    species: "versicolor"
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 3.9,
    petalWidth: 1.2,
    species: "versicolor"
  },
  {
    sepalLength: 6.0,
    sepalWidth: 2.7,
    petalLength: 5.1,
    petalWidth: 1.6,
    species: "versicolor"
  },
  {
    sepalLength: 5.4,
    sepalWidth: 3.0,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 6.0,
    sepalWidth: 3.4,
    petalLength: 4.5,
    petalWidth: 1.6,
    species: "versicolor"
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.1,
    petalLength: 4.7,
    petalWidth: 1.5,
    species: "versicolor"
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.3,
    petalLength: 4.4,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 5.6,
    sepalWidth: 3.0,
    petalLength: 4.1,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.5,
    petalLength: 4.0,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 5.5,
    sepalWidth: 2.6,
    petalLength: 4.4,
    petalWidth: 1.2,
    species: "versicolor"
  },
  {
    sepalLength: 6.1,
    sepalWidth: 3.0,
    petalLength: 4.6,
    petalWidth: 1.4,
    species: "versicolor"
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.6,
    petalLength: 4.0,
    petalWidth: 1.2,
    species: "versicolor"
  },
  {
    sepalLength: 5.0,
    sepalWidth: 2.3,
    petalLength: 3.3,
    petalWidth: 1.0,
    species: "versicolor"
  },
  {
    sepalLength: 5.6,
    sepalWidth: 2.7,
    petalLength: 4.2,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 5.7,
    sepalWidth: 3.0,
    petalLength: 4.2,
    petalWidth: 1.2,
    species: "versicolor"
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.9,
    petalLength: 4.2,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 6.2,
    sepalWidth: 2.9,
    petalLength: 4.3,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 5.1,
    sepalWidth: 2.5,
    petalLength: 3.0,
    petalWidth: 1.1,
    species: "versicolor"
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.8,
    petalLength: 4.1,
    petalWidth: 1.3,
    species: "versicolor"
  },
  {
    sepalLength: 6.3,
    sepalWidth: 3.3,
    petalLength: 6.0,
    petalWidth: 2.5,
    species: "virginica"
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 5.1,
    petalWidth: 1.9,
    species: "virginica"
  },
  {
    sepalLength: 7.1,
    sepalWidth: 3.0,
    petalLength: 5.9,
    petalWidth: 2.1,
    species: "virginica"
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.9,
    petalLength: 5.6,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 6.5,
    sepalWidth: 3.0,
    petalLength: 5.8,
    petalWidth: 2.2,
    species: "virginica"
  },
  {
    sepalLength: 7.6,
    sepalWidth: 3.0,
    petalLength: 6.6,
    petalWidth: 2.1,
    species: "virginica"
  },
  {
    sepalLength: 4.9,
    sepalWidth: 2.5,
    petalLength: 4.5,
    petalWidth: 1.7,
    species: "virginica"
  },
  {
    sepalLength: 7.3,
    sepalWidth: 2.9,
    petalLength: 6.3,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 6.7,
    sepalWidth: 2.5,
    petalLength: 5.8,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 7.2,
    sepalWidth: 3.6,
    petalLength: 6.1,
    petalWidth: 2.5,
    species: "virginica"
  },
  {
    sepalLength: 6.5,
    sepalWidth: 3.2,
    petalLength: 5.1,
    petalWidth: 2.0,
    species: "virginica"
  },
  {
    sepalLength: 6.4,
    sepalWidth: 2.7,
    petalLength: 5.3,
    petalWidth: 1.9,
    species: "virginica"
  },
  {
    sepalLength: 6.8,
    sepalWidth: 3.0,
    petalLength: 5.5,
    petalWidth: 2.1,
    species: "virginica"
  },
  {
    sepalLength: 5.7,
    sepalWidth: 2.5,
    petalLength: 5.0,
    petalWidth: 2.0,
    species: "virginica"
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.8,
    petalLength: 5.1,
    petalWidth: 2.4,
    species: "virginica"
  },
  {
    sepalLength: 6.4,
    sepalWidth: 3.2,
    petalLength: 5.3,
    petalWidth: 2.3,
    species: "virginica"
  },
  {
    sepalLength: 6.5,
    sepalWidth: 3.0,
    petalLength: 5.5,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 7.7,
    sepalWidth: 3.8,
    petalLength: 6.7,
    petalWidth: 2.2,
    species: "virginica"
  },
  {
    sepalLength: 7.7,
    sepalWidth: 2.6,
    petalLength: 6.9,
    petalWidth: 2.3,
    species: "virginica"
  },
  {
    sepalLength: 6.0,
    sepalWidth: 2.2,
    petalLength: 5.0,
    petalWidth: 1.5,
    species: "virginica"
  },
  {
    sepalLength: 6.9,
    sepalWidth: 3.2,
    petalLength: 5.7,
    petalWidth: 2.3,
    species: "virginica"
  },
  {
    sepalLength: 5.6,
    sepalWidth: 2.8,
    petalLength: 4.9,
    petalWidth: 2.0,
    species: "virginica"
  },
  {
    sepalLength: 7.7,
    sepalWidth: 2.8,
    petalLength: 6.7,
    petalWidth: 2.0,
    species: "virginica"
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.7,
    petalLength: 4.9,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.3,
    petalLength: 5.7,
    petalWidth: 2.1,
    species: "virginica"
  },
  {
    sepalLength: 7.2,
    sepalWidth: 3.2,
    petalLength: 6.0,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 6.2,
    sepalWidth: 2.8,
    petalLength: 4.8,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 6.1,
    sepalWidth: 3.0,
    petalLength: 4.9,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 6.4,
    sepalWidth: 2.8,
    petalLength: 5.6,
    petalWidth: 2.1,
    species: "virginica"
  },
  {
    sepalLength: 7.2,
    sepalWidth: 3.0,
    petalLength: 5.8,
    petalWidth: 1.6,
    species: "virginica"
  },
  {
    sepalLength: 7.4,
    sepalWidth: 2.8,
    petalLength: 6.1,
    petalWidth: 1.9,
    species: "virginica"
  },
  {
    sepalLength: 7.9,
    sepalWidth: 3.8,
    petalLength: 6.4,
    petalWidth: 2.0,
    species: "virginica"
  },
  {
    sepalLength: 6.4,
    sepalWidth: 2.8,
    petalLength: 5.6,
    petalWidth: 2.2,
    species: "virginica"
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.8,
    petalLength: 5.1,
    petalWidth: 1.5,
    species: "virginica"
  },
  {
    sepalLength: 6.1,
    sepalWidth: 2.6,
    petalLength: 5.6,
    petalWidth: 1.4,
    species: "virginica"
  },
  {
    sepalLength: 7.7,
    sepalWidth: 3.0,
    petalLength: 6.1,
    petalWidth: 2.3,
    species: "virginica"
  },
  {
    sepalLength: 6.3,
    sepalWidth: 3.4,
    petalLength: 5.6,
    petalWidth: 2.4,
    species: "virginica"
  },
  {
    sepalLength: 6.4,
    sepalWidth: 3.1,
    petalLength: 5.5,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 6.0,
    sepalWidth: 3.0,
    petalLength: 4.8,
    petalWidth: 1.8,
    species: "virginica"
  },
  {
    sepalLength: 6.9,
    sepalWidth: 3.1,
    petalLength: 5.4,
    petalWidth: 2.1,
    species: "virginica"
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.1,
    petalLength: 5.6,
    petalWidth: 2.4,
    species: "virginica"
  },
  {
    sepalLength: 6.9,
    sepalWidth: 3.1,
    petalLength: 5.1,
    petalWidth: 2.3,
    species: "virginica"
  },
  {
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 5.1,
    petalWidth: 1.9,
    species: "virginica"
  },
  {
    sepalLength: 6.8,
    sepalWidth: 3.2,
    petalLength: 5.9,
    petalWidth: 2.3,
    species: "virginica"
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.3,
    petalLength: 5.7,
    petalWidth: 2.5,
    species: "virginica"
  },
  {
    sepalLength: 6.7,
    sepalWidth: 3.0,
    petalLength: 5.2,
    petalWidth: 2.3,
    species: "virginica"
  },
  {
    sepalLength: 6.3,
    sepalWidth: 2.5,
    petalLength: 5.0,
    petalWidth: 1.9,
    species: "virginica"
  },
  {
    sepalLength: 6.5,
    sepalWidth: 3.0,
    petalLength: 5.2,
    petalWidth: 2.0,
    species: "virginica"
  },
  {
    sepalLength: 6.2,
    sepalWidth: 3.4,
    petalLength: 5.4,
    petalWidth: 2.3,
    species: "virginica"
  },
  {
    sepalLength: 5.9,
    sepalWidth: 3.0,
    petalLength: 5.1,
    petalWidth: 1.8,
    species: "virginica"
  }
];

// array describing the hsl color for each subspecies
// use the values in the legend on the different visualizations
const colors = {
  setosa: {
    h: 280,
    s: 75,
    l: 60
  },
  versicolor: {
    h: 330,
    s: 75,
    l: 60
  },
  virginica: {
    h: 230,
    s: 75,
    l: 60
  }
};

const viz = d3.select(".viz");

// LEGEND
// include a legend based on the species and color
const legendWidth = 500;
const legendHeight = 25;

const legend = viz
  .append("svg")
  .attr("class", "legend")
  .attr("viewBox", `0 0 ${legendWidth} ${legendHeight}`);

const colorEntries = Object.entries(colors);

// for each color add a group
const legendEntries = legend
  .selectAll("g.entry")
  .data(colorEntries)
  .enter()
  .append("g")
  .attr("class", "entry")
  // translate the group at fractions of the legend's width
  .attr(
    "transform",
    (d, i, { length }) => `translate(${(legendWidth / length) * i} ${0})`
  )
  // on hover highlight the elements with a matching species by reducing the visual weight of the elements with a different class
  .on("mouseenter", function([subspecies]) {
    d3.selectAll(`.iris`).attr("opacity", 0.1);

    d3.selectAll(`.${subspecies}`).attr("opacity", 1);

    // scale the nested overlay to highlight the selection
    d3.selectAll(".overlay").attr("transform", "scale(1 0)");

    d3.select(this)
      .select(".overlay")
      .transition()
      .attr("transform", "scale(1 1)");
  });

// for each color
// add a label describing the entry
legendEntries
  .append("text")
  .attr("x", 5)
  .attr("y", legendHeight / 1.5)
  .attr("fill", "currentColor")
  .attr("font-family", "inherit")
  .attr("font-size", "0.8rem")
  .style("text-transform", "capitalize")
  .text(([species]) => species);

// add a path describing a small underline
legendEntries
  .append("path")
  .attr(
    "d",
    (d, i, { length }) => `M 0 ${legendHeight} h ${legendWidth / length}`
  )
  .attr("fill", "none")
  .attr("stroke-width", 5)
  .attr("stroke", ([, color]) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`);

// add the SVG describing the basic icon of a flower
const flowers = legendEntries
  .append("svg")
  .attr("viewBox", "0 0 7 10")
  .attr("height", legendHeight)
  .attr("width", (legendHeight * 7) / 10)
  // positioned at the end of the respective area
  .attr(
    "x",
    (d, i, { length }) => legendWidth / length - (legendHeight * 7) / 10
  )
  .attr("y", 0);

flowers
  .append("g")
  .attr("transform", "translate(0.5 0.5)")
  .append("path")
  .attr(
    "d",
    "M 1 9 q 2 -2 2 -5 a 3 3 0 0 1 -3 -3 a 1 1 0 0 1 2 0 a 1 1 0 0 1 2 0 a 1 1 0 0 1 2 0 a 3 3 0 0 1 -3 3"
  )
  .attr("fill", "none")
  .attr("stroke-width", 1)
  .attr("stroke-linejoin", "round")
  .attr("stroke-linecap", "round")
  .attr("stroke", ([, color]) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`);

// add an almost transparent rectangle to describe an overlay on hover
legendEntries
  .append("rect")
  .attr("class", "overlay")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", (d, i, { length }) => legendWidth / length)
  .attr("height", legendHeight)
  .attr("fill", "#fff")
  .attr("opacity", 0.08)
  .attr("transform", "scale(1 0)");

// add a transparent rectangle to describe an area for mouse events
legendEntries
  .append("rect")
  .attr("x", 0)
  .attr("y", 0)
  .attr("width", (d, i, { length }) => legendWidth / length)
  .attr("height", legendHeight)
  .attr("opacity", 0);

// GRID
// following the legend add an SVG in which to plot the different visualization
const margin = {
  top: 15,
  right: 15,
  bottom: 15,
  left: 15
};
const width = 500 - (margin.left + margin.right);
const height = 500 - (margin.top + margin.bottom);

const svg = viz
  .append("svg")
  .attr("class", "grid")
  .attr(
    "viewBox",
    `0 0 ${width + (margin.left + margin.right)} ${height +
      (margin.top + margin.bottom)}`
  )
  // on hover set the opacity of all .iris elements to 1
  .on("mouseenter", () => {
    d3.selectAll(".iris").attr("opacity", 1);
    d3.selectAll(".overlay").attr("transform", "scale(1 0)");
  });

const group = svg
  .append("g")
  .attr("transform", `translate(${margin.left} ${margin.top})`);

// the idea is to include four columns and rows to analyse the different variables
const categories = ["sepalLength", "sepalWidth", "petalLength", "petalWidth"];

// on two sides of the grid include the labels describing the variable analysed in the specific row and column
const rowLabel = group.append("g");
const columnLabel = group.append("g");
categories.forEach((category, index) => {
  const labelWidth = width / categories.length;
  const x = labelWidth * index;

  const labelHeight = height / categories.length;
  const y = labelHeight * index;

  // given the camelCase cateogory, use a regular expression to split the name
  const capitalLetter = category.match(/[A-Z]/)[0];
  const [flowerPart, flowerVariable] = category.split(capitalLetter);
  const label = `${flowerPart} ${capitalLetter}${flowerVariable}`;

  rowLabel
    .append("text")
    .attr("x", x + labelWidth / 2)
    .attr("y", -5)
    .text(label)
    .attr("text-anchor", "middle")
    .attr("fill", "#ffffff")
    .attr("font-size", "0.55rem")
    .style("text-transform", "uppercase");

  // ! instead of using the x and y coordinate position the vertical labels with the transform property
  // this to shift the transfom-origin and rotate the string from the center of the respective cell
  columnLabel
    .append("text")
    .attr("x", 0)
    .attr("y", 0)
    .text(label)
    .attr("text-anchor", "middle")
    .attr("fill", "#ffffff")
    .attr("font-size", "0.55rem")
    .attr("transform", `translate(-15 ${y + labelHeight / 2}) rotate(90)`)
    .style("text-transform", "uppercase");
});

// function to visualize the distribution of the single variable
function visualizeDistribution(dataDistribution, settings) {
  // extract the necessary values from the settings object
  const {
    groupVisualization,
    widthGroup,
    heightGroup,
    dy,
    species,
    variable
  } = settings;

  // specify the margin convention on the basis of the width and height of the group
  const marginDistribution = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };
  const widthDistribution =
    widthGroup - (marginDistribution.left + marginDistribution.right);
  const heightDistribution =
    heightGroup - (marginDistribution.top + marginDistribution.bottom);

  const groupDistribution = groupVisualization
    .append("g")
    .attr(
      "transform",
      `translate(${marginDistribution.left} ${marginDistribution.top})`
    );

  // horizontal scale based on the input data
  // for the domain use the values of the entire dataset instead of the input data
  const xScaleDistribution = d3
    .scaleLinear()
    .domain(d3.extent(data.map(flower => flower[variable])))
    .range([0, widthDistribution])
    .nice();

  // vertical scale based on the length of each bin of the histogram
  // ! the domain is included as the bins are created
  const yScaleDistribution = d3
    .scaleLinear()
    .range([heightDistribution, 0])
    .nice();

  // histogram function, based on the horizontal scale
  const histogram = d3.histogram().domain(xScaleDistribution.domain());

  // multidimensional array describing for each bin the observations recorded in the input data
  const dataHistogram = histogram(dataDistribution);

  // specify the domain of the vertical scale based on the bin with the greatest number of observations
  const maxYScale = d3.max(dataHistogram, arr => arr.length);

  yScaleDistribution.domain([0, maxYScale]);

  // include for each bin a rectangle
  groupDistribution
    .selectAll("rect")
    .data(dataHistogram)
    .enter()
    .append("rect")
    .attr("class", `iris ${species}`)
    // horizontally based on the bin's range
    // vertically based on the number of observations
    .attr("x", ({ x0 }) => xScaleDistribution(x0))
    .attr("y", d => yScaleDistribution(d.length))
    .attr(
      "width",
      ({ x0, x1 }) => xScaleDistribution(x1) - xScaleDistribution(x0)
    )
    .attr("height", d => heightDistribution - yScaleDistribution(d.length))
    .attr("fill", () => {
      const color = colorEntries.find(entry => entry[0] === species)[1];
      const { h, s, l } = color;
      return `hsl(${h} ${s}% ${l}%)`;
    })
    .attr("transform", `translate(0 ${dy})`);

  // add the horizontal axis based on the x scale
  const xAxisDistribution = d3
    .axisBottom(xScaleDistribution)
    .ticks(5)
    .tickSize(0);

  groupDistribution
    .append('g')
    .attr('class', 'axis x-axis')
    .attr('transform', `translate(0 ${heightDistribution + dy})`)
    .attr('opacity', 0)
    .call(xAxisDistribution);


}

// function to describe the relationship between the two input variables
function visualizeRelationship(dataRelationship, settings) {
  // destructure the necessary values
  const { groupVisualization, widthGroup, heightGroup } = settings;

  // margin convention relative to the wrapping group
  const marginRelationship = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
  };

  const widthRelationship =
    widthGroup - (marginRelationship.left + marginRelationship.right);
  const heightRelationship =
    heightGroup - (marginRelationship.top + marginRelationship.bottom);

  const groupRelationship = groupVisualization
    .append("g")
    .attr(
      "transform",
      `translate(${marginRelationship.left} ${marginRelationship.top})`
    );

  // horizontal scale considering the first variable
  const xScaleRelationship = d3
    .scaleLinear()
    .domain(d3.extent(dataRelationship, d => d.x))
    .range([0, widthRelationship])
    .nice();

  // vertical scale considering the second variable
  const yScaleRelationship = d3
    .scaleLinear()
    .domain(d3.extent(dataRelationship, d => d.y))
    .range([heightRelationship, 0])
    .nice();

  // for each observation add a circle
  groupRelationship
    .selectAll("circle")
    .data(dataRelationship)
    .enter()
    .append("circle")
    .attr("cx", ({ x }) => xScaleRelationship(x))
    .attr("cy", ({ y }) => yScaleRelationship(y))
    .attr("r", 2.5)
    // assign the circles a class matching the species
    .attr("class", ({ species }) => `iris ${species}`)
    // use the color of the matching species
    .attr("fill", ({ species }) => {
      const color = colorEntries.find(entry => entry[0] === species)[1];
      const { h, s, l } = color;
      return `hsl(${h} ${s}% ${l}%)`;
    });

// add the axes based on the scales
const xAxisRelationship = d3
.axisBottom(xScaleRelationship)
.ticks(5)
.tickSize(0);

groupRelationship
.append('g')
.attr('class', 'axis x-axis')
.attr('transform', `translate(0 ${heightRelationship})`)
.attr('opacity', 0)
.call(xAxisRelationship);

const yAxisRelationship = d3
.axisLeft(yScaleRelationship)
.ticks(5)
.tickSize(0);

groupRelationship
.append('g')
.attr('class', 'axis y-axis')
.attr('opacity', 0)
.call(yAxisRelationship);
}

// boolean describing the zoomed in/ panned out nature of the visualization
let isZoomed = false;
// use each category to include a row and for each row use the categories once again for the column
categories.forEach((row, indexRow, rows) => {
  const widthGroup = width / rows.length;
  const translateX = indexRow * widthGroup;

  categories.forEach((column, indexColumn, columns) => {
    const heightGroup = height / columns.length;
    const translateY = indexColumn * heightGroup;

    // create one group for each row and column, translating the group at fractions of the width/height of the wrapping svg
    const groupVisualization = group
      .append("g")
      .attr("data-categories", `${row}-${column}`)
      .attr("transform", `translate(${translateX} ${translateY})`)
      // on click zoom in the respective region
      // if already zooomed-in, pan out
      .on("click", function() {
        isZoomed = !isZoomed;
        // alter the viewBox of the wrapping SVG to zoom in the specific quadrant
        if (isZoomed) {
          d3.select("svg.grid")
            .transition()
            // +1 for the origin, -2 for the size to crop the stroke of the grid as well
            .attr(
              "viewBox",
              `${translateX + margin.left + 1} ${translateY +
                margin.top +
                1} ${widthGroup - 2} ${heightGroup - 2}`
            );

          // show the axis of the specific group
          d3.select(this)
            .selectAll(".axis")
            .transition()
            .delay(200)
            .attr("opacity", 1);
        } else {
          d3.select("svg.grid")
            .transition()
            .delay(200)
            // pan out to the original values
            .attr(
              "viewBox",
              `0 0 ${width + (margin.left + margin.right)} ${height +
                (margin.top + margin.bottom)}`
            );

          // hide the axis of the specific group
          d3.select(this)
            .selectAll(".axis")
            .transition()
            .attr("opacity", 0);
        }
      });

    // call a function to visualize the input data
    // matching value: include a plot describing the distribution for said value
    if (row === column) {
      /* loop through the data considering only the input variable and the flower's species
      the idea is to have for each species an array of values
      */
      const species = ["setosa", "versicolor", "virginica"];
      const dataDistribution = species.map(specie => ({
        species: specie,
        value: data
          .filter(flower => flower.species === specie)
          .map(flower => flower[row])
      }));
      dataDistribution.forEach((distribution, index) => {
        visualizeDistribution(distribution.value, {
          groupVisualization,
          widthGroup,
          heightGroup: heightGroup / 3,
          dx: 0,
          dy: (index * heightGroup) / 3,
          species: distribution.species,
          variable: row
        });
      });
    } else {
      // different values: include a plot describing the relation between the two
      // loop through the data considering the properties described by the variables
      const dataRelationship = data.map(flower => ({
        x: flower[row],
        y: flower[column],
        species: flower.species
      }));

      visualizeRelationship(dataRelationship, {
        groupVisualization,
        widthGroup,
        heightGroup
      });
    }

    // encase each cell in a rectangle with a stroke and no fill
    groupVisualization
      .append("rect")
      .attr("x", 0)
      .attr("y", 0)
      .attr("width", widthGroup)
      .attr("height", heightGroup)
      .attr("fill", "#ffffff00")
      .attr("stroke", "#ffffff")
      .attr("stroke-width", "1px");
  });
});
