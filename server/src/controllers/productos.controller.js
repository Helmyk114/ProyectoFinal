const db = require('../dataBase/baseDatos')

controller = {};

controller.listarProductos = (req,res)=>{
    db.query('SELECT * FROM producto'), (err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }
        else
        {
            console.log(err);
        }
    };
}

controller.crearProducto = async (req,res) =>{
    await db.query('INSERT INTO producto SET ?',[req.body]);
    res.json({text: 'Producto Creado'})
}

controller.eliminarProducto = (req,res) =>{
    const { id } = req.params;
    db.query('DELETE FROM producto WHERE id = ?',[id])
    res.json({text: 'Eliminando Producto' + req.params.id})
}



module.exports = controller;