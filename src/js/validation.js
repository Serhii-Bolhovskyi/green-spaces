const form = document.getElementById('form');
const name = document.getElementById('name');
const email = document.getElementById('email');
const textArea = document.getElementById('message');
const contactNum = document.getElementById('contact-number')

// Generate value for 'contact number' in order to send email with different number
const num = [0,1, 2, 3, 4, 5, 6, 7, 8, 9];
let generatedNumber = '';

for (let i = 0; i < 6; i++) {
    const randomIndex = Math.floor(Math.random() * num.length);
    generatedNumber += num[randomIndex];
}

contactNum.value = generatedNumber;

// Functionality for send Contact Form to Gmail
(function() {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init({
      publicKey: "_bmW1Pcr-vGZfK2T7",
    });
})();

window.onload = function() {
    form.addEventListener('submit', function(event) {
        event.preventDefault();

        emailjs.sendForm('contact_service', 'contact_form', this)
        .then(() => {
            console.log('SUCCESS!');
        }, (error) => {
            console.log('FAILED...', error);
        });

        validateInputs();
    });
}


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

    if(allInputsAndTextareasAreValid()) {
        setToast()
    }
};

const allInputsAndTextareasAreValid = () => {
    const inputs = document.querySelectorAll('.input-control');
    const textarea = document.querySelector('.text-area');
    
    // Check if all inputs have the class 'valid'
    const allInputsValid = Array.from(inputs).every(input => input.classList.contains('valid'));

    // Check if the textarea has the class 'valid'
    const textareaIsValid = textarea ? textarea.classList.contains('valid') && textarea.value.trim() !== '' : true;
    // Return true if all inputs and the textarea are valid
    return allInputsValid && textareaIsValid;
};

const toast = document.querySelector('.toast');
(closeIcon = document.querySelector(".close")),
(progress = document.querySelector('.progress'));

let timer1, timer2;

function setToast() {
    toast.classList.add('active');
    progress.classList.add('active');

    timer1 = setTimeout(() => {
        toast.classList.remove("active");
    }, 5000);
    timer2 = setTimeout(() => {
        progress.classList.remove("active");
    }, 5300);
}

closeIcon.addEventListener("click", () => {
    toast.classList.remove("active");
  
    setTimeout(() => {
      progress.classList.remove("active");
    }, 300);
  
    clearTimeout(timer1);
    clearTimeout(timer2);
});

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
        setSuccess(name);
    };

    // validate email
    if (emailValue === '') {
        setErrror(email, "Wymagany jest adres e-mail");
    } else if (!isValidEmail(emailValue)) {
        setErrror(email, "Podaj prawidłowy adres e-mail");
    } else {
        setSuccess(email);
    };

    // validare message area
    if (messageValue === '') {
        setErrror(textArea, "Wiadomość jest wymagana");
    } else {
        setSuccess(textArea);
    };
}