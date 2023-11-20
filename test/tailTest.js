const tail = require('../tail');
const assertEqual = require('../assertEqual');


// ---------------------------- TEST CASES ---------------------------------
let result = tail(['Hello', 'Lighthouse', 'Labs']);
assertEqual(result.length, 2); 
assertEqual(result[0], "Lighthouse"); 
assertEqual(result[1], "Labs"); 
let result2 = tail([]);
assertEqual(result2.length, 0); 
assertEqual(result2[0], undefined) 
assertEqual(result2[1], undefined);
assertEqual(tail(["test"]).length, 0);