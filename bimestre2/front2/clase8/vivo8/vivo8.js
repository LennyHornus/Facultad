const titulo = document.querySelector("h1");

titulo.onclick = function () {
    console.log("onclick");  // El principal problema de hacerlo de esta manera es que sobreescribo el mismo evento
}  

titulo.addEventListener("click", function () {
    console.log("addEvent Listener"); // En cambio con el addEventListener logro sumarlo, sin modificar nada
});


const conteo = document.querySelector("#conteo");

conteo.addEventListener("click", function () {
    console.log("tranqui que clickeaste");
    setTimeout(function () {
        alert("Pasaron 10 segundos")
    }, 10000) // Se expresa en milisegundos
})

const cronometro = document.querySelector("#cronometro");

let segundos = 0; // Idealmente los intervalos se guardan en una variable
cronometro.addEventListener("click", function () {
    setInterval(function () {
        segundos++
        console.log(segundos);
    }, 1000) // Tambien lleva como parametros un callback y una medidad de tiempo
})

const clear = document.querySelector("#clear");

clear.addEventListener("click", function () {
    clearInterval(segundos)
})