function test2(x, y) {
    return x * 2
}

console.log(test2(10))

//1
function pulgadasACm(x) {
    return x * 2.54
}

//2
function stringUrl(nombre) {
    return 'http://www.' + nombre + '.com'
}
console.log(stringUrl('pepito'))

//3
function stringAdmiracion(x) {
    return '¡' + x + '!';
}
console.log(stringAdmiracion('bien ahi'))

//4
function añosPerros(x) {
    return x * 7;
}
console.log(añosPerros(3));

//5
function horaTrabajo(sueldomensual) {
    return sueldomensual / 40
}
console.log(horaTrabajo(7000))

//6
function calculadorIMC(metros, peso) {
    return peso / (metros*metros)
}
console.log(calculadorIMC(1.74, 62))

//ejercicios extra
//1
function convierteMayus(x) {
    return x.toUpperCase()
}
console.log(convierteMayus('hola que tal'))

//2
function tipoDeDato(x) {
    return typeof x
}
console.log(tipoDeDato(3))
console.log(tipoDeDato('hola'))

//3 C= 2PIr , la formula matematica es 2 x Pi x radio
function calcularCircunferencia(radio) {
    return 2 * Math.PI * radio
}
console.log(calcularCircunferencia(10))
