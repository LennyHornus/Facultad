if (!sessionStorage.token && !localStorage.token) {
    location.replace('./login.html')    // Si no existe el token en el localStorage ni en el sessionStorage lo mando de nuevo a iniciar sesion
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
      localStorage.clear();                 //limpiamos el localstorage y redireccioamos a login
      location.replace('./index.html');
    }
})

const btnAdd = document.querySelector('#addToDo');
const nuevaTarea = document.querySelector('#nuevaTarea');
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
        console.log(tareas)

        // Selecciono el esqueleto con las tareas predeterminadas y las borro
        const skeleton = document.querySelector('#skeleton');   
        if (skeleton) {
          skeleton.remove();
        }

        renderizarTareas(tareas);
        // botonBorrarTarea();
      })
      .catch(error => console.log(error));
}
consultarTareas();  // La hago correr una vez para traer tareas si ya existian


function renderizarTareas(listadoTareas) {
    const contenedorTerminadas = document.querySelector('.tareas-terminadas');
    contenedorTerminadas.innerHTML = '';
    const contenedorPendientes = document.querySelector('.tareas-pendientes');
    contenedorPendientes.innerHTML = '';

    listadoTareas.forEach(tarea => {
        let fecha = new Date(tarea.createdAt); // Casteo createdAt como una Date para poder usar sus metodos
        console.log(fecha.getHours());
        console.log(fecha.getMinutes());
        console.log(fecha.toTimeString());

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
                                <button><i id="${tarea.id}" class="fas fa-undo-alt change"></i></button>
                                <button><i id="${tarea.id}" class="far fa-trash-alt"></i></button>
                            </div>
                            <p class="nombre">${tarea.description}</p>
                            <p class="timestamp"><i class="far fa-calendar-alt"></i> ${fecha.toLocaleDateString()} <i class="far fa-clock"></i> ${fecha.getHours()}:${fecha.getMinutes()}</p>
                            </div>
                        </li>`
        }
    })
};


// function borrarTarea() { 
//     Aca voy a tener que hacer un update en la api para que convierta el valor de completed a true
    
//     si completed es true mando un delete a la api para eliminar la tarea
// }

// function subirTarea(texto, completed) {
//     mando a la api un post de la tarea 
// }


// function cargarFuncionBorrar() {
//     const deleteBtn = document.querySelectorAll('.not-done');

//     deleteBtn.forEach((btn) => {
//         btn.addEventListener('click', ()=>{
//             borrarTarea();
//             cargarTareasPendientes();
//             cargarTareasTerminadas();
//         })
//     })
// }

// btnAdd.addEventListener('click', (e)=>{
//     e.preventDefault(); // Pauso el submit de la nota

//     if (nuevaTarea.value.trim()) {                  // Si el valor de nueva tarea es truthy sigo
//         subirTarea(nuevaTarea.value, false);
//         cargarTareasPendientes();
//         cargarFuncionBorrar();
//         nuevaTarea.value = '';   // Limpio el valor de nueva tarea
//     }
// })