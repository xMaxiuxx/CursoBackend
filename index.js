// Requerimos dotenv y usamos su propiedad de configuracion ()
// dotenv tiene las variables de entorno 
require("dotenv").config()
// Variable para definir http e importar el mòdulo http 
const http = require("http");
// const exportFromotroejem= require("./otroejem")

// require es una funcion 
//!TODO una palabra seguida de parentesis es una funcion donde se le pasan 1 2 o 3 argumentos o ninguno Ejemplo require()
//! require() ==> importa codigo busca codigo, requiere puede estar en nuestros archivos o ser de una libreria externa 
// Create server recibe como parametro un requestlistener 

 //!TODO Usamos DOT NOTATION notacion de puntos para acceder a la propiedad de un objeto ejemplo quiero acceder al nombre de (persona)
 //!TODO mostramos el objeto persona => agregamos . punto ==> persona.persona = con esto accedemos al objeto persona ==> añadimos otro . punto y accedemos a la propiedad del segundo objeto persona en este caso . name = persona.persona.name === muestra el name del objeto persona

// console.log(exportFromotroejem.persona);// accedemos al objeto persona dentro de persona{ name: 'Maxi', edad: '24', cinturon: 'marron' }
// console.log("Me llamo ",exportFromotroejem.persona.name); // accedemos a la propiedad  name dentro del  objeto persona dentro de persona
// console.log("soy cinturon",exportFromotroejem.persona.cinturon);// accedemos a la propiedad  cinturon  dentro del  objeto persona dentro de persona

function requestController (){
    // Logica de nuestra funcion 
    console.log("Mi Primer Deploy!!");
}

//Configuracion del servidor 
const server = http.createServer(requestController)

// Defiinimos la varaible de entorno PORT 
const PORT = process.env.PORT
// va a escuchar en el puerto 3000
server.listen(PORT) 
console.log("Escuchando en el puerto " , PORT);

