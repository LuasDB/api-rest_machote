//Agregamos express para empezar nuetro servidor ,para intalarlo : npm i express
const express = require('express');
//exportamos nuestra funcion de routerApi para nuestra aplicación
const routerApi = require('./routes');
//Exportamos los Middlewares que utilizaremos para los errores
const { logErrors,errorHandler,boomErrorHandler } = require('./middleware/error.handler');
//Variable para llamar las funciones de express
const app = express();
//Definimos el puerto a utilizar
const port= 3000;
//Para que express pueda hacer la conversión de los JSON
app.use(express.json());
//Mandamos nuestra aplicación a las rutas
routerApi(app);
//Manejo de los Middlewares por parte de express, es importante el orden de los mismos
//Primero mandamos el LogErrors y despues el errorHandler
app.use(boomErrorHandler);
app.use(logErrors);
app.use(errorHandler);


app.listen(port,()=>{
  console.log('Mi port:' + port);
});
