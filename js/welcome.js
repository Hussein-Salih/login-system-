name_from_local = JSON.parse(localStorage.getItem("name"));

document.getElementById("user_name").innerHTML += name_from_local;
