const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍🏽 Assertion Passed: ${actual} === ${expected}. 👍🏽`);
  } else {
    console.log(` 💣🩸🔪 Assertion Failed: ${actual} !== ${expected}. 🔪🩸💣 `);
  }
};
assertEqual("Butts", "butts");
assertEqual('butts', 'butts');
assertEqual(5, -5);
assertEqual(5, 5);
