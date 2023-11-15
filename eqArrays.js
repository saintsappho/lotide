const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`👍🏽 Assertion Passed: ${actual} === ${expected}. 👍🏽`);
    } else {
      console.log(` 💣🩸🔪 Assertion Failed: ${actual} !== ${expected}. 🔪🩸💣 `);
    }
  };
  
  const eqArrays = function(array1, array2){
    for (i = 0; i < array1.length; i++) {
        assertEqual(array1[i], array2[i])
    }
  }

eqArrays([1, 2, 3], [1, 2, 3]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ['1', '2', 3]) // => false