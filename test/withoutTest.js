const without = require('../without')
const assertArraysEqual = require('../assertArraysEqual')
// ---------------------------- TEST CASES ---------------------------------
console.log(assertArraysEqual(without([1, 2, 3], [1, 2]), [3]));
console.log(assertArraysEqual(without([1, 2, 3], [2]), [1, 3]));
console.log(assertArraysEqual(without([1, 2, 3], [1, 2, 3,]), []));
console.log(assertArraysEqual(without([1, 2, 3], [3, 2, 1]), []));
console.log(assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]));
console.log(assertArraysEqual(without([1, 2, 3], [123]), [1, 2, 3]));
console.log(assertArraysEqual(without([1], [1]), []));
console.log(assertArraysEqual(without([0], []), [0]));
console.log(assertArraysEqual(without([1], [0]), [1]));
console.log(assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]));
console.log(assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []));
console.log(assertArraysEqual(without(["1", "2", "3"], ['1', '2', 3]), ["3"]));
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
console.log(assertArraysEqual(words, ["hello", "world", "lighthouse"])); // => should PASS