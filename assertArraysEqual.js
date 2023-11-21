const eqArrays = require('./eqArrays');
const assertArraysEqual = function(actual, expected) {
    if (eqArrays(actual, expected)) {
       return (true, `🟢🟢🟢 ${actual} === ${expected} 🟢🟢🟢`);
    }

    else {
       return (false, `🟥🟥🟥 ${actual} !== ${expected} 🟥🟥🟥`);
    }
}
module.exports = assertArraysEqual

