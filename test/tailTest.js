const tail = require('../tail');
console.log((tail(['Hello', 'Lighthouse', 'Labs'])).length)
const assert = require('chai').assert;
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs'],", () => {
    assert.deepEqual((tail(['Hello', 'Lighthouse', 'Labs'])), ['Lighthouse', 'Labs']);
  });
  it("returns 2 for length", () => {
    assert.strictEqual(((tail(['Hello', 'Lighthouse', 'Labs'])).length), 2)
  });
});

console.log((tail(['Hello', 'Lighthouse', 'Labs'])).length)
// let result = tail(['Hello', 'Lighthouse', 'Labs']);
// assertEqual(result.length, 2); 
// assertEqual(result[0], "Lighthouse"); 
// assertEqual(result[1], "Labs"); 
// let result2 = tail([]);
// assertEqual(result2.length, 0); 
// assertEqual(result2[0], undefined) 
// assertEqual(result2[1], undefined);
// assertEqual(tail(["test"]).length, 0);