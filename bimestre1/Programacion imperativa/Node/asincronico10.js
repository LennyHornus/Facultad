console.log("Vamos boca carajo".length); //muestra la longitud de un string
console.log("Vamos boca carajo".indexOf("boca")); //Si lo que busca indexOf no se encuentra siempre va a devolver -1, siempre devuelve la posicion del primero que encuentre
console.log("Vamos boca carajo".slice(6, 10));
console.log("Vamos boca carajo".trim()); // elimina los caracteres vacios antes y dsp de un valor alfanumerico
console.log("Vamos boca carajo".split(" ")); // convierte un string en un array, y hace que cada palabra estara en una posicion nueva del array
console.log("Vamos river carajo".replace("river", "boca")); // cambia el string indicado, por el que ponemos dsp de la coma

function menciona(texto, palabra) {
  let resultado;
  if (texto.indexOf(palabra) === -1) {
    resultado = false;
  } else resultado = true;
  return resultado;
}

console.log(menciona( "Existen muchos lenguajes de programación y JavaScript es uno de ellos","programación")
); // true
console.log(menciona("Estoy programando", "mundo"));


// const num1 = 1;
// const num2 = 2;
// let mensaje1 = "Por favor ingrese 2 digitos";
// function sumatoria(num1, num2) {
//   if (num1 > 9 && num2 > 9) {
//     return num1 + num2;
//   } else {
//     return mensaje1;
//   }
// }
// console.log(sumatoria(10, 12));

function sumar(num1,num2) {
    let resultado
    if (num1 >= 10 && num2 >= 10) {
        resultado = num1+num2
    }else{
        resultado = 'Por favor ingrese numeros de 2 digitos'
    }
    return resultado
}

console.log(sumar(10,19));
console.log(sumar(9,10));


// Contador de impares

function noParesDeContarImparesHasta(numero){
  let resultado = 0
  for (let i=0; i<= numero; i++){
      if (i%2!=0) {
        resultado += 1
      }else{
        resultado += 0
      }
  }
  return resultado
}
console.log(noParesDeContarImparesHasta(5));


// Se encontro un 5

const jaja = [1, 2, 3, 4 ,6 ,5]

function encontreUn5(numeros) {
  let i = 0
  let respuesta;
  do{
      numeros[i]
      i++
      }while (i<= 5)
          respuesta = "Se encontró un 5!"
  return respuesta
}
console.log(encontreUn5(jaja));


 // Tablas de multiplicar
function tablaDeMultiplicar(numero) {
	let i = 0;
	while (i < 10) {
		console.log(numero + " * " + (i + 1) + " " + "= " + numero * (i + 1));
		i++
	}
}
console.log(tablaDeMultiplicar(10));