//Conversion of String to Number
console.log("Conversion of String to number : ");
let str1 = "3.14";
console.log("typeof str1: " +typeof(str1));
let num1 = Number(str1)
console.log("typeof num1: " +typeof(num1));

console.log();

console.log("Converting Math.PI to number");
let num2 = Number(Math.PI)
console.log(num2);
console.log("typeof num2: " +typeof(num2));

console.log();

let str3 = "  ";
console.log("typeof str3: " +typeof(str3));
let num3 = Number(str3);
console.log("typeof num3: " +typeof(num3));

console.log();

let str4 = "99 88";
console.log(str4);
console.log("typeof str4: " +typeof(str4));
let num4 = Number(str4);
console.log(num4);
console.log("typeof num4: " +typeof(num4));

console.log();
console.log("Conversion of Number to String : ");
let x = 1526;
console.log("x : " + x + " typeof x: " +typeof(num4));
let string1 = String(x);
console.log("string1 : " + string1 + " typeof string1: " +typeof(string1));

let xy = 125;
console.log("xy : " + xy + " typeof xy: " +typeof(xy));
let string2 = xy.toString();
console.log("string2 : " + string2 + " typeof string2: " +typeof(string2));

console.log();
console.log("Conversion of  Date to Number : ");
let date = new Date()
console.log("date : " + date + " typeof date: " +typeof(date));
let num = Number(date);
console.log("num : " + num + " typeof num: " +typeof(num));

console.log();
console.log("Conversion of  Date to String : ");
let date2 = new Date();
console.log("date2 : " + date2 + " typeof date2: " +typeof(date2));
let n = String(date2);
console.log("n : " + n + " typeof n: " +typeof(n));

console.log();
console.log("Conversion of  Boolean to Number : ");
let b1 = false;
console.log("b1 : " + b1 + " typeof b1: " +typeof(b1));
let n1 = Number(b1);
console.log("n1 : " + n1 + " typeof n1: " +typeof(n1));
let b2 = true;
console.log("b2 : " + b2 + " typeof b2: " +typeof(b2));
let n2 = Number(b2);
console.log("n2 : " + n2 + " typeof n2: " +typeof(n2));

console.log();
console.log("Conversion of  Boolean to String : ");
let b3 = false;
console.log("b3 : " + b3 + " typeof b3: " +typeof(b3));
let str = String(b3);
console.log("str : " + str + " typeof str: " +typeof(str));

console.log();
console.log("Conversion of  null to Number, boolean and String : ");
let value1 = null;
console.log("value1 : " + value1 + " typeof value1: " +typeof(value1));
let value1_num = Number(value1);
console.log("value1_num : " + value1_num + " typeof value1_num: " +typeof(value1_num));
let value1_bool = Boolean(value1);
console.log("value1_bool : " + value1_bool + " typeof value1_bool: " +typeof(value1_bool));
let value1_str = String(value1);
console.log("value1_str : " + value1_str + " typeof value1_str: " +typeof(value1_str));


console.log();
console.log("Conversion of  Undefined to Number, boolean and String : ");
let value2 = undefined;
console.log("value2 : " + value2 + " typeof value2: " +typeof(value2));
let value2_num = Number(value2);
console.log("value2_num : " + value2_num + " typeof value2_num: " +typeof(value2_num));
let value2_bool = Boolean(value2);
console.log("value2_bool : " + value2_bool + " typeof value2_bool: " +typeof(value2_bool));
let value2_str = String(value2);
console.log("value2_str : " + value2_str + " typeof value2_str: " +typeof(value2_str));