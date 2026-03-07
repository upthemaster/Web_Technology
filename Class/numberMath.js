let myNum = new Number(123.4567);

console.log(myNum);                    // [Number: 123.4567]
console.log(myNum.toString());         // "123.4567"
console.log(myNum.toString().length);  // 8

console.log(myNum.toFixed(2));         // "123.46"
console.log(myNum.toFixed(0));         // "123"
let myNum2 = new Number(123);
console.log(myNum);
console.log(myNum.toString());
//console.log((myNum.toString().length()));
//When we build e-commerce website and precision's value is so long.

let h = 100000000000;
console.log(h);

console.log(h.toLocaleString('en-IN'));//Indian Standard


//Math
console.log(Math);

console.log(Math.abs(-4));//When we take negative value it converts innto positive.
console.log(Math.round(4.6));//5
console.log(Math.ceil(4.6));//5
console.log(Math.floor(4.6));//4
console.log(Math.min(1,2,3,4));//1
console.log(Math.max(5,6,7,8));//8
//HW  : Math.random()