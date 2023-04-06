const mysql = require('mysql')

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'catalogo'
});

db.connect(function(err){
    if(err){
        console.error(err);
    }
    else
    {
        console.log('Conexion con la base de datos')
    }
});

module.exports = db;