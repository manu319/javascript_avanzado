var miBoton = document.getElementById("enviar");
var miForm = document.getElementById("formulario");

miBoton.addEventListener("click", (evento) => {
    evento.preventDefault();

    valido = validar();

    if(valido == true){
        miForm.submit();   
    }
    
})

function validar(){
    var nombre = document.getElementById("nombre");
    var apellidos = document.getElementById("apellidos");
    var telefono = document.getElementById("telefono");
    var correo = document.getElementById("correo");
    /*var privacidad = document.getElementById("privacidad");*/ 
    var correcto = true;

    /***************Nombre ************/
    
    if(nombre.value == null || nombre.value == ""){
        setError(nombre, "El nombre no puede estar vacío.");
        correcto = false;
    }else{
        var name_regular = /^[a-zA-Z ]{2,15}$/;

        if(!name_regular.exec(nombre.value)){
        setError(nombre, "El nombre solo debe estar compuesto de letras.");
    
        correcto = false;
        }else{
            setSuccess(nombre);
        }
    }

    /********Apellidos *******/

    if(apellidos.value == null || apellidos.value == ""){
        setError(apellidos, "El campo apellidos no puede estar vacío");
        correcto = false;
    }else{
        var name_regular = /^[a-zA-Z ]{5,40}$/;

        if(!name_regular.exec(apellidos.value)){
            setError(apellidos, "Los apellidos solo deben estar compuestos de letras.");
        
        correcto = false;    
        }else{
            setSuccess(apellidos);
        }
    }

    /**************Teléfono ********/

    if(telefono.value == null || telefono.value == ""){
        setError(telefono, "El campo teléfono no puede estar vacío");
        correcto = false;
    }else{
        var name_regular = /^[0-9]{9,9}$/;

        if(!name_regular.exec(telefono.value)){
            setError(telefono, "El teléfono debe tener 9 números");
        
            correcto = false;
        }else{
            setSuccess(telefono);
        }
    }

    /********************Correo electrónico ******************/

    if(correo.value == null || correo.value == ""){
        setError(correo, "El campo correo electrónico no puede estar vacío");
        correcto = false;
    }else{
        var name_regular = /^(.+@.+..+)$/
        
        if(!name_regular.exec(correo.value)){
            setError(correo, "La estructura del correo electrónico no es correcta.");

            correcto = false;
        }else{
            setSuccess(correo);
        }
    }

    if(!politica.checked){
        alert("Debes aceptar las condiciones de privacidad");
        correcto = false;
    }else{
        setSuccess(politica);
    }
    
    if(correcto == true){
        return true;
    }else{
        return false;
    }
}

function setError(input, mensaje){
    const formControl = input.parentElement;
    const small = formControl.querySelector("small");
    formControl.className = "form-control error";
    small.innerText = mensaje;
}

function setSuccess(input){
    const formControl = input.parentElement;
    formControl.className = "form-control success";
}