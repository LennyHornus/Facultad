// Construccion de objetos literales -----------------------------------------------------------------------------------------------------------------------------
let curso = {
    // propiedad : valor,
    cantidadDeAlumnos : 32,
    docentes : ['Nacho', 'javier'],
    horario : 'de 19 a 21hs',
    // Metodo 
    decirHorario : function () {
        return 'El horario es de' + this.horario
    }
}
console.log('La cantidad de alumnos de este curso es de ' + curso.cantidadDeAlumnos);
console.log(curso.decirHorario());


// Funcion constructora -------------------------------------------------------------------------------------------------------------------------------------------
function Cursos(cantidadDeAlumnos, docentes, horario) {
    this.cantidadDeAlumnos = cantidadDeAlumnos;
    this.docentes = docentes;
    this.horario = horario;
}


let cursoDeProgramacion = new Cursos(24,['Maria', 'Gerardo'], 'de 19 a 21hs');
let cursoDeFutbol = new Cursos(11,['Messi', 'Argentina'], 'LO CANCELASTE BRASIL CAGON');
console.log(cursoDeProgramacion);
console.log(cursoDeFutbol);

// JSON, json.parse() y json.stringify() -------------------------------------------------------------------------------------------------------------------------

let paises = ['argentina', 'hijoDeArgentina', 'chile', 'uruguay'];
let paisesJSON = JSON.stringify(paises);
console.log(paisesJSON);

let paisesOriginales = JSON.parse(paisesJSON);
console.log(paisesOriginales);


let cursoJSON = JSON.stringify(cursoDeProgramacion)
console.log(cursoJSON);

let cursoOriginal = JSON.parse(cursoJSON);
console.log(cursoOriginal);


// 14--------------------------------------------------------------------------------------------------------------------------------------------------------------
// Estan los ejercicios en playground