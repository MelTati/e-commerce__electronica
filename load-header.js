fetch('header.html')
    .then(response => response.text())
    .then(data => {
        // Paso 1: Inserta el HTML del header en el contenedor
        document.getElementById('header-container').innerHTML = data;

        // Paso 2: DESPUÉS de insertar el HTML, busca los elementos del menú
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mainMenu = document.getElementById('main-menu');

        // Paso 3: Añade el evento de 'click' para mostrar/ocultar el menú
        if (hamburgerBtn && mainMenu) {
            hamburgerBtn.addEventListener('click', () => {
                mainMenu.classList.toggle('header__menu--open');
            });
        }
    })
    .catch(error =>
        console.error('Error al cargar o activar el header:', error)
    );