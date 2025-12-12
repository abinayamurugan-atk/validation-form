function handle(event){
    event.preventDefault();

    let first = document.getElementById("fnam").value.trim();
    let last  = document.getElementById("lnam").value.trim();
    let mobile = document.getElementById("mobile").value.trim();
    let mail1 = document.getElementById("mail1").value.trim();
    let mail2 = document.getElementById("mail2").value.trim();
    let pass1 = document.getElementById("pass1").value.trim();
    let pass2 = document.getElementById("pass2").value.trim();

    let gender = document.querySelector("input[name='sex']:checked");

    if(first === "" || last === ""){
        alert("Enter full name");
        return;
    }
    if(first.length < 3 || last.length < 3){
        alert("Name must be at least 3 characters");
        return;
    }
    if(mobile === ""){
        alert("Enter your mobile number");
        return;
    }
    if(mobile.length !== 10){
        alert("Mobile number must be 10 digits");
        return;
    }

    if(mail1 === "" || mail2 === ""){
        alert("Enter your email");
        return;
    }
    if(mail1 !== mail2){
        alert("Emails do not match");
        return;
    }
    if(!mail1.includes("@") || !mail1.includes(".")){
        alert("Invalid email format");
        return;
    }
 
    if(pass1 === "" || pass2 === ""){
        alert("Enter password");
        return;
    }
    if(pass1 !== pass2){
        alert("Passwords do not match");
        return;
    }
    if(!pass1.includes("@") && !pass1.includes("#") && !pass1.includes("$") &&
       !pass1.includes("*") && !pass1.includes("%")){
        alert("Password must contain at least one special character (@,#,$,*,%)");
        return;
    }
    if(!gender){
        alert("Select your gender");
        return;
    }
    alert("Form Submitted Successfully!");
}

