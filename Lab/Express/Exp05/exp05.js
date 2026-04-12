/*  -Node js is a run time environment that lets run java script code outside the browser or on server side 
    -built on chromes v8 java engine
    - used to create fast , scalabel web applications 

    EXPRESS:
    express is a minimal and flexible web framework for node js . 
    it helps to handle routes , middleware and http request easily . VIMP : http request,http methods 
    makes backend development fast and simple 

    HTTP REQUEST :
    An HTTP request is a message sent by a client (browser, mobile app, Postman, etc.) to a server asking it to perform some action (like fetching data, saving data, deleting data, etc.).

    HTTP METHODS :
    1. get : to fetch the data from the database .
    2. post : to add or insert new data inside the database.
    3. put : make updations in the existing data inside the database.
    4. delete : delete the records from the database.
    5. patch : PATCH(partially update the resources) . means it will updates only the fields that we had mentioned does not change the rest part . and resources are nothing but the any user, or the row inside the database . 

    VIMP : Difference between PUT and PATCH?
            1.here PUT replaces the whole resource and then make updations where as patch will make updations in current resource.
            2.PUT will sends full object whereas PATCH will send only the changed values.

    why we use express js : simplifies server creation in node js . It offers powerful features like routing , middleware , static file serving , error handling 

    NPM : node package manager . 
    it is a tool to install packages or libraries from the node js ecosystem.
    npm init : used to initialize the npm , it will asks all steps . 
    npm init -y : gives project directly 

    Activity VVIMP : what is package.json , difference between package.json and package-lock.json , diff betweeen dev - dependencies and depedencies . http request,http methods with real time examples 
    package.json : configuaration file it includes all short info related to file 
    package-lock.json : it also includes same but detailed info about file 
*/

//importing express for doing work 
const express = require('express')

//assigning all required data from express to local variable 
const app = express();

//defining port 
const port = 3000;

//printing hello world 
app.get('/hello',(req,res)=>{
    let time = new Date();
    res.json({
        message : "Hello world",
        actual_time : time
    })
    
})

app.listen(port,()=>{
    console.log("app working on 3000 port");
})