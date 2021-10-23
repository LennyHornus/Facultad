// sumar(5)(7);
// // 12

function sumar() {
    const resultado = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (resultado) {
            resultado += arguments[i];
        }

        resultado += arguments[i];
    }
    return resultado;
};

console.log(sumar(5)(7));