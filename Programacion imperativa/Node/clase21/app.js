const jsonHelper = require("./lecturaEscritura.js");

const departamentos = jsonHelper.leerJson("departamentos");

const inmboliaria = {
  departamentos : departamentos,
  listarDepartamentos: function (array) {
    array.forEach((element) => {
      console.log(
        `id: ${element.id}. precio $ ${element.precioAlquiler}. Esta ${
          element.disponible ? "disponible" : "ocupado"
        }. ${element.ambientes} ambientes \n`
      );
    });
  },
  buscarPorId: function (id) {
    const encontrado = this.departamentos.filter((element) => {
      return element.id === id;
    });

    return encontrado;
  },
  departamentosNoDisponibles: function () {
    const encontrado = this.departamentos.filter((element) => {
      return element.disponible === false;
    });
    return encontrado;
  },

  departamentosDisponibles: function () {
    const encontrados = this.departamentos.filter((element) => {
      return element.disponible === true;
    });

    return encontrados;
  },

  filtrarPorAmbientes: function (ambientes) {
    const encontrados = this.departamentos.filter((element) => {
      return element.ambientes >= ambientes;
    });
    return encontrados;
  },

  filtrarPorPrecio: function (precio) {
    const disponibles = this.departamentosDisponibles();
    const filtradosPorPrecio = disponibles.filter((element) => {
      return element.precioAlquiler <= precio;
    });
    return filtradosPorPrecio;
  },

  rebajarPrecioAlquiler: function (descuento) {
    const disponibles = this.departamentosDisponibles();
    this.departamentos.forEach((element) => {
      disponibles.forEach((elemento) => {
        if (element == elemento) {
          element.precioAlquiler -= element.precioAlquiler * (descuento / 100);
        }
      });
    });
    jsonHelper.escribirJson("departamentos", this.departamentos);
    return disponibles;
  },

  calcularRecaudación: function () {
    const noDisponibles = this.departamentosNoDisponibles();
    let recaudacion = 0;
    noDisponibles.forEach((element) => {
      recaudacion += element.precioAlquiler;
    });
    return recaudacion;
  },

  ordenarPorPrecio: function () {
    return this.departamentos.sort((a, b) => {
      if (a.precioAlquiler > b.precioAlquiler) {
        return 1;
      } else {
        return -1;
      }
    });
  },
};

// const { listarDepartamentos } = inmboliaria;
const listarDepartamentos = inmboliaria.listarDepartamentos;
const ld = listarDepartamentos;

console.log("Punto B");
ld(inmboliaria.departamentos);

console.log("Punto C");
const depaPorId = inmboliaria.buscarPorId(4);
ld(depaPorId);

const enCasoDevolverVacio = (callback) => {
  if (!callback[0]) {
    console.log(callback);
  } else {
    listarDepartamentos(callback);
  }
};

console.log("Punto D");
const ocupados = inmboliaria.departamentosNoDisponibles();
enCasoDevolverVacio(ocupados);

console.log("Punto E");
const disponibles = inmboliaria.departamentosDisponibles();
enCasoDevolverVacio(disponibles);

console.log("Punto F");
const porAmbientes = inmboliaria.filtrarPorAmbientes(2);
enCasoDevolverVacio(porAmbientes);

console.log("Punto G");
const porPrecio = inmboliaria.filtrarPorPrecio(30000);
enCasoDevolverVacio(porPrecio);

console.log("Punto H");
const rebajados = inmboliaria.rebajarPrecioAlquiler(10);
enCasoDevolverVacio(rebajados);

console.log("Punto I");
const recaudacion = inmboliaria.calcularRecaudación();
console.log(recaudacion);

console.log("Punto J");
const ordenados = inmboliaria.ordenarPorPrecio();
enCasoDevolverVacio(ordenados);
