const btnAdd = document.querySelector('#addToDo');
const nuevaTarea = document.querySelector('#nuevaTarea');

const contenedor = document.querySelector('#skeleton');
const notasPendientesHTML = [];

const ulTerminadas = document.querySelector('.tareas-terminadas');
const notasTerminadasHTML = [];

function cargarEventos() {
    const deleteBtn = document.querySelectorAll('.not-done');;
    const liNotasArray = document.querySelectorAll('.tarea');

    deleteBtn.forEach((btn, i) => {
        btn.addEventListener('click', ()=>{
            console.log('entramos bien pa');                    // EL PROBLEMA ESTA POR ACA PERO NI IDEA DONDE
            cargarTareas();
            console.log(typeof liNotasArray[i]);
            console.log(liNotasArray[i]);
            notasTerminadasHTML.unshift(ulTerminadas);
            contenedor.removeChild(liNotasArray[i]);
        })
    })
}

function cargarTareas() {
    contenedor.innerHTML = '';                          // Limpio el html para cargar las notas sin que se repitan
    for (let i = 0; i < notasPendientesHTML.length; i++) {
        const tarea = notasPendientesHTML[i];
        contenedor.innerHTML += tarea
    }
    for (let i = 0; i < notasTerminadasHTML.length; i++) {
        const tareaTerminada = notasTerminadasHTML[i];
        ulTerminadas += tareaTerminada;
    }
};

btnAdd.addEventListener('click', (e)=>{
    e.preventDefault(); // Pauso el submit de la nota

    if (nuevaTarea.value.trim()) {                  // Si el valor de nueva tarea no es null ni es solo espacios sigo

        let today = new Date();                     // Determino la fecha de hoy
        const dd = String(today.getDate()).padStart(2, '0');
        const mm = String(today.getMonth() + 1).padStart(2, '0');
        const yyyy = today.getFullYear();
        today = dd + '/' + mm + '/' + yyyy;

        notasPendientesHTML.unshift(`<li class="tarea">
                                        <div class="not-done"></div>
                                        <div class="descripcion">
                                            <p class="nombre">${nuevaTarea.value}</p>
                                            <p class="timestamp">${today}</p>
                                        </div>
                                    </li>`
      );

      cargarTareas();          // Cargo las tareas
      cargarEventos();         // Le doy funcion a los botones
      nuevaTarea.value = '';   // Limpio el valor de nueva tarea
    }
})