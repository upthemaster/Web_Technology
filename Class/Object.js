// Objects in JS

// There are two types of objects in JavaScript:
// 1) Object Literals
// 2) Singleton Objects (via constructors / Object.create)

// Object = collection of KEY : VALUE pairs

// OBJECT LITERAL

// Creating an object using object literal syntax
let user = {
    name: "Utkarsh",          // string property
    age: 21,                  // number property
    email: "abc@gmail.com",   // string property
    city: "Kolhapur",         // string property
    isLoggedIn: true,          // boolean property
    lastLogin: ["Monday", "Tuesday"], // array as value

    // Key with special name → must be accessed using bracket notation
    "Fullname": "Patil"
};

console.log(user);

// Accessing property using DOT notation
console.log(user.email); 

console.log(user.lastLogin); 

// Accessing key with special name using BRACKET notation
console.log(user["Fullname"]); 

// Updating object property
// IMPORTANT: assignment inside console.log prints updated value
console.log(user.email = "stu@gmail.com"); 
// Output: stu@gmail.com

// Printing object after update
console.log(user);

//  OBJECT FREEZE

// Object.freeze(user); 
// If enabled, no property can be changed after this

// This change will work ONLY if object is NOT frozen
user.email = "xyz";
console.log(user);

// Symbol in Object
const mySymbol = Symbol("My Symbol");

// Using symbol as an object key
let user1 = {
    [mySymbol]: "JS" // symbol key MUST be inside []
};

console.log(user1);

// Accessing symbol value (dot notation will NOT work)
console.log(user1[mySymbol]); 

// typeof object → always "object"
console.log(typeof user1);
// Output: object

const userAccount = {
    email: "abc@gmail.com",

    // Method inside object
    // IMPORTANT: normal function is used so `this` works correctly
    greeting: function () {
        console.log(`The email is ${this.email}`);
    }
};

userAccount.greeting();

// IMPORTANT: greeting() returns NOTHING → undefined
console.log(userAccount.greeting());

// Reassigning method (method overriding)
userAccount.greeting = function () {
    console.log("Greeting function updated");
};

// Calling updated method
userAccount.greeting();
// Output: Greeting function updated

// INTERVIEW NOTES
// Object literal → most common way to create objects
// Dot notation → obj.key
// Bracket notation → obj["key"] (needed for special keys / symbols)
// Symbol keys → unique & not enumerable
// Object.freeze() → makes object immutable
// Methods should use normal function to use `this`
// console.log(obj.method()) → prints method output + undefined