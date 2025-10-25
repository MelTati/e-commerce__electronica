document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    if (form) {
        form.addEventListener('submit', function(event) {
            let isValid = true;
            const requiredFields = form.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                let hasError = false;
                if (field.type === 'checkbox' && !field.checked) {
                    hasError = true;
                } else if (field.value.trim() === '') {
                    hasError = true;
                }

                if (hasError) {
                    isValid = false;

                } else {

                }
            });

            if (!isValid) {
                event.preventDefault();
                alert('Por favor, completa todos los campos obligatorios.');
            }
        });
    }
});