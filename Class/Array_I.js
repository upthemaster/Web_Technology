// Creating an array using array literal , literal -> fixed hardcoded values
// JavaScript arrays are HETEROGENEOUS → can store multiple data types
let myArr = [0, 2, 5, 4, 6, "sjt"];  

// Printing the entire array
console.log(myArr);  
// BEST PRACTICE: avoid new Array(), prefer []
const myArray = [5, 8, 7, 9];  

// Printing array
console.log(myArray);  
// push() → adds element at END of array
// IMPORTANT: push() RETURNS NEW LENGTH, not the array
console.log(myArray.push(0));  

// Array after push
console.log(myArray);  
// Output: [5, 8, 7, 9, 0]


// unshift() → adds element at START of array
// IMPORTANT: returns new length
console.log(myArray.unshift(10));  
// Output: 6

// shift() → removes FIRST element
// IMPORTANT: must use parentheses () to execute function
myArray.shift(); 

// returns the removed element
console.log(myArray.shift());


// pop() → removes LAST element
// IMPORTANT: pop() DOES NOT accept any argument
myArray.pop();  

// Printing array after shift & pop
console.log(myArray);  
// Output: [5, 8, 7, 9]


// indexOf() → returns index of element
// If element NOT found → returns -1
console.log(myArray.indexOf(3));  
// Output: -1 (because 3 is not present)


// typeof array → always "object" -> (INTERVIEW QUESTION)
console.log(typeof myArray);  
// Output: object


// Correct way to check array
console.log(Array.isArray(myArray));  
// Output: true


// join() → converts array into STRING
// Default separator is comma (,)
const newArr = myArray.join();  

// Printing joined result
console.log(newArr);  
// Output: "5,8,7,9"

// Type of joined value
console.log(typeof newArr);  
// Output: string
