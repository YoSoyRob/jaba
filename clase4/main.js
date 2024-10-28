
//let numeros = []; //arreglos vacios
/*desde la declaración se pueden insertar datos, 
entre cada elemento, debe de ir una , (coma) */

const numeros = [1,2,3,4,5,6,7]

const frutas = [
    "manzana",
    "pera",
    "uva",
    "platano",
    "mango",
    "fresa",

]

console.log(numeros);

console.log(numeros [4] ); /*para identificar un valor, 
se empieza a contar considerando como primera posicion el 0, en este ejemplo,
en la posicion 4, se encuentra el numero 5 */

console.log(numeros [4] + numeros [3]); /* realiza la suma de los elementos
 que se encuentran en la posicion 4 y 5 */

numeros [4] = 10; 

console.log (numeros)

console.log (numeros.length) //cantidad de elementos que hay 

for (let i= 0; i < numeros.length; i++){
    //console.log(i)
    console.log(numeros [i])
}

console.log (frutas)

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i].toUpperCase()) //al poner un punto (.) indicara los metodos disponibles de acuerdo al tipo de dato
}

let miFrutaFavorita = frutas.indexOf("Mango".toLowerCase()) /*muestra la posicion del elemento buscado, si no existe, arroja un -1, 
.toLowerCase convierte una cadena en minusculas .toUpperCase, convierte todas a mayusculas aun que se encuentren guardadas en minusculas,
al usar el .toLowerCase se debe de poner () al final*/

console.log(miFrutaFavorita)

console.log (frutas[miFrutaFavorita])

numeros.push(-3);

frutas.unshift("sandia") //en el ejemplo fue "pera"

console.log(numeros)

console.log(frutas)

const pasatiempos = "videojuegos guitarra gym musica";

const arregloPasatiempos = pasatiempos.split(" "); /*el valor que se señale aqui, es el que considerara para separar 
los valores dados cuando los encuentre */

//const pasatiemposUnidos = arregloPasatiempos.join() //une los valores

console.log(arregloPasatiempos)

const nuevosPasatiempos =arregloPasatiempos.slice(1,3) //unicamente muestra los valores que contengan las posiciones señalas

console.log(nuevosPasatiempos)

arregloPasatiempos.splice(1,2, "programar", "dormir") /*elimina los valores contenidos entre a partir de las posiciones indicadas, 
y al agregar " " añade algun valor en las posiciones señaladas*/

console.log(arregloPasatiempos)

const letters = ['b', 'P', 'd', 'a'];

console.log(letters)

letters.reverse() //los valores aparecen en reversa

console.log(letters) // para poner una comilla es alt + 39 -> ''

const letters1 = ['a', 'e', 'i'];
const letters2 = ['o', 'u'];
const letters3 = [1, 2];

const lettersConcat = letters1.concat(letters2, letters3);//une los valores de los objetos que se indiquen

console.log(lettersConcat)

