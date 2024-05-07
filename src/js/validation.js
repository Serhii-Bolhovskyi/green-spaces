const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const textArea = document.getElementById('message');

form.addEventListener('submit', event => {
    event.preventDefault();
    validateInputs();
});

const setErrror = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');
    errorDisplay.innerText = message;

    if (element.tagName.toLowerCase() === 'textarea') {
        element.classList.add('invalid', 'error-placeholder');
        element.classList.remove('valid');
    }

    inputControl.classList.add('invalid', 'error-placeholder');
    inputControl.classList.remove('valid');
};


const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    if (element.tagName.toLowerCase() === 'textarea') {
        element.classList.add('valid');
        element.classList.remove('invalid', 'error-placeholder');
    }
     else {
        inputControl.classList.add('valid');
        inputControl.classList.remove('invalid', 'error-placeholder');
    }
};

// Function to validate email format
const isValidEmail = email => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(String(email).toLowerCase());
};

const validateInputs = () => {
    const nameValue = name.value.trim();
    const emailValue = email.value.trim();
    const messageValue = textArea.value.trim();

    // validate name input
    if (nameValue === '') {
        setErrror(name, "Wymagane jest imię");
    } else {
        setSuccess(name)
    };

    // validate email
    if (emailValue === '') {
        setErrror(email, "Wymagany jest adres e-mail");
    } else if (!isValidEmail(emailValue)) {
        setErrror(email, "Podaj prawidłowy adres e-mail");
    } else {
        setSuccess(email)
    };

    // validare message area
    if (messageValue === '') {
        setErrror(textArea, "Wiadomość jest wymagana");
    } else {
        setSuccess(textArea)
    };
}