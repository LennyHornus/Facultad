console.log(document.querySelector("h1"));
console.log(document.getElementById("item2"));
console.log(document.getElementsByClassName("item-general"));
console.log(document.querySelectorAll("li"));

let itemLista = document.querySelector("li");
let modificacion = itemLista.innerText = "AAHHHHH"



function sumar(n1) {
    return function (n2) {
        return n1 + n2
    }
};

console.log(sumar(5)(10));

// Esto pasa por el valor de retorno de la funcion sumar, que retorna otra funcion

