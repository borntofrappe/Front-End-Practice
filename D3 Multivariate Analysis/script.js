// dataset describing the length and width of the sepal and petal for the different iris flowers
const data = [
  {
    index: 1,
    sepalLength: 5.1,
    sepalWidth: 3.5,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 2,
    sepalLength: 4.9,
    sepalWidth: 3.0,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 3,
    sepalLength: 4.7,
    sepalWidth: 3.2,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 4,
    sepalLength: 4.6,
    sepalWidth: 3.1,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 5,
    sepalLength: 5.0,
    sepalWidth: 3.6,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    index: 6,
    sepalLength: 5.4,
    sepalWidth: 3.9,
    petalLength: 1.7,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    index: 7,
    sepalLength: 4.6,
    sepalWidth: 3.4,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    index: 8,
    sepalLength: 5.0,
    sepalWidth: 3.4,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 9,
    sepalLength: 4.4,
    sepalWidth: 2.9,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 10,
    sepalLength: 4.9,
    sepalWidth: 3.1,
    petalLength: 1.5,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    index: 11,
    sepalLength: 5.4,
    sepalWidth: 3.7,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 12,
    sepalLength: 4.8,
    sepalWidth: 3.4,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 13,
    sepalLength: 4.8,
    sepalWidth: 3.0,
    petalLength: 1.4,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    index: 14,
    sepalLength: 4.3,
    sepalWidth: 3.0,
    petalLength: 1.1,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    index: 15,
    sepalLength: 5.8,
    sepalWidth: 4.0,
    petalLength: 1.2,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 16,
    sepalLength: 5.7,
    sepalWidth: 4.4,
    petalLength: 1.5,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    index: 17,
    sepalLength: 5.4,
    sepalWidth: 3.9,
    petalLength: 1.3,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    index: 18,
    sepalLength: 5.1,
    sepalWidth: 3.5,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    index: 19,
    sepalLength: 5.7,
    sepalWidth: 3.8,
    petalLength: 1.7,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    index: 20,
    sepalLength: 5.1,
    sepalWidth: 3.8,
    petalLength: 1.5,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    index: 21,
    sepalLength: 5.4,
    sepalWidth: 3.4,
    petalLength: 1.7,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 22,
    sepalLength: 5.1,
    sepalWidth: 3.7,
    petalLength: 1.5,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    index: 23,
    sepalLength: 4.6,
    sepalWidth: 3.6,
    petalLength: 1.0,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 24,
    sepalLength: 5.1,
    sepalWidth: 3.3,
    petalLength: 1.7,
    petalWidth: 0.5,
    species: 'setosa',
  },
  {
    index: 25,
    sepalLength: 4.8,
    sepalWidth: 3.4,
    petalLength: 1.9,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 26,
    sepalLength: 5.0,
    sepalWidth: 3.0,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 27,
    sepalLength: 5.0,
    sepalWidth: 3.4,
    petalLength: 1.6,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    index: 28,
    sepalLength: 5.2,
    sepalWidth: 3.5,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 29,
    sepalLength: 5.2,
    sepalWidth: 3.4,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 30,
    sepalLength: 4.7,
    sepalWidth: 3.2,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 31,
    sepalLength: 4.8,
    sepalWidth: 3.1,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 32,
    sepalLength: 5.4,
    sepalWidth: 3.4,
    petalLength: 1.5,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    index: 33,
    sepalLength: 5.2,
    sepalWidth: 4.1,
    petalLength: 1.5,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    index: 34,
    sepalLength: 5.5,
    sepalWidth: 4.2,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 35,
    sepalLength: 4.9,
    sepalWidth: 3.1,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 36,
    sepalLength: 5.0,
    sepalWidth: 3.2,
    petalLength: 1.2,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 37,
    sepalLength: 5.5,
    sepalWidth: 3.5,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 38,
    sepalLength: 4.9,
    sepalWidth: 3.6,
    petalLength: 1.4,
    petalWidth: 0.1,
    species: 'setosa',
  },
  {
    index: 39,
    sepalLength: 4.4,
    sepalWidth: 3.0,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 40,
    sepalLength: 5.1,
    sepalWidth: 3.4,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 41,
    sepalLength: 5.0,
    sepalWidth: 3.5,
    petalLength: 1.3,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    index: 42,
    sepalLength: 4.5,
    sepalWidth: 2.3,
    petalLength: 1.3,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    index: 43,
    sepalLength: 4.4,
    sepalWidth: 3.2,
    petalLength: 1.3,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 44,
    sepalLength: 5.0,
    sepalWidth: 3.5,
    petalLength: 1.6,
    petalWidth: 0.6,
    species: 'setosa',
  },
  {
    index: 45,
    sepalLength: 5.1,
    sepalWidth: 3.8,
    petalLength: 1.9,
    petalWidth: 0.4,
    species: 'setosa',
  },
  {
    index: 46,
    sepalLength: 4.8,
    sepalWidth: 3.0,
    petalLength: 1.4,
    petalWidth: 0.3,
    species: 'setosa',
  },
  {
    index: 47,
    sepalLength: 5.1,
    sepalWidth: 3.8,
    petalLength: 1.6,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 48,
    sepalLength: 4.6,
    sepalWidth: 3.2,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 49,
    sepalLength: 5.3,
    sepalWidth: 3.7,
    petalLength: 1.5,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 50,
    sepalLength: 5.0,
    sepalWidth: 3.3,
    petalLength: 1.4,
    petalWidth: 0.2,
    species: 'setosa',
  },
  {
    index: 51,
    sepalLength: 7.0,
    sepalWidth: 3.2,
    petalLength: 4.7,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    index: 52,
    sepalLength: 6.4,
    sepalWidth: 3.2,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 53,
    sepalLength: 6.9,
    sepalWidth: 3.1,
    petalLength: 4.9,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 54,
    sepalLength: 5.5,
    sepalWidth: 2.3,
    petalLength: 4.0,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 55,
    sepalLength: 6.5,
    sepalWidth: 2.8,
    petalLength: 4.6,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 56,
    sepalLength: 5.7,
    sepalWidth: 2.8,
    petalLength: 4.5,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 57,
    sepalLength: 6.3,
    sepalWidth: 3.3,
    petalLength: 4.7,
    petalWidth: 1.6,
    species: 'versicolor',
  },
  {
    index: 58,
    sepalLength: 4.9,
    sepalWidth: 2.4,
    petalLength: 3.3,
    petalWidth: 1.0,
    species: 'versicolor',
  },
  {
    index: 59,
    sepalLength: 6.6,
    sepalWidth: 2.9,
    petalLength: 4.6,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 60,
    sepalLength: 5.2,
    sepalWidth: 2.7,
    petalLength: 3.9,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    index: 61,
    sepalLength: 5.0,
    sepalWidth: 2.0,
    petalLength: 3.5,
    petalWidth: 1.0,
    species: 'versicolor',
  },
  {
    index: 62,
    sepalLength: 5.9,
    sepalWidth: 3.0,
    petalLength: 4.2,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 63,
    sepalLength: 6.0,
    sepalWidth: 2.2,
    petalLength: 4.0,
    petalWidth: 1.0,
    species: 'versicolor',
  },
  {
    index: 64,
    sepalLength: 6.1,
    sepalWidth: 2.9,
    petalLength: 4.7,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    index: 65,
    sepalLength: 5.6,
    sepalWidth: 2.9,
    petalLength: 3.6,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 66,
    sepalLength: 6.7,
    sepalWidth: 3.1,
    petalLength: 4.4,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    index: 67,
    sepalLength: 5.6,
    sepalWidth: 3.0,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 68,
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 4.1,
    petalWidth: 1.0,
    species: 'versicolor',
  },
  {
    index: 69,
    sepalLength: 6.2,
    sepalWidth: 2.2,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 70,
    sepalLength: 5.6,
    sepalWidth: 2.5,
    petalLength: 3.9,
    petalWidth: 1.1,
    species: 'versicolor',
  },
  {
    index: 71,
    sepalLength: 5.9,
    sepalWidth: 3.2,
    petalLength: 4.8,
    petalWidth: 1.8,
    species: 'versicolor',
  },
  {
    index: 72,
    sepalLength: 6.1,
    sepalWidth: 2.8,
    petalLength: 4.0,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 73,
    sepalLength: 6.3,
    sepalWidth: 2.5,
    petalLength: 4.9,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 74,
    sepalLength: 6.1,
    sepalWidth: 2.8,
    petalLength: 4.7,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    index: 75,
    sepalLength: 6.4,
    sepalWidth: 2.9,
    petalLength: 4.3,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 76,
    sepalLength: 6.6,
    sepalWidth: 3.0,
    petalLength: 4.4,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    index: 77,
    sepalLength: 6.8,
    sepalWidth: 2.8,
    petalLength: 4.8,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    index: 78,
    sepalLength: 6.7,
    sepalWidth: 3.0,
    petalLength: 5.0,
    petalWidth: 1.7,
    species: 'versicolor',
  },
  {
    index: 79,
    sepalLength: 6.0,
    sepalWidth: 2.9,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 80,
    sepalLength: 5.7,
    sepalWidth: 2.6,
    petalLength: 3.5,
    petalWidth: 1.0,
    species: 'versicolor',
  },
  {
    index: 81,
    sepalLength: 5.5,
    sepalWidth: 2.4,
    petalLength: 3.8,
    petalWidth: 1.1,
    species: 'versicolor',
  },
  {
    index: 82,
    sepalLength: 5.5,
    sepalWidth: 2.4,
    petalLength: 3.7,
    petalWidth: 1.0,
    species: 'versicolor',
  },
  {
    index: 83,
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 3.9,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    index: 84,
    sepalLength: 6.0,
    sepalWidth: 2.7,
    petalLength: 5.1,
    petalWidth: 1.6,
    species: 'versicolor',
  },
  {
    index: 85,
    sepalLength: 5.4,
    sepalWidth: 3.0,
    petalLength: 4.5,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 86,
    sepalLength: 6.0,
    sepalWidth: 3.4,
    petalLength: 4.5,
    petalWidth: 1.6,
    species: 'versicolor',
  },
  {
    index: 87,
    sepalLength: 6.7,
    sepalWidth: 3.1,
    petalLength: 4.7,
    petalWidth: 1.5,
    species: 'versicolor',
  },
  {
    index: 88,
    sepalLength: 6.3,
    sepalWidth: 2.3,
    petalLength: 4.4,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 89,
    sepalLength: 5.6,
    sepalWidth: 3.0,
    petalLength: 4.1,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 90,
    sepalLength: 5.5,
    sepalWidth: 2.5,
    petalLength: 4.0,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 91,
    sepalLength: 5.5,
    sepalWidth: 2.6,
    petalLength: 4.4,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    index: 92,
    sepalLength: 6.1,
    sepalWidth: 3.0,
    petalLength: 4.6,
    petalWidth: 1.4,
    species: 'versicolor',
  },
  {
    index: 93,
    sepalLength: 5.8,
    sepalWidth: 2.6,
    petalLength: 4.0,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    index: 94,
    sepalLength: 5.0,
    sepalWidth: 2.3,
    petalLength: 3.3,
    petalWidth: 1.0,
    species: 'versicolor',
  },
  {
    index: 95,
    sepalLength: 5.6,
    sepalWidth: 2.7,
    petalLength: 4.2,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 96,
    sepalLength: 5.7,
    sepalWidth: 3.0,
    petalLength: 4.2,
    petalWidth: 1.2,
    species: 'versicolor',
  },
  {
    index: 97,
    sepalLength: 5.7,
    sepalWidth: 2.9,
    petalLength: 4.2,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 98,
    sepalLength: 6.2,
    sepalWidth: 2.9,
    petalLength: 4.3,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 99,
    sepalLength: 5.1,
    sepalWidth: 2.5,
    petalLength: 3.0,
    petalWidth: 1.1,
    species: 'versicolor',
  },
  {
    index: 100,
    sepalLength: 5.7,
    sepalWidth: 2.8,
    petalLength: 4.1,
    petalWidth: 1.3,
    species: 'versicolor',
  },
  {
    index: 101,
    sepalLength: 6.3,
    sepalWidth: 3.3,
    petalLength: 6.0,
    petalWidth: 2.5,
    species: 'virginica',
  },
  {
    index: 102,
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 5.1,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    index: 103,
    sepalLength: 7.1,
    sepalWidth: 3.0,
    petalLength: 5.9,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    index: 104,
    sepalLength: 6.3,
    sepalWidth: 2.9,
    petalLength: 5.6,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 105,
    sepalLength: 6.5,
    sepalWidth: 3.0,
    petalLength: 5.8,
    petalWidth: 2.2,
    species: 'virginica',
  },
  {
    index: 106,
    sepalLength: 7.6,
    sepalWidth: 3.0,
    petalLength: 6.6,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    index: 107,
    sepalLength: 4.9,
    sepalWidth: 2.5,
    petalLength: 4.5,
    petalWidth: 1.7,
    species: 'virginica',
  },
  {
    index: 108,
    sepalLength: 7.3,
    sepalWidth: 2.9,
    petalLength: 6.3,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 109,
    sepalLength: 6.7,
    sepalWidth: 2.5,
    petalLength: 5.8,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 110,
    sepalLength: 7.2,
    sepalWidth: 3.6,
    petalLength: 6.1,
    petalWidth: 2.5,
    species: 'virginica',
  },
  {
    index: 111,
    sepalLength: 6.5,
    sepalWidth: 3.2,
    petalLength: 5.1,
    petalWidth: 2.0,
    species: 'virginica',
  },
  {
    index: 112,
    sepalLength: 6.4,
    sepalWidth: 2.7,
    petalLength: 5.3,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    index: 113,
    sepalLength: 6.8,
    sepalWidth: 3.0,
    petalLength: 5.5,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    index: 114,
    sepalLength: 5.7,
    sepalWidth: 2.5,
    petalLength: 5.0,
    petalWidth: 2.0,
    species: 'virginica',
  },
  {
    index: 115,
    sepalLength: 5.8,
    sepalWidth: 2.8,
    petalLength: 5.1,
    petalWidth: 2.4,
    species: 'virginica',
  },
  {
    index: 116,
    sepalLength: 6.4,
    sepalWidth: 3.2,
    petalLength: 5.3,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    index: 117,
    sepalLength: 6.5,
    sepalWidth: 3.0,
    petalLength: 5.5,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 118,
    sepalLength: 7.7,
    sepalWidth: 3.8,
    petalLength: 6.7,
    petalWidth: 2.2,
    species: 'virginica',
  },
  {
    index: 119,
    sepalLength: 7.7,
    sepalWidth: 2.6,
    petalLength: 6.9,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    index: 120,
    sepalLength: 6.0,
    sepalWidth: 2.2,
    petalLength: 5.0,
    petalWidth: 1.5,
    species: 'virginica',
  },
  {
    index: 121,
    sepalLength: 6.9,
    sepalWidth: 3.2,
    petalLength: 5.7,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    index: 122,
    sepalLength: 5.6,
    sepalWidth: 2.8,
    petalLength: 4.9,
    petalWidth: 2.0,
    species: 'virginica',
  },
  {
    index: 123,
    sepalLength: 7.7,
    sepalWidth: 2.8,
    petalLength: 6.7,
    petalWidth: 2.0,
    species: 'virginica',
  },
  {
    index: 124,
    sepalLength: 6.3,
    sepalWidth: 2.7,
    petalLength: 4.9,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 125,
    sepalLength: 6.7,
    sepalWidth: 3.3,
    petalLength: 5.7,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    index: 126,
    sepalLength: 7.2,
    sepalWidth: 3.2,
    petalLength: 6.0,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 127,
    sepalLength: 6.2,
    sepalWidth: 2.8,
    petalLength: 4.8,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 128,
    sepalLength: 6.1,
    sepalWidth: 3.0,
    petalLength: 4.9,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 129,
    sepalLength: 6.4,
    sepalWidth: 2.8,
    petalLength: 5.6,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    index: 130,
    sepalLength: 7.2,
    sepalWidth: 3.0,
    petalLength: 5.8,
    petalWidth: 1.6,
    species: 'virginica',
  },
  {
    index: 131,
    sepalLength: 7.4,
    sepalWidth: 2.8,
    petalLength: 6.1,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    index: 132,
    sepalLength: 7.9,
    sepalWidth: 3.8,
    petalLength: 6.4,
    petalWidth: 2.0,
    species: 'virginica',
  },
  {
    index: 133,
    sepalLength: 6.4,
    sepalWidth: 2.8,
    petalLength: 5.6,
    petalWidth: 2.2,
    species: 'virginica',
  },
  {
    index: 134,
    sepalLength: 6.3,
    sepalWidth: 2.8,
    petalLength: 5.1,
    petalWidth: 1.5,
    species: 'virginica',
  },
  {
    index: 135,
    sepalLength: 6.1,
    sepalWidth: 2.6,
    petalLength: 5.6,
    petalWidth: 1.4,
    species: 'virginica',
  },
  {
    index: 136,
    sepalLength: 7.7,
    sepalWidth: 3.0,
    petalLength: 6.1,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    index: 137,
    sepalLength: 6.3,
    sepalWidth: 3.4,
    petalLength: 5.6,
    petalWidth: 2.4,
    species: 'virginica',
  },
  {
    index: 138,
    sepalLength: 6.4,
    sepalWidth: 3.1,
    petalLength: 5.5,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 139,
    sepalLength: 6.0,
    sepalWidth: 3.0,
    petalLength: 4.8,
    petalWidth: 1.8,
    species: 'virginica',
  },
  {
    index: 140,
    sepalLength: 6.9,
    sepalWidth: 3.1,
    petalLength: 5.4,
    petalWidth: 2.1,
    species: 'virginica',
  },
  {
    index: 141,
    sepalLength: 6.7,
    sepalWidth: 3.1,
    petalLength: 5.6,
    petalWidth: 2.4,
    species: 'virginica',
  },
  {
    index: 142,
    sepalLength: 6.9,
    sepalWidth: 3.1,
    petalLength: 5.1,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    index: 143,
    sepalLength: 5.8,
    sepalWidth: 2.7,
    petalLength: 5.1,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    index: 144,
    sepalLength: 6.8,
    sepalWidth: 3.2,
    petalLength: 5.9,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    index: 145,
    sepalLength: 6.7,
    sepalWidth: 3.3,
    petalLength: 5.7,
    petalWidth: 2.5,
    species: 'virginica',
  },
  {
    index: 146,
    sepalLength: 6.7,
    sepalWidth: 3.0,
    petalLength: 5.2,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    index: 147,
    sepalLength: 6.3,
    sepalWidth: 2.5,
    petalLength: 5.0,
    petalWidth: 1.9,
    species: 'virginica',
  },
  {
    index: 148,
    sepalLength: 6.5,
    sepalWidth: 3.0,
    petalLength: 5.2,
    petalWidth: 2.0,
    species: 'virginica',
  },
  {
    index: 149,
    sepalLength: 6.2,
    sepalWidth: 3.4,
    petalLength: 5.4,
    petalWidth: 2.3,
    species: 'virginica',
  },
  {
    index: 150,
    sepalLength: 5.9,
    sepalWidth: 3.0,
    petalLength: 5.1,
    petalWidth: 1.8,
    species: 'virginica',
  },
];

