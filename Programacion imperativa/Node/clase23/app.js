const v = "\x1b[32m%s\x1b[0m"; // NO TOCAR
const o = "*".repeat(80) + "\n"; // NO TOCAR
const oo = "*".repeat(25); // NO TOCAR
/*******************************/
/* Desarrollo de las consignas */
/*******************************/
const jsonHelper = require("./lecturaEscritura");

// A

const carrera = {
  // B

  bicicletas: jsonHelper.leerJson("bicicletas"),

  // C

  bicicletasPorTanda: 4,

  // D

  listarbicicletas: function (arraybicicletas) {
    arraybicicletas.forEach((bici) => {
      console.log(
        `Ciclista: ${bici.ciclista}, marca: ${bici.marca}, rodado: ${
          bici.rodado
        }, peso: ${bici.peso}kg, largo: ${bici.largo}cm, estado: ${
          bici.dopaje ? "inhabilitado" : "habilitado"
        }.`
      );
    });
  },

  // E

  ciclistasHabilitados: function () {
    return this.bicicletas.filter((bici) => bici.dopaje === false);
  },

  // F

  buscarPorId: function (id) {
    return this.bicicletas.find((bici) => bici.id === id);
  },

  // G

  filtrarPorPeso: function (peso) {
    return this.ciclistasHabilitados().filter(bici => bici.peso<= peso)
  },

  // H

  ordenarPorRodado : function () {
    return this.bicicletas.sort((a,b) => a.rodado-b.rodado)
  },

  // I
  
  largoPromedio: function () {
    const promedio = this.bicicletas.reduce((acum,bici) =>{
      return acum = acum + bici.largo;
    }, 0) / this.bicicletas.length;
    return `El largo promedio es ${promedio.toFixed(0)}`;
  },

  // J
  aumentarPeso: function (kg, id) {
    const bici = this.buscarPorId(id);
    if (bici) {
      bici.peso += kg;
      jsonHelper.escribirJson("bicicletas", this.bicicletas);
      console.log("guardado ok");
    } else {
      console.log("no hay bici en ese id," + id);
    }
  },

  // K
  generarTanda : function (rodado, peso) {
      const bicis = this.bicicletas.filter(bici => bici.rodado <= rodado && bici.peso >= peso);
      return bicis.slice(0, this.bicicletasPorTanda);
  },

  // L
  calcularPodio : function (arrayCiclistas) {
      const orden = arrayCiclistas.sort((a, b) => b.puntaje - a.puntaje);
      if (orden.length > 0) {
        console.log(`El ganador es: ${orden[0].ciclista}, con un puntaje de ${orden[0].puntaje}.`)
      }
      else if (orden.length > 1) {
        console.log(`El ganador es: ${orden[0].ciclista}, con un puntaje de ${orden[0].puntaje}.\nEl segundo puesto es para ${
        orden[1].ciclista}, con un puntaje de ${orden[1].puntaje}.`)
      }
      else if (orden.length > 2) {
      console.log(`El ganador es: ${orden[0].ciclista}, con un puntaje de ${orden[0].puntaje
      }.\nEl segundo puesto es para ${orden[1].ciclista}, con un puntaje de ${orden[1].puntaje
      }.\nEl tercer puesto es para ${orden[2].ciclista}, con un puntaje de ${orden[2].puntaje}.`
      )}
      else {
        return orden
      }
  },

  tandaYPodio : function (rodado, peso) {
      const bicis = this.generarTanda(rodado,peso);
      const orden = bicis.sort((a, b) => b.puntaje - a.puntaje);
      if (orden.length > 0) {
        console.log(`El ganador es: ${orden[0].ciclista}, con un puntaje de ${orden[0].puntaje}.`)
      }
      else if (orden.length > 1) {
        console.log(`El ganador es: ${orden[0].ciclista}, con un puntaje de ${orden[0].puntaje}.\nEl segundo puesto es para ${
        orden[1].ciclista}, con un puntaje de ${orden[1].puntaje}.`)
      }
      else{
      console.log(`El ganador es: ${orden[0].ciclista}, con un puntaje de ${orden[0].puntaje
      }.\nEl segundo puesto es para ${orden[1].ciclista}, con un puntaje de ${orden[1].puntaje
      }.\nEl tercer puesto es para ${orden[2].ciclista}, con un puntaje de ${orden[2].puntaje}.`)}
  }
};


/******************************/
/* Ejecución de las consignas */
/******************************/

console.log(v, "\n" + oo + " .D. ");
// Ejecución aquí
carrera.listarbicicletas(carrera.bicicletas);
console.log(o);

console.log(v, oo + " .E.");
// Ejecución aquí
carrera.listarbicicletas(carrera.ciclistasHabilitados());
console.log(o);

console.log(v, oo + " .F.");
// Ejecución aquí
const biciEncontrada = carrera.buscarPorId(11);
if (biciEncontrada) {
  carrera.listarbicicletas([biciEncontrada]);
} else {
  console.log("lo sentimos, no hay bici");
}
console.log(o);

console.log(v, oo + " .G.");
// Ejecución aquí
carrera.listarbicicletas(carrera.filtrarPorPeso(10))
console.log(o);

console.log(v, oo + " .H.");
// Ejecución aquí
carrera.listarbicicletas(carrera.ordenarPorRodado())
console.log(o);

console.log(v, oo + " .I.");
// Ejecución aquí
console.log(carrera.largoPromedio());
console.log(o);

console.log(v, oo + " .J. ");
// Ejecución aquí
carrera.aumentarPeso(1811, 1);
const bici = carrera.buscarPorId(1);
if (bici) {
  carrera.listarbicicletas([bici]);
}
console.log(o);

console.log(v, oo + " .K. ");
// Ejecución aquí
const podio = carrera.generarTanda(26, 8000);
carrera.listarbicicletas(podio);
console.log(o);

console.log(v, oo + " .L. ");
// Ejecución aquí
const genereTanda = carrera.generarTanda(4, 1000)
carrera.calcularPodio(genereTanda);
console.log(o);
// carrera.tandaYPodio(26, 8000)