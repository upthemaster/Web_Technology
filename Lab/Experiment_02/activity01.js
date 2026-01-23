//  array declaration 
const array = [2,5,4,9,8];

// function declaration
function name(){
    console.log("Hey, Utkarsh!");
    
}
name();

// Object Declaration
let myObject = {
    Team : "India",
    Captain : "MS Dhoni",
    age : 43
}
console.log(myObject);
console.log(myObject.age);

// Reverse a number
let num = 12456;
let revnum = 0;

while(num > 0){
    let lastDigit = num % 10;
    revnum = revnum * 10 + lastDigit; 
    num = Math.floor(num/10);
}
console.log(revnum);

// find largest num
let num1 = 100;
let num2 = 173;
let num3 = 50;
if(num1 > num2){
    if(num1 > num3){
        console.log("Largest no is " + num1);
        
    }
    else{
        console.log("Largest no is " + num3);
        
    }
}
else{
    console.log("Largest no is " + num2);
    
}

// Palindrome
let number = 121;
let temp = number;
let revnumber = 0;

while(number > 0){
    let lastDigit = number % 10;
    revnumber = revnumber * 10 + lastDigit; 
    number = Math.floor(number/10);
}
if(temp === revnumber){
    console.log("It is Palindrome.");
    
} else{
    console.log("It is not Palindrome.");
    
}

// Fibonacci Series
let n = 7;
let a = 0;
let b = 1;
console.log(a);
console.log(b);

for(let i=2; i < n; i++){
    let next = a+b;
    console.log(next);
    a=b;
    b=next; 
}

// find even/odd using function
function evenOdd (){
    let num = 73;
    if (num % 2 == 0){
        console.log(`${num} is Even`);
        
    }
    else{
        console.log(`${num} is Odd`);
        
    }
}
evenOdd();

// Sum of Array using Function
function sumOfArray(arr){
    let sum = 0;

    for(let i = 0; i < arr.length; i++){
        sum += arr[i];

    }
    console.log(`Sum of Array is ${sum}`);

}

const arr = [4,5,2,1,3]
sumOfArray(arr);

// find largest element in Array
function findLargest(arr){
    let largest = arr[0];

    for(let i=1; i < arrs.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    console.log(`Largest num is ${largest}`);
    
}
let arrs = [25,32,73,21,20]
findLargest(arrs);

// Non-duplicate number
function singleNum(nums){
    let ans = 0;

    for(let num of nums){
        ans = ans ^ num;
    }
    return ans;
}
let nums = [2, 4, 5, 3, 2, 4, 5, 7, 3];
console.log(singleNum(nums));



// count vowels in string
const vowelCount = new String("Utkarsh Patil");
console.log(vowelCount.length);


