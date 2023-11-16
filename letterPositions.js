const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
        console.log(` 🟢🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢🟢 `);
    }

    else {
        console.log(` 🟥🟥🟥 Assertion Failed: ${actual} !== ${expected} 🟥🟥🟥 `);
    }
}
const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    } for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    } return true;
};

const letterPositions = function(sentence) {
    const results = {};
    // logic to update results here
    return results;
  };

console.log()

  //{ 
  //  l: [0],
  //  i: [1, 11],
  //  g: [2],
  //  h: [3, 5, 15, 18],
  //  t: [4, 14],
  //  o: [6, 19],
  //  u: [7, 20],
  //  s: [8, 21],
  //  e: [9, 16, 22],
  //  n: [12]
  //}