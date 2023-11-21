const assertObjectsEqual = require('../assertObjectsEqual')
const countLetters = require('../countLetters')

  // ---------------------------- TEST CASES ---------------------------------
  const stringInput = "lighthouse in the house";

  console.log(countLetters(stringInput));
  
  console.log(assertObjectsEqual(countLetters(stringInput), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1}))
    