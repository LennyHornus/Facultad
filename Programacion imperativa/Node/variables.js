var nombre = "Lenny";
console.log(nombre);
let numeroPreferido = 3;
numeroPreferido = 34;
console.log(numeroPreferido);

if (true) {
  let numeroPreferido = 15;
  console.log(numeroPreferido);
}

const apellido = "Hornus";
console.log(apellido);

//con dos barras puedo escribir libre nice

//Dato del tipo number
let edad = 33;
console.log(edad);
//Dato del tipo number con decimales
let precio = 150.5;
console.log(precio);
//Dato del tipo string
let nombrePerro = "zoe";
console.log(nombrePerro);
//Dato booleano con valor true
let verdadero = true;
console.log(verdadero);
//Dato booleano con valor false
let falso = false;
console.log(falso);

//Dato del tipo objeto literal
let persona = {
  nombre: "Nacho",
  edad: 33,
};
console.log(persona);

//Dato del tipo array

let paises = ["Argentina", "Chile", "Uruguay"];
console.log(paises);

//Modulo, nos da el resto de una division
console.log(11 % 2);

//Incremento, se usa ++
let numero = 6;
console.log(++numero);
//Decremento
let otroNumero = 10;
console.log(--otroNumero);
//Comparacion simple, usamos ==, y nos permite ver si un valor es igual a otro, devuelve un dato booleano
//Comparacion estricta, usamos ===, igual a la simple pero tambien pregunta si el tipo de dato es el mismo
//Desigualdad simple y estricta son iguales a lo previo, usamos != para desigualdad simple, y !== para desigualdad estricta

//Funciones
function ejemplo() {
  return "hola, soy una función";
}
console.log(ejemplo());

// Funcion expresada

let ejemplo2 = function ejemplo2() {
  return "hola, soy una función expresada";
};
console.log(ejemplo2());

// Arreglamos los parametros

function saludar(nombre, apellido) {
  return "Hola, " + nombre + " " + apellido + "!";
}
console.log(saludar("Lenny", "Hornus"));

// Declarar funciones (estructuras que procesan informacion)

function anterior(a) {
  return a - 1;
}
console.log(anterior(3));

function triple(a) {
  return a * 3;
}
console.log(triple(3));

function anteriorDelTriple(a) {
  return triple(a) - 1;
}
console.log(anteriorDelTriple(3));

// Comparacion //
// Son el + - * /, tambien el % que nos muestra el resto de una division, ++ que incrementa en 1 el numero, y -- que resta 1 al numero//
// Igualdad simple ==, desigualdad simple !=
// Igualdad estricta ===, desigualdad estricta !==
// <, >, =<, >=

// OPERADORES LOGICOS
// && (and), todos los valores deben ser verdaderos para que el resultado sea true
// || (or), con que un valor sea verdadero ya retorna true
// ! (not), niega la condicion, si era verdadero sera falso y viceversa
