const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    }
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === array2[i]) {
        } else {
            return false;
        }
    }
    return true;
};

console.log(eqArrays([1, 2, 3], [1, 2, 3,])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1, 2, 3], [1, 2, 3, 4])); // => false
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays([1], [1])); // => true
console.log(eqArrays([1], [2])); // => false
console.log(eqArrays([1], [0])); // => false
console.log(eqArrays([], [])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ['1', '2', 3])); // => false