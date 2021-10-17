let peliculas = [
  "star wars",
  "totoro",
  "rocky",
  "pulp fiction",
  "la vida es bella",
];
let peliculasAnimadas = [
  "cars",
  "shrek",
  "toy story",
  "toy story 2",
  "frozen",
];

function pasajeDeElementos(array1, array2) {
  let largoArray = array2.length;
  for (let i = 0; i < largoArray ; i++) {
    array1.push(array2.pop().toUpperCase());
  }
  return array1;
}

console.log(pasajeDeElementos(peliculas, peliculasAnimadas));

function pasaAMayusc(array1) {
    let 
    for (let i = 0; i < array.length; i++) {
        array1.push 
    }
}

function convertirAMayusculas(array){
    array[0] = array[0].toUpperCase()
    array[1] = array[1].toUpperCase()
    array[2] = array[2].toUpperCase()
    array[3] = array[3].toUpperCase()
    array[4] = array[4].toUpperCase()
    return array
    }
