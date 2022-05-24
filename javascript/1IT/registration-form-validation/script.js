function validateRegistrationForm() {
    let formValid = true;
    const nameElement = document.forms['registrationForm']['name'];
    const emailElement = document.forms['registrationForm']['email'];
    console.log(nameElement);

    if (!isNameInputValid(nameElement)) {
        formValid = false;
    }

    if (!isEmailInputValid(emailElement)) {
        formValid = false;
    }

    return formValid;
}



function isEmailInputValid(emailElement) {
    let valid = true;

    const parentElement = emailElement.parentElement;
    const errorTextElement = parentElement.querySelector('.error-text');

    const value = emailElement.value;
    parentElement.classList.remove('error');

    if (!validateEmail(value)) {
        valid = false;
        errorTextElement.innerHTML = 'Invalid email';
    }

    if (!valid) {
        parentElement.classList.add('error');
    }

    return valid;
}

function validateEmail(email) {

    return String(email)
        .toLowerCase()
        .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        );
};

function isNameInputValid(nameElement) {
    let valid = true;

    const parentElement = nameElement.parentElement;
    const errorTextElement = parentElement.querySelector('.error-text');

    const value = nameElement.value;
    parentElement.classList.remove('error');

    if (value.length <= 3) {
        valid = false;
        errorTextElement.innerHTML = 'Name has to be at least 3 characters long!';
    }

    if (value.length === 0) {
        valid = false;
        errorTextElement.innerHTML = 'Field is required!';
    }

    if (!valid) {
        parentElement.classList.add('error');
    }

    return valid;
}

