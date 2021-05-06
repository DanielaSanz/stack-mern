const mongoose = require('mongoose');

//Permite conectarse a una instancia/un servidor de mongodb
//Protocolo mongodb
//Se saca la url y se llama a process que permite acceder a todo el sistema de tu pc.
//Ternario para evitar error en conexion
console.log(process.env.MONGODB_URI)
const URI = process.env.MONGODB_URI 
    ? process.env.MONGODB_URI 
    : 'mongodb://localhost/databasetest';

mongoose.connect(URI, {
    //Para conectar
    useNewUrlParser: true,
    useCreateIndex: true,
    //por la function findOneAndUpdate
    useFindAndModify: false,
    useUnifiedTopology: true
});

//Cuando se conecte para escuchar 
const conection = mongoose.connection;

//Una vez abierta esta conexion quiero ver el console.log
conection.once('open', () => {
    console.log('DDBB is connected');
})