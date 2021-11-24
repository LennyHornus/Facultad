const contenedor = document.querySelector('#skeleton');
const btnAdd = document.querySelector('#addToDo');
const nuevaTarea = document.querySelector('#nuevaTarea');
const notasPendientes = [];


btnAdd.addEventListener('click', (e)=>{
    e.preventDefault(); // Pauso el submit del boton

    if (nuevaTarea.value.trim()) {                  // Si el valor de nueva tarea no es null ni es solo espacios sigo
        notasPendientes.push(nuevaTarea.value);     // Cargo el valor de la nota al array de notas pendientes

        notasPendientes.forEach((tarea)=>{          // Por cada elemento del array de tareas le asigno su html correspondiente
            contenedor.innerHTML = '';              // Primero limpio el html para que no se carguen las tareas existentes
            contenedor.innerHTML += `<li class="tarea">
                                        <div class="not-done"></div>
                                            <div class="descripcion">
                                            <p class="nombre">${tarea}</p>
                                            <p class="timestamp">Creada: 15/07/21</p>
                                        </div>
                                    </li>
        `
        });
        nuevaTarea.value = '';                      // Limpio el valor de nueva tarea
    }
})