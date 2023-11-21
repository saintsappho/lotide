
const countOnly = function(allItems, itemsToCount) {
    const results = {};
    
    for (item of allItems){
      if(itemsToCount[item]){
        if (results[item]) {
          results[item] ++;
        } else {
          results [item] = 1;
        }
      }
    }
    return results;
}
module.exports = countOnly


