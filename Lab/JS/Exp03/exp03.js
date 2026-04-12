
// activity 01 : what is arrow fun, diff between simple & arrow fun

/* => An arrow function is a shorter and modern way to write a function in JavaScript, introduced in ES6 (2015).
It uses the => (arrow) syntax and makes the code more clean, readable, and concise.

| Feature               | Simple Function            | Arrow Function                    |
| --------------------- | -------------------------- | --------------------------------- |
| **Syntax**            | Uses `function` keyword    | Uses `=>` arrow                   |
| **Code Length**       | Longer                     | Shorter & concise                 |
| **`this` keyword**    | Has its own `this`         | Inherits `this` from parent scope |
| **Hoisting**          | Hoisted                    | Not hoisted                       |
| **Arguments object**  | Available                  | Not available                     |
| **Constructor usage** | Can be used as constructor | Cannot be used as constructor     |

*/

// activity 02 : why we use this keyword, why we don't use in arrow fun 
/* 
    The this keyword in JavaScript is used to refer to the current object that is calling a function.
    It helps in accessing object properties and methods inside functions.
Purpose of this :-
    Refers to the owner object of the function
    Allows reuse of functions for different objects
    Helps distinguish between local variables and object properties


Example
const student = {
    name: "Pranali",
    marks: 85,
    display() {
        console.log(this.name + " scored " + this.marks);
    }
};

Output:

Pranali scored 85
 Here, this refers to the student object.

 Arrow functions do not have their own this.
Instead, they inherit this from their surrounding (lexical) scope.

Reason :-
       Arrow functions are designed to be lightweight
       They avoid confusion caused by dynamic this binding
       Useful in callbacks where we want to preserve parent this
*/

//activity 03 : write a code for arrow fun with 2 example
//01
let arr1 = ["Pune","Mumbai","Delhi"];

arr1.forEach((val) => {
    console.log(val);
});
//02
let CalcSquare =  (num) => {
    return num * num;
}
console.log(CalcSquare(9));

//activity 04 : write a code switch case in js
//Day of the week

let day = 3;

switch(day){
    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;
    
    case 4:
          console.log("Thursday");
    break;

  case 5:
    console.log("Friday");
    break;

  default:
    console.log("Invalid day");
}

//activity 05 : how to use truthy-falsy value in js
/* 

false
0
-0
0n        // BigInt zero
""        // empty string
null
undefined
NaN

*/

/* 
Common Truthy values

true
1
-1
"0"
"false"
[]
{}
function(){}

*/
//Example
//01 Form validation
let email = "";

if(!email) {
    console.log("Email is required!");
}

//02 Boolean conversion
console.log(Boolean(0));        // false
console.log(Boolean("Hello")); // true
console.log(Boolean(null));    // false
console.log(Boolean([]));      // true

//activity 06 : how to use ternary operator in js
//1.Even odd checker
let num = 7;

let result = (num % 2 === 0) ? "Even" : "Odd";

console.log(result);

//2.eligibility to vote
let age = 20;

let message = (age >= 18) ? "Eligible to vote" : "Not eligible to vote";

console.log(message);

//activity 07 : write a code for how to use loops in array(5 types with example)
//1.for loop
let arr = [10, 20, 30, 40, 50];

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}
//2.While loop
let arr2 = [1, 2, 3, 4];
let i = 0;

while (i < arr.length) {
    console.log(arr[i]);
    i++;
}
//3. do-while loop
let arr3 = ["A", "B", "C"];
let j = 0;

do {
    console.log(arr[i]);
    i++;
} while (i < arr.length);

//4.for _of
let arr4 = ["Apple", "Banana", "Mango"];

for (let item of arr) {
    console.log(item);
}

//5.for each
let arr5 = [5, 10, 15];

arr.forEach(function(value) {
    console.log(value);
});

//activity 08 : diff betwn forin and forof loop in js
/*for...in loop

| Feature                | `for...in`       | `for...of`      |
| ---------------------- | ---------------- | --------------- |
| Iterates over          | Keys / Indexes   | Values          |
| Best used for          | Objects          | Arrays, Strings |
| Output                 | Index (key)      | Element value   |
| Works on               | Objects, Arrays  | Iterables       |
| Order guarantee        |  Not guaranteed  | Guaranteed      |
| Recommended for arrays |  No              | Yes             |

 */
// for-in
let arr6 = ["JS", "Python", "Java"];

for (let index in arr) {
    console.log(index, arr[index]);
}
//for-of
let arr7 = ["JS", "Python", "Java"];

for (let value of arr) {
    console.log(value);
}

//activity 09 : how to use map and filter fun in js
//Example 1: Multiply each number by 2
let numbers = [1, 2, 3, 4];

let res = numbers.map(num => num * 2);

console.log(result);   // [2, 4, 6, 8]

//Example 2: Convert names to uppercase
let names = ["ram", "shyam", "sita"];

let upperNames = names.map(name => name.toUpperCase());

console.log(upperNames); // ["RAM", "SHYAM", "SITA"]