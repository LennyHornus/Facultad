let unArray = ['Harry', 'Potter', 25];
let unObjeto = {
    nombre : "Harry",
    apellido : "Potter",
    edad : 25
};


for (let i = 0; i < unArray.length; i++) {
    const elemento = unArray[i];
    console.log(elemento);
};

console.log("-------------------------");

unArray.forEach((elemento, indice) => {
    console.log(elemento) 
    console.log(indice)
});

console.log("-------------------------");

// Bucle for in para recorrer objetos
for (const propiedad in unObjeto) {
    console.log( unObjeto[propiedad] );
};

console.log("-------------------------");

// Bucle for of para recorrer arrays y strings
for (const cosa of unArray) {
    console.log(cosa);
};