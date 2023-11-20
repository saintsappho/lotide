const assertEqual = function(actual, expected) {
  if (actual !== expected) {
     console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
     return
  }console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);   
};

// ---------------------------- TEST CASES ---------------------------------
// assertEqual("Butts", "butts");
// assertEqual('butts', 'butts');
// assertEqual(5, -5);
// assertEqual(5, 5);
// ---------------------------- MODULE ---------------------------------
module.exports = assertEqual;