document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita el comportamiento por defecto de envío del formulario

    alert('Gracias por ponerte en contacto. Te responderemos pronto.');
    event.target.reset(); // Resetea el formulario después de enviarlo
});