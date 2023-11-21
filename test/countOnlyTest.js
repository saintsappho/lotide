const countOnly = require('../countOnly')
const assertEqual = require('../assertEqual')
const assert = require('chai').assert;
describe("#countOnly", () => {
  it("returns 1 for 'Jason'", () => {
    assert.deepEqual(result1['Jason'], 1); 
  });
  it("returns 2 for 'Fang'", () => {
    assert.deepEqual(result1['Fang'], 2); 
  }); 
  it("returns undefined for 'Karima'", () => {
    assert.deepEqual(result1['Karima'], undefined); 
  }); 
  it("returns undefined for 'Agouhanna'", () => {
    assert.deepEqual(result1['Agouhanna'], undefined); 
  }); 
});

// ---------------------------- TEST CASES ---------------------------------
const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
  
  const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });
  
