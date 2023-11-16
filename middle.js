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

const inputArray = process.argv.slice(2)
const middle = function(inputArray){
    let outputArray = [];
    if (inputArray.length < 3 ){
        return outputArray;
    };
    if (inputArray.length % 2 === 0){
        outputArray.push(inputArray[(inputArray.length / 2) - 1]);
        outputArray.push(inputArray[(inputArray.length / 2)]);
        
        return outputArray;
    }
    else {
        outputArray.push(inputArray[(inputArray.length - 1) / 2]);
       
        return outputArray;
    };
};
// ---------------------------- TEST CASES ---------------------------------
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])
