// Function to handle form submission
function handleFormSubmit(event) {
    event.preventDefault(); // Prevent default form submission behavior

    // Retrieve form field values
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');

    // Retrieve the values entered in the form fields
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();

    // Validate the form fields
    if (nameValue === '' || emailValue === '') {
        // Display error message if any required field is empty
        alert('Please fill in all required fields');
    } else {
        // Display success message if all validations pass
        alert('Form submitted successfully!');
    }
}

// event listener to the form to listen for the "submit" event
document.getElementById('submitForm').addEventListener('submit', handleFormSubmit);
