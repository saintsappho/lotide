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

const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
    const results = [];
    for (let item of array){
        results.push(callback(item));
   } return results; 
}

console.log(assertArraysEqual(results1 = map(words, word => word[0]), [ 'g', 'c', 't', 'm', 't' ]));
console.log(assertArraysEqual(results1 = map(words, word => word.length), [ 6, 7, 2, 5, 3]));
console.log(assertArraysEqual(results1 = map(words, word => word.includes('t')), [ false, true, true, false, true ]));
