const db = require('../dataBase/baseDatos')

controller = {};

controller.listarProductos = (req,res) =>{
    db.query('SELECT * FROM productos',(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.error(err)
        }
    });
}

controller.listarProductoCategoria = (req,res) =>{
    const { categoria } = req.params
    console.log(categoria);
    db.query('SELECT * FROM productos WHERE categoria = ?',[categoria],(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.error(err)
        }
    });
}

controller.crearProducto = (req,res) =>{
    db.query('INSERT INTO productos SET ?',[req.body]);
    res.json({text: 'Producto Creado'})
}

controller.eliminarProducto = (req,res) =>{
    const { id } = req.params;
    db.query('DELETE FROM productos WHERE idProducto = ?',[id])
    res.json({text: 'Eliminando Producto' + req.params.id})
}



module.exports = controller;