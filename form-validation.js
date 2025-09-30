document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            // Ejemplo de validación simple (se puede expandir)
            const fullName = document.getElementById('fullName');
            if (fullName.value.trim() === '') {
                isValid = false;
                // Aquí se podría agregar lógica para mostrar un mensaje de error personalizado
                console.error('El nombre es obligatorio.');
            }

            if (!isValid) {
                event.preventDefault(); // Detiene el envío del formulario si no es válido
                alert('Por favor, completa todos los campos obligatorios.');
            }
        });
    }
});