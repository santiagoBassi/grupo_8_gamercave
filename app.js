const express = require('express');
const methodOverride = require('method-override')
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('./public'));

app.use(methodOverride('_method'))

app.set('view engine', 'ejs')

const rutasMain = require('./routers/main.js');
const rutasUsers = require('./routers/users.js');
const rutasProducts = require('./routers/products.js');

app.use('/', rutasMain);
app.use('/users', rutasUsers);
app.use('/products', rutasProducts);

app.listen(3030, () => console.log('Servidor corriendo en el puerto 3030'));