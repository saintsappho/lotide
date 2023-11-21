let flat = [];
const flatten = function(array) {
  for (let item of array) {
    if (Array.isArray(item)) {
      flatten(item);
    } else {
      flat.push(item);
    }
  } return flat;
};

module.exports = flatten