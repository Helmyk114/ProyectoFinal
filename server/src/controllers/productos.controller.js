const db = require('../dataBase/baseDatos');

controllerP = {};

controllerP.listarProductos = (req,res) =>{
    db.query('SELECT * FROM productos',(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.error(err)
        }
    });
}

controllerP.listarProductoCategoria = (req,res) =>{
    const { categoria } = req.params;
    db.query('SELECT * FROM productos WHERE categoria = ?',[categoria],(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.error(err)
        }
    });
};

controllerP.listarProductoOferta = (req,res) =>{
    const { descuento } = req.params
    db.query('SELECT * FROM productos WHERE descuento = ?',[descuento],(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.error(err)
        }
    });
};

controllerP.crearProducto = (req,res) =>{
    db.query('INSERT INTO productos SET ?',[req.body]);
    res.json({text: 'Producto Creado'})
};

controllerP.eliminarProducto = (req,res) =>{
    const { id } = req.params;
    db.query('DELETE FROM productos WHERE idProducto = ?',[id])
    res.json({text: 'Eliminando Producto' + req.params.id})
};



module.exports = controllerP;