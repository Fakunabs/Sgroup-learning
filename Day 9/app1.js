
document.getElementById("signin-box").style.display = "none";

let username = document.getElementById("username");
let email = document.getElementById("email");
let password = document.getElementById("password");
let phonenumber = document.getElementById("phonenumber");
let submit = document.getElementById("signup_submit" );
let text = document.getElementById("text");


submit.addEventListener("click", function () {
  // Username
  if (username.value.length) {
    for (let i = 0; i < username.value.length; i++) {
      if (
        username.value[i] == ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
      ) {
        alert("Ten nguoi dung khong duoc co khoang trang hoac so");
        return;
      }
    }
  }

  // Email
  if (validateEmail(email.value) == null) {
    alert("Email khong hop le");
    return;
  }

  // Password
  if (password.value.length < 6) {
     text.innerHTML = "Password is not valid";
    alert("Nhap mat khau hon 6 ky tu");
    return;
  }
 
  if (password.value.length > 6 || validateEmail(email.value) != null || username.value[i] != ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
    localStorage.setItem("username", username.value);
    localStorage.setItem("email", email.value);
    localStorage.setItem("password", password.value);
    // localStorage.clear();
    text.innerHTML = "SIGN UP SUCCESS";
  } else {
    text.innerHTML = "SIGN UP FAIL";
  }
});

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


submit.addEventListener("click", function () {
  if (password.value.length > 6 || validateEmail(email.value) != null || username.value[i] != ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]) {
    document.getElementById("signup-box").style.display = "none";
    document.getElementById("signin-box").style.display = "block";
  }
});

document.getElementById("signin-submit").addEventListener("click", function () {
  document.getElementById("signin-box").style.display = "block";
  document.getElementById("signup-box").style.display = "none";
});


document.getElementById("signup-submit2").addEventListener("click", function () {
  document.getElementById("signup-box").style.display = "block";
  document.getElementById("signin-box").style.display = "none";
});


var signInEmail = document.getElementById("signin-email");
var signInPassword = document.getElementById("signin-password");


document.getElementById("signin-submit2").addEventListener("click", function () {
  if (
    localStorage.getItem("email") == signInEmail.value &&
    localStorage.getItem("password") == signInPassword.value
  ) {
    alert("Login Success");
    window.open("https://sgroupvn.org/");
  } else {
    alert("Login Fail");
  }
});
