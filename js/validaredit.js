var nombre = document.getElementById("idname")
var direccion = document.getElementById("iddireccion")
var telefono = document.getElementById("idtel")
var email = document.getElementById("idcorreo")
var usuario = document.getElementById("iduser")
var fecha = document.getElementById("iddate")
var descripcion = document.getElementById("iddescripcion")
var precio = document.getElementById("idprecio")
var imagen = document.getElementById("idimagen")
var estado = document.getElementById("idestado")
var tipopago = document.getElementById("idtipopago")
var categoria = document.getElementById("idcategoria")
var contraseña = document.getElementById("idcontraseña")
var mensaje = document.getElementById("idmensaje")
var error = document.getElementById("error")
error.style.color ='red';

    function enviarformcliente(){
        console.log('enviando...')
    
    var mensajesError =[];

    if(nombre.value === null || nombre.value === ''){
        mensajesError.push('<p>Ingresa tu nombre </p>');
    }

    if(direccion.value === null || direccion.value === ''){
        mensajesError.push('<p>Ingresa tu direccion</p>');
    }

    if(telefono.value === null || telefono.value === ''){
        mensajesError.push('<p>Ingresa tu telefono</p>');
    }

    if(email.value === null || email.value === ''){
        mensajesError.push('<p>Ingresa un correo</p>');
    }

    if(usuario === null || usuario.value === ''){
        mensajesError.push('<p>Ingresa un tipo de usuario</p>')
    }

    if(fecha === null || fecha.value === ''){
        mensajesError.push('<p>Ingresa una fecha</p>')
    }

    error.innerHTML = mensajesError.join('');
    return mensajesError.length === 0;
}; 

    function enviarformnproductos(){
        console.log('Enviando....')

    var mensajesError =[];

    if(nombre.value === null || nombre.value === ''){
    mensajesError.push('<p>Ingrese un nombre de producto </p>');
    }

    if(descripcion.value === null || descripcion.value === ''){
        mensajesError.push('<p>Ingrese una descripcion</p>')
    }

    if(precio.value === null || precio.value === ''){
        mensajesError.push('<p> Ingrese un precio</p>')
    }

    if(imagen.value === null || imagen.value ===''){
        mensajesError.push ('<p>Ingrese una imagen</p>')
    }
    error.innerHTML = mensajesError.join('');
    return mensajesError.length === 0;
};

    function enviarformeditcompra(){
        console.log('Enviando....')

    var mensajesError =[];

    if(nombre.value === null || nombre.value === ''){
    mensajesError.push('<p>Ingrese un nombre de producto </p>');
    }

    if(estado === null || estado.value === ''){
        mensajesError.push('<p>Ingresa un estado</p>')
    }

    if(precio.value === null || precio.value === ''){
        mensajesError.push('<p> Ingrese un monto</p>')
    }

    if(tipopago.value === null || tipopago.value === ''){
        mensajesError.push('<p> Ingrese un tipo de pago</p>')
    }

    if(categoria.value === null || categoria.value === ''){
        mensajesError.push('<p> Ingrese una categoria</p>')
    }

    if(fecha === null || fecha.value === ''){
        mensajesError.push('<p>Ingresa una fecha</p>')
    }

    error.innerHTML = mensajesError.join('');
    return mensajesError.length === 0;
};

function enviarformcontacto(){
    console.log('Enviando....')

    var mensajesError =[];
    if(nombre.value === null || nombre.value === ''){
    mensajesError.push('<p>Ingrese un nombre</p>');
    }
    if(telefono.value === null || telefono.value === ''){
        mensajesError.push('<p>Ingresa tu telefono</p>');
    }
    if(email.value === null || email.value === ''){
        mensajesError.push('<p>Ingresa un correo</p>');
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajesError.push('<p>Ingrese un mensaje</p>');
    }
    error.innerHTML = mensajesError.join('');
    return mensajesError.length === 0;
}

function enviarformlogin(){
    console.log('Enviando....')

    var mensajesError =[];
    if(nombre.value === null || nombre.value === ''){
    mensajesError.push('<p>Ingrese nombre de usuario </p>');
    }

    if(contraseña.value === null || contraseña.value ===''){
        mensajesError.push('<p>Ingrese una contraseña</p>');
    }
    error.innerHTML = mensajesError.join('');
    return mensajesError.length === 0;

}