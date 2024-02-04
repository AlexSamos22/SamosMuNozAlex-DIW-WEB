const tarjetas_2 = document.querySelector(".tarjetas_2");
const tamayoPrimeraTarjeta_2 = tarjetas_2.querySelector(".tarjeta_2").offsetWidth;
const flechas_2 = document.querySelectorAll(".flecha_2");

// Añade un evento que hace que las flechas puedan deslizar el carrusel a ixquierda o derecha
flechas_2.forEach(flecha => {
    flecha.addEventListener("click", () => {
        tarjetas_2.scrollLeft += flecha.id == "izquierda" ? -tamayoPrimeraTarjeta_2 : tamayoPrimeraTarjeta_2;
    });
});