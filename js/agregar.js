document.getElementById('producto-form').addEventListener('submit', function(event) {
    event.preventDefault();

    /*#escucha el submit*/

    const producto = {
        nombre_prod: document.getElementById('nombre_prod').value,
        descripcion: document.getElementById('descripcion').value,
        precio: document.getElementById('precio').value,
        talla: document.getElementById('talla').value,
        color: document.getElementById('color').value,
        tipo: document.getElementById('tipo').value,
        stock: document.getElementById('stock').value,
        imagen_url: document.getElementById('imagen_url').value
    }; /*#Recopila los datos del formulario*/


    /*Envía los datos al servidor usando la API Fetch*/
    fetch('http://127.0.0.1:5000/productos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(producto)
    })

    /*Maneja la respuesta del servidor*/
    .then(response => response.json())
    .then(data => {
        console.log('Respuesta del servidor:', data);
        alert('Producto agregado correctamente');
        alert(data.message);
    })
    .catch(error => console.error('Error al enviar solicitud:', error));
});
