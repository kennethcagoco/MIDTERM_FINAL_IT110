

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

    // Email validation using a regular expression
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (!emailRegex.test(emailInput.value)) {
        emailError.textContent = 'Invalid email address';
        emailError.style.color = 'red';
        isValid = false;
    }

    // Password validation (minimum 8 characters)
    if (passwordInput.value.length < 8) {
        passwordError.textContent = 'Password must be at least 8 characters long';
        passwordError.style.color = 'red';
        isValid = false;
    }

    // Confirm Password validation
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.textContent = 'Passwords do not match.';
        isValid = false;
    }

    
    if (isValid) {
        // Redirect to the dashboard page
        window.location.href = 'dashboard.html';
    }

    // Display a success message as an alert
    if (isValid) {
        alert('Registration Successful');
    }


    return isValid;
}