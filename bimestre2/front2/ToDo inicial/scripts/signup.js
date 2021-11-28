// Selecciono en el DOM y guardo en variables el formulario y cada input
let formularioSignUp = document.querySelector("form#signup");

let inputNombre = document.querySelector('#nombre');
let errorNombre = document.querySelector('#errorNombre');

let inputApellido = document.querySelector('#apellido');
let errorApellido = document.querySelector('#errorApellido');

let inputEmail = document.querySelector('#email');
let errorEmail = document.querySelector('#errorEmail');

let inputPass = document.querySelector('#pass');
let errorPass = document.querySelector('#errorPass');

let inputPassRepe = document.querySelector('#passRepe');
let errorPassRepe = document.querySelector('#errorPassRepe');


formularioSignUp.addEventListener("submit", function(event) {
    // Evito el envio del formulario y creo el array errores para cargar el mensaje correspondiente
    event.preventDefault();
    let errores = [];

    function cargarMensajeVacio(inputName) {
        errores.push({
            input: inputName,
            mensaje: ''
        })
    }

    // Errores del nombre
    let inputNombreValue = inputNombre.value.trim();
    
    if(inputNombreValue === "") {
        errores.push({
            input: "nombre",
            mensaje: "Este campo es obligatorio"
        })
    } else {
        cargarMensajeVacio('nombre')
    }

    // Errores del apellido
    let inputApellidoValue = inputApellido.value.trim();
    
    if(inputApellidoValue === "") {
        errores.push({
            input: "apellido",
            mensaje: "Este campo es obligatorio"
        })
    }
    else {
        cargarMensajeVacio('apellido')
    }

    // Errores del email
    if(inputEmail.value.trim() === "") {
        errores.push({
            input: "emailVacio",
            mensaje: "Este campo es obligatorio"
        })
    }else if (!inputEmail.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/)) {
        errores.push({
            input: "emailNoValido",
            mensaje: "Ingrese un email con formato valido"
        })
    } else {
        cargarMensajeVacio('emailNoValido')
    }
    
    // Errores de la password
    if(inputPass.value === null) {
        errores.push({
            input: "pass",
            mensaje: "Este campo es obligatorio"
        })
    } else if (inputPass.value.includes(' ')) {         // Con el includes(' '), corroboro que la contraseña no contenga espacios
        errores.push({                                  // Si los contiene, pusheo al array de errores un mensaje que indique que la contraseña no debe llevar espacios
            input: 'passContainsSB',
            mensaje: 'La contraseña no puede llevar espacios'
        })
    } else if (inputPass.value.length < 7 && inputPass.value.length > 0) {      // Con el .length corroboro que la longitud de la contraseña
        errores.push({                                                          // sea menor a 7 caracteres y mayor a 0, pusheo al array de errores el mensaje
            input: 'passShort',
            mensaje: 'La contraseña debe ser mayor a 7 caracteres'
        })
    } else {
        cargarMensajeVacio('pass')
    }

    // Errores del Repetir contraseña
    if(!(inputPassRepe.value == inputPass.value)) {
        errores.push({
            input: "passRepe",
            mensaje: "Las contraseñas no coinciden"
        })
    }
    else {
        cargarMensajeVacio('passRepe')
    }

    // Aca cargo los errores en el DOM
    if(errores.length !== 0) {             // Si el array errores no es 0, es decir que contiene errores, ejecuto un forEach de cada elemento
        errores.forEach(function(error) {  // En el forEach corroboro cual error es en especifico,
            switch(error.input) {          //  y asigno con un switch, al elemento HTML correspondiente, el mensaje determinado del error
                case "nombre":
                    errorNombre.innerText = error.mensaje;
                    break;
                case 'apellido':
                    errorApellido.innerText = error.mensaje;
                    break
                case 'emailVacio':
                    errorEmail.innerText = error.mensaje;
                    break
                case 'emailNoValido':
                    errorEmail.innerText = error.mensaje;
                    break
                case 'pass':
                    errorPass.innerText = error.mensaje;
                    break
                case 'passContainsSB':
                    errorPass.innerText = error.mensaje;
                    break
                case 'passShort':
                    errorPass.innerText = error.mensaje;
                    break
                case 'passRepe':
                    errorPassRepe.innerText = error.mensaje;
                    break
            }
        })
    } else {
        formularioSignUp.submit(); // Si no sucede ninguno de los casos anteriores, envio el formulario
    }
});