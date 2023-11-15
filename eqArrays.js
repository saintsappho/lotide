const assertEqual = function(actual, expected) {
    if (actual === expected) {
      return 'True';
    } else {
      return 'False';
    }
  };
  
  const eqArrays = function(array1, array2){
    if (array1.length !== array2.length){
        return 'False'
    }
    for (let i = 0; i < array1.length; i++) {
        if (assertEqual(array1[i], array2[i])) {
            continue
        } else {
            return 'False'
        }
    }
  }

eqArrays([1, 2, 3], [1, 2, 3, ]) // => true
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays([1, 2, 3], [1, 2, 3, 4]) // => false
eqArrays([1, 2, 3], [3, 2, 1]) // => false
eqArrays([1], [1]) // => true
eqArrays([1], [2]) // => false
eqArrays([1], [0]) // => false
eqArrays([], []) // => true

eqArrays(["1", "2", "3"], ["1", "2", "3"]) // => true
eqArrays(["1", "2", "3"], ['1', '2', 3]) // => false