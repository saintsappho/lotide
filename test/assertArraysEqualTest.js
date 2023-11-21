const assertArraysEqual = require('../assertArraysEqual')
console.log(assertArraysEqual(['1', '2', '3'],[1,2,3]))
const assert = require('chai').assert;
describe("#assertArraysEqual", () => {
  it("returns true, 🟢🟢🟢 1 === 1 🟢🟢🟢 for [1], [1]", () => {
    assert.deepEqual(assertArraysEqual([1],[1]), (true, `🟢🟢🟢 1 === 1 🟢🟢🟢`)); 
  });
  it("returns true, 🟢🟢🟢 ['1', '2', '3'] === ['1', '2', '3'] 🟢🟢🟢 for ['1', '2', '3'], ['1', '2', '3']", () => {
    assert.deepEqual(assertArraysEqual(['1', '2', '3'],['1', '2', '3']), (true, `🟢🟢🟢 1,2,3 === 1,2,3 🟢🟢🟢`)); 
  });
  it("returns false, 🟥🟥🟥 1,2,3 !== 1,2,3 🟥🟥🟥 for ['1', '2', '3'], [1,2,3]", () => {
    assert.deepEqual(assertArraysEqual(['1', '2', '3'],[1,2,3]), (true, '🟥🟥🟥 1,2,3 !== 1,2,3 🟥🟥🟥')); 
  });  
});