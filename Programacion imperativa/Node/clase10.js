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

console.log(peliculas[0].toUpperCase());

// function poneMayusc(array) {
//     let peliculasMayus
//     peliculasMayus = [peliculas[0].toUpperCase, peliculas[1].toUpperCase,peliculas[2].toUpperCase, peliculas[3].toUpperCase, peliculas[4].toUpperCase]
//     return peliculasMayus
// }
// console.log(poneMayusc(peliculas));

function mayuscula(array, num) {
    let peliculasMayus
    peliculasMayus = (array[num].toUpperCase());
    return peliculasMayus
}

console.log(mayuscula(peliculas, 3));

// let array2 = ["melon","banana","apple","orange","lemon"];
// array2 = array2.map(function(x){ return x.toUpperCase(); })
// console.log(array2[4]);