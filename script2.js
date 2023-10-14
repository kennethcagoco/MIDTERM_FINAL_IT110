function login() {
    // Get form elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const loginError = document.getElementById('login-error');

    // Reset error message
    loginError.style.display = 'none';

    // Get username and password values
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    // Simulated user data for demonstration
    const validEmail = 'user@example.com';
    const validPassword = 'root';

    try {
        // Check if entered credentials match the simulated data
        if (email === validEmail && password === validPassword) {
            // Redirect to a dashboard or home page (simulated)
            window.location.href = 'landingpage.html';
            return false; // Prevent form submission
        } else {
            throw new Error('Invalid email or password.');
        }
    } catch (error) {
        // Display an error message
        loginError.textContent = error.message;
        loginError.style.display = 'block';
        return false; // Prevent form submission
    }
}









function registerForm() {
    // Get form elements
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const confirmPasswordError = document.getElementById('confirmPassword-error');
    const registrationSuccessMessage = document.getElementById('registration-success');
    
    // Reset error messages
    emailError.textContent = '';
    passwordError.textContent = '';
    confirmPasswordError.textContent = '';

    // Perform validation
    let isValid = true;

    try {
        // Email validation using a regular expression
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        if (!emailRegex.test(emailInput.value)) {
            throw new Error('Invalid email address');
        }

        // Password validation (minimum 8 characters)
        if (passwordInput.value.length < 8) {
            throw new Error('Password must be at least 8 characters long');
        }

        // Confirm Password validation
        if (passwordInput.value !== confirmPasswordInput.value) {
            throw new Error('Passwords do not match');
        }
    } catch (error) {
        // Handle validation errors
        emailError.textContent = error.message;
        emailError.style.color = 'red';
        isValid = false;
    }

    if (isValid) {
        // Redirect to the dashboard page
        window.location.href = 'landingpage.html';

        // Display a success message as an alert
        alert('Registration Successful');
    }

    return isValid;
}
