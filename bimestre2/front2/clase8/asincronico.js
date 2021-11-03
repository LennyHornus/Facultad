// Eventos
// Existen onClick(hay mas) y addEventListener()
// El this represanta el boton donde sucedio el evento
// La sintaxis que usan los eventos comunmente es:
window.onload = function () {}
// Inidico donde quiero que suceda (window), como quiero que suceda (onload) y que quiero que suceda (function)
// La alternativa es:
window.addEventListener("load", function () {});
// Aca el callback va como segundo parametro, siendo el primero el evento que queremos que dispare la funcion
window.preventDefault();
// Cancela el comportamiento por defecto del html

// Otros eventos utiles son:
onclick
ondblclick
onmouseover
onscroll
onkeydown
onload
onsubmit

// Eventos del mouse:
onclick // Cuando clickeo
ondblclick // Cuando hago double click
onmouseover // Cuando pongo el mouse encima
onmouseout // Cuando saco el mouse de la etiqueta

// Ejemplo :
for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener("click", function () {
        this.style.color = "red"
    })
}
// Dentro del callback en el for, tengo que usar el this, ya que botones se refiere a todos,
// y no a cada uno de los que clickeo


// Eventos del teclado:
onkeydown // cuando apreto la tecla
onkeyup // cuando suelto la tecla
onkeypress // esta en desuso, pero se refiere a cuando pasa todo el recorrido de la tecla
// Ejemplo:
window.addEventListener("keypress", function (e) { //la funcion recibe un parametro "e", en referencia al evento que sucede
    console.log(e.key); // nos va a mostrar que tecla tocamos por consola
})