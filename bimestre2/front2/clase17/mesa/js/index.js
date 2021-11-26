// Aquí realizamos la consulta de la promesa, esperando su respuesta asíncrona
fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then((data) => {
        //manipulamos la respuesta
        renderizarDatosUsuario(data.results[0]);
});

function renderizarDatosUsuario(datos) {
    /* -------------------------------- CONSIGNA 1 -------------------------------- */
    // Aquí deben desarrollar una función que muestre en pantalla:
    // la foto, el nombre completo del usuario y su email.
    // Esto debe estar basado en la info que nos llega desde la API e insertarse en el HTML.
    const contenedor = document.querySelector('.tarjeta');
    contenedor.innerHTML = `<img src="${datos.picture.large}" alt="Foto de Perfil" class='foto'>
        <h2>${datos.name.first} ${datos.name.last}</h2>
        <p>${datos.email}</p>`
};

/* --------------------------- CONSIGNA 2 (extra) --------------------------- */
// Aqui pueden ir por el punto extra de utilizar el boton que se encuentra comentado en el HTML
// Pueden descomentar el código del index.html y usar ese boton para ejecutar un nuevo pedido a la API, sin necesidad de recargar la página.
// Es criterio del equipo QUÉ bloque del código debe contenerse dentro de una función para poder ser ejecutada cada vez que se escuche un click.
const btn = document.querySelector('.btnContainer');
btn.addEventListener('click', ()=>{
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then((data) => {
        renderizarDatosUsuario(data.results[0]);
    });
})