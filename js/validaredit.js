var nombre = document.getElementById("idname")
var direccion = document.getElementById("iddireccion")
var telefono = document.getElementById("idtel")
var email = document.getElementById("idcorreo")
var usuario = document.getElementById("iduser")
var fecha = document.getElementById("iddate")
var error = document.getElementById("error")
error.style.color ='red';

var form = document.getElementById('formularios');
    form.addEventListener('submit', function(evt){
    evt.preventDefault();
    var mensajesError =[];
    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu nombre');
    }

    if(direccion.value === null || nombre.value === ''){
        mensajesError.push('Ingresa tu correo');
    }

    error.innerHTML = mensajesError.join(', ');
}); 
