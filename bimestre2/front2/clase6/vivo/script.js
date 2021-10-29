/* ETAPA 3
- Nodo padre: <div class="contenedor">
- Nodo hijo repetitivo: <div class="tarjeta">
                            <a class="rutaImg"><img class="imagen" alt="imagen-1" id="imagen-1" /></a>
                        </div>
- Explicación: creamos un template literal con el formato del html, y creamos una funcion en el archivo script.js para que el usuario
                determine cuantas imagenes quiere agregar
*/


const total = prompt("Ingrese el total de imagenes que desea agregar");

function agregarEspacioImg() {
    const padre = document.querySelector("div");
    const hijoRepetitivo = `
            <div class="tarjeta">
                <a class="rutaImg"><img class="imagen" alt="imagen-1" id="imagen-1" /></a>
            </div>
`;
    padre.innerHTML += hijoRepetitivo;
}

for (let i = 0; i < total; i++) {
    agregarEspacioImg(); 
};

let imagenes = document.querySelectorAll("img");
let imagenesA = document.querySelectorAll(".rutaImg");

imagenes.forEach(function(element, indice) {
    element.setAttribute("src", prompt("Ingresa la imagen " + (indice + 1)))
    imagenesA.forEach(function (etiquetaA) {
        etiquetaA.setAttribute("href", element.getAttribute("src"));
        etiquetaA.setAttribute("target", "_blank");
    })
});