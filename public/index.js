require("dotenv").config()
console.log("Este JVS Va a ser interpretado por el Navegador");
process.env.PORT
// Obtener los elementos del html y guardarlo en constantes
const button = document.querySelector("button")
// agregamos el evento addeventlistener que mantenga el boton escuchando en el evento click
button.addEventListener("click", function(){
    console.log("CLICK");
    // con la funcion fetch podemos hacer peticiones http 
    fetch(`http://localhost:${PORT}/users`)
})  