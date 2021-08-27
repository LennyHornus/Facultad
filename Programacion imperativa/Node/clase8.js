// Ejercicio 1//
function puedeSubir (altura, compania, penalizada) {
    if (penalizada){
      return false
    } 
    if (altura >= 1.4 && altura < 2){
        return true 
    }
    else if (altura < 1.4 && altura > 1.2 && compania == true){
        return true
    }
    else{
        return false
    }
} 
console.log(puedeSubir(1.1, false, false));

//Controlando el flujo de apps//

//(el número es a modo de ejemplo, podes cambiarlo o crear otras
//para tener varias pruebas

function entradaBar(edad) {
  if (edad < 0) {
    console.log("Error, edad invalida. Por favor ingrese un número válido");
  } else if (edad < 21) {
    console.log("Puede pasar al bar, pero no puede tomar alcohol.");
  } else if (edad < 18) {
    console.log("No puede pasar al bar");
  } else if (edad === 21) {
    console.log(
      "Felicitaciones por poder tomar en EEUU pero hace 3 años podes chupar en arg"
    );
  } else {
    console.log("Puede pasar al bar y tomar alcohol.");
  }
  if (edad % 2 === 1) {
    console.log("¿Sabias que tu edad es impar?");
  }
}
entradaBar(17);

// function totalAPagar(var1, num2) {
//   const costoVehiculo = function (var1) {
//     if (var1 === "coche") {
//       return 86;
//     } else if (var1 === "moto") {
//       return 70;
//     } else if (var1 === "autobús") {
//       return 55;
//     } else {
//       console.log("En que viniste?");
//     }
//   };
//   const costoLitros = function (num2) {
//     if (num2 > 0 && num2 < 25) {
//       return 50;
//     } else if (num2 > 25) {
//       return 25;
//     }
//   };
//   console.log(costoVehiculo(var1) + costoLitros(num2));
// }
// totalAPagar("coche", 12);

function totalAPagar(var1, num2) {
  let total = 0
    if (var1 === "coche") {
      total = 86;
    } else if (var1 === "moto") {
      total = 70;
    } else if (var1 === "autobús") {
      total= 55;
    } else {
      return"En que viniste?";
    }
    total = total*num2
    if (num2 > 0 && num2 < 25) {
      total += 50*num2;
    } else if (num2 > 25) {
      total += 25;
    }return(total);
}
console.log(totalAPagar('coche', 80));

// Sanguches 

function sandwich(baseSandwich, pan, queso, tomate, lechuga, cebolla, mayonesa, mostaza) {
  let total = 0
  if (baseSandwich === 'Pollo'){
    total = 150
  }else if (baseSandwich === 'Carne'){
    total = 200
  }else if (baseSandwich === 'Vegetariano'){
    total = 100
  }else{
    return 'Que estas pidiendo pibe?'
  }
  switch (pan) {
    case 'Blanco':
      total += 50
      break;
    case 'Negro':
      total+=60
      break;
    case 's/gluten':
      total+= 75
      break;
    default:
      return 'Ya te dije que vendemos sanguches pibe'
  }
  total += queso? 20 : 0
  total += tomate? 15 : 0
  total += lechuga? 10 : 0
  total += cebolla? 15 : 0
  total += mayonesa? 5 : 0
  total += mostaza? 5 : 0
  return total
}
console.log(sandwich('Carne', 'Negro', true, false, false, true, false, true));

// Extra bonus 
// Numero secreto
function secretNum(num2) {
  let numeroSecreto = Math.floor (Math.random()*10)
  if (num2 === numeroSecreto) {
    return 'Suerte en el juego y no en el amor'
  }else {
    return 'Anda a encararla ' + numeroSecreto
  }
}

console.log(secretNum(5));

// Abrir paracaidas
function abrirParacaidas(velocidad, altura) {
  if (velocidad > 0 && altura > 0) {
    if (velocidad < 1000 && altura >= 2000 && altura<3000) {
      return 'Se te abrio el paracaidas';
    }else{
      return 'Te diste la boca';
    }
  }else {
      return 'En que dimension tas hermano';
  }
}

console.log(abrirParacaidas(999, 2500));

// Traductor condicional
function traductor(objeto) {
  switch (objeto) {
    case 'casa':
      return 'home';
    case 'perro':
      return 'dog';
    case 'pelota':
      return 'ball';
    case 'árbol':
      return 'tree';
    case 'genio':
      return 'arranca por la derecha';
    default:
      return 'Aca solo spanglish perdona'
  }
}
console.log(traductor('geno'));

function valoracion(rating) {
  let estrella = ''
  switch (rating) {
    case 'Muy mala':
      estrella = 'Que garron te comiste';
      break;
    case 'Mala':
      estrella = 'Puede ser peor'
      break;
    case 'Mediocre':
      estrella = 'Ni tan mal che'
      break;
    case 'Buena':
      estrella = 'Bien ahi'
      break;
    case 'Muy buena':
      estrella = 'Vamos carajo'
      break;
    default:
      estrella = 'De que me estas hablando'
      break;
  }
  return estrella
}
console.log(valoracion('Muyna'));