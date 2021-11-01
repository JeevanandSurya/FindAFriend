users = {
    "emails":["kishore@gmail.com","jeeva@yahoo.com"],
    "passwords":["kishore@1","Jeeva4321"]
}

function getUserDetails(){
    var email = document.getElementById("userMail").value;
    var pwd = document.getElementById("userPwd").value;
    var confirm_pwd = document.getElementById("confirmPwd").value;
    if(users.emails.includes(email) == false){
        window.alert("You Dont have an account!");
    }else{
        pwd = pwd.toString(),confirm_pwd = confirm_pwd.toString();
        if(pwd.localeCompare(confirm_pwd) != 0){
            window.alert("Passwords Do not Match!");
        }else if(users.passwords.includes(pwd) == false){
            window.alert("You Have Entered Wrong Password!");
        }
    }
}