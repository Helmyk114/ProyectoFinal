const express = require('express');
const router = express.Router();

//Impostar controlador
const controllerU = require('../controllers/usuarios.controller')

router.get('/',controllerU.listarUsuarios);
router.post('/iniciarSesion',controllerU.iniciarSesion)

router.post('/test',controllerU.prueba)

module.exports = router;