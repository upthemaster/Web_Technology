let arr = [{id:1 ,name: "Utkarsh" , department:"Developer"} ,
    {id:2 , name : "Aditya" , department : "Tester"},
    { id : 3, name : "Pratik" , department : "Coder"},
    { id : 4, name : "Shruti" , department : "designer"}
]

for(i=0;i<arr.length;i++){
    if(arr[i].id == 2){

    }
}

//import express
const express = require('express')

const app = express();
const port = 4000;

app.get('/users',(req,res)=>{
    res.json({
        message : "Users list ",
        data : arr
    })
})

app.get('/users/:id',(req,res)=>{
    const id = req.params.id;
    let user_p = {}
    for(i=0;i<arr.length;i++){
    if(arr[i].id == id){
        user_p = arr[i]
    }
}
    res.json({
        message : "particular user info",
        data : user_p
    })
})

app.listen(port,()=>{
    console.log("Port started at 4000");
})