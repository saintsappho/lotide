
const middle = function(inputArray){
    let outputArray = [];
    if (inputArray.length < 3 ){
        return outputArray;
    };
    if (inputArray.length % 2 === 0){
        outputArray.push(inputArray[(inputArray.length / 2) - 1]);
        outputArray.push(inputArray[(inputArray.length / 2)]);
        
        return outputArray;
    }
    else {
        outputArray.push(inputArray[(inputArray.length - 1) / 2]);
       
        return outputArray;
    };
};
module.exports = middle
