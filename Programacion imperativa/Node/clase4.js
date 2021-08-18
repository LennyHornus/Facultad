console.log('hello there');
console.log('general kenobi');
let edad = 18;
let nombre = 'Lenny';
console.log(nombre , edad)


// caso 1 salir a correr
//voy a necesitar: ropa limpia (booleano), esta lloviendo (booleano)
// distancia a recorrer (numero), hora actual (numero), direccion de donde salgo(nombre)
//con quien salgo a correr(nombre)

let ropaLimpia = true;
let lluvia = false;
let distancia = 5;
let horaActual = 19.20
let origen = 'Belgrano 2030'
let destino = 'Justa lima 510'
let compañero = 'Martin'

console.log('Ropa limpia: '+ ropaLimpia);
console.log('Precipitaciones: '+ lluvia);
console.log('Distancia del recorrido '+ distancia);
console.log('Hora de salida: '+ horaActual);
console.log('Salgo de '+ origen);
console.log('Termino en '+ destino);
console.log('Viene '+ compañero);

//caso 2 partido del psg
// hora del encuentro (numero), rival(string), donde se juega(string), formacion (string)
// juega messi(boolean), por que torneo juegan(string), camiseta titular(boolean)

let horaPartido = 20.00;
let rival = 'Atletico madrid';
let estadio = 'Parc des Princes';
let local = true;
let formacion = '4.3.3';
let juegaDios = true;
let torneo = 'UCL';
let camisetaTitular = true;

console.log('Hora del partido: '+ horaPartido);
console.log('Juega contra '+ rival);
console.log('Se juega en '+ estadio);
console.log('Psg es local?'+ local);
console.log('La formacion va a ser un '+ formacion);
console.log('Juega messi? '+ juegaDios);
console.log('Se juega la semifinal de la '+ torneo);
console.log('Se juega con la casaca titular? '+ camisetaTitular);

//Desafio extra

let cajonPantalones = 'remeras';
let cajonRemeras = cajonPantalones;
console.log(cajonRemeras);