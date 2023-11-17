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
const findKey = function(object, callback){
    for (let key in object){
        if (callback(object[key])){ 
            return(key)
        }
    }
}
//------------------ TEST -----------------


assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "noma");
assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 4 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 2), "Ora");
assertEqual(findKey({
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
}, x => x.stars === 4), undefined);