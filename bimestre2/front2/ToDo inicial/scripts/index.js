// Traigo desde el DOM los elementos que necesito
const formularioInicio = document.querySelector('form');
const inputEmail = document.querySelector('.inputEmail');
const inputPass = document.querySelector('.inputPassword');
const btnSubmit = document.querySelector('button');

formularioInicio.addEventListener('submit', (e)=>{
    e.preventDefault();     // Freno el envio del formulario

})