// Traigo desde el DOM los elementos que necesito
let formularioInicio = document.querySelector('form');

let inputEmail = document.querySelector('#inputEmail');
let errorEmail = document.querySelector('#errorEmail');

let inputPass = document.querySelector('#inputPassword');
let errorPass = document.querySelector('#errorPass');

let btnSubmit = document.querySelector('button');

formularioInicio.addEventListener('submit', (e)=>{
    e.preventDefault();     // Freno el envio del formulario
    let errores = [];

    errorEmail.innerText = '';
    errorPass.innerText = '';

    // Errores del email
    if(inputEmail.value.length === 0) {
        errores.push({
            input: "emailVacio",
            mensaje: "Ingrese un email"
        })
    };

    if(!inputEmail.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/)) {
        errores.push({
            input: "emailNoValido",
            mensaje: "Ingrese un email con formato valido"
        })
    }
    
    // Errores de la password
    if(!inputPass.value) {
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
        const data = {
            email: inputEmail.value,
            password: inputPass.value
        }
        
        const settings = {
            "method": "POST",
            "body": JSON.stringify(data)
        }
        
        fetch("https://ctd-fe2-todo.herokuapp.com/v1/users/login", settings)
            .then((response)=>{
                return response.json();
            })
            .then((info)=>{
                console.log(info);
            })
            .catch((error)=>{
                console.error("Error! " + error);
            })
        formularioSignUp.submit(); // Si no sucede ninguno de los casos anteriores, envio el formulario
    }
});