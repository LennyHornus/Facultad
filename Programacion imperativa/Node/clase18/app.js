const v = "\x1b[32m%s\x1b[0m";
const o = "*".repeat(80) + "\n";
const oo = "*".repeat(25);
// Te proveemos la siguiente plantilla que tiene tre partes:
// - Array de objetos que está colapsado aquí debajo.
// - Desarrollo de las consignas, donde escribirás el código que responda a los enunciados
// - Ejecución de las consignas, donde ejecutarás los métodos correspondientes mostrando por consola sus resultados
const nombre = "Lenny Ramos Hornus";
const tema = "Tema 1";

const inmobiliaria = require('./objApp')

/******************************/
/* Ejecución de las consignas */
/******************************/
console.table([{ alumno: nombre, tema: tema }]);

// console.log(v, "\n" + oo + "   B. listarDepartamentos");
// inmobiliaria.listarDepartamentos(inmobiliaria.departamentos);
// console.log(o);

// console.log(v, oo + "   C. departamentosDisponibles");
// const disponibles = inmobiliaria.departamentosDisponibles();
// inmobiliaria.listarDepartamentos(disponibles);
// console.log(o);

console.log(v, oo + " D. buscarPorId");
const unId = inmobiliaria.buscarPorId(1);
inmobiliaria.listarDepartamentos([unId]);
console.log(o);

// console.log(v, oo + "  E. buscarPorPrecio");
// const unPrecio = inmobiliaria.buscarPorPrecio(1000);
// inmobiliaria.listarDepartamentos(unPrecio);
// console.log(o);

// console.log(v, oo + " F. precioConImpuesto");
// const unImpuesto = inmobiliaria.precioConImpuesto(10);
// inmobiliaria.listarDepartamentos(unImpuesto);
// console.log(o);

// console.log(v, oo + " G. simplificarPropietarios");
// const propietarios = inmobiliaria.simplificarPropietarios();
// inmobiliaria.listarDepartamentos(propietarios);
// console.log(o);

// console.log(v, oo + " H. Alquilar un departamento");
// const vacas2021 = inmobiliaria.alquilar(1);
// inmobiliaria.listarDepartamentos([vacas2021]); ////// OJO CON QUE LA FUNCION SOLO IMPRIME ARRAYS
// console.log(o);

// console.log(v, oo + " I. Aceptan mascotas?");
// const mascotas = inmobiliaria.filtrarPetFriendly();
// inmobiliaria.listarDepartamentos(mascotas);
// console.log(o);

// console.log(v, oo + " J. Ofertas o algo asi");
// const Ofertas = inmobiliaria.rebajasPorNoAlquiler();
// inmobiliaria.listarDepartamentos(Ofertas);
// console.log(o);

// console.log(v, oo + " K. Buscar por propietarios");
// const prop = inmobiliaria.buscarPorPropietarios('Juan');
// inmobiliaria.listarDepartamentos(prop);
// console.log(o);

// console.log(v, oo + " INTENTO 2 PRECIO IMPUESTO ");
// const impuesto = inmobiliaria.precioConImpostor(10);
// inmobiliaria.listarDepartamentos(impuesto);
// console.log(o);