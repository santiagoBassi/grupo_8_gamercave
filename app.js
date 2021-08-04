const express = require('express');

const rutasMain = require('./routers/main.js');

const rutasUsers = require('./routers/users.js');

const rutasProducts = require('./routers/products.js');

const app = express();

app.use(express.static('./public'));

app.set('view engine', 'ejs')



app.use('/', rutasMain);

app.use('/users', rutasUsers);

app.use('/products', rutasProducts);



app.listen(3030, () => console.log('Servidor corriendo en el puerto 3030'));