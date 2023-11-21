const eqArrays = require('../eqArrays')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;

// ---------------------------- TEST CASES ---------------------------------
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
