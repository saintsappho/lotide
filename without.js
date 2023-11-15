const without = function(array1, array2) {
    let newArray = []
    for (let i = 0; i < array1.length; i++) {
        if (!array2.includes(array1[i])) {
            newArray.push(array1[i]);
        }
    } return newArray;
};
console.log(without([1, 2, 3], [1, 2]));
console.log(without([1, 2, 3], [2]));
console.log(without([1, 2], '2'));
console.log(without([1, 2, 3], [1, 2, 3,]));
console.log(without([1, 2, 3], [3, 2, 1]));
console.log(without([1, 2, 3], [4]));
console.log(without([1, 2, 3], [123]));
console.log(without([1], [1]));
console.log(without([0], []));
console.log(without([1], [0]));
console.log(without([1, 2, 3], []));
console.log(without(["1", "2", "3"], ["1", "2", "3"]));
console.log(without(["1", "2", "3"], ['1', '2', 3]));