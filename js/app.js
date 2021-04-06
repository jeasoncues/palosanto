var linea =  document.querySelector('#linea');
var linea2 =  document.querySelector('#linea2')




if(screen.width < 400){
    linea.innerHTML = `<i class="fas fa-grip-lines fa-4x"></i>`;
    linea2.innerHTML = `<i class="fas fa-grip-lines fa-4x"></i>`;
}else{
    linea.innerHTML = `<i class="fas fa-grip-lines-vertical fa-4x"></i>`;
    linea2.innerHTML = `<i class="fas fa-grip-lines-vertical fa-4x"></i>`;
}