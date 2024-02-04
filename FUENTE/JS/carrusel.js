const carrusel = document.getElementById('carrusel');
// Establece el tiempo de intervalo para el desplazamiento automático (en milisegundos)
const intervalo = 3000; 
let direccion = 1; // 1 para adelante, -1 para atrás

// Función para cambiar automáticamente las imágenes
function carrusel_auto() {
    // Obtén todas las imágenes dentro del carrusel
    const imagenes = carrusel.querySelectorAll('img');
    
    // Obtiene el ancho total del carrusel
    const anchoCarrusel = carrusel.scrollWidth;
    
    // Calcula el ancho de una imagen
    const anchoImagen = imagenes[0].clientWidth;
    
    // Calcula el índice de la siguiente imagen
    let siguienteImagen = carrusel.scrollLeft + (anchoImagen * direccion);

    // Si llega al final del carrusel, cambia la dirección del desplazamiento
    /*
        (anchoCarrusel - carrusel.clientWidth) representa el espacio disponible dentro del carrusel que no se está mostrando actualmente en la pantalla.
    */
    if (siguienteImagen >= (anchoCarrusel - carrusel.clientWidth) || siguienteImagen <= 0) {
        direccion = -direccion;
    }

    // Desplaza automáticamente al siguiente conjunto de imágenes
    carrusel.scrollTo({
        left: siguienteImagen,
        behavior: 'smooth'
    });
}

// Establece el intervalo para cambiar automáticamente las imágenes
setInterval(carrusel_auto, intervalo);

document.addEventListener("DOMContentLoaded", function() {
    const carrusel = document.getElementById('carrusel');
    const imagenes = carrusel.querySelectorAll('.imagenes img');

    function cambiarImagenes() {
        imagenes.forEach(function(imagen) {
            // Guardar la ruta original de la imagen
            const rutaOriginal = imagen.getAttribute('src');

            if (window.innerWidth < 800) {
                // Cambiar la imagen src con la imagen alternativa según la imagen original
                switch (rutaOriginal) {
                    case '/FUENTE/IMG/resident-evil-4.jpg':
                        imagen.setAttribute('src', '/FUENTE/IMG/resident-evil-4-2.jpg');
                        break;
                    case '/FUENTE/IMG/Skulls_and_bones_grande.jpg':
                        imagen.setAttribute('src', '/FUENTE/IMG/Skull_and_bones.jpg');
                        break;
                    case '/FUENTE/IMG/Prince-persia-grande.jpg':
                        imagen.setAttribute('src', '/FUENTE/IMG/Prince-persia.jpg');
                        break;
                    case '/FUENTE/IMG/Starfield-grande.jpg':
                        imagen.setAttribute('src', '/FUENTE/IMG/starfield.jpg');
                        break;
                }
            }

            if (window.innerWidth >= 800) {
                // Cambiar la imagen src con la imagen alternativa según la imagen original
                switch (rutaOriginal) {
                    case '/FUENTE/IMG/resident-evil-4-2.jpg':
                        imagen.setAttribute('src', '/FUENTE/IMG/resident-evil-4.jpg');
                        break;
                    case '/FUENTE/IMG/Skull_and_bones.jpg':
                        imagen.setAttribute('src', '/FUENTE/IMG/Skulls_and_bones_grande.jpg');
                        break;
                    case '/FUENTE/IMG/Prince-persia.jpg':
                        imagen.setAttribute('src', '/FUENTE/IMG/Prince-persia-grande.jpg');
                        break;
                    case '/FUENTE/IMG/starfield.jpg':
                        imagen.setAttribute('src', '/FUENTE/IMG/Starfield-grande.jpg');
                        break;
                }
            }
        });
    }

    cambiarImagenes();

    // Escucha los cambios de tamaño de la ventana y actualiza el carrusel
    window.addEventListener('resize', cambiarImagenes);
});

