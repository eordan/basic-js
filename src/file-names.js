const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */

function renameFiles(names) {
  // throw new NotImplementedError('Not implemented');
  // remove line with error and write your code here

  // create an object to keep track of name counts
  let nameCounts = {};
  // create an empty array to store the renamed files
  let result = [];
  
  // loop through each name in the array
  names.forEach((name) => {
    // if the name has not been seen before, add it to the result array
    if (!nameCounts[name]) {
      nameCounts[name] = 1;
      result.push(name);
    } else {
      // if the name has been seen before, add the appropriate suffix to it
      let newName = name + `(${nameCounts[name]})`;
      // while the new name already exists, increment the count and try again
      while (nameCounts[newName]) {
        nameCounts[name]++;
        newName = name + `(${nameCounts[name]})`;
      }
      // add the new name to the result array and update the nameCounts object
      nameCounts[newName] = 1;
      result.push(newName);
    }
  });
  
  // return the array of renamed files
  return result;
}

module.exports = {
  renameFiles
};