const express = require('express');
const router = express.Router();

//Importar los controladores
const controllerP = require('../controllers/productos.controller')


router.get('/',controllerP.listarProductos);
router.get('/:categoria',controllerP.listarProductoCategoria);
router.get('/descuento/:descuento',controllerP.listarProductoOferta);
router.post('/',controllerP.crearProducto);
router.delete('/:id',controllerP.eliminarProducto);


module.exports =  router;