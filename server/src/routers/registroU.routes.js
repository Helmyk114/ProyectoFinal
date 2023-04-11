const express = require('express');
const router = express.Router();

//Importar controlador
const controllerRU = require('../controllers/registroU.controller')

router.post('/',controllerRU.registroUsuario);

module.exports = router;