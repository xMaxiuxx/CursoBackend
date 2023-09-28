// Variable para definir http e importar el mòdulo http 
const http = require("http");
const exportFromotroejem= require("./otroejem")
// require es una funcion 
//!TODO una palabra seguida de parentesis es una funcion donde se le pasan 1 2 o 3 argumentos o ninguno Ejemplo require()
//! require() ==> importa codigo busca codigo, requiere puede estar en nuestros archivos o ser de una libreria externa 
// Create server recibe como parametro un requestlistener 

 //!TODO Usamos DOT NOTATION notacion de puntos para acceder a la propiedad de un objeto ejemplo quiero acceder al nombre de (persona)
 //!TODO mostramos el objeto persona => agregamos . punto ==> persona.persona = con esto accedemos al objeto persona ==> añadimos otro . punto y accedemos a la propiedad del segundo objeto persona en este caso . name = persona.persona.name === muestra el name del objeto persona

// console.log(persona.persona);// accedemos al objeto persona dentro de persona{ name: 'Maxi', edad: '24', cinturon: 'marron' }
// console.log("Me llamo ",persona.persona.name); // accedemos a la propiedad  name dentro del  objeto persona dentro de persona
// console.log("soy cinturon",persona.persona.cinturon);// accedemos a la propiedad  cinturon  dentro del  objeto persona dentro de persona
// console.log({exportFromotroejem})
function requestController (){
    // Logica de nuestra funcion 
    // console.log({__dirname}); // repuesta de la funcion controller 
}


//Configuracion del servidor 
const server = http.createServer(requestController)

// va a escuchar en el puerto 3000
server.listen(5000) 
console.log("Escuchando en el puerto 5000");
