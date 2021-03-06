const helper = require('./lecturaEscritura')
const datos = helper.leerJson('profesionales')

const metodos = {
    // A
    imprimeArray : function (array) {
        array.forEach(elemento => {
            console.log(`${elemento.nombre} - ${elemento.especialidad}`);
        })
    },
    aumentaHonorario : function (array, aumento) {
        array.forEach(elemento => elemento.honorarioConsulta *= (1 + aumento/100))
        return array // Este return no se si va porque capaz no quiero que el metodo retorne nada
    },
    profesionalesDeshabilitados : function (array) {
        let deshabilitados = array.filter(elemento => elemento.estaHabilitado === false)
        return deshabilitados
    },
    profesionalesHabilitados : function (array) {
        let habilitados = array.filter(elemento => elemento.estaHabilitado === true)
        return habilitados
    },
    buscarEspecialidad : function (array, especialidad) {
        let resultado = array.filter(elemento => elemento.especialidad === especialidad)
        return resultado
    },
    habilitarTodos : function (array) {
        array.map(elemento => elemento.estaHabilitado = true)
        // return array (Este return creo que no va, porque no pide que mostremos solo que los habilitemos)
    },
    cantidadTotalConsultas : function (array) {
        let total = array.reduce((acum,profesional)=>{return acum + profesional.cantidadConsultas },0);
        return total
    },
    recaudacion : function (array) {
        let arrayRecaudacion = array.map(profesional => {
            let objProf = {
                nombre: profesional.nombre,
                especialidad: profesional.especialidad,
                recaudacion: (profesional.cantidadConsultas * profesional.honorarioConsulta).toFixed(2)
            }
            return objProf
        })
        return arrayRecaudacion
    },
    primeros5Profesionales : function (array) {
        primerosCinco = array.slice(0,5);
        return primerosCinco
    },
    nuevoProfesional : function (array, profesional, id) {
        array.splice(array.findIndex(item => item.identificador === id),1, profesional);
    },
    FALTA TERMINAR
}



// arrayProfesionales.splice(arrayProfesionales.findIndex(item => item.identificador === 14),1, nuevoProfesional);
// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
// console.log(arrayProfesionales);

// // C
// arrayProfesionales.sort((a,b) => a.honorarioConsulta - b.honorarioConsulta);
// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
// console.log(arrayProfesionales);

// // D

// let profesionalId15 = arrayProfesionales.find(item => item.identificador === 15);
// console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
// console.log(profesionalId15);


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
console.log(metodos.nuevoProfesional(datos, nuevoProfesional, 15));