document.querySelector('#submit').addEventListener('click', function(e){
    e.preventDefault();

    
    let formulario =  document.querySelector('#formulario');
    let nombre = document.querySelector('#nombre').value;
    let email = document.querySelector('#email').value;
    let celular = document.querySelector('#celular').value;
    let asunto = document.querySelector('#asunto').value;
    let mensaje = document.querySelector('#mensaje').value ? swal("¡Estamos para ayudarte!", "Recuerda que protegemos tus datos", "success") :  swal("¡Completa todos los campos!", "Es obligatorio", "error");

    let url = "https://api.whatsapp.com/send?phone=(+51)915393257&text=*Norte Inti | Palo Santo - Contacto  Página Web*%0A%0A*1.-¿Cual es tu nombre?* " + nombre + "%0A*2.-Email:* " + email + "%0A*3.-Asunto:* " + asunto + "%0A*4.-Mensaje :* " + mensaje; 
  
    formulario.reset();

    window.open(url);
})