const assertEqual = function(actual, expected) {
  if (actual !== expected) {
     return (false, '🟥🟥🟥');
     
  }return (true, '🟢🟢🟢');   
};

// ---------------------------- TEST CASES ---------------------------------
// assertEqual("Butts", "butts");
// assertEqual('butts', 'butts');
// assertEqual(5, -5);
// assertEqual(5, 5);
// ---------------------------- MODULE ---------------------------------
module.exports = assertEqual;