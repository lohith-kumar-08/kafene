window.onload = function(){
    checkSession();
};



function validateLogin() {
    // Get values from the form
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    if (username.trim() === '' || password.trim() === '') {
        alert('Please Enter the Credentials');
        return;
      }
    // Check if username and password are the same
    if (username === password) {
        alert('Login Successful');
        // Set session status
        setSession(true);
        // Redirect to the orders page (you can replace 'orders.html' with the actual page)
        window.location.href = 'orders.html';
    } else {
        alert('Please enter valid credentials!');
    }
}

function setSession(status) {

    sessionStorage.setItem('loggedIn', status);
}

function checkSession() {
 
    var loggedIn = sessionStorage.getItem('loggedIn');

    if (loggedIn === 'true') {
        
        window.location.href = 'orders.html';
    }
}
