// Use the `reduce` method in combination with the `concat` method to “flatten” an array into a single array that contains all the elements of the original arrays
const arrays = [[1, 2], [3, 4], [5, 6]];

const flattened = arrays.reduce((accumulator, currentArray) => {
  return accumulator.concat(currentArray);
}, []);

console.log(flattened);
// [1, 2, 3, 4, 5, 6]