function signup() {
  var email = document.getElementById("email").value;
  var name = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  if (email == "" || name == "" || password == "") {
    alert("Please fill all the fields");
  } else {
    var users = [];
    if (localStorage.getItem("users")) {
      var myLocalStorage = JSON.parse(localStorage.getItem("users"));
    } else {
      localStorage.setItem("users", JSON.stringify(users));
    }

    var contacts = [];
    var user = {
      email: email,
      password: password,
      username: name,
      contacts: contacts,
    };
    myLocalStorage.push(user);

    localStorage.setItem("currentUser", JSON.stringify(user));
    localStorage.setItem("users", JSON.stringify(myLocalStorage));
    window.location.href = "contacts.html";
  }
}
