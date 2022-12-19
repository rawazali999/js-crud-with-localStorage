function table() {
  let table = `<table class="min-w-full">
    <thead class="bg-white border-b">
    <tr>
      <th scope="col" class="text-lg font-medium text-gray-900 py-4 text-center">
        #
      </th>
      <th scope="col" class="text-lg font-medium text-gray-900 py-4 text-center">
        Name
      </th>
      <th scope="col" class="text-lg font-medium text-gray-900 py-4 text-center">
        Phone No.
      </th>
      <th scope="col" class="text-lg font-medium text-gray-900 py-4 text-center">
        Email
      </th>
      <th scope="col" class="text-lg font-medium text-gray-900 py-4 text-center">
        Edit
      </th>
      <th scope="col" class="text-lg font-medium text-gray-900 py-4 text-center">
        Delete
      </th>
    </tr>
  </thead>
  <tbody>`;
  for (let i = 0; i < currentUserFromLocalStorage.contacts.length; i++) {
    table =
      table +
      `<tr class='border-b'>
      <td class='text-md font-medium text-gray-900 py-4 text-center' >${
        i + 1
      }</td>
      <td class='text-md font-medium text-gray-900 py-4 text-center' >${
        currentUserFromLocalStorage.contacts[i].name
      }</td>
      <td class='text-md font-medium text-gray-900 py-4 text-center'>${
        currentUserFromLocalStorage.contacts[i].phone
      }</td>
      <td class='text-md font-medium text-gray-900 py-4 text-center'>${
        currentUserFromLocalStorage.contacts[i].email
      }</td>
      <td class='text-lg font-medium text-gray-900 py-4 text-center'><button type="button"  class="modal-open bg-blue-500 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded-md" onclick="edit(${i})">Edit</button></td>
      <td class=' text-lg font-medium text-gray-900 py-4 text-center'><button type="button" class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" onclick="deleteData(${i})">Delete</button></td>
    </tr> `;
  }
  table =
    table +
    `</tbody>
    </table>`;
  document.getElementById("table").innerHTML = table;
}

var currentUserFromLocalStorage = JSON.parse(
  localStorage.getItem("currentUser")
);

getData();
table();
function getData() {
  let Data = localStorage.getItem("currentUser");
  if (Data.contacts) {
    currentUserFromLocalStorage = JSON.parse(Data);
  } else {
    setData();
  }
}
function setData() {
  localStorage.setItem(
    "currentUser",
    JSON.stringify(currentUserFromLocalStorage)
  );
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    if (users[i].email == currentUserFromLocalStorage.email) {
      users[i].contacts = currentUserFromLocalStorage.contacts;
    }
  }
  localStorage.setItem("users", JSON.stringify(users));

  //here
}
function save() {
  let name = document.getElementById("name");
  let email = document.getElementById("email");
  let phone = document.getElementById("phone");

  let data = {
    name: name.value,
    email: email.value,
    phone: phone.value,
  };
  currentUserFromLocalStorage.contacts.push(data);
  setData();
  table();
  name.value = "";
  email.value = "";
  phone.value = "";

  // replace new contacts of the current user to the old contacts of the current user in the users array of local storage
  let users = JSON.parse(localStorage.getItem("users"));
  for (let i = 0; i < users.length; i++) {
    console.log(users[i].email);
    console.log(currentUserFromLocalStorage.contacts);
    if (users[i].email == currentUserFromLocalStorage.email) {
      users[i].contacts = currentUserFromLocalStorage.contacts;
    }
  }
  localStorage.setItem("users", JSON.stringify(users));
}
function deleteData(index) {
  var result = confirm("Are you sure to delete this contact?");
  if (result == true) {
    currentUserFromLocalStorage.contacts.splice(index, 1);
    setData();
    table();
  } else {
    return false;
  }
}

function edit(index) {
  toggleModal1();
  document.getElementById("name1").value =
    currentUserFromLocalStorage.contacts[index].name;
  document.getElementById("email1").value =
    currentUserFromLocalStorage.contacts[index].email;
  document.getElementById("phone1").value =
    currentUserFromLocalStorage.contacts[index].phone;

  document.getElementById("update").innerHTML = `<button   
  class="px-4 py-2 bg-blue-500 modal-close1  rounded text-white hover:bg-blue-900 mr-2"
  onclick="update(${index})"
>
  Update
</button>`;
}

function update(index) {
  let newName = document.getElementById("name1").value;
  let newEmail = document.getElementById("email1").value;
  let newPhone = document.getElementById("phone1").value;

  currentUserFromLocalStorage.contacts[index] = {
    name: newName,
    email: newEmail,
    phone: newPhone,
  };
  setData();
  table();
  toggleModal1();
}
