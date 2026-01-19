// JavaScript has two types of data types:
// 1) Primitive (7 types): Number, String, Boolean, Undefined, Null, Symbol, BigInt
// 2) Non-Primitive (Reference): Object (Array, Function, Date, etc.)

let a = Symbol('73');
console.log(a);
let id = 123
console.log(typeof(id));
console.log(id === a);

// Array
const array = [1,2,3,4,5];

// Object
let student = {
    myName : "Utkarsh",
    age : 20,
    course : "AIML"
}
console.log(student.myName);
console.log(student.age);
console.log(student.course);

// Function Declaration, definition and calling
function call(){
        console.log("Utkarsh Patil");      
}
call();
