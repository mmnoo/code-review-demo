const numberToHex = number => Math.round(number).toString(16);
 
const testNumToHex1 = numberToHex(255);
const testNumToHex2 = numberToHex(43.4);
const testNumToHex3 = numberToHex(43.6);
console.assert(testNumToHex1 === 'ff', testNumToHex1);
console.assert(testNumToHex2 === '2b', testNumToHex2);
console.assert(testNumToHex3 === '2c', testNumToHex3);




  