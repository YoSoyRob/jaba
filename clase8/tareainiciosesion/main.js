const correo = document.querySelector("#inicio-sesion") //capturamos el formulario 

const handleForm = (event) => {
    event.preventDefault(); //evita que la pagina se recarge al subir un formulario
    const inputUsuario = document.querySelector("#inicio-sesion #correo") //señalar dentro de las comillas la ruta especifica
    const contrasena = document.querySelector("#inicio-sesion #password")
    console.log (inputUsuario.value)
    console.log (contrasena.value)
}


correo.addEventListener("submit", (event) => handleForm(event));// le añadimos un evento tipo submit al formulario


//tarea, hacer inicio de sesion con correo y contraseña, y hacer console.log a ambos