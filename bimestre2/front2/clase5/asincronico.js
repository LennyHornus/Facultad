// Modificando el DOM
let titulo = document.querySelector('h1');
titulo.innerHTML += "Soy un titulo nuevo";  //Con el += puedo concatenar el contenido anterior con el nuevo contenido

let parrafoEspecial = document.querySelector('.parrafoEspecial')
parrafoEspecial.innerHTML = "Un texto con algo <i> en cursiva </i>"
parrafoEspecial.innerText += ' Texto agregado con inner text'
console.log(parrafoEspecial);

// Propiedad style 
titulo.style.color = 'cyan';
titulo.style.textAlign = 'center';
titulo.style.fontSize = '20px';
titulo.style.backgroundColor = '#dddddd';

// Template literals

const body = document.querySelector('#body');

function agregarAlgo(tituloh2, parrafo) {
    
    const templateAAgregar = `
     <header>
     Soy capo che
     </header>

     <h2>${tituloh2}</h2>
     <p>${parrafo}</p>

     <footer>
      Ni idea aca puedo poner algo tambien xd
     </footer>
    `;

    body.innerHTML += (templateAAgregar);
};

// Ejecuto la funcion de arriba
agregarAlgo('Template literal', 'PARRAFO EJEMPLO');
agregarAlgo('Sabes que tenes razon loco', 'Aguante boca');


// Modificando estilos
// Lo mas importante es que lo que en CSS llega '-', aca se escribe con camelCase, ej: fontSize

// Modificando clases
// classList nos permite interactuar con las clases de un elemento html una vez lo seleccionamos con document.etc...
body.classList.add('Nombre de la clase a agregar');
body.classList.remove('Nombre de la clase a quitar');
body.classList.toggle('Nombre de la clase a cambiar');
body.classList.contains("clase a buscar");
