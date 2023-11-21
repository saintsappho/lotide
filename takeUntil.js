const takeUntil = function(array, callback) {
    let results = [];
    for (let obj of array){
        if (callback(obj)) return results;
        results.push(obj);
    } return results
}

module.exports = takeUntil
