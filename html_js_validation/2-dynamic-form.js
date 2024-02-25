// Function to generate input fields dynamically
function generateInputFields(numFields) {
    const inputContainer = document.getElementById('inputContainer');
    inputContainer.innerHTML = ''; // Clear previous content

    for (let i = 1; i <= numFields; i++) {
        const inputField = document.createElement('input');
        inputField.type = 'text';
        inputField.name = 'field' + i;
        inputField.placeholder = 'Field ' + i;
        inputContainer.appendChild(inputField);
    }
}

// Event listener for dropdown menu to generate input fields dynamically
document.getElementById('numFields').addEventListener('change', function() {
    const selectedValue = parseInt(this.value);
    generateInputFields(selectedValue);
});

// Function to validate the form before submission
function validateForm(event) {
    const inputs = document.querySelectorAll('#inputContainer input[type="text"]');
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].value.trim() === '') {
            alert('Please fill in all fields');
            event.preventDefault(); // Prevent form submission
            return;
        }
    }
}

// Event listener for form submission to validate the form
document.getElementById('dynamicForm').addEventListener('submit', validateForm);
