let btnAdd = document.querySelector('#addToDo');
let nuevaTarea = document.querySelector('#nuevaTarea');

let contenedorPendientes = document.querySelector('#skeleton');
let notasPendientesHTML = [];

let contenedorTerminadas = document.querySelector('.tareas-terminadas');
let notasTerminadasHTML = [];

function cargarEventos() {
    const deleteBtn = document.querySelectorAll('.not-done');

    deleteBtn.forEach((btn, i) => {
        btn.addEventListener('click', ()=>{
            const notaEliminada = notasPendientesHTML.splice( i-1 , 1); // Recorto del array de notasPendientes la tarea a eliminar
            notasTerminadasHTML.unshift(notaEliminada);
            cargarTareasPendientes();
            cargarTareasTerminadas();
        })
    })
}

function cargarTareasPendientes() {
    contenedorPendientes.innerHTML = '';            // Limpio el html para cargar las notas sin que se repitan
    notasPendientesHTML.forEach(tarea => {
        contenedorPendientes.innerHTML += tarea
    });
};

function cargarTareasTerminadas() {
    contenedorTerminadas.innerHTML = '';
    notasTerminadasHTML.forEach((tareaTerminada) => {
        contenedorTerminadas.innerHTML += tareaTerminada[0];
    });
};

btnAdd.addEventListener('click', (e)=>{
    e.preventDefault(); // Pauso el submit de la nota

    if (nuevaTarea.value.trim()) {                  // Si el valor de nueva tarea es truthy sigo

        let today = new Date();                     // Determino la fecha de hoy
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;

        // Cargo al array de notas pendientes la info con el formato html
        notasPendientesHTML.unshift(`<li class="tarea">
                                        <div class="not-done"></div>
                                        <div class="descripcion">
                                            <p class="nombre">${nuevaTarea.value}</p>
                                            <p class="timestamp">${today}</p>
                                        </div>
                                    </li>`
      );

      cargarTareasPendientes();
      cargarEventos();         // Le doy funcion a los botones
      nuevaTarea.value = '';   // Limpio el valor de nueva tarea
    }
})