(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    // function to show error message
    function showErrorMessage(input, message) {
        let container = input.previousElementSibling;
        //Check and remove any existing errors
        let error = container.querySelector('.error-message');
        if (error) {
            container.removeChild(error);
        }
        // Add error if the message isn't empty
        if (message) {
            let error = document.createElement('div');
            error.classList.add('error-message');
            error.innerText = message;
            container.appendChild(error);
        }
    }
    // function to validate email
    function validateEmail() {
        let value = emailInput.value;
        if(!value) {
            showErrorMessage(emailInput, 'Email is a required field.');
            return false;
        }
        if (value.indexOf('@') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }
        if (value.indexOf('.') === -1) {
            showErrorMessage(emailInput, 'You must enter a valid email address.');
            return false;
        }
        showErrorMessage(emailInput, null);
        return true;
    }
    // function validate form
    /*function validateForm() {
        let isValidEmail = validateEmail();
        return isValidEmail;
    }*/

    emailInput.addEventListener('input', validateEmail);
})();