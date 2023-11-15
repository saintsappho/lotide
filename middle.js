const assertArraysEqual = function(arrayAssert1, arrayAssert2) {
    if (eqArrays(arrayAssert1, arrayAssert2)) {
        console.log(` 🟢🟢🟢 Assertion Passed: ${arrayAssert1} === ${arrayAssert2} 🟢🟢🟢 `);
    }

    if (!eqArrays(arrayAssert1, arrayAssert2)) {
        console.log(` 🟥🟥🟥 Assertion Failed: ${arrayAssert1} !== ${arrayAssert2} 🟥🟥🟥 `);
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

const input = process.argv.slice(2)
const middle = function(input){
    let output = [];
    if (input.length < 3 ){
        return output;
    };
    if (input.length % 2 === 0){
        output.push(input[(input.length / 2) - 1]);
        output.push(input[(input.length / 2)]);
        
        return output;
    };
    if (input.length % 2 !== 0){
        output.push(input[(input.length - 1) / 2]);
       
        return output;
    };
};
assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])
assertArraysEqual(middle([1, 2, 3]), [2])
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9]), [5])
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]), [5, 6])


//assertArraysEqual(middle([1, 2]), []);
//assertArraysEqual(middle([1, 2], []), true);
//assertArraysEqual(middle([1, 2, 3], [2]), true); // => true
//assertArraysEqual(middle([1, 2, 3], [3, 2, 1]), true); // => true
//assertArraysEqual(middle([1], [1]), true); // => true
//assertArraysEqual(middle([1], [2]), false); // => false
//assertArraysEqual(middle([1], [0]), false); // => false
//assertArraysEqual(middle([], []), true); // => true
//assertArraysEqual(middle(["1", "2", "3"], ["1", "2", "3"]), true); // => true
//assertArraysEqual(middle(["1", "2", "3"], ['1', '2', 3]), false); // => false