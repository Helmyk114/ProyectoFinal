const db = require('../dataBase/baseDatos');
const jwt = require('jsonwebtoken')

controllerU = {};

controllerU.listarUsuarios = (req,res) =>{
    db.query('SELECT * FROM usuario', (err, row, fields) =>{
        if(!err){
            res.json(row);
            
        }
        else
        {
            console.log(err)
        }
    })
};

controllerU.iniciarSesion = (req,res) =>{
    const { usuario, contrasena} = req.body;
    db.query('SELECT idUsuario, usuario, rol FROM usuario WHERE usuario = ? AND contrasena = ?',[usuario,contrasena], (err,row,fields) =>{
        if(!err){
            console.log(row);
            if (row.length > 0) {
                let data = JSON.stringify(row[0]);
                const token = jwt.sign(data,'jnss');
                res.json({token});
            }
            else
            {
                res.json('Usuario o clave incorrecta')
            }
        }
        else
        {
            console.log(err);
        }
    })
};

controllerU.prueba = verificarToken,(req,res) =>{
    console.log(req.data)
    res.json('Informacion Secreta')
}

function verificarToken(req,res,next){
    if(!req.header.authorization) return res.status(401).json('No autorizado')

    const token = req.header.authorization.substr(7);
    if(token !== ''){
        const contenido = jwt.verify(token,'jnss');
        req.data = contenido;
        next();
    }else{
        res.status(401).json('Token vacio')
    }
}

module.exports = controllerU;