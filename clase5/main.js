//una sola comilla alt + 39 -> ''
//comilla inclinada alt + 96 -> ``


const persona = { //objetos es mejor escribir en vertical
    nombre: "Roberto", 
    apellido: "Martinez",
    edad: 2024 - 1990, // pueden insertarse operaciones o los numeros
    esMayorDeEdad: true,
    pasatiempo: ["videojuegos", "guitarra","gym"],
    mascota: { //se pueden agregar objetos dentro de objetos
        nombre: "cali",
        especie: "perro",
    },

    saludo: function () {
        return `Hola me llamo ${this.nombre} ${this.apellido}`
    }

}

console.log(persona.pasatiempo [0]); //muestra solo un valor de pasatiempo, el operador es el punto para acceder al metodo

console.log(persona.saludo()) //metodo

console.log(persona["nombre"]) //cuando se usa corchetes, debe de ir entre comillas, el operador son los corchetes  

console.log(persona.edad)

console.log(persona.mascota.nombre)

//persona.ocupacion = "abogado" 
//console.log(persona.ocupacion) asi se agrega una propiedad y modifica el objeto, se recomienda ponerlo despues del objeto, por lo que hacerlo asi es mala practica

//destructuracion: crea una variable a partir de claves, el cual solo funciona cuando se tiene solo un objeto en el archivo

const{nombre,apellido, edad} = persona  

console.log(nombre)

//objetoA.metodo(parametro) asi se invoca un metodo

/*
const artista = {
    nombre: "Travis Scoot",
    albums: ["utopia", "days before rodeo", "astroworld"],
    genero: "rap",

    saludo: function() {
        return `Hola cara de bola soy ${this.nombre}`
    }
}

console.log(artista.saludo())
console.log(artista.albums [2])



const artista1 = {
    nombre: "Macmiller",
    albums: ["circles", "best day ever", "swimming"],
    genero: "rap",

    saludo: function() {
        return `Hola hola mi nombre ${this.nombre}`
    }
}

console.log(artista1.saludo())
console.log(artista1.albums [2])

const artista2 = {
    nombre: "Alvaro Diaz",
    albums: ["Felicilandia", "sayonara", "diaz antes"],
    genero: "rap",

    saludo: function() {
        return `Alojaaa soy ${this.nombre}`
    }
}

console.log(artista2.saludo())
console.log(artista2.albums [2])
*/

const artistas = [
    {
        nombre: "Travis Scott",
        albums: ["Utopia", "Days before rodeo", "Astroworld"],
        genero: "rap",
    },
    {
        nombre: "Mac Miller",
        albums: ["Circles", "Best day ever", "Swimming"],
        genero: "rap",
    },
    {
        nombre: "Alvaro Diaz",
        albums: ["Felicilandia", "Sayonara", "Diaz antes"],
        genero: "rap",
    }
]

for (let i = 0; i < artistas.length; i++) { 
    console.log(artistas[i].nombre)
}

//JASON, es como se almacena informacion en la web y MONGO DB

for (let i = 0; i < artistas.length; i++) { 
    console.log(`Albums de: ${artistas[i].nombre}`);
    let albumsArtista = artistas [i].albums;
    for(let j = 0; j<albumsArtista.length; j++)
        console.log(albumsArtista[j])
}

const jsonArtistas = JSON.stringify(artistas[0]);

console.log(jsonArtistas);

const artistaConvertido = JSON.parse(jsonArtistas);

console.log(artistaConvertido);

//ENTREGABLE 




