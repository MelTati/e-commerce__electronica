
// Solicito el archivo 'header.html' desde el servidor
fetch('header.html')
    // Cuando la solicitud sea exitosa, convertir la respuesta en texto
    .then(response => response.text())
    // Con el contenido del archivo (HTML) disponible
    .then(data => {
        // Insertar el HTML del header dentro del contenedor con id 'header-container'
        document.getElementById('header-container').innerHTML = data;
    })
    // Capturar cualquier error que ocurra durante la solicitud
    .catch(error =>
        console.error('Error al cargar el header:', error) // Mostrar mensaje de error en consola
    );
