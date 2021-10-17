const alicia = [23, 67, 32];
const bob = [12, 67, 43];

function encontrarGanador(array1, array2) {
    let puntosAlicia = 0
    let puntosBob = 0
    let mensaje = ''
    for (let i = 0; i < array1.length; i++) {
        if (array1[i] > array2[i]) {
            puntosAlicia++
        }else if (array1[i] < array2[i]) {
            puntosBob++
        }else {
            puntosBob +=0
            puntosAlicia +=0
        }
    }
    if (puntosAlicia < puntosBob) {
        mensaje = 'El ganador es Bob'
    }else if (puntosBob < puntosAlicia){
        mensaje = 'La ganadora es Alicia'
    }else{
        mensaje = 'Tenemos un empate'
    }
    return mensaje
}

console.log(encontrarGanador(alicia, bob));

//Digital House

function digitalHouse(num1,num2) {
    let mensaje
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    if (i % num1 === 0) {
        mensaje = 'Digital'
    }if (i % num2 === 0) {
        mensaje = 'House'
    } else {
        mensaje += 0
    }
    if (i % num1 === 0 && i % num2 === 0) {
        mensaje = 'Digital House'
    }
    console.log(mensaje);
}
}

digitalHouse(10,7)


// Juanma try

function digitalHouse(num1,num2) {
    let mensaje= "";
    for (let i = 0; i <= 100; i++) {
     if(i%num1 === 0 && i%num2 === 0){
        mensaje ="Digital House";
        continue 
     } else if(i%num1 === 0){
        mensaje ="Digital";
        continue
     }else if(i%num2 === 0){
        mensaje ="House";
        continue
     }else{
        mensaje = i
     }
     console.log(mensaje)
    }
}

digitalHouse(3,5)
