const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("👍🏽 Assertion Passed 👍🏽");
  } else {
    console.log(" 💣🩸🔪 Assertion Failed: " + actual + " !== " + expected + ". 🔪🩸💣 ");
  }
};
assertEqual("Butts", "butts");
assertEqual('butts', 'butts');