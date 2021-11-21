function getDataFromForm(){
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var email = document.getElementById("email").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var dob = document.getElementById("dob").value;
    var pwd = document.getElementById("userPwd").value;
    var confirm_pwd = document.getElementById("confirmPwd").value;

    var split_dob = dob.split("-");

    fname = fname.toString(),lname = lname.toString();

    if(fname == '' || lname == ''){
        window.alert('Name is empty');
        return false;
    }

    if(!(fname.match(/[a-zA-Z]/g)) || !(lname.match(/[a-zA-Z]/g))){
        window.alert('Name must be only alphabets');
        return false;
    }

    if(split_dob[0] > 2003){
        window.alert('You must 18 or older to register');
        return false;
    }

    pwd = pwd.toString(),confirm_pwd = confirm_pwd.toString();
    if(pwd.localeCompare(confirm_pwd) != 0){
        window.alert("Passwords Do not Match!");
        return false;
    }

    if (!(pwd.match(/[a-z]/g) && pwd.match(
        /[A-Z]/g) && pwd.match(
        /[0-9]/g) && pwd.match(
        /[^a-zA-Z\d]/g) && pwd.length >= 8)){
            window.alert("Passwords must be alphanueric with atleast one special character");
            return false;
    }
    
    window.alert('Registerd');
    window.location = 'home.html';
}