
var img = new Image();
img.src = 'report-it-logo.png';
let logo = document.getElementById("main-logo");
logo.append(img);

function show(){
    var password = document.getElementById("password");

    // ========== Checking type of password ===========
    // if(password.type === "password"){
    //   password.type = "text";
    // }
    // else {
    //   password.type = "password";
    // }
  };