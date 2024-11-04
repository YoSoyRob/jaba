//una sola comilla alt + 39 -> ''
//comilla inclinada alt + 96 -> ``

// en el let, los "id" de HTML se escriben con camelCase 

let imageBtn = document.getElementById("image-btn") /*"document" forma en la que se accede a los elementos, con el getElementById busca el elemento a traves del ID*/

console.log(imageBtn)

let containers = document.getElementsByClassName("container");

console.log(containers) // se debe insertar el nombre del "let"

let arrayContainers = Array.from(containers) //convierte un objeto iterable a un arreglo

console.log(arrayContainers)

//el ID solo se puede tener uno por elemento
//lo anteriores son metodos TRADICIONALES

// LOS SIGUIENTES SIN METODOS ACTUALES
//elemento .querySelector(sel): busca el primer elemento que coincide con el selector CSS sel; si no, arroja un null
//arreglo .querySelectorAll(sel) busca todos los elementos que coinciden con el selecctor CSS sel; si no, arroja []

let imageBtnQuery = document.querySelector("#image-btn")    //es el mas nuevo y mas util, se escribe al igual que en CSS
console.log(imageBtnQuery)

let containersQuery = document.querySelectorAll(".container"); //abarca todos los nombrados iguales
console.log(containersQuery)

let arrayContainersQuery = [...containersQuery] //convierte la lista en un arreglo 
console.log(arrayContainersQuery)

let titlesContainers = document.querySelectorAll(".container h1") /*señala todos los h1 que se encuentren en las
etiquetas containers */
console.log(titlesContainers)


//Creación y adición de elementos
let paragraph = document.createElement("p") //crea un elemento de parrafo
console.log(paragraph)

let paragraphText = document.createTextNode("hola mundo") //crea un elemento de texto 
console.log(paragraphText)

paragraph.appendChild(paragraphText) //appendChild significa que se añadira un "nodo hijo" y convina los mencionados

arrayContainersQuery[0].appendChild(paragraph) //se muestra en la pagina y no en la consola
//modificacion de texto en un elemento
titlesContainers[0].textContent = "Modificando el NODO" /* el "0" corresponde a la posicion del array que se quiere 
modificar, por lo que unicamente cambiara el contenido en pagina de esa posicion*/

titlesContainers[1].innerHTML = "Modificando el HTML" /*innerHTML es una propiedad */

let specialContainer = document.querySelector("#special-container")
specialContainer.innerHTML = `
    <h1>Aqui se inserta HTML</h1>
    <p>innerHTML</p>
`; //inner tiene problemas de seguridad


//listener 
let displayedImage = true;

const handleClick = () => {
    console.log("esta tocandome");
    console.log(containers[0].children);
    if(displayedImage) {
        containers[0].children[1].remove();
        displayedImage = false;
    } else {
    let newImage = document.createElement("img");
    newImage.src = "/clase6/imagen/gato.jpg";
    newImage.alt = "gato";
    containers[0].insertBefore(newImage, containers[0].children[1])
    displayedImage= true;
}
}
//en el anterior, desaparece y aparece en codigo html la imagen

/*
function handleClick (){
    console.log("esta tocandome");
    let imageContainer = document.querySelector(".container img");
    //console.log(imageContainer) //muestra la imagen en la consola
    //imageContainer.style.display = "none"; //desaparece la imagen, igual en CSS si se usa el "none" desaparecen los datos
    if (imageContainer.style.display === "block") {
        imageContainer.style.display = "none";
    } else {
        imageContainer.style.display = "block"
    } //para que este funcione se deben de quitar las lineas 67 y 68 de este codigo
}

*/


imageBtn.addEventListener("click", () => handleClick () ) /*muestra el console.log en la consola al picar el boton
tambien se puede llamar con la funcion sin parentesis, () => handleClick()*/