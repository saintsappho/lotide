const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  if (!eqObjects(actual, expected)) {
    return(false, `🟥🟥🟥`);
  } if (eqObjects(actual, expected)) {
    return(true, `🟢🟢🟢`);
  }
  return;
};
const eqObjects = require('./eqObjects');

module.exports = assertObjectsEqual;

