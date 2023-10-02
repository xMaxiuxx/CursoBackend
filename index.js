//!TODO ASI CREAMOS UN SERVIDOR CON EXPRESS 
 //! Primero requiere express 
 const express = require('express')
 //TODO requerimos la variable de entorno
require("dotenv").config()
const app = express()
const port = process.env.PORT
//! Servir archivos estaticos 
app.use(express.static('public'));

//TODO Esta configurando rutas 
app.get('/',  function (req, res)  {
    // respuesta tiene un metodo .send porque express asi lo quiso
  res.send('Hello World!')
})
app.get('/users',  function (req, res)  {
    // respuesta tiene un metodo .send porque express asi lo quiso
  res.send([{name : "Maxi" }, {name: "Marcos"}])
})

//TODO Pone a escuchar la app en un puerto  
// Funcion flecha o arrowfunction ()=>{} 
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
