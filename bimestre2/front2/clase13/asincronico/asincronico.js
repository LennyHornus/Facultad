// Eventos de un formulario
focus // nos permite saber cuando un usuario clickeo un input especifico del formulario
blur // nos permite saber cuando un usuario salio del input especifico del formulario
change // nos permite detectar cambios en el valor de un input

// Existen validaciones del lado del cliente que podemos hacer
// en estas lo que queremos hacer es seleccionar el campo a traves del DOM
// por ej:
formulario.addEventListener('submit', function (e) {
        e.preventDefault(); // en esta linea evitamos que se envie el formulario, para corroborar que cumpla con todas las especificaciones que deseamos
        elementoElegido = document.querySelector('lo que quieras seleccionar');
    if (elementoElegido.value == '') { // En el if podemos comparar contra cualquier cosa, tambien podriamos ver si isNaN(elementoElegido.value)
                                    // si lo que queremos es corroborar si el valor ingresado es un numero por ejemplo
        alert('El campo elegido debe estar completo');
    } else if (elementoElegido.value.length === 3) {
        alert('Este campo debe ser mayor a 3 caracteres');
    }
})

// Una manera mejor de hacer esto y de no tener que usar los alert es crear en el html un
// <div> con un <ul> de errorres, luego en el js creo un array de errores
const errores = []; // primero empieza vacio
// Luego en el codigo lo que hago es sustituir los alert por errores.push
formulario.addEventListener('submit', function (e) {
    elementoElegido = document.querySelector('lo que quieras seleccionar');
    if (elementoElegido.value == '') { 
        errores.push('El campo elegido debe estar completo');
    } else if (elementoElegido.value.length === 3) {
        errores.push('Este campo debe ser mayor a 3 caracteres');
    }
    if (errores.length > 0) { // Cancelo el envio del formulario recien cuando encuentro errores, no antes
        e.preventDefault();
        const ulErrores = document.querySelectorAll('ulErrores') // Selecciono el ul con el DOM
        for (let i = 0; i < errores.length; i++) { // Creo un for para recorrer el array de errores, y cargo en el <ul> un <li> por cada error
            ulErrores.innerHTML += `<li>${errores[i]}<li>`;
        }
}
}) // De esta manera podemos darle estilos de css a la alerta 


// Objeto location
// Es un objeto que nos da js para trabajar sobre la url
location.href // devuelve todo el url
location.reload(); // recarga la pagina
location.search(); // nos devuelve el query string
// Otra manera de usar mas metodos es:
let query = new URLSearchParams(location.search); // instancio el objeto con el nombre query
if (query.has('search_query')) { // El metodo has nos devuelve un boolean sobre si existe o no en la url lo que ingresamos
    let search = query.get('search_query'); // Si existe le pedimos con el get que nos de su valor
    console.log(search); // Lo imprimimos por consola para ver cual es
};

