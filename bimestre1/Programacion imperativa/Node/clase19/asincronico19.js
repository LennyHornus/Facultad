let estudiantes = [
    {nombre: 'John', promedio: 8.5, aprobado: true},
    {nombre: 'Jane', promedio: 7, aprobado: true},
    {nombre: 'June', promedio: 3, aprobado: false},
]

let aprobados = estudiantes.filter(function(estudiante){
    if (estudiante.aprobado === true) {
        return estudiante
    }
});

let desaprobados = estudiantes.filter(function(estudiante){
    if (estudiante.aprobado === false) {
        return estudiante
    }
});

console.log(aprobados);
console.log(desaprobados);

// Con arrow como callback


let aprobados = estudiantes.filter
(estudiante => estudiante.aprobado === true);

let desaprobados = estudiantes.filter
(estudiante => estudiante.aprobado === false);


// Reduce (usa callback)
let vueltas = [5, 8, 12, 3, 22]

let totalVueltas = vueltas.reduce((elemento, acum) => acum + elemento)

console.log(totalVueltas);