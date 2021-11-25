let provincias = fetch("https://apis.datos.gob.ar/georef/api/provincias?");
console.log(provincias); // Es una promesa

provincias                  // Al ser una provincia puede hacer un then para entrar a su valor
    .then((response)=>{     // Su valor al ser otra promesa debo concatenar un then para entrar al valor de esa segunda promesa
        return response.json()  // Con response.json() me quedo con el body de la promesa, y parseo el resultado, porque todavia tengo un JSON y no un dato de js
    })
    .then((respuesta)=>{        // Con el segundo then accedo al valor de response.json(), que en este caso
        console.log(respuesta.provincias[0]); // tiene una propiedad que es un array con la informacion que yo quiero de las provincias
        const inputSelect = document.querySelector('#provincia');   // Selecciono contenedor html
        respuesta.provincias.forEach((provincia, i) => {            // Como respuesta es un objeto con un array de las provincias, le hago un forEach()
            inputSelect.innerHTML += ` 
                <option value="${provincia.id}">${provincia.nombre}</option>
            `                                                       // para cargar el formato html correspondiente con la info
        });
    })