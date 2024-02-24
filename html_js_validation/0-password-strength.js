const passwordError = document.getElementById('password-error');
const submitError = document.getElementById('error');

function validatePassword() {
    const password = document.getElementById('password').value;
    passwordError.innerHTML = '';

    if(password.length < 8) {
        passwordError.innerHTML = 'Password must be 8 characters or more.';
        return false;
    }

    // Check for at least one uppercase letter
    if (!/[A-Z]/.test(password)) {
        passwordError.innerHTML = "Password must contain at least one uppercase letter.";
        return false;
    }

    // Check for at least one lowercase letter
    if (!/[a-z]/.test(password)) {
        passwordError.innerHTML = "Password must contain at least one lowercase letter.";
        return false;
    }

    // Check for at least one numeric digit
    if (!/\d/.test(password)) {
        passwordError.innerHTML = "Password must contain at least one numeric digit.";
        return false;
    }

    // Check for at least one special character
    if (!/[!@#$%^&*]/.test(password)) {
        passwordError.innerHTML = "Password must contain at least one special character.";
        return false;
    }

    passwordError.innerHTML = 'valid';
    return true;
};

function validateForm() {
    if(!validatePassword()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please fix error to submit';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
};
