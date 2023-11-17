const assertEqual = function(actual, expected) {
    if (actual === expected) {
        console.log(`🟢🟢🟢 Assertion Passed: ${actual} === ${expected}`);
    }

    else {
        console.log(`🟥🟥🟥 Assertion Failed: ${actual} !== ${expected}`);
    }
};
const findKeyByValue = function(obj, kv) {
    for (key in obj) {
        if (obj[key] === kv) return key;
    };
};

//------------------ TEST -----------------
const bestTVShowsByGenre = {
    sci_fi: "The Expanse",

    comedy: "Brooklyn Nine-Nine",
    drama: "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);