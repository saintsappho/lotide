const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏽 Assertion Passed: ${actual} === ${expected}. 👍🏽`);
  } else {
    console.log(` 💣🩸🔪 Assertion Failed: ${actual} !== ${expected}. 🔪🩸💣 `);
  }
};

/*const head = function(array) {
  return array[0];
};
*/

// ---------------------------- TEST CASES ---------------------------------
const tail = function(array) {
  return array.slice(1);
};
let result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 
let result2 = tail([]);
assertEqual(result2.length, 0); 
assertEqual(result2[0], undefined) 
assertEqual(result2[1], undefined);
assertEqual(tail(["test"]).length, 0);