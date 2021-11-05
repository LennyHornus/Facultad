/* --------------------------- NO TOCAR DESDE ACÁ --------------------------- */
let datosPersona = {
  nombre: "",
  edad: 0,
  ciudad: "",
  interesPorJs: "",
};

const listado = [{
    imgUrl: "https://huguidugui.files.wordpress.com/2015/03/html1.png",
    lenguajes: "HTML y CSS",
    bimestre: "1er bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919828.png",
    lenguajes: "Javascript",
    bimestre: "2do bimestre",
  },
  {
    imgUrl: "https://image.flaticon.com/icons/png/512/919/919851.png",
    lenguajes: "React JS",
    bimestre: "3er bimestre",
  },
];

const profileBtn = document.querySelector("#completar-perfil");
const materiasBtn = document.querySelector("#obtener-materias");
const verMasBtn = document.querySelector("#ver-mas");
const cambiarTema = document.querySelector('#cambiar-tema');

profileBtn.addEventListener("click", renderizarDatosUsuario);
materiasBtn.addEventListener("click", recorrerListadoYRenderizarTarjetas);
cambiarTema.addEventListener("click", alternarColorTema);
/* --------------------------- NO TOCAR HASTA ACÁ --------------------------- */

function obtenerDatosDelUsuario() {
  /* --------------- PUNTO 1: Escribe tu codigo a partir de aqui --------------- */
  datosPersona.nombre = prompt('Ingresa tu nombre');
  datosPersona.edad = 2021 - prompt('Ingresa el año en que naciste');
  datosPersona.ciudad = prompt('Ingresa la ciudad en la que vives');
  datosPersona.interesPorJs = confirm('¿Te interesa JavaScript?')? 'Si' : 'No';
}

function renderizarDatosUsuario() {
  /* ------------------- NO TOCAR NI ELIMINAR ESTA FUNCION. ------------------- */
  obtenerDatosDelUsuario();
  /* --------------- PUNTO 2: Escribe tu codigo a partir de aqui --------------- */
  const nombre = document.querySelector('#nombre');
  const edad = document.querySelector('#edad');
  const ciudad = document.querySelector('#ciudad');
  const javascript = document.querySelector('#javascript');

  nombre.innerText = datosPersona.nombre;
  edad.innerText = datosPersona.edad;
  ciudad.innerText = datosPersona.ciudad;
  javascript.innerText = datosPersona.interesPorJs;
}


function recorrerListadoYRenderizarTarjetas() {
  /* ------------------ PUNTO 3: Escribe tu codigo desde aqui ------------------ */
  const fila = document.querySelector("#fila");
  if (fila.innerHTML.length === 0) {
    listado.forEach((materia)=>{
      fila.innerHTML += `
                      <section class= "caja">
                          <img src="${materia.imgUrl}" alt='${materia.lenguajes}'>
                          <p class='lenguajes'> Lenguajes: ${materia.lenguajes} </p>
                          <p class='bimestre'> Bimestre: ${materia.bimestre} </p>
                      </section>
  `
  });
}}

function alternarColorTema() {
  /* --------------------- PUNTO 4: Escribe tu codigo aqui --------------------- */
 const sitio = document.querySelector('#sitio');
 sitio.classList.toggle('dark');
}

/* --------------------- PUNTO 5: Escribe tu codigo aqui --------------------- */

const textoOculto = document.querySelector('#sobre-mi')
window.addEventListener('keyup', function (e) {
  if (e.key == 'f') {
    textoOculto.classList.remove('oculto');
  }
});