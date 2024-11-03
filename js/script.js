// Function to handle login
function handleLogin() {
    // Get user input
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const role = document.querySelector('input[name="role"]:checked').value; // Assuming roles are selected via radio buttons

    // Placeholder for authentication logic
    // In a real application, you would verify the username and password against a database or API
    const isAuthenticated = authenticateUser(username, password); // Implement this function as needed

    if (isAuthenticated) {
        // Redirect based on role
        switch (role) {
            case 'admin':
                window.location.href = 'https://kunta-pro.github.io/Fine-hart/admin-dashboard.html';
                break;
            case 'teacher':
                window.location.href = 'https://kunta-pro.github.io/Fine-hart/teacher-dashboard.html';
                break;
            case 'student':
                window.location.href = 'https://kunta-pro.github.io/Fine-hart/student-dashboard.html';
                break;
            case 'parent':
                window.location.href = 'https://kunta-pro.github.io/Fine-hart/parent-dashboard.html';
                break;
            default:
                alert('Invalid role selected!');
        }
    } else {
        alert('Login failed! Please check your credentials.');
    }
}

// Example function for user authentication (for demonstration purposes)
function authenticateUser(username, password) {
    // Replace with actual authentication logic
    // This is a simple check for demonstration
    return username === 'testuser' && password === 'testpass'; // Replace with your authentication logic
}

// Event listener for login button
document.getElementById('loginButton').addEventListener('click', handleLogin);
