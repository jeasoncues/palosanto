 console.log('hola');
const enviar  =  document.querySelector('#enviar');
 const formulario  = document.querySelector('#formulario');

 enviar.addEventListener('click',function(e){
     e.preventDefault();
     console.log('diste click');
     sendEmail();
 })


 function sendEmail(params) {
    var tempParams = {
        nombre: document.getElementById("nombre").value,
        email: document.getElementById("email").value,
        celular: document.getElementById("celular").value,
        asunto: document.getElementById("asunto").value,
        mensaje: document.getElementById("mensaje").value,
    };

    emailjs.send('service_7f92o5p','template_uskg3gu',tempParams)
     .then(function(res){
        swal("¡Estamos para ayudarte!", "Recuerda que protegemos tus datos", "success");
        formulario.reset();
     })
    
}


