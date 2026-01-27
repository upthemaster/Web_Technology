// Object Singleton

// empty object (singleton object)
// Only one instance of this object exists
const obj1 = {};
console.log(obj1); 
// Output: {}


// Adding properties dynamically using bracket notation
obj1["name"] = "abc";
obj1["id"] = 73;

console.log(obj1); 

// Nested Object
const regular = {
    email: "abc@gmail.com",

    // Nested object
    User: {
        fullname: {
            fname: "Utkarsh",
            lname: "Patil"
        }
    }
};

console.log(regular);


// Accessing nested properties
console.log(regular.User.fullname.fname); 

console.log(regular.User.fullname.lname); 


// ---------------- KEY TAKEAWAYS ----------------
// {} creates a singleton object
// Properties can be added after object creation
// Nested objects are accessed using dot notation
// Bracket notation is useful for dynamic keys
