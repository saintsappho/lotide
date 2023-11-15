const assertArraysEqual = function(arrayAssert1, arrayAssert2) {
    if (eqArrays(arrayAssert1, arrayAssert2)) {
      console.log(` 🟢🟢🟢 Assertion Passed: ${arrayAssert1} === ${arrayAssert2} 🟢🟢🟢 `);
    }
  
    if (!eqArrays(arrayAssert1, arrayAssert2)) {
      console.log(` 🟥🟥🟥 Assertion Failed: ${arrayAssert1} !== ${arrayAssert2} 🟥🟥🟥 `);
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
assertArraysEqual(eqArrays([1], [2]), false);
assertArraysEqual(eqArrays([1, 2], [1, 2]), true);
assertArraysEqual(eqArrays([1, 2], '1, 2'), false);
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3,]), true); // => true
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertArraysEqual(eqArrays([1, 2, 3], [1, 2, 3, 4]), false); // => false
assertArraysEqual(eqArrays([1, 2, 3], [3, 2, 1]), false); // => false
assertArraysEqual(eqArrays([1], [1]), true); // => true
assertArraysEqual(eqArrays([1], [2]), false); // => false
assertArraysEqual(eqArrays([1], [0]), false); // => false
assertArraysEqual(eqArrays([], []), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ["1", "2", "3"]), true); // => true
assertArraysEqual(eqArrays(["1", "2", "3"], ['1', '2', 3]), false); // => false