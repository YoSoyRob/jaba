//una sola comilla alt + 39 -> ''
//comilla inclinada alt + 96 -> ``


const formulario = document.querySelector("#formulario-sesion") //capturamos el formulario 

const handleForm = (event) => {
    event.preventDefault(); //evita que la pagina se recarge al subir un formulario
    const inputUsuario = document.querySelector("#formulario-sesion #abc") //señalar dentro de las comillas la ruta especifica
    console.log (inputUsuario.value)
}

formulario.addEventListener("submit", (event) => handleForm(event));// le añadimos un evento tipo submit al formulario

//tarea, hacer inicio de sesion con correo y contraseña, y hacer console.log a ambos