const assertEqual = require('./assertEqual')

const eqObjects = function(object1, object2) {
    //loop here to go through key value pair andn check with object1 and object2  
    for(let key in object1){
      if (object1[key] !== object2[key] || Object.keys(object1).length != Object.keys(object2).length) {
        return false;
      } 
    } return true;
  };

  module.exports = eqObjects
