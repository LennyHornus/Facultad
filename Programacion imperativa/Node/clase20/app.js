const archivos = require("./lecturaEscritura");

const metodosProfesionales = {
  profesionales: archivos.leerJson("profesionales"),
  //A
  nombreEspecialidad: function () {
    this.profesionales.forEach((profesional) => {
      console.log(`${profesional.nombre} - ${profesional.especialidad}`);
    });
  },
  //B
  honorarioConsulta: function () {
    this.profesionales.forEach((profesional) => {
      profesional.honorarioConsulta =
        (profesional.honorarioConsulta *= 1.05).toFixed(2);
      console.log(`${profesional.nombre} - ${profesional.honorarioConsulta}`);
    });
  },
  //C
  estaDeshabilitado: function () {
    let habilitados = this.profesionales.filter(
      (profesional) => profesional.estaHabilitado === false
    );
    return habilitados;
  },
  //D
  estaHabilitado: function () {
    let deshabilitados = this.profesionales.filter(
      (profesional) => profesional.estaHabilitado === true
    );
    return deshabilitados;
  },
  //E
  arquitectos: function () {
    let arquitectos = this.profesionales.filter(
      (profesional) => profesional.especialidad === "Arquitecto"
    );
    return arquitectos;
  },
  //F
  habilitar : function (id) {
    TERMINALO VAGO
  }
  //G

  //H
};

// console.log(metodosProfesionales.nombreEspecialidad());
// console.log(arrayProfesionales);
// console.log(metodosProfesionales.honorarioConsulta());
// console.log(metodosProfesionales.estaDeshabilitado());
// console.log(metodosProfesionales.estaHabilitado());
// console.log(metodosProfesionales.arquitectos());
console.log();

// let arrayRecaudacion = arrayProfesionales.map(profesional=>{
//     let objProf = {
//         nombre: profesional.nombre,
//         especialidad: profesional.especialidad,
//         recaudacion: profesional.cantidadConsultas * profesional.honorarioConsulta
//     };
//     return objProf;
// });
// console.log(arrayRecaudacion);
