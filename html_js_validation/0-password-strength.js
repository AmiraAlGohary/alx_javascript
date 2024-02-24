const passwordError = document.getElementById('password-error');
const submitError = document.getElementById('submit-error');

function validatePassword() {
    const password = document.getElementById('password').value;

    if(password.length < 8) {
        passwordError.innerHTML = 'Password must be 8 characters or more.';
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