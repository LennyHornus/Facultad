let numbers =[22, 33, 54, 66, 72]
console.log(numbers[numbers.length])

let grupoDeAmigos = [ ["Harry", "Ron", "Hermione"], ["Spiderman", "Hulk",
"Ironman"], ["Penélope Glamour", "Pierre Nodoyuna","Patán"] ]
console.log(grupoDeAmigos[1][0])

let str = 'un string cualquiera'
let arrayAleatorio= ["Digital", "House", 'true', "string", "123","false", '54', str ]
console.log(arrayAleatorio[arrayAleatorio.length - 1])

// Colecciones de peliculas y mas

let peliculas = ["star wars", 'totoro', 'rocky', 'pulp fiction', 'la vida es bella']
console.log(peliculas[0]);

// Convertir a mayusculas
function convertirAMayusculas(array){
    array[0] = array[0].toUpperCase()
    array[1] = array[1].toUpperCase()
    array[2] = array[2].toUpperCase()
    array[3] = array[3].toUpperCase()
    array[4] = array[4].toUpperCase()
    return array
}
console.log(convertirAMayusculas(peliculas));

// function mayuscula(array, num) {
//     let peliculasMayus
//     peliculasMayus = (array[num].toUpperCase());
//     return peliculasMayus
//}
// console.log(mayuscula(peliculas, 3));

function pasajeDeElementos(array1, array2) {
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    array1.push(array2.pop().toUpperCase())
    return array1
}


// Partidos Asia Y Europa

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

function compararCalificaciones(array1, array2) {
    let comparaciones = []
    comparaciones[0] = array1[0] === array2[0]
    comparaciones[1] = array1[1] === array2[1]
    comparaciones[2] = array1[2] === array2[2]
    comparaciones[3] = array1[3] === array2[3]
    comparaciones[4] = array1[4] === array2[4]
    comparaciones[5] = array1[5] === array2[5]
    comparaciones[6] = array1[6] === array2[6]
    comparaciones[7] = array1[7] === array2[7]
    comparaciones[8] = array1[8] === array2[8]
    return comparaciones
}

console.log(compararCalificaciones(asiaScores, euroScores));
