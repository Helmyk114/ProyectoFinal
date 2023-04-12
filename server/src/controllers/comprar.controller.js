const db = require('../dataBase/baseDatos');

controllerC = {};

controllerC.insertarCompra = (req,res) =>{
    db.query('INSERT INTO compra SET ?',[req.body]);
    res.json({text: 'Compra Creada'})
};

controllerC.mostrarCompra = (req,res) =>{
    db.query('SELECT ')
}

module.exports = controllerC;