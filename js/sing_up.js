var name_signup = document.getElementById("name_signup");
var email_signup = document.getElementById("email_signup");
var password_signup = document.getElementById("password_signup");
var sign_up = document.getElementById("sign_up");
var vistors_list = [];
var vistor;
var error_msg1 = document.getElementById("msg1");
var error_msg2 = document.getElementById("msg2");
var error_msg3 = document.getElementById("msg3");
var error_msg4 = document.getElementById("msg4");
var error_msg5 = document.getElementById("msg5");

function add() {
  var vistor = {
    name: name_signup.value,
    email: email_signup.value,
    password: password_signup.value,
  };
  if (!valid_empty(vistor)) {
    return;
  }
  if (!valid_local(vistor)) {
    return;
  }
  vistors_list.push(vistor);
  localStorage.setItem("vistors_list", JSON.stringify(vistors_list));
  clear();
}
function clear() {
  name_signup.value = "";
  email_signup.value = "";
  password_signup.value = "";
  error_msg5.classList.replace("d-block", "d-none");
}
function valid_local(x) {
  var found = false;
  for (var i = 0; i < vistors_list.length; ++i) {
    if (x.email === vistors_list[i].email) {
      found = true;
      break;
    }
  }
  if (found === true) {
    //   error_msg1.classList.add("is-invalid");

    error_msg1.classList.replace("d-none", "d-block");
    return false;
  } else if (found === false) {
    if (error_msg1.classList.contains("d-block")) {
      error_msg1.classList.replace("d-block", "d-none");
    }
    return true;
  }
  //   error_msg1.classList.add("is-valid");
}
sign_up.addEventListener("click", function () {
  add();
});

function valid_paasword() {
  var regx = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/;

  if (regx.test(password_signup.value)) {
    // password_signup.classList.add("is-valid");
    // password_signup.classList.remove("is-invalid");

    if (error_msg4.classList.contains("d-block")) {
      error_msg4.classList.replace("d-block", "d-none");
    }
  } else {
    error_msg4.classList.replace("d-none", "d-block");
    // error_msg4.classList.add("is-invalid");
    // error_msg4.classList.remove("is-valid");
  }
}
password_signup.addEventListener("blur", function () {
  valid_paasword();
});
function valid_email() {
  var regx = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (regx.test(email_signup.value)) {
    // email_signup.classList.add("is-valid");
    // email_signup.classList.remove("is-invalid");

    if (error_msg3.classList.contains("d-block")) {
      error_msg3.classList.replace("d-block", "d-none");
    }
  } else {
    error_msg3.classList.replace("d-none", "d-block");
    // error_msg3.classList.add("is-invalid");
    // error_msg3.classList.remove("is-valid");
  }
}
email_signup.addEventListener("blur", function () {
  valid_email();
});
function valid_name() {
  var regx = /^[A-Za-z]+(([',. -][A-Za-z ])?[A-Za-z]*)*$/;
  if (regx.test(name_signup.value)) {
    // name_signup.classList.add("is-valid");
    // name_signup.classList.remove("is-invalid");

    if (error_msg2.classList.contains("d-block")) {
      error_msg2.classList.replace("d-block", "d-none");
    }
  } else {
    error_msg2.classList.replace("d-none", "d-block");
    // error_msg2.classList.add("is-invalid");
    // error_msg2.classList.remove("is-valid");
  }
}
name_signup.addEventListener("blur", function () {
  valid_name();
});
function valid_empty(vistorr) {
  if (vistorr.name == "" || vistorr.email === "" || vistorr.password === "") {
    error_msg5.classList.replace("d-none", "d-block");
    error_msg1.classList.replace("d-block", "d-none");
    error_msg2.classList.replace("d-block", "d-none");
    error_msg3.classList.replace("d-block", "d-none");
    error_msg4.classList.replace("d-block", "d-none");
    return false;
  } else {
    error_msg5.classList.replace("d-block", "d-none");
    return true;
  }
}
