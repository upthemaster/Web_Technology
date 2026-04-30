const a = 10;
//a = 20;  
//here this line creates error beacause we cannot change the value of the const variable
console.log(a);

var b = 10;
let c = 20;
 b = 200;
 c = 300;
console.log(b);
console.log(c);

//this is code to understand the difference between let and var
var x = 20;
let xy = 30;
{
    var x = 26;
    let xy = 15;
    console.log("inside scope")
    console.log(x);
    console.log(xy);
}
    console.log("outside scope");
    console.log(x, xy);
    