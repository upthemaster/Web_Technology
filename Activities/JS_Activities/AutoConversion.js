//when to operands are of different type then js directly convert it into suitable datatype
console.log(5 + null); //null converted to number - 5 + 0 = 5
console.log("5" + null); //null converted to string because + acts as a string concatenation - 5null
console.log(5 + "null"); // 5null
console.log("5" + 2) //2 converted to string - 52
console.log("5" + 2 + 2); //522
console.log(1 + 2 + "5"); // 35 - 5 converted to string and addition of 1 + 2
console.log("5" - 2); //3 because here operator is - so 5 converted to number 
console.log("5" * 2); //10 because here operator is * so 5 is converted to number

//when the operator is + and any one operand is string then only all the operands are converted to string because + acts as the string concatenation
//when there are other operators like * , - , / then the operands are converted to number (not to string)

//+ --> String concatenation if any operand is a string
//-, *, / --> Always convert operands to numbers

console.log();
console.log("type conversion of boolean : ");
console.log(true); //prints true
console.log(+ true); //true = 1 
//+ before value is a unary plus operator
//unary + converts its operands into number so true converted to 1 , therefore output is : 1
console.log(+ " "); // " " = 0
// + converts " " into number so " " = 0, therefore output is 0
console.log(+ "abcd"); //abcd is string cannot converted to number -- conversion fails