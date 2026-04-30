//Conversion of number to string 
console.log("Conversion of number to String:");
let num = 33;
let string = String(num);

console.log(typeof(num))
console.log(typeof(string))
console.log(string);

//conversion of String to number
console.log("Conversion of String to number: ");

let str = "Hello";
let str_num = Number(str);

console.log(typeof(str));
console.log(typeof(str_num));
console.log(str_num);

//activity 1 -- take any variables and convert to vice versa(all data types) -- check typeof

///operations
console.log("Arithmetic operations : ");
console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2/2);
console.log(2%2);

//String addition
console.log("String Addition : ");
let str1 = "Hello ";
let str2 = "Siddhi";

console.log(str1 + str2);

//IMP conversion point
//note - javaScript only automatically convert a string to a number 
//in arithmetic operations
console.log("Direct String converted to the number in arithmetic operations only");
console.log("1" + 2);
console.log("1" + 2 + 2);
console.log(1 + "2");
console.log(1 + 2 + "2");

console.log(true);
console.log(+ true);
console.log(+ " ");
//activity 2 ---- home why this code give this output

console.log("Increment");
let gameCounter = 100;
gameCounter++;
console.log(gameCounter);

let scoreCounter = 200;
++scoreCounter;
console.log(scoreCounter);