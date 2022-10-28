const server = require('./src/app.js');
const { conn } = require('./src/db.js');
const {getProducts} = require('./helpers/getProducts');

conn.sync({ force: false }).then(() => {
  server.listen(3001, async() => {
    await getProducts(); 

    console.log('¡DB ejecutada en puerto 3001!'); 
  });
});
