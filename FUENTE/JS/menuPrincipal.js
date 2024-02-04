let elementosMenu = document.querySelectorAll(".elemento_del_menu");

let cerrarSubmenus = () => {
    elementosMenu.forEach((elemento) => {
        let subMenu = elemento.querySelector(".anidamiento_del_menu");
        if (subMenu && subMenu.classList.contains("visible")) {
            subMenu.classList.remove("visible");
        }
    });
};

elementosMenu.forEach((elemento) => {
    elemento.addEventListener("click", () => {
        let subMenu = elemento.querySelector(".anidamiento_del_menu");
        if (subMenu) {
            subMenu.classList.toggle("visible");
        }
    });
});

window.addEventListener('resize', () => {
    // Si la ventana es menor o igual a 800px, cerrar los submenús abiertos
    if (window.innerWidth <= 800) {
        cerrarSubmenus();
    }
});




(function () {
    const elementosLista = document.querySelectorAll('.elemento_del_menu--mostrar');
    const lista = document.querySelector('.enlaces_del_menu');
    const menu = document.querySelector('.hamburguesa_del_menu');

    // Función para agregar el evento de clic a los elementos de la lista
    const agregarClick = () => {
        elementosLista.forEach(elemento => {
            elemento.addEventListener('click', () => {
                // Obtener el submenú del elemento actual
                let subMenu = elemento.children[1];
                let altura = 0;
                elemento.classList.toggle('elemento_del_menu--activo');

                // Si el submenú no tiene altura (está cerrado)
                if (subMenu.clientHeight === 0) {
                    // Obtener la altura completa del submenú
                    altura = subMenu.scrollHeight;
                }
                // Establecer la altura del submenú para mostrarlo o cerrarlo
                subMenu.style.height = `${altura}px`;
            });
        });
    }

    //Función para eliminar el estilo de altura de todos los elementos de la lista
    const eliminarEstiloAltura = () => {
        elementosLista.forEach(elemento => {
            if (elemento.children[1].getAttribute('style')) {
                // Eliminar el estilo de altura del submenú
                elemento.children[1].removeAttribute('style');
                // Quitar la clase activa del elemento
                elemento.classList.remove('elemento_del_menu--activo');
            }
        });
    }

    // Si la ventana es mayor a 800px, eliminar los estilos de altura y ocultar la lista
    window.addEventListener('resize', () => {
        if (window.innerWidth > 800) {
            eliminarEstiloAltura();
            if (lista.classList.contains('enlaces_del_menu--mostrar'))
                lista.classList.remove('enlaces_del_menu--mostrar');
            console.log("oculto")
        } else {
            console.log("mostrar")
            agregarClick();
        }
    });


    if (window.innerWidth <= 800) {
        agregarClick();
    }

    menu.addEventListener('click', () => {
        // Alternar la clase que muestra u oculta la lista
        lista.classList.toggle('enlaces_del_menu--mostrar');
        // Agregar o quitar transición dependiendo de si se muestra u oculta la lista
        if (lista.classList.contains('enlaces_del_menu--mostrar')) {
            // Agregar transición cuando se muestra el menú
            lista.style.transition = 'transform 0.5s ease';
        } else {
            // Quitar transición cuando se oculta el menú
            lista.style.transition = 'none';
        }
    });

    window.addEventListener('scroll', () => {
        // Si la ventana es menor o igual a 800px y la lista está mostrándose, ocultarla cuando se haga scroll fuera de la lista
        if (window.innerWidth <= 800 && lista.classList.contains('enlaces_del_menu--mostrar')) {
            lista.classList.remove('enlaces_del_menu--mostrar');
            lista.style.transition = 'none';
        }
    });
})();


