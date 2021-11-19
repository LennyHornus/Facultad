/*
REQUERIMIENTOS
- utilizar el formulario para captar el texto ingresado

- implmentar el evento "submit", utilizarlo para guardar el comentario en un array

- cada vez que se agrega un nuevo comentario renderizarlo en una etiqueta "p"(sacar del html los hardcodeados y hacerlo dinamico)

- constantemente guardar la informacion en localStorage, si se recarga la pagina deberian mantenerse los comentarios
*/

// Selecciono todos los elementos de html y traigo la info del localStorage
const btn = document.querySelector('button');
const comentario = document.querySelector('#comentario');
const espacioComentarios = document.querySelector('.comentarios');
const comentariosCargados = JSON.parse(localStorage.getItem('comentariosCargados'));
const arrayComentarios = []; // Creo el array para cargar los comentarios

if (comentariosCargados) {                          // Si existen comentarios previos
    comentariosCargados.forEach(e => {              // los cargo en el div html con el contenido y formato correspondientes
        espacioComentarios.innerHTML += `<p>${e}</p>`
        arrayComentarios.push(e);                   // Ademas los pusheo al arrayComentarios para que al agregar un nuevo comentario, se adjunte luego de los ya existentes
    })
}

btn.addEventListener('click', (event) => {
    event.preventDefault(); // Paro el envio del formulario
    
    arrayComentarios.push(comentario.value); // Pusheo al array de comentarios el valor del comentario

    espacioComentarios.innerHTML += `<p>${comentario.value}</p>` // Creo espacio en el div del html y cargo el contenido en un p

    localStorage.setItem('comentariosCargados', JSON.stringify(arrayComentarios)); // Cargo el array al localStorage

    comentario.value = ''; // Limpio el campo para que despues de comentar quede vacio de nuevo
});