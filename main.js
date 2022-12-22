document.getElementById("register").onsubmit=function (){
    let username=document.getElementById("username").value
    let email=document.getElementById("email").value
    let password=document.getElementById("password").value
    let pass=document.getElementById("pass").value
let usernamereg=/^([a-zA-Z]{3,13}[0-9]{1,3}[a-zA-Z]{1,13})$/
let emailreg=/^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/
let passwordreg=/^([a-zA-Z0-9]{8,33})$/

let validusername=usernamereg.test(username)
let validemail=emailreg.test(email)
let validpassword=passwordreg.test(password)
if (validusername=== false){
    document.getElementById("errnum").innerHTML="username not valid"
    return false
}
else if (validemail===false){
    document.getElementById("erremail").innerHTML="email not valid"
    
    return false

}
else if (validpassword===false){
    document.getElementById("errpassword").innerHTML="password error"
    

    return false
    
}
else if (pass!=password){
    document.getElementById("errpass").innerHTML="password  not matched"
    
    return false
    
}else{
localStorage.clear()
localStorage.setItem("vaemail",email);

return true
}


}

