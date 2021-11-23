let primeraPromesa = new Promise((resolve, reject)=>{ // La promesa tambien recibe un callback
    let numero = 0;
    if (numero > 1) {
        resolve({
            mensaje: "El numero es mayor a 1."
        })
    } else {
        reject({
            mensaje: "El numero es menor a 1."
        })
    }
})
console.log(primeraPromesa);
primeraPromesa
    .then((response)=>{    // Recibe un callback el then
        console.log("Estoy desenvolviendo una promesa");
        console.log(response);          // Response es el contenido de la promesa habiendose cumplido
    })
    .catch((error)=>{  // El catch tambien recibe un callback, y llamamos error al parametro porque en general es porque no recibimos el dato requerido
        console.log(error);
})


let segundaPromesa = new Promise((resolve, reject)=>{ // La promesa tambien recibe un callback
    let numero = 0;
    setTimeout(()=>{
    if (numero > 1) {
        resolve({
            mensaje: "Resuelta con setTimeOut."
        })
    } else {
        reject({
            mensaje: "Rechazada con setTimeOut."
        })
    }}, 2500)
})
console.log(segundaPromesa);
segundaPromesa
    .then((response)=>{    // Recibe un callback el then
        console.log("Estoy desenvolviendo un setTimeOut");
        console.log(response);          // Response es el contenido de la promesa habiendose cumplido
    })
    .catch((error)=>{  // El catch tambien recibe un callback, y llamamos error al parametro porque en general es porque no recibimos el dato requerido
        console.log(error);
})