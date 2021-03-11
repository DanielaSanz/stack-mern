//Para llamar a .env y no mostrar la url. Antes de iniciar ya estan disponibles
require('dotenv').config();

const app = require('./app');
//Llama la conección a la DB
require('./database');

async function main() {
    const result = await app.listen(4000);
    console.log('Server on port 4000');
}

main();