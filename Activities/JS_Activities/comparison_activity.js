//comparison of null
console.log("Comparison of null: ");
console.log("> or < operator : ");
console.log(null > 0); //false
console.log(null < 0); //false
// > or <  relational operator convert value to number 
//so null = 0 and 0 !> 0 , therefore o/p is false
// < > <= >= convert operands to number
console.log("== operator : ");
console.log(null == 0); //false
// == loose equality 
//null has special equality rules -- null is only loosely equal to undefined
//null == 0 --> false
console.log("=== operator : ");
console.log(null === 0); //false
// === never converts type , therefore null - object != 0 - number
console.log("<= or >= operator : ");
console.log(null <= 0); //true
console.log(null >= 0); //true
//<= or >= converts operands to number , therefore null = 0 and 0 <= 0 -> true


console.log("Comparison of undefined: ");
console.log("< or > operator : ");
console.log(undefined < 0); //false
console.log(undefined > 0); //false
//> or < converts operands to number --> undefined = Nan(not a number) 
//NaN > 0 or NaN < 0 ---> false
//any comparison with NaN is always false 
console.log("<= or >= operator : ");
console.log(undefined <= 0); //false
console.log(undefined >= 0); //false
//same logic like above comparison of NaN is always false
console.log("== operator : ");
console.log(undefined == 0); //false
// == does not convert operands to number
console.log("=== operator : ");
console.log(undefined === 0); //false
//not type conversion happens

console.log("Comparison of null and undefined: ");
console.log(undefined == null); //true
//null and undefined are only loosely equal to each other and to nothing else.
//no number conversion , no string conversion
//Both represent “absence of value”, so JavaScript treats them as equal only in ==.
//THIS IS A HARD-CODED EXCEPTION IN THE JS 

console.log(undefined === null); //false
// === strict equality - no type conversion allowed 
 
//SPECIAL NOTE - comparison of null with +ve number = false 
//comparison of null with -ve number = true
//comparison of undefined with any number is = false