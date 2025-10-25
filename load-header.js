fetch('header.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('header-container').innerHTML = data;
        const hamburgerBtn = document.getElementById('hamburger-btn');
        const mainMenu = document.getElementById('main-menu');
        if (hamburgerBtn && mainMenu) {
            hamburgerBtn.addEventListener('click', () => {
                mainMenu.classList.toggle('header__menu--open');
            });
        }
    })
    .catch(error => console.error('Error al cargar o activar el header:', error));