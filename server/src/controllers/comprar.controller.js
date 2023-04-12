const db = require('../dataBase/baseDatos');

controllerC = {};

controllerC.insertarCompra = (req,res) =>{
    db.query('INSERT INTO compra SET ?',[req.body]);
    res.json({text: 'Compra Creada'})
};

controllerC.mostrarCompra = (req,res) =>{
    db.query('SELECT productos.nombreProducto, compra.unidades, productos.precio, compra.total, compra.idCompra, productos.idProducto FROM compra inner join productos on compra.idProducto = productos.idProducto',(err, rows,fields) =>{
        if(!err){
            res.json(rows);
        }
        else{
            console.error(err)
        }
    });
};

controllerC.eliminarProducto = (req,res) =>{
    const { id } = req.params;
    db.query('DELETE FROM compra WHERE idCompra = ?',[id]);
    res.json({text: 'Producto eliminado de la compra'})
}

controllerC.adquirir = (req,res) =>{
    db.query('INSERT INTO vendido SET ?',[req.body]);
    res.json({text: 'Venta creada'})
}

module.exports = controllerC;