function validateRegistrationForm() {

    const nameElement = document.forms['registrationForm']['name'];

    const invalidName = validateName(nameElement);

    if (invalidName) {
        return false;
    }
}

function validateName(nameElement) {
    let invalid = false;

    const parent = nameElement.parentElement;
    const errorTextElement = parent.querySelector('.error-text');

    parent.classList.remove('error');

    // kontrola validity
    const value = nameElement.value;


    if (value.length <= 2) {
        errorTextElement.innerHTML = "Minimum 3 chars for name!";
        invalid = true;
    }


    if (value.length === 0) {
        errorTextElement.innerHTML = "Name is required!";
        invalid = true;
    }

    if (invalid) {
        parent.classList.add('error');
    }

    return invalid;
}