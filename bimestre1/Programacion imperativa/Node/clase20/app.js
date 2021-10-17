const archivos = require("./lecturaEscritura");
const arrayProfesionales = archivos.leerJson("profesionales");

// Mesa 20 ----------------------------------------------------------------------------------
// Esta clase trabajamos con slice, splice, sort, find
// A
let primeros5Profesionales = arrayProfesionales.slice(0,5);
console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
console.log(primeros5Profesionales);

// B
const nuevoProfesional = {
    identificador: 250,
    estaHabilitado: true,
    honorarioConsulta: 8000,
    edad: 52,
    nombre: 'Linus Torvalds',
    especialidad: 'Junior Developer',
    cantidadConsultas: 48,
    puntuacion: 50
}

arrayProfesionales.splice(arrayProfesionales.findIndex(item => item.identificador === 14),1, nuevoProfesional);
console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
console.log(arrayProfesionales);

// C
arrayProfesionales.sort((a,b) => a.honorarioConsulta - b.honorarioConsulta);
console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
console.log(arrayProfesionales);

// D
let profesionalId15 = arrayProfesionales.find(item => item.identificador === 15);
console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
console.log(profesionalId15);