const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return true;
  } else {
    return false;
  }
};
assertEqual("Butts", "butts");
assertEqual('butts', 'butts');
assertEqual(5, -5);
assertEqual(5, 5);
