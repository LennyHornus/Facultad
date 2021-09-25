const archivos = require("./lecturaEscritura");
const arrayProfesionales = archivos.leerJson("profesionales");

//A
console.log('A ******************************************************************************');
arrayProfesionales.forEach(profesional => {
   console.log(`${profesional.nombre} - ${profesional.especialidad}`)}
);
console.log('B ******************************************************************************');
//B
console.log(arrayProfesionales);
arrayProfesionales.forEach(prof =>{
    prof.honorarioConsulta *= 1.05 
});
console.log(arrayProfesionales);
console.log('C ******************************************************************************');
//C
let profesionalesDeshabilitados =  arrayProfesionales.filter(profesional => profesional.estaHabilitado === false)
console.log(profesionalesDeshabilitados);
console.log('D ******************************************************************************');
//D
let profesionalesHabilitados =  arrayProfesionales.filter(profesional => profesional.estaHabilitado === true)
console.log(profesionalesHabilitados);
console.log('E ******************************************************************************');
//E
let arquitectos =  arrayProfesionales.filter(profesional => profesional.especialidad === 'Arquitecto');
console.table(arquitectos);
console.log('F ******************************************************************************');
//F
profesionalesDeshabilitados.map(profesional => profesional.estaHabilitado = true)
console.table(arrayProfesionales);
console.log('G ******************************************************************************');
//G 
let cantidadTotalConsultas = arrayProfesionales.reduce((acum,profesional)=>{
    return acum + profesional.cantidadConsultas;
},0);
console.log(cantidadTotalConsultas);
console.log('H ******************************************************************************');
//H
let arrayRecaudacion = arrayProfesionales.map(profesional=>{
    let objProf = {
        nombre: profesional.nombre,
        especialidad: profesional.especialidad,
        recaudacion: profesional.cantidadConsultas * profesional.honorarioConsulta
    };
    return objProf;
});
console.log(arrayRecaudacion);

// Mesa 20 ----------------------------------------------------------------------------------
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