const express = require('express');
const router = express.Router();

//Importar el controlador 
const controllerC = require('../controllers/comprar.controller');

router.post('/',controllerC.insertarCompra);
router.get('/',controllerC.mostrarCompra);

module.exports = router;