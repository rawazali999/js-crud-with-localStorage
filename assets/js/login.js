function login() {
  var email = document.getElementById("email").value; // email of user you want to log in as
  var password = document.getElementById("password").value;

  var userFromLocalStorage = JSON.parse(localStorage.getItem("users"));

  if (userFromLocalStorage) {
    for (var i = 0; i < userFromLocalStorage.length; i++) {
      if (
        userFromLocalStorage[i].email == email &&
        userFromLocalStorage[i].password == password
      ) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify(userFromLocalStorage[i])
        );
        window.location.href = "contacts.html";
      }
    }
  } else {
    alert("Incorrect password or email!");
  }

}

function logout() {
  window.location.href = "index.html";
}
