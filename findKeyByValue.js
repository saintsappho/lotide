const findKeyByValue = function(obj, kv) {
    for (key in obj) {
        if (obj[key] === kv) return key;
    };
};

module.exports = findKeyByValue;

