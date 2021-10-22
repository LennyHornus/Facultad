
// El alert no retorna ningun dato
alert("CUIADAOOO ");


// El confirm devuelve un booleano true o false
let confirmacion = confirm( "ANASHE??????????");
console.log( confirmacion );


// El prompt puede devolver 3 cosas, null si se selecciona cancelar,
// un string vacio "" si se selecciona aceptar sin escribir nada
// o el string que ingresamos en el texto
let nombreUsuario = prompt("PONE EL NOMBRE CAPO");
console.log( nombreUsuario );


// Ejemplo con funciones combinadas
let tratoPersonalizado = confirm("¿Desea un trato personalizado?")

if(tratoPersonalizado){
    let nombre = prompt("Por favor, introduzca su nombre");
    alert("Le damos la bienvenida a nuestro sitio "+ nombre +". ¡Muchas gracias por visitarnos, estamos a su disposición!");
} else {
    alert("Gracias por conectarse.")
};

// Tambien encontramos objetos que ya traen funciones que podemos usar,
// uno de ellos es Math
// Math.random(), retorna un numero pseudoaleatorio dentro del rango 0 al 1, sin incluir al ultimo
// Math.round(), recibe un numero, idealmente un float, retorna el valor del numero dado redondeando al entero mas cercano
// Math.max(), recibe un conjunto de numeros, retorna el valor mas alto de cero, si recibe un string, devuelve NaN


// parseInt() parsea una cadena de texto y devuelve un numero, a veces, lo importante es que ignora decimales
// let a = parseInt("22");
// let b = parseInt("Ingrese edad");
// let c = parseInt("22"+"150");
// let d = parseInt(22+150)
// let e = parseInt(22+"150");
// let f = parseInt(22.55);
// console.log(a);
// console.log(b);
// console.log(c);
// console.log(d);
// console.log(e);
// console.log(f);

// En cambio parseFloat() que es igual a la anterior pero si retorna decimales que existan
// existe la funcion isNaN(), devuelve true si el dato ingresado es NaN

console.log(parseInt(Math.random()*3+1));