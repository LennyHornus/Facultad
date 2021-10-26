// Tragamonedas

const premioTotal = 2500;
const casilla = 10;

function tragaMonedas(){
    const aciertosUsuario = prompt("Ingresa tus aciertos en el tragamonedas")
    const porcentajeDelPremio = aciertosUsuario / casilla;
    const resultado = premioTotal * porcentajeDelPremio;
    console.log( "Tu premio en el Tragamonedas es de: " + resultado);
};


// Loteria 

function resultadoLoteria() {
    const resultado = parseInt(Math.random()*4);
    if (resultado === 0) {
        return 1000;
    }
    else if (resultado === 1) {
        return 10000;
    }
    else if (resultado === 2) {
        return 10000
    }
    else if (resultado === 3) {
        return 100000;
    }else{
        return 0;
    }
}

function imprimeLoteria(resultado) {
    const suenioUsuario = prompt("Ingrese su ultimo sueño");
    const mensaje = "Como tu sueño fue " + suenioUsuario + " conseguiste un premio de " + resultado + " dolares";
    console.log(mensaje);
};


// Ruleta

function tirarRuleta(){
    const numeroUsuario = prompt("Elegi un numero del 1 al 25");
    const numeroGanador = parseInt(Math.random()*25 + 1);
    console.log( "El numero ganador es " + numeroGanador);
    if (numeroUsuario == numeroGanador) {
        console.log("Seleccionaste el numero ganador. Felicitaciones");
    }else{
        console.log("Mejor suerte la proxima");
    }
};

// Actividad b

// var numero = 20;
// while( numero>0 ) {
// resto = numero%10;
// numero = parseInt(numero/10);
// console.log(resto);
// }
// Opcion correcta = C


// function aleatorio(minimo,maximo){
//     return Math.round(Math.random() * (maximo - minimo) + minimo);
// }
// aleatorio(4, 9)
// Opcion correcta = A
    