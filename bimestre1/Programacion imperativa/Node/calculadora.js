//Suma
const sumar = function (num1, num2) {
    return num1 + num2;
}

let resultadoSuma = sumar(10,5)
console.log(resultadoSuma);

// Resta
const restar = function(num1, num2) {
    return num1 - num2;
}

let resultadoResta = restar(6,3)
console.log(resultadoResta);

//Multiplicacion
const multiplicar = function(num1, num2) {
    return num1 * num2;
}

let resultadoMultiplicacion = multiplicar(1,2)
console.log('multiplicacion :' + resultadoMultiplicacion);

// Division
const dividir = function(num1, num2) {
    return num1 / num2;
}

let resultadoDivision = dividir(100, 4)
console.log('division:' + resultadoDivision);

//Nivel 2
console.log("---------------Testo de operaciones/Calculadora-----------")

console.log(resultadoSuma, resultadoResta, resultadoMultiplicacion, resultadoDivision);
console.log(dividir(10,0));

//Nivel 3
//1
const elevar= function (num) {
    return multiplicar(num, num)
}
console.log(elevar(9));

//2
const promedioDeTresNumeros = function (num1, num2, num3) {
    const res1 = sumar(num1, num2);
    const res2 = sumar(res1, num3);
    const resultadoFinal = dividir(res2, 3);
    return resultadoFinal;
}
console.log(promedioDeTresNumeros(10,20,30));

//3
const calcularPorcentaje = function (num1, num2) {
    return dividir(multiplicar(num1,num2),100) + '%'
}
console.log(calcularPorcentaje(300,15));

//4
const generadorDePorcentaje = function (num1, num2) {
    return dividir(multiplicar(num1,100),num2) + '%'
}
console.log(generadorDePorcentaje(2, 200));

let edad= 18;
let altura= 1.29;
console.log(edad <= 12 && altura <=1.30)
