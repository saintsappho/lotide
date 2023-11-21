
const countLetters = function(stringInput) {
    const results = {};
    for (let letter of stringInput){
        if (results[letter]) {
            results[letter] ++;
        } else {
            results[letter] = 1;
        }
    }
    return results;
}
module.exports = countLetters

