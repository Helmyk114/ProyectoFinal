const db = require('../dataBase/baseDatos')

controllerF ={};

controllerF.mostrarComentarios = (req,res) =>{
    db.query('SELECT * FROM mensaje',(err, rows, fields)=>{
        if(!err){
            res.json(rows);
        }
        else{
            console.error(err)
        }
    });
}

controllerF.crearComentario = (req,res) =>{
    db.query('INSERT INTO mensaje SET ?',[req.body]);
    console.log(req.body)
    res.json({text:'Comentario creado'})
}
module.exports= controllerF;