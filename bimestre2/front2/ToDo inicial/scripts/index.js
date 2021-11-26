// Traigo desde el DOM los elementos que necesito
const formularioInicio = document.querySelector('form');

const inputEmail = document.querySelector('#inputEmail');
const errorEmail = document.querySelector('#errorEmail');

const inputPass = document.querySelector('#inputPassword');
const errorPass = document.querySelector('#errorPass');

const btnSubmit = document.querySelector('button');

formularioInicio.addEventListener('submit', (e)=>{
    e.preventDefault();     // Freno el envio del formulario
    let errores = [];

    // Errores del email
    if(inputEmail.value.trim() === "") {
        errores.push({
            input: "emailVacio",
            mensaje: "Ingrese un email"
        })
    };

    if(!inputEmail.value.includes('@') && inputEmail.value.length > 1) {
        errores.push({
            input: "emailNoValido",
            mensaje: "Ingrese un email con formato valido"
        })
    }
    
    // Errores de la password
    if(inputPass.value === "") {
        errores.push({
            input: "pass",
            mensaje: "Ingrese una contraseña"
        })
    }

    if(errores.length !== 0) {  
        errores.forEach(function(error) {
            switch(error.input) {
                case 'emailVacio':
                    errorEmail.innerText = error.mensaje;
                    break
                case 'emailNoValido':
                    errorEmail.innerText = error.mensaje;
                    break
                case 'pass':
                    errorPass.innerText = error.mensaje;
                    break
            }
        })
    } else {
        formularioSignUp.submit(); // Si no sucede ninguno de los casos anteriores, envio el formulario
    }
});