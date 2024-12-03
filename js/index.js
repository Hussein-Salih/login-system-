var password_signin = document.getElementById("password_signin");
var email_signin = document.getElementById("email_signin");
var signin = document.getElementById("sign_in");
var clint_list = JSON.parse(localStorage.getItem("vistors_list")) || [];
var msg11 = document.getElementById("msg11");
var msg22 = document.getElementById("msg22");
var msg33 = document.getElementById("msg33");
var welcome = document.getElementById("welcome");

// var user_name = document.getElementById("user_name");

function set_user_name() {
  const found = clint_list.find((user) => user.email === email_signin.value);
  if (found) {
    const name_local = [found.name];
    localStorage.setItem("name", JSON.stringify(name_local));
  }
}
function fun_sign_in() {
  if (!valid_emptyy()) {
    return;
  }
  if (validation()) {
    welcome.setAttribute("href", "html/welcome.html");
    welcome.click();
  }
}

function valid_emptyy() {
  if (password_signin.value === "" || email_signin.value === "") {
    msg33.classList.replace("d-none", "d-block");
    msg11.classList.replace("d-block", "d-none");
    msg22.classList.replace("d-block", "d-none");

    return false;
  } else {
    msg33.classList.replace("d-block", "d-none");
    return true;
  }
}

function validation() {
  const emailValid = validateEmail();
  const passwordValid = validatePassword();
  return emailValid && passwordValid;
}

function validateEmail() {
  const found = clint_list.find((user) => user.email === email_signin.value);

  if (!found) {
    msg22.classList.replace("d-none", "d-block");
    return false;
  }

  if (msg22.classList.contains("d-block")) {
    msg22.classList.replace("d-block", "d-none");
  }
  return true;
}

function validatePassword() {
  const found = clint_list.find((user) => user.email === email_signin.value);

  if (!found) {
    return false;
  }

  if (found.password !== password_signin.value) {
    msg11.classList.replace("d-none", "d-block");
    return false;
  }

  if (msg11.classList.contains("d-block")) {
    msg11.classList.replace("d-block", "d-none");
  }
  return true;
}

signin.addEventListener("click", function (e) {
  e.preventDefault();
  set_user_name();

  fun_sign_in();
});
