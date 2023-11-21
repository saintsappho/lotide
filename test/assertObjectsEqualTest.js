const assertObjectsEqual = require('../assertObjectsEqual');
const assert = require('chai').assert;

describe("#assertObjectsEqual", () => {
  it("returns true, '🟢🟢🟢' for shirtObject, anotherShirtObject", () => {
    assert.strictEqual(assertObjectsEqual(shirtObject, anotherShirtObject), (true, '🟢🟢🟢')); 
  });
  it("returns false, 🟥🟥🟥  for 'shirtObject', longSleeveShirtObject ", () => {
    assert.strictEqual(assertObjectsEqual(shirtObject, longSleeveShirtObject), (false, '🟥🟥🟥')); 
  });  
});

// ----------------------------- TEST -----------------------------

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject);