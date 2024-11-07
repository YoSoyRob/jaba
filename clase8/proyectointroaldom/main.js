const comentario = document.querySelector("#comentarioss") 

const handleForm = (event) => {
    event.preventDefault(); 
    const inputUsuario = document.querySelector("#comentarioss #coment") 
    console.log (coment.value)
}


comentario.addEventListener("submit", (event) => handleForm(event));

//tarea, hacer inicio de sesion con correo y contraseña, y hacer console.log a ambos