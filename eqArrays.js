  const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(` 🟢🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢🟢 `);
    }
  
    if (actual !== expected) {
      console.log(` 🟥🟥🟥 Assertion Failed: ${actual} !== ${expected} 🟥🟥🟥 `);
    }
  };
const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    } for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    } return true;
};
assertEqual(eqArrays([1], [2]), false);
assertEqual(eqArrays([1, 2], [1, 2]), true);
assertEqual(eqArrays([1, 2], '1, 2'), false);
assertEqual(eqArrays([1, 2, 3], [1, 2, 3,]), true); // => true
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => false
assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertEqual(eqArrays([1], [1]), true); // => true
assertEqual(eqArrays([1], [2]), false); // => false
assertEqual(eqArrays([1], [0]), false); // => false
assertEqual(eqArrays([], []), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertEqual(eqArrays(["1", "2", "3"], ['1', '2', 3]), false); // => false