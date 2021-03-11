const express = require('express');
const cors = require('cors');
const app = express();

//Settings service 
//Configuracion del puerto, despues lo llamo en index.js
app.set('port', process.env.PORT || 4000);


//Middleware
app.use(cors());
//Para que entienda formato json
app.use(express.json());


//Routes
app.use('/api/users', require('./routes/users'));
app.use('/api/notes', require('./routes/notes'));

module.exports = app;