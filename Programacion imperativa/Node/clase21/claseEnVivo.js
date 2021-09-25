let alumnos = ["Vidal","Borrelli","Montes","Cejas","Brugna","Gonzalez"];


// Ordenar alfabeticamente ----------------------------------------------------------
const ordenarAlfabeticamente = (array) => array.sort(); // .sort ordena alfabeticamente
console.log('ORDENAR ALFABETICAMENTE -----------------------------------------------');
console.log(ordenarAlfabeticamente(alumnos));


// Buscar ----------------------------------------------------------------------------
const buscar = (array, string) => array.find(elemento => elemento === string); // .find necesita de un callback, que en este caso es lo que esta entre parentesis
console.log('BUSCAR -----------------------------------------------------------------');
console.log(buscar(alumnos, 'Vidal'));
console.log(buscar(alumnos, 'ASDA'));


//Borrar alumno con function ----------------------------------------------------------
function borrarAlumno(array, nombreAlumno) {
    const indiceAlumno = array.indexOf(nombreAlumno);
    if (indiceAlumno >= 0) {
        array.splice(indiceAlumno, 1)
    }
    return array
};
console.log('ELIMINAR CON FUNCTION ----------------------------------------------------');
console.log(alumnos);
console.log(borrarAlumno(alumnos, 'Ce'));


//Borrar con ARROW ----------------------------------------------------------------------
const borrarAlumnoArrow = (array, nombreAlumno) =>{
    const indiceAlumno = array.indexOf(nombreAlumno)
    if (indiceAlumno >= 0) {
        array.splice(indiceAlumno, 1)
    }
    return array
}
console.log('ELIMINAR CON ARROW ---------------------------------------------------------');
console.log(alumnos);
console.log(borrarAlumnoArrow(alumnos, 'Cejas'));


// Dividir array en 2-------------------------------------------------------------------------
function dividirAlumnos(array) {
    const lengthFirstArray = array.length / 2;
    const firstArray = array.slice(0, lengthFirstArray);
    const secondArray = array.slice(lengthFirstArray);
    return {firstArray, secondArray};
}
console.log('Dividir array en 2 -----------------------------------------------------------');
console.log(dividirAlumnos(alumnos));


// Dividir array en con 2 arrow -----------------------------------------------------------
const dividirAlumnosArrow = array => {
    const lengthFirstArray = array.length / 2;
    const firstArray = array.slice(0, lengthFirstArray);
    const secondArray = array.slice(lengthFirstArray);
    return {firstArray, secondArray};
}
console.log('Dividir Array en 2 con Arrow ------------------------------------------------');
console.log(dividirAlumnosArrow(alumnos));