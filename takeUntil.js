const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
        return(` 🟢🟢🟢 Assertion Passed: ${actual} === ${expected} 🟢🟢🟢 `);
    }

    else {
        return(` 🟥🟥🟥 Assertion Failed: ${actual} !== ${expected} 🟥🟥🟥 `);
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

const takeUntil = function(array, callback) {
    let results = [];
    for (let obj of array){
        if (callback(obj)) return results;
        results.push(obj);
    } return results
}

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]));

console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
console.log(assertArraysEqual(results2, [ "I've", 'been', 'to', 'Hollywood' ]));