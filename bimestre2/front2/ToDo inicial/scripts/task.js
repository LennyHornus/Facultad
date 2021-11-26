const contenedor = document.querySelector('#skeleton');
const btnAdd = document.querySelector('#addToDo');
const nuevaTarea = document.querySelector('#nuevaTarea');
const notasPendientes = [];
const fechasCorrespondientes = [];

const notasActuales = document.querySelectorAll('.nombre');

const btnDone = document.querySelectorAll('.not-done');
const ulTerminadas = document.querySelector('.tareas-terminadas');
const notasFinalizadas = [];

function cargarTareas(arrayTareas, arrayFechas) {
    contenedor.innerHTML = '';                          // Limpio el html para cargar las notas sin que se repitan
    for (let i = 0; i < arrayTareas.length; i++) {
        const tarea = arrayTareas[i];
        const fecha = arrayFechas[i];
        contenedor.innerHTML += `<li class="tarea">
                                    <div class="not-done"></div>
                                        <div class="descripcion">
                                        <p class="nombre">${tarea}</p>
                                        <p class="timestamp">${fecha}</p>
                                    </div>
                                </li>`
    }
};

btnAdd.addEventListener('click', (e)=>{
    e.preventDefault(); // Pauso el submit de la nota

    if (nuevaTarea.value.trim()) {                  // Si el valor de nueva tarea no es null ni es solo espacios sigo
        notasPendientes.unshift(nuevaTarea.value);     // Cargo el valor de la nota al array de notas pendientes al principio usando unshift()

        let today = new Date();                     // Determino la fecha de hoy
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;
        fechasCorrespondientes.unshift(today);         // Uso unshift() al array de fechas la fecha de la tarea al momento de la creacion

        cargarTareas(notasPendientes, fechasCorrespondientes);

        nuevaTarea.value = '';   // Limpio el valor de nueva tarea
    }
})

function btnDone(arrayBotones) {
    arrayBotones.forEach(btn => {
        btn.addEventListener('click', (e) => {
            notasFinalizadas.unshift(textoNota);

            ulTerminadas.innerHTML += `<li class="tarea">
                                    <div class="not-done"></div>
                                        <div class="descripcion">
                                        <p class="nombre">${tarea}</p>
                                        <p class="timestamp">${fecha}</p>
                                    </div>
                                </li>`
        })
    })
};