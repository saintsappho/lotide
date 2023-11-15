const without = function(input, removal) {
    let newArray = []
    for (let i = 0; i < input.length; i++) {
        if (!removal.includes(input[i])) {
            newArray.push(input[i]);
        }
    } return newArray;
};

const assertArraysEqual = function(assert1, assert2) {
    if (eqArrays(assert1, assert2)) {
        console.log(` 🟢🟢🟢 Assertion Passed: ${assert1} === ${assert2} 🟢🟢🟢 `);
    }
    else {
        console.log(` 🟥🟥🟥 Assertion Failed: ${assert1} !== ${assert2} 🟥🟥🟥 `);
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

assertArraysEqual(without([1, 2, 3], [1, 2]), [3]);
assertArraysEqual(without([1, 2, 3], [2]), [1, 3]);
assertArraysEqual(without([1, 2, 3], [1, 2, 3,]), []);
assertArraysEqual(without([1, 2, 3], [3, 2, 1]), []);
assertArraysEqual(without([1, 2, 3], [4]), [1, 2, 3]);
assertArraysEqual(without([1, 2, 3], [123]), [1, 2, 3]);
assertArraysEqual(without([1], [1]), []);
assertArraysEqual(without([0], []), [0]);
assertArraysEqual(without([1], [0]), [1]);
assertArraysEqual(without([1, 2, 3], []), [1, 2, 3]);
assertArraysEqual(without(["1", "2", "3"], ["1", "2", "3"]), []);
assertArraysEqual(without(["1", "2", "3"], ['1', '2', 3]), ["3"]);
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]); // => should PASS