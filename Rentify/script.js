// Dummy database to store users
let users = JSON.parse(localStorage.getItem('users')) || [];

// Registration Form Submission
document.getElementById('signup-btn')?.addEventListener('click', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value;
    const lastName = document.getElementById('lastname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const role = document.getElementById('role').value;

    if (email && password && firstName && lastName && role) {
        users.push({ email, password, role });
        localStorage.setItem('users', JSON.stringify(users));
        alert('Registration successful. You can now log in.');
        window.location.href = 'login.html';
    } else {
        alert('Please fill in all fields.');
    }
});

// Login Form Submission
document.getElementById('login-btn')?.addEventListener('click', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        alert('Login successful');
        if (user.role === 'Seller') {
            window.location.href = 'seller_dashboard.html';
        } else if (user.role === 'Buyer') {
            window.location.href = 'buyer_dashboard.html';
        }
    } else {
        alert('Invalid email or password');
    }
});
