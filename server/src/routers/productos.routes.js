const express = require('express');
const router = express.Router();

//Importar los controladores
const controller = require('../controllers/productos.controller')


router.get('/',controller.listarProductos);
router.get('/:categoria',controller.listarProductoCategoria);
router.post('/',controller.crearProducto);
router.delete('/:id',controller.eliminarProducto);


module.exports =  router;