// array describing the hsl color for each subspecies
// use the values in the legend on the different visualizations
const colors = {
  setosa: {
    h: 280,
    s: 75,
    l: 60,
  },
  versicolor: {
    h: 330,
    s: 75,
    l: 60,
  },
  virginica: {
    h: 230,
    s: 75,
    l: 60,
  },
};

// target the .viz container
const viz = d3
  .select('.viz');

// HEADER
const header = viz
  .append('header');

header
  .append('h1')
  .text('Iris Dataset');

// SVG
// LEGEND
// before the grid of visualiaztions include a legend based on the species and color
const legendWidth = 500;
const legendHeight = 25;

const legend = viz
  .append('svg')
  .attr('class', 'legend')
  .attr('viewBox', `0 0 ${legendWidth} ${legendHeight}`);

const colorEntries = Object.entries(colors);

// for each color add a group
const legendEntries = legend
  .selectAll('g.entry')
  .data(colorEntries)
  .enter()
  .append('g')
  .attr('class', 'entry')
  // translate the group at fractions of the legend's width
  .attr('transform', (d, i, { length }) => `translate(${(legendWidth / length) * i} ${0})`);

// for each color
// add a label describing the entry
legendEntries
  .append('text')
  .attr('x', 5)
  .attr('y', legendHeight / 1.5)
  .attr('fill', 'currentColor')
  .attr('font-family', 'inherit')
  .attr('font-size', '0.9rem')
  .style('text-transform', 'capitalize')
  .text(([species]) => species);

