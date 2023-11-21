const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

describe("#assertEqual", () => {
  it("returns true, '🟢🟢🟢' for 1,1", () => {
    assert.strictEqual(assertEqual(1, 1), (true, '🟢🟢🟢')); 
  });
  it("returns true, 🟢🟢🟢  for 'Hello World', 'Hello World'", () => {
    assert.strictEqual(assertEqual('Hello World', 'Hello World'), (true, `🟢🟢🟢`)); 
  });
  it("returns false, 🟥🟥🟥  for '123', 123 ", () => {
    assert.strictEqual(assertEqual('123', 123), (false, '🟥🟥🟥')); 
  });  
});
// ---------------------------- assertEqual TEST CASES ---------------------------------
assertEqual("Butts", "butts");
assertEqual('butts', 'butts');
assertEqual(5, -5);
assertEqual(5, 5);