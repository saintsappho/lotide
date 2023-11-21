const without = function(input, removal) {
    let newArray = []
    for (let i = 0; i < input.length; i++) {
        if (!removal.includes(input[i])) {
            newArray.push(input[i]);
        }
    } return newArray;
};

module.exports = without
