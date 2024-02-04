const tarjetas = document.querySelector(".tarjetas");
const tamanoPrimeraTarjeta = tarjetas.querySelector(".tarjeta").offsetWidth;
const flechas = document.querySelectorAll(".flecha");

// Añade un evento que hace que las flechas puedan deslizar el carrusel a ixquierda o derecha
flechas.forEach(flecha => {
    flecha.addEventListener("click", () => {
        // Calcula si el carrusel se mueve hacia la derecha o izquierda
        tarjetas.scrollLeft += flecha.id == "izquierda" ? -tamanoPrimeraTarjeta : tamanoPrimeraTarjeta;
    });
});

