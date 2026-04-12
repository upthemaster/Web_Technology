//==============DOM=================
//Document Object Manipulation
//HTML can create form but it cannot think,js make form smart
//form validation:checking user inputs before sending data to server
//DOM Manipultion
//it means changing html using js
//eg.showing tesxt color,display success message,clear  input fieldss 

function submitButtonClick(){

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9]).+$/;

    let name = document.getElementById("name");
    let email = document.getElementById("email");
    let pass = document.getElementById("password");

    // Clear previous errors
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("passwordError").innerHTML = "";

    let isValid = true;

    // Name validation
    if(name.value == ""){
        document.getElementById("nameError").innerHTML = "Name should not be blank";
        isValid = false;
    }

    // Email validation
    if(email.value == ""){
        document.getElementById("emailError").innerHTML = "Email should not be blank";
        isValid = false;
    } 
    else if(!emailRegex.test(email.value)){
        document.getElementById("emailError").innerHTML = "Email is not valid";
        isValid = false;
    }

    // Password validation
    if(pass.value == ""){
        document.getElementById("passwordError").innerHTML = "Password should not be blank";
        isValid = false;
    } 
    else if(pass.value.length < 6){
        document.getElementById("passwordError").innerHTML = "Password must be at least 6 characters";
        isValid = false;
    } 
    else if(!passRegex.test(pass.value)){
        document.getElementById("passwordError").innerHTML = "Password must be strong";
        isValid = false;
    }

    return isValid; // VERY IMPORTANT
}
