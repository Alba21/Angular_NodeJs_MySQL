var mysql = require('mysql');
// cargar el modulo de express
const express = require("express");
// y crea una instancia de la aplicación express
const app = express();
// cargar body parser para leer el body de los request
const bodyParser = require("body-parser");

// recibir datos en formato json
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
const conexion = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "12345",
    database: "ejemploipc2"
  });


function getUsuarios(){
    var miQuery = "SELECT * FROM USUARIO;";
    conexion.query(miQuery, function(err, result){
        if(err){
            throw err;
        }else{
            console.log(result);
            return result;
        }
    });
}

getUsuarios();

function addUsuario(nickname, password){
    var miQuery = "INSERT into " +
    "usuario(nickname, password_, rol) VALUES (" +
    "\'" + nickname + "\' , "+
    "\'" + password + "\' ," +
    1+");";
    conexion.query(miQuery, function(err, result){
        if(err){
            throw err;
        }else{
            console.log(result);
            return "creado";
        }
    });
}


function iniciarSesion(nickname, password){
    var miQuery = "SELECT EXISTS("+
    "select 1 "+
    "from usuario "+
    "where nickname = " + "\'"+nickname + "\'"+ "and password_ = " + "\'" + password+"\') as inicio;"
    var respuesta = ":3";
    conexion.query(miQuery, function(err, result){
        if(err){
            throw err;
        }else{
            console.log(result);
            callback(null, result);
        }
    });
    
}





app.get('/usuarios',(request, response)=>{
    var miQuery = "SELECT * FROM USUARIO;";
    conexion.query(miQuery, function(err, result){
        if(err){
            throw err;
        }else{
            console.log(result);
            response.send(result);
        }
    });
})

app.post('/usuario',(request,response) =>{
    var nickname = request.body.nickname;
    var password = request.body.password;
    response.send(addUsuario(nickname,password));
})

app.post('/login',(request,response) =>{
    var nickname = request.body.nickname;
    var password = request.body.password;
    var miQuery = "SELECT EXISTS("+
    "select 1 "+
    "from usuario "+
    "where nickname = " + "\'"+nickname + "\'"+ "and password_ = " + "\'" + password+"\') as inicio;"
    var respuesta = ":3";
    conexion.query(miQuery, function(err, result){
        if(err){
            throw err;
        }else{
            console.log(result[0].inicio);
            response.send(result[0]);
        }
    });
    
})

app.get('/mascotas/:id',(request,response) =>{
    var idDuenio = request.params.id;
    var miQuery = "SELECT * from mascota where mascota.id_duenio = "+idDuenio+";"
    conexion.query(miQuery, function(err, result){
        if(err){
            throw err;
        }else{
            console.log(result);
            response.send(result);
        }
    });
})

app.post('/agregarMascota', (request,response) =>{
    var nombre = request.body.nombre;
    var descp = request.body.descripcion;
    var id_duenio = request.body.id_duenio;
    var miQuery = "INSERT INTO mascota (nombre, descripcion, id_duenio) VALUES(" +
    "\'"+nombre+"\'"+",\'"+descp+"\'" +","+id_duenio+");"
    conexion.query(miQuery, function(err, result){
        if(err){
            throw err;
        }else{
            console.log(result);
            response.send(result);
        }
    });
})
  function agregarUsuario(nombre, password){
    conexion.connect(function(error) {
        if (error) 
        {
              throw error;
        }else{
            var miQuery = "INSERT into " +
            "usuario(nickname, password_) VALUES (" +
            "\'" + nombre + "\' , "+
            "\'" + password + "\');";
            conexion.query(miQuery, function(err, result){
                if(err){
                    throw err;
                }else{
                    console.log("1 Tupla Nueva");
                }
            })
        }
      });
  }


app.listen(3000, () =>{
    console.log("Backend inicializado");
});