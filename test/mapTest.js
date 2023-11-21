const map = require('../map');
const assertArraysEqual = require('../assertArraysEqual')
const assert = require('chai').assert;
// ---------------------------- TEST CASES ---------------------------------
const words = ["ground", "control", "to", "major", "tom"];
console.log(assertArraysEqual(map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(map(words, word => word.length), [ 6, 7, 2, 5, 3]));
console.log(assertArraysEqual(map(words, word => word.includes('t')), [ false, true, true, false, true ]));
