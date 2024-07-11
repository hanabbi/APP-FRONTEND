// Formulario para envío de novedades 
function mostrarMensaje() {
    const email = document.getElementById('email').value;

    if (email.trim() === '') {
        alert('Por favor, ingrese su correo electrónico.');
        return;
    }

    document.getElementById('mensaje').textContent = `¡Gracias por suscribirte, ${email}! Recibirás información de nuestros productos a la brevedad.`;
}

//Formulario de contacto


function validarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var asunto = document.getElementById("asunto").value;
    var mensaje = document.getElementById("mensaje").value;

    if (nombre.trim() == "" || email.trim() == "" || asunto.trim() == "" || mensaje.trim() == "") {
        alert("Por favor, complete todos los campos.");
        return false;
    }

    //Datos del usuario leídos desde el form.

    var templateParams = {
        from_name: nombre,
        from_email: email,
        to_name: "Todo Cuero",
        subject: asunto,
        message: mensaje
    };

    //usa emailjs.send() para envío desde form
    emailjs.send("service_a2t6uy8", "template_hpodt31", templateParams)
        .then(function(response) {
            console.log("Correo electrónico enviado con éxito:", response);
            alert("¡El correo electrónico ha sido enviado con éxito!");
            document.getElementById("formulario").reset();
        }, function(error) {
            console.error("Error al enviar el correo electrónico:", error);
            alert("Hubo un error al enviar el correo electrónico. Por favor, inténtelo de nuevo más tarde.");
        });

    return false; // Evita que el formulario se envíe automáticamente llave publica cHxL83fph0Iu-JYcg
}

//Compra de productos - Galeria de productos.
let bag = [];
let total = 0;

function openModal(title, image, price, description) {
    document.getElementById('modalTitle').innerText = title;
    document.getElementById('modalImage').src = image;
    document.getElementById('modalPrice').innerText = `$${price.toFixed(2)}`;
    document.getElementById('modalDescription').innerText = description;

    const modal = document.getElementById('productModal');
    modal.style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('productModal');
    modal.style.display = 'none';
}

function addToBag() {
    const title = document.getElementById('modalTitle').innerText;
    const priceText = document.getElementById('modalPrice').innerText;
    const price = parseFloat(priceText.replace('$', ''));

    bag.push({ title, price });
    total += price;

    updateBag();
    closeModal();
}

function updateBag() {
    const bagItems = document.getElementById('bagItems');
    bagItems.innerHTML = '';

    bag.forEach((item, index) => {
        const li = document.createElement('li');
        li.innerHTML = `${item.title} - $${item.price.toFixed(2)} <button onclick="removeFromBag(${index})">X</button>`;
        bagItems.appendChild(li);
    });

    document.getElementById('totalPrice').innerText = total.toFixed(2);
}

function removeFromBag(index) {
    total -= bag[index].price;
    bag.splice(index, 1);
    updateBag();
}

function toggleBag() {
    const bag = document.getElementById('bag');
    bag.classList.toggle('hidden');
}

function checkout() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.style.display = 'flex';
}

function closeCheckoutModal() {
    const checkoutModal = document.getElementById('checkoutModal');
    checkoutModal.style.display = 'none';
}

function confirmPurchase(event) {
    event.preventDefault();

    document.getElementById('paymentForm').style.display = 'none';
    document.getElementById('thankYouMessage').style.display = 'block';
}