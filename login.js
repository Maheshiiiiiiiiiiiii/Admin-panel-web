document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    //  Check credentials
    if (username === 'user' && password === 'password') {
        // Redirect to the dashboard page
        window.location.href = 'Activity2.html';
    } else {
        alert('Invalid username or password!');
    }
});
