/*******************************/
/* Desarrollo de las consignas */
/*******************************/

const helper = require('./helper');

const inmobiliaria = {
    // A
    departamentos : require('./datos'),
    // B
    listarDepartamentos: function (array) {
      for (let i = 0; i < array.length; i++) {
        const dpto = array[i];
        console.log(
          `id: ${dpto.id}, precio $${dpto.precioAlquiler}, está ${
            dpto.disponible ? "Disponible" : "Alquilado"
          }, ${dpto.cantidadHabitacion} ambientes, máximo ${
            dpto.cantidadPersonas
          } personas, ${
            dpto.aceptaMascotas ? "Acepta mascotas" : "No acepta mascotas"
          }, ${dpto.propietarios}` + "\n"
        );
      }
    },
    // C
    departamentosDisponibles: function () {
      const habilitados = [];
      for (let i = 0; i < this.departamentos.length; i++) {
        const dpto = this.departamentos[i];
        if (dpto.disponible) {
          habilitados.push(dpto);
        }
      }
      return habilitados;
    },
    // D
    buscarPorId: function (id) {
      for (let i = 0; i < this.departamentos.length; i++) {
        const dpto = this.departamentos[i];
        if (dpto.id === id) {
          return dpto;
        }
      }
    },
    // E
    buscarPorPrecio: function (precio) {
      const filtrados = [];
      const disponibles = this.departamentosDisponibles();
      for (let i = 0; i < disponibles.length; i++) {
        const dpto = disponibles[i];
        if (dpto.precioAlquiler <= precio) {
          filtrados.push(dpto);
        }
      }
      return filtrados;
    },
    // F
    precioConImpuesto: function (porcentaje) {
      const factor = 1 + (1 * porcentaje) / 100;
      const actualizados = [];
      for (let i = 0; i < this.departamentos.length; i++) {
        const dpto = this.departamentos[i];
        // Como lo habia hecho, pero me quedaba mejor como lo hizo el profe con el toFixed
        //   dpto.precioAlquiler *= factor
        dpto.precioAlquiler = (dpto.precioAlquiler * factor).toFixed(2);
        actualizados.push(dpto);
      }
      return actualizados;
    },
  
    // OPCION ALTERNATIVA PARA IMPUESTO
    precioConImpostor : function (porcentaje) {
      const actualizados = [];
      for (let i = 0; i < this.departamentos.length; i++) {
        const dpto = this.departamentos[i];
        dpto.precioAlquiler = (dpto.precioAlquiler * porcentaje).toFixed(2);
        actualizados.push(dpto); 
      }
      return actualizados;
    },
    // G
    simplificarPropietarios: function () {
      for (let i = 0; i < this.departamentos.length; i++) {
        const losPropietarios = this.departamentos[i].propietarios;
        const desde = losPropietarios.indexOf(":");
        const soloPropietarios = losPropietarios.slice(desde);
        this.departamentos[i].propietarios = "Prop." + soloPropietarios;
      }
      return this.departamentos;
    },
    // H
    alquilar: function (id) {
      const porAlquilar = inmobiliaria.buscarPorId(id);
      if (porAlquilar.disponible) {
        porAlquilar.disponible = false;
      }
      return porAlquilar;
    },
    // I
    filtrarPetFriendly: function () {
      const dptoPetFriendly = [];
      for (let i = 0; i < this.departamentos.length; i++) {
        const dpto = this.departamentos[i];
        if (dpto.aceptaMascotas === true) {
          dptoPetFriendly.push(dpto);
        }
      }
      return dptoPetFriendly;
    },
    // J
    rebajasPorNoAlquiler: function () {
      const rebajas = [];
      for (let i = 0; i < this.departamentos.length; i++) {
        const dpto = this.departamentos[i];
        if (dpto.disponible) {
          dpto.precioAlquiler = (dpto.precioAlquiler * 0.9).toFixed(2);
          rebajas.push(dpto);
        }
      }
      return rebajas;
    },
    buscarPorPropietarios: function (propietario) {
      const dptoPropietarios = [];
      for (let i = 0; i < this.departamentos.length; i++) {
        const dpto = this.departamentos[i];
        if (dpto.propietarios.includes(propietario)) {
          dptoPropietarios.push(dpto);
        }
      }
      return dptoPropietarios;
    },
};

const prueba = helper.pasaAJSON(inmobiliaria, 'inmobiliaria');
console.log(prueba);
const prueba2 = helper.pasaAArray('./inmobiliaria.JSON');
console.log(prueba2);

module.exports = inmobiliaria;