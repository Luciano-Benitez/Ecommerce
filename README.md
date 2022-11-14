Para ejecutar el codigo primero hay que completar los datos que estan en el archivo ".env" en el backend con los siguientes datos;

DB_USER = postgres

DB_PASSWORD = 'La clave de su cuenta en PostgreSQL'

DB_HOST = localhost

DB_NAME = 'Nombre de la base de datos que crearon en PostgreSQL'

EMAIL = 'Un correo para el email de autenticacion de cuenta'

EMAIL_PASS = atcorkdpqcttguwo 

SECRET_JWT_CODE = 'Un texto aleatorio como clave secreta'

URL_APP_ECOMMERCE = http://localhost:3001

URL_APP_ECOMMERCE_FRONT = http://localhost:3000

*Luego deben hacer "npm start" en "backend" y en "front".

Si quieren tener unos productos creados aleatoriamente pueden descomentar la funcion "await getProducts();" en la carpeta "backend" en el archivo "index.js";
les creara unos productos sin imagenes.pero pueden insertarles imagenes al ir a edicion de producto a travez del dashboard con la cuenta admin que creen.
