let nombre = "Roberto" //a la variable nombre, se le asigna un valor, debe ir entre comillas

console.log(nombre)

nombre = "Alejandra";

console.log (nombre)

const pi = 3.14159; 

console.log (pi)
//siempre que se declare una "const" no puede ser reasignada, sin importar el valor, tipo de valor etc, si despues se va a reasignar, se recomienda usar "let"
//pi = 100; 
//console.log (pi)

let apellido = "Martinez"
console.log (apellido)

apellido = "Guillen"
console.log (apellido)

//matematicos
console.log (3%2) // el "%" arroja residuo
console.log (40%9)

let numero = 0;

numero = numero + 10;
console.log (numero)
numero += 10;
console.log (numero)

let numero2 = 0;
numero2= 10;
numero2= "no es un numero";

console.log (numero2)

let caracter = "H";

caracter += "o"
caracter += "1"
caracter += "a"
console.log (caracter)

numero = numero + 10;
console.log (numero)
numero -= 10;
console.log (numero)

//operadores de comparacion

console.log ("------------------------")
console.log ('igualdad')

console.log (5 == "5")
console.log (5 === "5")
console.log (5 === 5)

console.log ('Desigualdad')
console.log (5 != "5")
console.log (5 !== 10)

console.log ("comparacion")
console.log (5 > 2)
console.log (5 > 6)
console.log (5 < 6)
console.log (5 <= 5)
console.log (5 >= 5)

console.log ("Operadores logicos")
//permiten combinar maas de una condicion y asi cumplir con diferentes reglas

console.log (true && true) //"and" ambas se deben de cumplir para que de un "true"
console.log (true && false)
console.log (true || false) //"or" uno de los valores debe ser true
console.log (5 < 2 || 7 < 10)
console.log (!true) //"not" niega el valor asignado
console.log (!false) 
console.log (!5 < 2)

console.log ("estructura de control")

if(5 < 2) {
    console.log("esto es verdadero")
} else {
    console.log("esto es falso")
}

let randomNumber = Math.random ()*100;
randomNumber = Math.ceil (randomNumber)

if(randomNumber >= 95) {
    console.log(`El numero aleatorio ${randomNumber} es mayor o igual a 95`);
} else {
    console.log(`El numero aleatorio ${randomNumber} es menor a 95`);
}   

//para usar ` se inserta alt + 96

const puntajeCliente = 1200;
let porcentaje = null

if(puntajeCliente >= 3000) {
    porcentaje = 50
} else if (puntajeCliente >= 1000) { porcentaje = 25
} else if (puntajeCliente >= 500) { porcentaje = 5
} else {
    porcentaje = 0
}
//la sigueinte es la forma optimizada
console.log(`El cliente tienen ${porcentaje} % de descuento`);

// se puede insertar {console.log(`El cliente tiene 50% de descuento`)}

const edadU = 21; 
if (edadU >= 18) {
    edad = "mayor de edad";
}

console.log (`la persona es ${edad}`)