const countLetters = require('../countLetters')
const assert = require('chai').assert;
describe("#countLetters", () => {
  it("returns { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 } for 'lighthouse in the house'", () => {
    assert.deepEqual(countLetters('lighthouse in the house'), ({ l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1 })); 
  });
  it("returns { m: 3, o: 2, c: 3, h: 2, a: 2, ' ': 5, i: 5, t: 3, e: 2, s: 3, n: 3, g: 2, u: 1 } for 'mocha chai testing is time consuming'", () => {
    assert.deepEqual(countLetters('mocha chai testing is time consuming'), ({ m: 3, o: 2, c: 3, h: 2, a: 2, ' ': 5, i: 5, t: 3, e: 2, s: 3, n: 3, g: 2, u: 1 })); 
  }); 
});

  

    