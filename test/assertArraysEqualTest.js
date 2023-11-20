const assertArraysEqual = require('../assertArraysEqual')
//------------------------ test cases -------------------------
console.log(assertArraysEqual([1], [2])); // 🟥🟥🟥
console.log(assertArraysEqual([1, 2], [1, 2]));// 🟢🟢🟢
console.log(assertArraysEqual([1, 2], '1, 2'));// 🟥🟥🟥
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3,]));// 🟢🟢🟢
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));// 🟥🟥🟥
console.log(assertArraysEqual([1, 2, 3], [1, 2, 3, 4]));// 🟥🟥🟥
console.log(assertArraysEqual([1, 2, 3], [3, 2, 1]));// 🟥🟥🟥
console.log(assertArraysEqual([1], [1]));// 🟢🟢🟢
console.log(assertArraysEqual([1], [2]));// 🟥🟥🟥
console.log(assertArraysEqual([1], [0]));// 🟥🟥🟥
console.log(assertArraysEqual([], []));// 🟢🟢🟢
console.log(assertArraysEqual(["1", "2", "3"], ["1", "2", "3"]));// 🟢🟢🟢
console.log(assertArraysEqual(["1", "2", "3"], ['1', '2', 3]));// 🟥🟥🟥