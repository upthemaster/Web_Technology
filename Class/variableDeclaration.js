// JavaScript has two types of data types:
// 1) Primitive (7 types): Number, String, Boolean, Undefined, Null, Symbol, BigInt
// 2) Non-Primitive (Reference): Object (Array, Function, Date, etc.)

// let, var, const are NOT datatypes, those are keyword which are used while declaring the variables.

// let
//  let allows re-assignment of variable, but not allows re-declaration of variable in same scope.
let x = 73
{
    let x = 10
    x = "Hello" // if we doesn't define the datatype , then js identify/decides the datatype at runtime.
    x = "123n"
    console.log(typeof(x)) // when we declare variable using let keyword, then the variable value is changeable
}; 
console.log(x);

// var
// var allows re-declaration & re-assignment

{
  var yx = 10;
  {
    var y = 100;
    var y = "Hi";
    console.log(y);
    y = true;
    console.log(y);
}
console.log(yx);
}

// const
// const does NOT allow re-assignment
//  when we declare variable with const keyword, then it becomes unchangeable or immutable for the particular block of scope.
// if we declared the variable with const keyword globally, then the variable becomes unchangeable among whole code.

const z = 2005;   // Number
console.log(z);
console.log(typeof(z));
// z = "Hi";      // Error
// z = true;      // Error