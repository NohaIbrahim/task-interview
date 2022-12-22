// let myrequest= new XMLHttpRequest()
// myrequest.open("post","https://goldblv.com/api/hiring/tasks/register")
// myrequest.send()
// console.log(myrequest)
// fetch("https://goldblv.com/api/hiring/tasks/register").then((result)=>{
//     console.log(result)
// })
document.getElementById("register").onsubmit=function (err){
   
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


fetch("https://goldblv.com/api/hiring/tasks/register",{
    
method:'POST',
body:JSON.stringify({username:username,email:email,password:password,pass:pass,
errnam: "username not valid ",erremail: "email not valid ",errpassword: "password not valid ",errpass:"password  not matched "
}),
headers:{'Content-Type':'application/json; charset=utf-8'}
})
.then(function(res){
    return res.json()
})
.then(function(data){
    console.log(data)
    if (validusername=== false){
   
   nam= document.getElementById("errnum")
   nam.innerHTML=data.errnam
   return false
}else if (validemail===false){
    document.getElementById("erremail").innerHTML=data.erremail
    
    return false

}else if (validpassword===false){
    document.getElementById("errpassword").innerHTML=data.errpassword
    

    return false
    
}else if (pass!=password){
    document.getElementById("errpass").innerHTML=data.errpass

    
    return false
    
}else{
//localStorage.clear()
localStorage.setItem("vaemail",email);

return true
}



  

}).catch(e=>console.e('error:',e))

}
