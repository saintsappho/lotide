const head = require('../head');
const assertEqual = require('../assertEqual');


// ---------------------------- head TEST CASES ---------------------------------
assertEqual(head([5]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");