const assertObjectEqual = function(actual, expected) {
  //loop here to go through key value pair andn check with actual and expected  
  for(let key in actual){
    if (actual[key] !== expected[key]) {
      return (`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
      
    } 
  } console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
};

const countLetters = function(stringInput) {
    const results = {};
    for (let letter of stringInput){
        if (results[letter]) {
            results[letter] ++;
        } else {
            results[letter] = 1;
        }
    }
    return results;
}
  // ---------------------------- TEST CASES ---------------------------------
const stringInput = "lighthouse in the house";

console.log(countLetters(stringInput));

console.log(assertObjectEqual(countLetters(stringInput), {l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, ' ': 3, n: 1}))
  