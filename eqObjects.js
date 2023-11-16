const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    }
  
    else {
      console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
    }
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