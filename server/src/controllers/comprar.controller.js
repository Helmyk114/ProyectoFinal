const db = require('../dataBase/baseDatos');

controllerC = {};

controllerC.insertarCompra = (req,res) =>{
    db.query('INSERT INTO compra SET ?',[req.body]);
    res.json({text: 'Compra Creada'})
};

controllerC.mostrarCompra = (req,res) =>{
    db.query('SELECT productos.nombreProducto, compra.unidades, productos.precio, compra.total FROM compra inner join productos on compra.idProducto = productos.idProducto',(err, rows,fields) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.error(err)
        }
    });
}

module.exports = controllerC;