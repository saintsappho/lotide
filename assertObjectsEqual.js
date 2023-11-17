const assertObjectsEqual = function(actual, expected) {
  if (!eqObjects(actual, expected)) {
    console.log(`🟥🟥🟥 Assertion Failed 🟥🟥🟥 `);
  } if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed 🟢🟢🟢`);
  }
  return;
};

const eqObjects = function(object1, object2) {
  if (Object.keys(object1).length !== Object.keys(object2).length) return false;
  for (let key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  } return true;
};

// ----------------------------- TEST -----------------------------

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };
assertObjectsEqual(shirtObject, anotherShirtObject);

const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
assertObjectsEqual(shirtObject, longSleeveShirtObject);