// add a path describing a small underline
legendEntries
  .append('path')
  .attr('d', (d, i, { length }) => `M 0 ${legendHeight} h ${(legendWidth / length)}`)
  .attr('fill', 'none')
  .attr('stroke-width', 5)
  .attr('stroke', ([, color]) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`);

// add the SVG describing the basic icon of a flower
const flowers = legendEntries
  .append('svg')
  .attr('viewBox', '0 0 7 10')
  .attr('height', legendHeight)
  .attr('width', (legendHeight) * 7 / 10)
  // positioned at the end of the respective area
  .attr('x', (d, i, { length }) => ((legendWidth / length) - (legendHeight) * 7 / 10))
  .attr('y', 0);

flowers
  .append('g')
  .attr('transform', 'translate(0.5 0.5)')
  .append('path')
  .attr('d', 'M 1 9 q 2 -2 2 -5 a 3 3 0 0 1 -3 -3 a 1 1 0 0 1 2 0 a 1 1 0 0 1 2 0 a 1 1 0 0 1 2 0 a 3 3 0 0 1 -3 3')
  .attr('fill', 'none')
  .attr('stroke-width', 1)
  .attr('stroke-linejoin', 'round')
  .attr('stroke-linecap', 'round')
  .attr('stroke', ([, color]) => `hsl(${color.h}, ${color.s}%, ${color.l}%)`);

// GRID
// following the legend add an SVG with the 16 visualizations
const margin = {
  top: 20,
  right: 20,
  bottom: 20,
  left: 20,
};
const width = 500 - (margin.left + margin.right);
const height = 500 - (margin.top + margin.bottom);

const svg = viz
  .append('svg')
  .attr('viewBox', `0 0 ${width + (margin.left + margin.right)} ${height + (margin.top + margin.bottom)}`);

const group = svg
  .append('g')
  .attr('transform', `translate(${margin.left} ${margin.top})`);

// the idea is to include four columns and rows to analyse the different variables
// use each category to include a row and for each row use the categories once again for the column
const categories = [
  'sepalLength',
  'sepalWidth',
  'petalLength',
  'petalWidth',
];

// function to draw a histogram
function drawHistogram(variable) {

}
// function to draw a scatterplot
function drawScatterplot(variableX, variableY) {

}

// create one group for each row and column, translating the group at fractions of the width/height of the wrapping svg
categories.forEach((row, indexRow, rows) => {
  const groupWidth = width / rows.length;
  const translateX = indexRow * groupWidth;
  categories.forEach((column, indexColumn, columns) => {
    const groupHeight = height / columns.length;
    const translateY = indexColumn * groupHeight;

    const groupVisualization = group
      .append('g')
      .attr('data-categories', `${row}-${column}`)
      .attr('transform', `translate(${translateX} ${translateY})`);

    // call a function to draw an histogram or scatterplot plot according to the row and column value
    // in both instances, pass an object describing the group, width and height of the visualization
    const specs = {
      groupVisualization,
      groupWidth,
      groupHeight,
    };
    if (row === column) {
      const variable = row;
      drawHistogram(variable, specs);
    } else {
      const [variableX, variableY] = [row, column];
      drawScatterplot(variableX, variableY, specs);
    }

    // as a proof of concept add a rectangle for each cell
    groupVisualization
      .append('rect')
      .attr('x', 0)
      .attr('y', 0)
      .attr('width', groupWidth)
      .attr('height', groupHeight)
      .attr('fill', 'none')
      .attr('stroke', '#fff')
      .attr('stroke-width', '1px');
  });
});


// FOOTER
// reference the inspiration behind the project
const href = 'https://en.wikipedia.org/wiki/Iris_flower_data_set';

viz
  .append('footer')
  .append('a')
  .attr('target', '_blank')
  .attr('href', href)
  .text('Inspiration');
