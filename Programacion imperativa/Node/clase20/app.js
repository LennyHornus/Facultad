const archivos = require("./lecturaEscritura");
let arrayProfesionales = archivos.leerJson("profesionales");

const metodosProfesionales = {
  profesionales: arrayProfesionales,
  //A
  nombreEspecialidad : function () {
      this.profesionales.forEach(profesional => {
          console.log(`${profesional.nombre} - ${profesional.especialidad}`);
      });
  },
  //B
  honorarioConsulta : function () {
      this.profesionales.forEach(profesional => {
          profesional.honorarioConsulta = (profesional.honorarioConsulta *= 1.05).toFixed(2)
          console.log(`${profesional.nombre} - ${profesional.honorarioConsulta}`);
      })
  },
  //C
  estaDeshabilitado : function () {
      this.profesionales.map(profesional => {
          !(profesional.estaHabilitado === false)
          console.log(profesional);
      })  NO FUNCA CARITA TRISTE
  }
  //D

  //E

  //F

  //G

  //H
};

console.log(metodosProfesionales.estaDeshabilitado());

// let arrayRecaudacion = arrayProfesionales.map(profesional=>{
//     let objProf = {
//         nombre: profesional.nombre,
//         especialidad: profesional.especialidad,
//         recaudacion: profesional.cantidadConsultas * profesional.honorarioConsulta
//     };
//     return objProf;
// });
// console.log(arrayRecaudacion);

// console.log(metodosProfesionales.nombreEspecialidad());
// console.log(arrayProfesionales);
// console.log(metodosProfesionales.honorarioConsulta());
