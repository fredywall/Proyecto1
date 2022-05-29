let usuario = document.getElementById('user');
let contraseña = document.getElementById('pass');

function validacion(){
    if(usuario.value == ''){
        alert("usuario no puede estar vacio")
        return false
    }
    
    if(!usuario.value.includes('@')){
        alert("Usuario incorrecto. Falta el '@' en el usuario")
        return false
    }
     
        if(contraseña.value == ''){
        alert("clave no puede estar vacio")
        return false
    }
     
        
    document.write (`¡Bienvenido!`)

  return true
}

