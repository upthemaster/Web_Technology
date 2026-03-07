//==========Fetch========
//It is in build js method used to make http request.

//===Syntax===
fetch("https://jsonplaceholder.typicode.com/users")
.then((data) => {
    console.log(data);        // actual user data
})
.catch((err) => {
    console.log(err);
});


//======Activity===========

//1]Where we use promises in company level
//2]Why promises are better than callback
//3]Code for 4 examples of promises - 
//4]Write 1 eg of promises using async-await
//5]What is fetch method?
//6]Write 4 examples of fetch method
//7]Write 1 eg of fetch using async-await
//8]Fetch post to show only first 5 records
//9]create one fetch pro ises manually and resolve after 3 sec and rej after 3 sec.

//=========Interview Questions===========
// 1]What is Promises?
// 2]What are promises state?
// 3]Diff b/w promises and call back
// 4]What does fetch return
// 5]Why do we use data.json
// 6]Diff b/w then/catch and async/await
// 7]What is promise chaining?