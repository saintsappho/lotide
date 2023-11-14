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
const tail = function(array) {
  return array.slice(1);
};
let result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Lighthouse"); // ensure first element is "Lighthouse"
assertEqual(result[1], "Labs"); // ensure second element is "Labs"
assertEqual(result[1], "Labs");
let result2 = tail([]);
assertEqual(result2.length, 0); // ensure we get back two elements
assertEqual(result2[0], undefined) // ensure first element is "Lighthouse"
assertEqual(result2[1], undefined);