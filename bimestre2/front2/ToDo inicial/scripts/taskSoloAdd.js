const contenedor = document.querySelector('#skeleton');
const btnAdd = document.querySelector('#addToDo');
const nuevaTarea = document.querySelector('#nuevaTarea');
const notasPendientes = [];


btnAdd.addEventListener('click', (e)=>{
    e.preventDefault(); // Pauso el submit del boton

    if (nuevaTarea.value.trim()) {                  // Si el valor de nueva tarea no es null ni es solo espacios sigo
        notasPendientes.push(nuevaTarea.value);     // Cargo el valor de la nota al array de notas pendientes

        let today = new Date();                     // Determino la fecha de hoy
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0'); // Enero es 0!
        const yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;

        contenedor.innerHTML = '';              // Primero limpio el html para que no se carguen las tareas existentes
        notasPendientes.forEach((tarea)=>{          // Por cada elemento del array de tareas le asigno su html correspondiente
            contenedor.innerHTML += `<li class="tarea">
                                        <div class="not-done"></div>
                                            <div class="descripcion">
                                            <p class="nombre">${tarea}</p>
                                            <p class="timestamp">${today}</p>
                                        </div>
                                    </li>
        `
        });
        nuevaTarea.value = '';                      // Limpio el valor de nueva tarea
    }
})