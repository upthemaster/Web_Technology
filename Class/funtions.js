//Function Declaration + Function Call
// Function Declaration
function greet() {
    console.log("Hello, this is a function!");
}

// Function Calling (Execution)
greet();


//Function with Parameters
function sayHello(name) {       // Function Declaration with Parameters
    console.log("Hello, " + name + "!");
}
sayHello("Swarupanand");// Function Call with Argument


//Function Returning a Value
function add(a, b) {          // Function Declaration with Parameters
    return a + b;             // Return the sum of a and b
}
let sum = add(5, 10);        // Function Call with Arguments
console.log("Sum:", sum);    // Output the returned value


// Hoisted (you can call it before it is declared).
// Has its own this keyword.
// Classic way of writing functions in JS.
// Best for large, reusable functions.



//Arrow Function
let multiply = (x, y) => {  // Arrow Function Declaration
    return x * y;            // Return the product of x and y
};
let product = multiply(4, 5); // Function Call with Arguments
console.log("Product:", product); // Output the returned value

// NOT hoisted (you must declare it before calling).
// Does NOT have its own this, arguments, or super.
// Shorter and modern way to write functions.
// Perfect for small, one-line functions.