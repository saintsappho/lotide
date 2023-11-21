const flatten = require('../flatten')
const assert = require('chai').assert;

const array1 = [1, 2, [3, 4], 5, [6]];
const array2 = ["A", [["B", ["C"]], [[["D"]], "E"]]];
const array3 = ["bugs", [["creepy", ["crawylies"]], [[[600]], "of them"]]];

const assertArraysEqual =  require('../assertArraysEqual')

console.log(assertArraysEqual(flatten(array1), [1, 2, 3, 4, 5, 6]));
flat = [];
console.log(assertArraysEqual(flatten(array2), ['A', 'B', 'C', 'D', 'E']));
flat = [];
console.log(assertArraysEqual(flatten(array3), ["bugs", "creepy", "crawylies", 600, "of them"]));
