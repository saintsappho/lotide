const assertObjectEqual = function(actual, expected) {
    //loop here to go through key value pair andn check with actual and expected  
    for(let key in actual){
      if (actual[key] !== expected[key]) {
        return (`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
        
      } 
    } console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
  };
  

const eqObjects = function(object1, object2) {
    //loop here to go through key value pair andn check with object1 and object2  
    for(let key in object1){
      if (object1[key] !== object2[key]) {
        return false;
        
      } 
    } return true;
  };

// ----------------------------- TEST -----------------------------

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject= { size: "medium", color: "red" };
assertEqual(eqObjects(shirtObject , anotherShirtObject), true)

const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
assertEqual(eqObjects(shirtObject , longSleeveShirtObject), false);