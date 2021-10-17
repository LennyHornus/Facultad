const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
// Te proveemos la siguiente plantilla que tiene dos partes:
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Lenny Ramos Hornus";
const tema = "2";

/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const jsonHelper = require('./jsonHelper');

// A
const gestionDePeliculas = {
    // B
    peliculas : jsonHelper.leerJson('peliculas'),
    
    // C
    listarPeliculas : function (array) {
        array.forEach(pelicula => console.log(`${pelicula.titulo}, de ${pelicula.director}. Duración: ${
            pelicula.duracion} minutos, ${pelicula.genero}, ${pelicula.calificacionIMDB} / 10 en IMDB`));
    },
    
    // D
    buscarPorId : function (id) {
        return this.peliculas.find(pelicula => pelicula.id === id)
    },
    
    // E
    peliculasPorGenero : function (genero) {
        return this.peliculas.filter(pelicula => pelicula.genero === genero)
    },
    
    // F
    filtrarPorCalificacion : function (minimo, maximo) {
        return this.peliculas.filter(pelicula => pelicula.calificacionIMDB >= minimo && pelicula.calificacionIMDB <= maximo);
    },
    
    // G
    ordenarPorDuracion : function () {
        return this.peliculas.sort((a, b) => b.duracion - a.duracion);
    },
    
    // H
    duracionPromedio : function () {
        const duracionPromedio = this.peliculas.reduce((acum, pelicula) => acum += pelicula.duracion, 0) / this.peliculas.length;
        console.log('El promedio de duración de las películas es de: '+ duracionPromedio.toFixed(0) +' minutos');
    },
    
    // I
    modificarGeneroPorId : function (id, genero) {
        const pelicula = this.buscarPorId(id);
        if (pelicula) {
            pelicula.genero = genero;
            jsonHelper.escribirJson('peliculas', this.peliculas);
        }
    }
};


/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]); // NO MODIFICAR NADA DE ESTA LINEA

console.log(v, "\n" + oo + " .C. Listar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculas)
console.log(o);

console.log(v, oo + " .D. Buscar");
const buscarPorId = gestionDePeliculas.buscarPorId(3);
gestionDePeliculas.listarPeliculas([buscarPorId]);
console.log(o);

console.log(v, oo + " .E. Filtrar 1");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.peliculasPorGenero('Horror'));
console.log(o);

console.log(v, oo + " .F. Filtrar 2");
const filtrarPuntaje = gestionDePeliculas.filtrarPorCalificacion(6, 8);
gestionDePeliculas.listarPeliculas(filtrarPuntaje);
console.log(o);

console.log(v, oo + " .G. Ordenar");
gestionDePeliculas.listarPeliculas(gestionDePeliculas.ordenarPorDuracion())
console.log(o);

console.log(v, oo + " .H. Duracion");
gestionDePeliculas.duracionPromedio();
console.log(o);

console.log(v, oo + " .I. Modificar Propiedad");
gestionDePeliculas.modificarGeneroPorId(1, 'GENERO CAMBIADO');
const modificado = [gestionDePeliculas.buscarPorId(4)];
gestionDePeliculas.listarPeliculas(modificado);
console.log(o);