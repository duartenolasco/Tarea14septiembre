function login(form){
    if(form.cliente.value=="Lester"){
        if(form.contra.value=="2137"){
            alert("Exitoso Ingreso");
            window.location.href = "inicio.html";
        }else{
            alert("Error de contraseña");
        }
    }else{
        alert("No existe el cliente ingresado");
    }
}