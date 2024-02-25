const emailError = document.getElementById('email-error');
const submitError = document.getElementById('error');


function validateEmail() {
    const email = document.getElementById('email').value;
    emailError.innerHTML = '';
    
    if(email.length == 0) {
        emailError.innerHTML = 'Email is required';
        return false;
    }

    if (!email.match(/^[A-Za-z._-]+@[A-Za-z]+\.[a-z]{2,4}$/)) {
        emailError.innerHTML = 'Email is invalid';
        return false;
    }

    emailError.innerHTML = 'valid';
    return true; 
};

function validateForm() {
    if(!validateEmail()) {
        submitError.style.display = 'block';
        submitError.innerHTML = 'Please enter a valid email address.';
        setTimeout(function(){submitError.style.display = 'none';},3000);
        return false;
    }
};

