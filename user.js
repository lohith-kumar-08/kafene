function gotohomepage() {
    sessionStorage.setItem('loggedIn', false);
}

var a = new XMLHttpRequest();
a.open("GET", "https://5fc1a1c9cb4d020016fe6b07.mockapi.io/api/v1/users", true);
a.send()
a.onreadystatechange = function () {
  if (a.readyState == 4 && a.status == 200) {
    // Parse the JSON response
    var users = JSON.parse(a.responseText);

    // Insert data into the table
    var table = document.getElementById("ordersTable");

    users.forEach(function (user) {
      var row = table.insertRow(-1);
      var cell1 = row.insertCell(0);
      var cell2 = row.insertCell(1);
      var cell3 = row.insertCell(2);
      var cell4 = row.insertCell(3);
      var cell5 = row.insertCell(4);
      var cell6 = row.insertCell(5);

      cell1.innerHTML = user.id;
      cell1.style.cssText = 'font: 14px Poppins, sans-serif; color: #8c8c8c;';

cell2.innerHTML = '<img src="' + user.profilePic + '" alt="Avatar" width="50">';

cell3.innerHTML = user.fullName;
cell3.style.cssText = 'font: 14px Poppins, sans-serif; color: #8c8c8c;';

cell4.innerHTML = user.dob;

cell5.innerHTML = user.gender;
cell5.style.cssText = 'font: 14px Poppins, sans-serif; color: #8c8c8c;';

cell6.innerHTML = user.currentCity;
cell6.style.cssText = 'font: 14px Poppins, sans-serif; color: #8c8c8c;';

    });
  }
};

function cleardata(){
    var inputElement = document.getElementById("entertext");
    inputElement.value = '';
}

