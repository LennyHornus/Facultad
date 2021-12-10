if (localStorage.token) {
    location.replace('./mis-tareas.html')    // Si ya existe en el localStorage su usuario lo redirigo a las tareas
}

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
            mensaje: "Enter an email"
        })
    } else if(!inputEmail.value.match(/^[a-zA-Z0-9.!#$%&'+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)$/)) {
        errores.push({
            input: "emailNoValido",
            mensaje: "Enter an email with valid format"
        })
    }
    
    // Errores de la password
    if(!inputPass.value) {
        errores.push({
            input: "pass",
            mensaje: "Enter a password"
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
        // Traigo el boton de mantener sesion
        const mantenerSesion = document.querySelector('#mantenerSesion');


        const datosUser = {
            email: inputEmail.value,
            password: inputPass.value
        };
        //configuramos la request del Fetch
        const settings = {
            "method": 'POST',
            "headers": {"content-type": "application/json"},
            "body": JSON.stringify(datosUser)
        };

        // Mando la peticion a la api
        console.log("Enviando POST a la API");
        const url = 'https://ctd-fe2-todo.herokuapp.com/v1/users/login'
        fetch(url, settings)
            .then(response =>{
                console.log(response.status);
                if (response.status === 201) {
                    return response.json()
                } else {
                    errorEmail.innerText = '';
                    errorPass.innerText = '';
                    errorPass.innerText = 'Invalid email or password'
                }})
            .then(token => {
                if (mantenerSesion.checked) {
                    localStorage.setItem('token', JSON.stringify(token.jwt)); // Si el usuario decide mantener la sesiona abierta subo al local storage el token
                } else {
                    sessionStorage.setItem('token', token.jwt); // Si no decide hacerlo, guardo en sessionStorage el string del jwt, no el objeto entero
                }
                
                location.replace('./mis-tareas.html')
        })
    }
});