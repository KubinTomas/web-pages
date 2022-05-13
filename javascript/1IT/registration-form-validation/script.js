function validateRegistrationForm() {
    let formValid = true;
    const nameElement = document.forms['registrationForm']['name'];
    console.log(nameElement);

    if (!isNameInputValid(nameElement)) {
        formValid = false;
    }

    return formValid;
}

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

