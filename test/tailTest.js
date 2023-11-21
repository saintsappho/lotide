const tail = require('../tail');
const assert = require('chai').assert;
describe("#tail", () => {
  it("returns ['Lighthouse', 'Labs'] for ['Hello', 'Lighthouse', 'Labs'],", () => {
    assert.deepEqual((tail(['Hello', 'Lighthouse', 'Labs'])), ['Lighthouse', 'Labs']);
  });
  it("returns 2 for length", () => {
    assert.strictEqual(((tail(['Hello', 'Lighthouse', 'Labs'])).length), 2)
  });
});

