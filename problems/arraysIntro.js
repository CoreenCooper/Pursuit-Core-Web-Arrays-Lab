/**
 * Appends a fruit to an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */

const addFruitToEnd = (fruits, fruit) => {
  fruits.push(fruit);
  return fruits;
};

/**
 * Adds a fruit to the front of an array of fruits and returns the array.
 * @param {string[]} fruits
 * @param {string} fruit
 * @returns {string[]}
 */

const addFruitToFront = (fruits, fruit) => {
  fruits.unshift(fruit)
  return fruits
};

/**
 * Removes the last fruit from an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */

const removeLast = fruits => {
  fruits.pop()
  return fruits
};

/**
 * Removes and returns the last fruit from from an array of fruits
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */

const removeLastandReturnLast = fruits => fruits.pop()

/**
 * Takes in an array and returns the length
 * @param {Array} array
 * @returns {number}
 */

const arrayLength = array => array.length

/**
 * Removes the first fruit in an array of fruits and returns the array.
 * @param {string[]} fruits
 * @returns {string[]}
 */

const removeFirst = fruits => {
  fruits.shift()
  return fruits
};

/**
 * Removes and returns the first fruit in an array of fruits.
 * @param {string[]} fruits
 * @returns {string} The fruit that was removed
 */

const removeFirstandReturnFirst = fruits => fruits.shift()

/**
 * Returns a string made by joining all of the elements in an array of fruits with a '$' character.
 * @param {string[]} fruits
 * @returns {string}
 */

const arrayToString = fruits => fruits.join("$")

/**
 * Takes in two arrays. And returns the longer array.
 * If the arrays are of the same length return "They are the same size"
 *
 * @param {Array} array1
 * @param {Array} array2
 * @returns {string|Array}
 */

const largerArray = (array1, array2) => {
  if (array1.length === array2.length) {
    return "They are the same size"
  } else if (array1.length > array2.length) {
    return array1
  } else {
    return array2
  }
};

/**
 * Takes in an array and returns the middle element.
 * If the array is even in length return the middle two elements in their own array.
 * @param {Array} array
 * @returns {*|Array}
 */

const middleElement = () => {};

/**
 * Takes in an array and returns the last element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */

const lastElementIndexing = () => {};

/**
 * Takes in an array and returns the first element without altering or mutating the array
 * @param {Array} array
 * @returns {*}
 */

const firstElementIndexing = () => {};

module.exports = {
  addFruitToEnd,
  addFruitToFront,
  removeLast,
  removeLastandReturnLast,
  arrayLength,
  removeFirst,
  removeFirstandReturnFirst,
  arrayToString,
  largerArray,
  middleElement,
  lastElementIndexing,
  firstElementIndexing,
};
