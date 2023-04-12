const express = require('express');
const morgan = require('morgan');
const cors = require('cors')
const path = require('path');


//Importando las rutas
const productoRoutes = require('./routers/productos.routes');
const usuariosRoutes = require('./routers/usuarios.routes');
const formularioRoutes = require('./routers/formulario.routes');
const registroURoutes = require('./routers/registroU.routes');
const compraRoutes = require('./routers/comprar.routes')


//Mediadores
const app = express();
app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Ruta para productos
app.use('/vender/productos',productoRoutes);

//Ruta para usuarios
app.use('/usuario',usuariosRoutes);

//Ruta para el formulario
app.use('/formulario',formularioRoutes);

//Ruta para el registro de usuarios
app.use('/registro',registroURoutes);

//Ruta para la compra
app.use('/compra',compraRoutes);

//Puerto de conexion al servidor
app.listen(3000,() =>{
    console.log('El servidor se esta ejecutando en el puerto 3000');
});