const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    console.log(`🟥🟥🟥 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)} 🟥🟥🟥 `);
  } if (eqObjects(actual, expected)) {
    console.log(`🟢🟢🟢 Assertion Passed: ${inspect(actual)} === ${inspect(expected)} 🟢🟢🟢`);
  }
  return;
};
const eqObjects = require('./eqObjects');

module.exports = assertObjectsEqual;

