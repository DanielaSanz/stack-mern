//Para llamar a .env y no mostrar la url. Antes de iniciar ya estan disponibles
require('dotenv').config();

const app = require('./app');
//Llama la conección a la DB
require('./database');

async function main() {
    await app.listen(app.get('port'));
    console.log('Server on port', app.get('port'));
}

main();