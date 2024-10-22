/*
for (let i = 0; i < 5; i++) {
    console.log(i);
}

console.log("el ciclo termino")

let limite = 100;

for (let i = 0; i < limite; i++) {
    if (i % 2 === 0) {
        console.log (`El numero ${i} es par`);
    } else {
        console.log (`El numero ${i} es impar`);
    }
}

let mensaje = "Hola mundo";
let mensajeInvertido = "";

console.log (mensaje.charAt (6)); //solo muestra la letra que se encuentre posicionada en el lugar indicado




for (let i =mensaje.length - 1; i >= 0; i--) {
    mensajeInvertido += mensaje.charAt (i)
}

for(let i = 0; i < mensaje.length; i++ ) {
    console.log(mensaje [i]);
}

// ciclo for, puede ir de reversa, 

console.log(mensaje)
console.log(mensajeInvertido)

let index = 0;

while(index <10) {
    console.log(index)
    index++; //es necesario establecer un limite con una variable de control
}

// con el while, se debe insertar manualmente 
// con codepen, se pueden hacer testeos
// ++ agrega uno

let numeroAleatorio = Math.floor (Math.random()*100)

while(numeroAleatorio !==50){
    console.log(numeroAleatorio);
    numeroAleatorio = Math.floor(Math.random()*100);
}

let numeroAleatorio2 = 50;

do {
    console.log(numeroAleatorio2);
    numeroAleatorio2 = Math.floor(Math.random()*100); //genera un numero aleatorio del 0 al 100
} while(numeroAleatorio2 !== 50) //mientras sea diferente de 50 

 */

/*
//aparece un cuadro de dialogo en pantalla y lo muestra en consola
let numero = prompt("escribeme un numero");



console.log(numero)

let numero2 = prompt("dame otro numero");

console.log(numero2)

*/
//pide un pin de acceso


let pin = 56
let pinUser= prompt("indica el PiN")

while( pinUser != pin) {
    console.log("ta remal el pin")
    pinUser=prompt("da el bueno")
}
console.log("Contraseña correcta");


/*
let contraseñaCorrecta = "tacosalpastor4"; 
let contraseñaIngresada = ""; 
while (contraseñaIngresada !== contraseñaCorrecta) {
  contraseñaIngresada = prompt("Ingrese la contraseña:");
  if (contraseñaIngresada !== contraseñaCorrecta) {
    alert("Contraseña incorrecta. Intente nuevamente.");
  }
}
alert("¡Contraseña correcta!");
*/

/*
const contraseñaCorrecta = "1234567"; // Contraseña
let contraseñaIngresada;
let intentos = 1
for (let i = 0; i < intentos; i++) {
  contraseñaIngresada = prompt("Ingrese la contraseña:");
  if (contraseñaIngresada === contraseñaCorrecta) {
    alert("¡Contraseña correcta! Acceso concedido.");
    break; 
  } else {
    alert("Contraseña incorrecta. Intente nuevamente.");
  }
}

*/

/* TAREA
1. Crear un programa donde el usuario pida un numero mediante un prompt de estrellas (asteriscos) y que nos lo muestre en consola.

usuario = 5;

******

usuario 10;

**********

2. Crear un programa donde el usuario pida un numero mediante un prompt filas y dependiendo del número de fila, nos muestra el número de estrellas (asteriscos) y que nos lo muestre en consola.

usuario = 5;

*
**
***
****
*****

usuario = 3;

*
**
***

*/