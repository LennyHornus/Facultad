if (!sessionStorage.token && !localStorage.token) {
  location.replace('./login.html')    
  // Si no existe el token en el localStorage ni en el sessionStorage lo mando de nuevo a iniciar sesion
}


// -------------------------------------------------------------- //
// Cargo la informacion del usuario 
// -------------------------------------------------------------- //

const userName = document.querySelector('.user-info p');

// Traigo el token primero de localStorage si existe, si no existe traigo el de sessionStorage
const token = JSON.parse(localStorage.getItem('token')) || sessionStorage.getItem('token');

const settingsInfoUser = {
  method: "GET",
  headers: { 
      authorization : token
  }
}
const urlGetMe = 'https://ctd-fe2-todo.herokuapp.com/v1/users/getMe';

fetch(urlGetMe, settingsInfoUser)
  .then(response => response.json())
  .then(data => {
      userName.innerText = `${data.firstName} ${data.lastName}`
      const datosUser = data
      return datosUser;
})


// -------------------------------------------------------------- //
// Agrego funcionalidad al boton de cerrar sesion 
// -------------------------------------------------------------- //

const btnCerrarSesion = document.querySelector('#closeApp');
btnCerrarSesion.addEventListener('click', () => {
  let confirmacion = confirm("¿Desea cerrar sesion?")
  if (confirmacion) {
    //limpiamos el localstorage y el sessionStorage luego redireccioamos a login
    localStorage.clear();
    sessionStorage.clear();
    location.replace('./index.html');
  }
})

const urlTareas = 'https://ctd-fe2-todo.herokuapp.com/v1/tasks';


// -------------------------------------------------------------- //
// Creo la funcion para consultar las tareas con un GET de la API 
// -------------------------------------------------------------- //

function consultarTareas() {
  const settings = {
      method: 'GET',
      headers: {
          authorization: token
      }
  };
  console.log("Consultando mis tareas");
  fetch(urlTareas, settings)
    .then(response => response.json())
    .then(tareas => {
      renderizarTareas(tareas);
      terminarTarea();
      borrarTarea();
    })
    .catch(error => console.log(error));
}
consultarTareas();  // La hago correr una vez para traer tareas si ya existian


// -------------------------------------------------------------- //
// Creo la funcion para renderizar las tareas
// -------------------------------------------------------------- //

function renderizarTareas(listadoTareas) {
// Selecciono el esqueleto con las tareas predeterminadas y las borro
const skeleton = document.querySelector('#skeleton');   
if (skeleton) {
  skeleton.remove();
}

const contenedorTerminadas = document.querySelector('.tareas-terminadas');
contenedorTerminadas.innerHTML = '';
const contenedorPendientes = document.querySelector('.tareas-pendientes');
contenedorPendientes.innerHTML = '';

listadoTareas.forEach(tarea => {
    let fecha = new Date(tarea.createdAt); // Casteo createdAt como una Date para poder usar sus metodos

    if (!tarea.completed) {
        contenedorPendientes.innerHTML += `
                    <li class="tarea">
                        <div class="not-done change" id="${tarea.id}"></div>
                        <div class="descripcion">
                            <p class="nombre">${tarea.description}</p>
                            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${fecha.toLocaleDateString()} <i class="far fa-clock"></i> ${fecha.getHours()}:${fecha.getMinutes()}</p>
                        </div>
                    </li>`
    }
    else {
      contenedorTerminadas.innerHTML += `
                  <li class="tarea">
                      <div class="done"></div>
                      <div class="descripcion">
                       <div>
                           <button><i id="${tarea.id}" class="fas fa-arrow-up change"></i></button>
                           <button><i id="${tarea.id}" class="far fa-trash-alt"></i></button>
                       </div>
                       <p class="nombre">${tarea.description}</p>
                        <p class="timestamp"><i class="far fa-calendar-alt"></i> ${fecha.toLocaleDateString()} <i class="far fa-clock"></i> ${fecha.getHours()}:${fecha.getMinutes()}</p>
                       </div>
                   </li>`
  }
  })
};


// -------------------------------------------------------------- //
// Creo la funcion para subir las tareas por POST a la API
// -------------------------------------------------------------- //

const btnAdd = document.querySelector('#addToDo');
const nuevaTarea = document.querySelector('#nuevaTarea');

function subirTarea() {
// mando a la api un post de la tarea
const bodyNota = {
    description: nuevaTarea.value,
    completed: false
}
const datosTareaPost = {
    "method": "POST",
    "headers": {
        "authorization": `${token}`,
        "content-type": "application/json"
    },
    "body": JSON.stringify(bodyNota)
};

console.log("Subiendo tarea");

fetch(urlTareas, datosTareaPost)
  .then(response => response.json())
  .then(datosTareaNueva => {
    console.log(datosTareaNueva)
    if (datosTareaNueva) {
        consultarTareas();
        nuevaTarea.value = '';
    }
  })
  .catch(error => console.log(error)); 
}

btnAdd.addEventListener('click', (e) => {
  e.preventDefault();
  subirTarea();
})


// -------------------------------------------------------------- //
// Creo la funcion para terminar las tareas pendientes, con un PUT a la API
// -------------------------------------------------------------- //

function terminarTarea() { 
const arrayBotonesTerminar = document.querySelectorAll('.change');
arrayBotonesTerminar.forEach((boton) => {
  boton.addEventListener('click', (e)=> {
    e.preventDefault();
    const id = e.target.id;           // Selecciono el id del elemento que clickee
    const url = `${urlTareas}/${id}`; // armo la url para el fetch
    const payload = {};

    if (e.target.classList.contains('fa-arrow-up')) {     // Si el boton contiene la flecha hacia arriba
      payload.completed = false;                          // pongo el estado completed como false, para que al clickearlo la tarea vuelva a las pendientes
    } else {
      payload.completed = true;                           // o como true, para que termine la tarea
    }

    const settingsPut = {
      method: "PUT",
      headers: {
        "authorization": token,
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(payload)
    };

    console.log("Terminando tarea");

    fetch(url, settingsPut)
      .then(response => {
          console.log(response.status);
          consultarTareas();
      })
      .catch(error => console.log(error)); 
  })
})
}


// -------------------------------------------------------------- //
// Creo la funcion para borrar tareas con un DELETE a la API
// -------------------------------------------------------------- //

function borrarTarea() { 
const arrayBotonesBorrar = document.querySelectorAll('.fa-trash-alt'); // Selecciono el icono de font awesome
arrayBotonesBorrar.forEach((boton) => {
  boton.addEventListener('click', (e)=> {
    e.preventDefault();
    const id = e.target.id;
    const url = `${urlTareas}/${id}`;
    
    const settingsDelete = {
      method: "DELETE",
      headers: {
        "Authorization": token,
        "Content-type": "application/json"
      },
    };

    console.log("Borrando tarea");

    fetch(url, settingsDelete)
      .then(response => {
          console.log(response.status);
          consultarTareas();
      })
      .catch(error => console.log(error));
  })
})
}