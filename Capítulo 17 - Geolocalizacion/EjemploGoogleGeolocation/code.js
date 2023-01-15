let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

window.initMap = initMap;

/* instalo typescript para la compilacion y el uso de la API
En la consola: npm install -g typescript
Comprobacion: tsc -v

El proyecto DefinitelyTyped es un proyecto de código abierto que mantiene los archivos de declaración de tipo para muchos paquetes, incluido Google Maps...   npm i -D @types/google.maps
Toda la informacion aqui: https://developers.google.com/maps/documentation/javascript/using-typescript?hl=es

Creamos un archivo typescript basico: helloworld.ts
*/