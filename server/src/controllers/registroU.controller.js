const db = require('../dataBase/baseDatos');
const jwt = require('jsonwebtoken')

controllerRU = {};

controllerRU.registroUsuario = (req,res) =>{
    db.query('INSERT INTO usuario SET ?', [req.body]);
    res.json({text: 'Usuario Creado'})
}

module.exports = controllerRU;