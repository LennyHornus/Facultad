//Parte 1
console.log(!true, !false, !!false, !!true, !1, !!1, !0, !!0, !!"");
let x = 5;
let y = 6;
console.log(x<10&&x!==5);
console.log(x>9||x===5);
console.log(!(x===y));

// Parte 2
let m=10;
let p='a';
console.log(p==='b'||m>=10);

let l=3
let i=8
console.log(!(l=='3'||l===i)&&!(i==8&&l<=i));

let str =''
let msj ='jaja'
let esGracioso = 'false'
console.log(!((str||msj)&& esGracioso));

// Parte 3

//Para subir a una montaña rusa la edad debe ser mayor a 12 años y la altura
//debe ser mayor a 1,30 m.
const montanaRusa = function (edad, altura) {
    if (edad <= 12 && altura <=1.30){
        return('No admitido')
    }else {
    return('Admitido')
}
}
console.log(montanaRusa(13, 1.4))

//Si no hay suficiente luz o el objeto se mueve rápidamente, la cámara de fotos
//debe usar el flash.
let suficienteLuz = false;
let movimientoRapido = false;
console.log( suficienteLuz === false || movimientoRapido === true);

//Un estudiante pasa de nivel si su nota es mayor a 7 en sus dos evaluaciones
//parciales, o si obtiene un 4 en el examen final.

const aprueba = function (eval1, eval2, final) {
    if ((eval1 >7 && eval2 >= 7) || final >= 4){
        return 'Aprobaste pa'
    }else {
        return 'Ni redondeando para arriba pasas'
    }
}
console.log(aprueba(10,6,3));

//Dejamos ver la TV a nuestro hijo si realizó la tarea pero además, si tocó sus
//prácticas de piano y lo hizo de memoria.

let estadoTarea = true;
let practicaPiano = false;
console.log( estadoTarea === true && practicaPiano === true);