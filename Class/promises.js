// console.log("Start");
// setTimeout(() =>{
//     console.log("Inside SetTimeout");
// },2000);
// console.log("End");

//======Promises=======
//A Promia=ses is an object that represent future result of an asyn opertaions.
//Promises has 3 states 1]Pending  2]Resolve(Success)  3]Reject(Error)

//====Syntax=====
let myPromise = new Promise((res,rej) =>{
    let success = true;
    if(success){
        res("data fetched");
    }
    else{
        rej("Error while fetching data");
    }
});

myPromise.then((res)=>{          //.then is used to return success.
    console.log(res);
    
}).catch((err)=>{
    console.log(err);           //.catch is used to catch error.
    
});