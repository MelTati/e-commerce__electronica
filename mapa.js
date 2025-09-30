document.addEventListener('DOMContentLoaded', function () {
    const latitud = 16.759278;
    const longitud = -93.172444;

    const map = L.map('map').setView([latitud, longitud], 17);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);

    const marker = L.marker([latitud, longitud]).addTo(map);

    // Popup con logo de la empresa
    marker.bindPopup(`
        <div style="text-align:center;">
            <img src="img/logo.png" alt="Logo Smart Point" style="width:80px; height:auto; margin-bottom:5px;">
            <br>
            <b>Smart Point</b><br>
            Tuxtla Gutiérrez, Chiapas
        </div>
    `).openPopup();
});
