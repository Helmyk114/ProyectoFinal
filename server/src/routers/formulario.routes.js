const express = require('express');
const router = express.Router();

//Importar el controlador 
const controllerF = require('../controllers/formulario.controller');


router.get('/',controllerF.mostrarComentarios);
router.post('/', controllerF.crearComentario);


module.exports =  router;