const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const path = require('path');



//Importando las rutas
const productoRoutes = require('./routers/productos.routes')



//Mediadores
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))


//Ruta para productos
app.use('/vender/productos',productoRoutes)








//Puerto de conexion al servidor
app.listen(3000,() =>{
    console.log('El servidor se esta ejecutando en el puerto 3000');
});