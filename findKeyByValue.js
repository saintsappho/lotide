const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    }
  
    else {
      console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
    }
  };
const findKeyByValue = function(obj, kv){
    // console.log('kv: ' + kv);
    for (key in obj){
        console.log('obj[key]: ' + obj[key]);
        // console.log('key: '+ key);
        
        if (obj[key] === kv) return key;
    };    
};

//------------------ TEST -----------------
  const bestTVShowsByGenre = { 
    sci_fi: "The Expanse",

    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);