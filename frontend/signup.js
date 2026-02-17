function register(){
const fullname=document.getElementById("fullname").value;
const email=document.getElementById("email").value;
const password=document.getElementById("password").value;
const confirmPassword=document.getElementById("confirmPassword").value;

if(!fullname || !email || !password || !confirmPassword){
document.getElementById("message").style.color="red";
document.getElementById("message").innerText="All fields are required";
return;
}

if(password!==confirmPassword){
document.getElementById("message").style.color="red";
document.getElementById("message").innerText="Passwords do not match";
return;
}

document.getElementById("message").style.color="green";
document.getElementById("message").innerText="Account Created Successfully";
}
