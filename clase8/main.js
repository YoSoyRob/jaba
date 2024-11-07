//una sola comilla alt + 39 -> ''
//comilla inclinada alt + 96 -> ``

let rojo = document.querySelector("#rojo")
let amarillo = document.querySelector("#amarillo")
let azul = document.querySelector("#azul")
let verde = document.querySelector("#verde")
let body = document.querySelector("body")

const handleColor = (event) => { //addEventListener
    console.log(event);
    

}

rojo.addEventListener("click", (e) => handleColor (e))


  /*
rojo.addEventListener("click", () => body.style.backgroundColor = "red")
amarillo.addEventListener("click", () => body.style.backgroundColor = "yellow")
azul.addEventListener("click", () => body.style.backgroundColor = "blue" )
verde.addEventListener("click", () => body.style.backgroundColor = "green" )
*/

