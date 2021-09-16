let sumar = (a, b) => {
    return a + b
};

console.log(sumar(2,5));


let saludar = nombre => 'Hola, ' + nombre + '!';

console.log(saludar('Ezequiel'))

function doble (numero){
    return numero * 2;
}

function triple (numero) {
    return numero * 3;
}

function aplicarCallback (numero, funcion){
    return funcion(numero);
}

const appCalculadoraFunction = {
    suma : function (num1, num2) {
        return num1 + num2;
    },
    resta :function (num1, num2) {
        return num1 - num2;
    },
    multiplicacion : function (num1, num2) {
        return num1 * num2
    },
    division : function (num1, num2) {
        return num1 / num2
    },
    calculadora: function (funcion, num1, num2){
        return funcion(num1,num2)
    }
}
console.log(appCalculadoraFunction.calculadora(appCalculadoraFunction.suma, 3, 4));


const appCalculadoraArrow = {
    suma : let = (num1, num2) => num1 + num2,
    resta : let = (num1, num2) => num1 - num2,
    multiplicacion : let = (num1, num2) => num1 * num2,
    division : let = (num1, num2) => num1 / num2,
    calculadora : let = (funcion , num1, num2) => funcion(num1, num2)
}
console.log(appCalculadoraArrow.calculadora(appCalculadoraArrow.division, 10, 10));



function agregarHttp(url) {
    return 'https://' + url
}

function agregarWWW(url) {
    return 'www.' + url
}

function procesar(array , callBack){
    const arrayProcesado = [];
    for (let i = 0; i < array.length; i++) {
        arrayProcesado.push(callBack(array[i]))
    }
    return arrayProcesado
}

console.log(procesar([1,2,3], sumar));

