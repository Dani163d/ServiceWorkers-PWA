// cuando se instala el service worker
self.addEventListener('install', e => {
    console.log('Instalado el service worker');

    console.log(e);
});

// activar el service worker
self.addEventListener('activate', e => {
    console.log('service worker activado');

    console.log(e);
});

// evento fetch para descargar archivos estaticos
self.addEventListener('fetch', e => {
    console.log('fetch...', e);
})