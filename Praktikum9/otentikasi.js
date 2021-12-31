function check(){
    let usernamech="anis21108si";
    let passwordch="hallonisa";

    let usernameinpt = document.getElementById("username").value;
    let passwordinpt = document.getElementById("password").value;

    if (usernameinpt == usernamech & passwordinpt == passwordch){
        console.log("Login Berhasil");
        alert("Login Berhasil!");
        window.location="kursrupiah.html";
        // document.getElementById("hasil").innerHTML="yey";
    }else{
        alert("Login Gagal! Username Atau Password Salah");
        console.log("Username atau Password Salah!");
    }
}

function showpw(){
    var pw = document.getElementById("password");
    if (pw.type == "password"){
        pw.type = "text";
    }else{
        pw.type = "password";
    }
}

function show(){
    alert("Username : anis21108si \n Password : hallonisa");
}