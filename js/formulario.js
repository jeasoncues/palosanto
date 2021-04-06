var formulario =  document.querySelector('#formulario');
var nombre =  document.querySelector('#nombre');
var email =  document.querySelector('#email');
var celular =  document.querySelector('#celular');
var asunto =  document.querySelector('#asunto');
var mensaje =  document.querySelector('#mensaje');

function enviar(){

    if(nombre.value === '' || email.value === '' || celular.value === '' || asunto.value === '' || mensaje.value === ''){
        swal("¡Completa todos los campos!", "Es obligatorio", "error");
    }else{
        swal("¡Estamos para ayudarte!", "Comunicate con nosotros (+51) 915 393 257", "success");
        formulario.reset();
    }
    return false;
}


