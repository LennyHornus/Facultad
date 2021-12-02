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

    // Limpio los errores si existian antes en el HTML
    errorNombre.innerText = '';
    errorApellido.innerText = '';
    errorEmail.innerText = '';
    errorPass.innerText = '';
    errorPassRepe.innerText = '';

    // Errores del nombre
    let inputNombreValue = inputNombre.value.trim();
    
    if(inputNombreValue === "") {
        errores.push({
            input: "nombre",
            mensaje: "Este campo es obligatorio"
        })
    }

    // Errores del apellido
    let inputApellidoValue = inputApellido.value.trim();
    
    if(inputApellidoValue === "") {
        errores.push({
            input: "apellido",
            mensaje: "Este campo es obligatorio"
        })
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
    }
    
    // Errores de la password
    if(inputPass.value.length === 0) {
        errores.push({
            input: "pass",
            mensaje: "Este campo es obligatorio"
        })
    } else if (inputPass.value.includes(' ')) {         // Con el includes(' '), corroboro que la contraseña no contenga espacios
        errores.push({                                  // Si los contiene, pusheo al array de errores un mensaje que indique que la contraseña no debe llevar espacios
            input: 'passContainsSB',
            mensaje: 'La contraseña no puede llevar espacios'
        })
    } else if (!inputPass.value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,16}$/)) {      // Uso una regex (expresion regular) para corroborar que la contraseña sea
        errores.push({                                                                           // mayor a 8 caracteres, menor a 16, conteniendo 1 minuscula, 1 mayuscula y 1 numero
            input: 'passRegex',
            mensaje: 'La contraseña debe tener entre 8 y 16 caracteres, conteniendo 1 minuscula, 1 mayuscula y 1 numero'
        })
    }

    // Errores del Repetir contraseña
    if(!(inputPassRepe.value == inputPass.value)) {
        errores.push({
            input: "passRepe",
            mensaje: "Las contraseñas no coinciden"
        })
    }
    console.log();
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
                case 'passRegex':
                    errorPass.innerText = error.mensaje;
                    break
                case 'passRepe':
                    errorPassRepe.innerText = error.mensaje;
                    break
            }
        })
    } else {
        // Si no sucede ninguno de los casos anteriores, envio a la api la informacion correspondiente
        const data = {
            firstName: inputNombre.value,
            lastName: inputApellido.value,
            email: inputEmail.value,
            password: inputPass.value
        }
        
        const settings = {
            "method": "POST",
            "headers": {"content-type": "application/json"},
            "body": JSON.stringify(data)
        }
        
        fetch("https://ctd-fe2-todo.herokuapp.com/v1/users", settings)
            .then((response)=>{
                return response.json();
            })
            .then(()=>{
                location.replace('./index.js')
            })
            .catch((error)=>{
                console.error("Error! " + error);
            })
        
        formularioSignUp.reset();
    }
});