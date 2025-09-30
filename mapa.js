// Inicializa el mapa en el div con id="map"

const coordinates = [19.432608, -99.133209];

var map = L.map('map').setView(coordinates, 17);

// Añade la capa de mosaicos (tiles) de OpenStreetMap
L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

// Añade un marcador con popup
var marker = L.marker([40.416775, -3.703790]).addTo(map);
marker.bindPopup("<b>¡Madrid!</b><br>Una ciudad increíble.").openPopup();
