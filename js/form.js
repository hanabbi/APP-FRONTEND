(function() {
    emailjs.init("cHxL83fph0Iu-JYcg"); // Your public key from EmailJS
})();

function validateForm() {
    let valid = true;

    // Clear previous errors
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('subjectError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('contactPreferenceError').innerText = '';
    document.getElementById('termsError').innerText = '';

    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
        document.getElementById('nameError').innerText = 'Por favor, ingrese su nombre.';
        valid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    if (email === '') {
        document.getElementById('emailError').innerText = 'Por favor, ingrese su email.';
        valid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').innerText = 'Por favor, ingrese un email válido.';
            valid = false;
        }
    }

    // Validate subject
    const subject = document.getElementById('subject').value;
    if (subject === '') {
        document.getElementById('subjectError').innerText = 'Por favor, seleccione un asunto.';
        valid = false;
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (message === '') {
        document.getElementById('messageError').innerText = 'Por favor, ingrese su mensaje.';
        valid = false;
    }

    // Validate contact preference
    const contactPreference = document.querySelector('input[name="contactPreference"]:checked');
    if (!contactPreference) {
        document.getElementById('contactPreferenceError').innerText = 'Por favor, seleccione una preferencia de contacto.';
        valid = false;
    }

    // Validate terms
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').innerText = 'Debe aceptar los términos y condiciones.';
        valid = false;
    }

    // If valid, send email
    if (valid) {
        var templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Todo Cuero",
            subject: subject,
            message: message
        };

        sendEmail(templateParams);
    }
    return false; // Prevent form submission
}

function sendEmail(templateParams) {
    emailjs.send("service_a2t6uy8", "template_hpodt31", templateParams)
        .then(function(response) {
            console.log("Correo electrónico enviado con éxito:", response);
            alert("¡El correo electrónico ha sido enviado con éxito!");
            document.getElementById("contactForm").reset();
        }, function(error) {
            console.error("Error al enviar el correo electrónico:", error);
            alert("Hubo un error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.");
        });
}(function() {
    emailjs.init("cHxL83fph0Iu-JYcg"); // Your public key from EmailJS
})();

function validateForm() {
    let valid = true;

    // Clear previous errors
    document.getElementById('nameError').innerText = '';
    document.getElementById('emailError').innerText = '';
    document.getElementById('subjectError').innerText = '';
    document.getElementById('messageError').innerText = '';
    document.getElementById('contactPreferenceError').innerText = '';
    document.getElementById('termsError').innerText = '';

    // Validate name
    const name = document.getElementById('name').value;
    if (name === '') {
        document.getElementById('nameError').innerText = 'Por favor, ingrese su nombre.';
        valid = false;
    }

    // Validate email
    const email = document.getElementById('email').value;
    if (email === '') {
        document.getElementById('emailError').innerText = 'Por favor, ingrese su email.';
        valid = false;
    } else {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            document.getElementById('emailError').innerText = 'Por favor, ingrese un email válido.';
            valid = false;
        }
    }

    // Validate subject
    const subject = document.getElementById('subject').value;
    if (subject === '') {
        document.getElementById('subjectError').innerText = 'Por favor, seleccione un asunto.';
        valid = false;
    }

    // Validate message
    const message = document.getElementById('message').value;
    if (message === '') {
        document.getElementById('messageError').innerText = 'Por favor, ingrese su mensaje.';
        valid = false;
    }

    // Validate contact preference
    const contactPreference = document.querySelector('input[name="contactPreference"]:checked');
    if (!contactPreference) {
        document.getElementById('contactPreferenceError').innerText = 'Por favor, seleccione una preferencia de contacto.';
        valid = false;
    }

    // Validate terms
    const terms = document.getElementById('terms').checked;
    if (!terms) {
        document.getElementById('termsError').innerText = 'Debe aceptar los términos y condiciones.';
        valid = false;
    }

    // If valid, send email
    if (valid) {
        var templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Todo Cuero",
            subject: subject,
            message: message
        };

        sendEmail(templateParams);
    }
    return false; // Prevent form submission
}

function sendEmail(templateParams) {
    emailjs.send("service_a2t6uy8", "template_hpodt31", templateParams)
        .then(function(response) {
            console.log("Correo electrónico enviado con éxito:", response);
            alert("¡El correo electrónico ha sido enviado con éxito!");
            document.getElementById("contactForm").reset();
        }, function(error) {
            console.error("Error al enviar el correo electrónico:", error);
            alert("Hubo un error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.");
        });
}