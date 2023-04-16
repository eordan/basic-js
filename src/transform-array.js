const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */

function transform(arr) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // Check if the parameter is an array
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  // Create a copy of the original array so we don't modify it directly
  const originalArray = arr.slice();

  // Initialize the transformed array to an empty array
  const transformedArray = [];

  // Loop through each element in the original array
  for (let i = 0; i < arr.length; i++) {
    // If the element is --discard-next, skip the next element in the array
    if (arr[i] === '--discard-next') {
      i++;
    } 
    // If the element is --discard-prev, remove the previous element from the transformed array
    else if (arr[i] === '--discard-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        transformedArray.pop();
      }
    } 
    // If the element is --double-next, duplicate the next element in the transformed array
    else if (arr[i] === '--double-next') {
      if (i < arr.length - 1) {
        transformedArray.push(arr[i + 1]);
      }
    } 
    // If the element is --double-prev, duplicate the previous element in the transformed array
    else if (arr[i] === '--double-prev') {
      if (i > 0 && arr[i - 2] !== '--discard-next') {
        transformedArray.push(arr[i - 1]);
      }
    } 
    // Otherwise, add the element to the transformed array
    else {
      transformedArray.push(arr[i]);
    }
  }

  // Return the transformed array
  return transformedArray;
}

module.exports = {
  transform
};