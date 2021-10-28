// const contenedor = document.querySelector(".contenedor");
// contenedor.classList.add("contenedorDark")

// const body = document.querySelector("body");
// body.classList.add("dark");

// body.classList.toggle('Nombre de la clase a cambiar');

function toggleModos() {
    // Traigo con el DOM todos los elementos y los guardo en una variable
    const body = document.querySelector("body");
    const h1 = document.querySelector("h1");
    const contenedor = document.querySelector(".contenedor");
    const items = document.querySelectorAll(".item")
    const boton = document.querySelector(".boton");

    // Modifico las variables
    body.classList.toggle("bodyDark");
    h1.classList.toggle("h1Dark");
    contenedor.classList.toggle("contenedorItemDark");
    items.forEach(item => {
    item.classList.toggle("contenedorItemDark");
    item.classList.toggle("letraItemDark");
    });
    boton.classList.toggle("botonDark");
}