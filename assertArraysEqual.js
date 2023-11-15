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
assertArraysEqual([1], [2]);
assertArraysEqual([1, 2], [1, 2]);
assertArraysEqual([1, 2], '1, 2');
assertArraysEqual([1, 2, 3], [1, 2, 3,]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1, 2, 3], [1, 2, 3, 4]);
assertArraysEqual([1, 2, 3], [3, 2, 1]);
assertArraysEqual([1], [1]);
assertArraysEqual([1], [2]);
assertArraysEqual([1], [0]);
assertArraysEqual([], []);
assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]);
assertArraysEqual(["1", "2", "3"], ['1', '2', 3]);