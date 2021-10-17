const o = "*".repeat(80);

// Arrow Functions-------------------------------------------------------------------------
const pulgadasACm = (num1) => num1 * 2.54;
const convierteAUrl = (link) => 'http://www.' + link + '.com';
const admiracion = (frase) => '¡' + frase + '!';
const edadCanina = (edad) => edad * 7;
const valorHoraTrabajo = (sueldo) => sueldo/40;
const calculadoraIMC = (altura, peso) => (peso / (altura*altura)).toFixed(2);
console.log(calculadoraIMC(1.80, 90));
const convierteAMayus = (string) => string.toUpperCase();
console.log(convierteAMayus('hola que tal'));
const tipoDeDato = (dato) => typeof(dato);
const calcularCircunferencia = (radio) => 2 * Math.PI * radio;
console.log(calcularCircunferencia(10));


// CallBacks-------------------------------------------------------------------------------
const nombres = ['Martin','Homero','Cosme','Steven','Adam'];

function buscarNombre(nombre, callback){
    let resultado = ''
    for (let i = 0; i < nombres.length; i++) {
        const nom = nombres[i];
        if (nom === nombre) {
            resultado = nom;
        }
    }return callback(resultado)
}

function mostrarResultado(str) {
    if (str === '') {
        console.log('Nombre no encontrado')
    }else {
        console.log('El nombre fue encontrado')
    }
}

console.log(o);
buscarNombre('Martin', mostrarResultado);
buscarNombre('mai', mostrarResultado);
// CallBack con arrow -----------------------------------------------------------------------

const mostrarResultado2 = (str) => str === '' ? 'Nombre no encontrado' : 'El nombre fue encontrado';
const contar = nombre => nombre.length;
const buscarNombre2 = (nombre, callback) => {
    let encontrado = '';
    for (let i = 0; i < nombres.length; i++) {
        if (nombres[i] === nombre) {
            encontrado = nombres[i]
        }
    }
    return callback(encontrado)
}

console.log(o);
console.log(buscarNombre2('Martin', contar));
console.log(buscarNombre2('Martin', mostrarResultado2));
console.log(buscarNombre2('alguien', mostrarResultado2));
