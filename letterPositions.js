const assertObjectEqual = function(actual, expected) {
    for (let key in actual) {
        if (!eqArrays(actual[key], expected[key])) {
            return (`🟥🟥🟥 Assertion Failed 🟥🟥🟥`);

        }
    } return (`🟢🟢🟢 Assertion Passed 🟢🟢🟢`);
};

const eqArrays = function(array1, array2) {
    if (array1.length !== array2.length) {
        return false;
    } for (let i = 0; i < array1.length; i++) {
        if (array1[i] !== array2[i]) {
            return false;
        }
    } return true;
};

// --------------------
const letterPositions = function(sentence) {
    const results = {};
    let i = 0;
    for (letter of sentence) {
        if (letter !== ' ')
            if (results[letter]) {
                results[letter].push(i);
            } else {
                results[letter] = [i];
            } i++;
    }
    return results;
};


console.log(assertObjectEqual(letterPositions("lighthouse in the house"), {
    l: [0],
    i: [1, 11],
    g: [2],
    h: [3, 5, 15, 18],
    t: [4, 14],
    o: [6, 19],
    u: [7, 20],
    s: [8, 21],
    e: [9, 16, 22],
    n: [12]
}),);
