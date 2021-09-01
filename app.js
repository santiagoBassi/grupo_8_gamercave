const express = require('express');
const app = express();

const methodOverride = require('method-override');
const session = require('express-session');
const cookieParser = require('cookie-parser');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(express.static('./public'));

app.use(methodOverride('_method'));

app.set('view engine', 'ejs');

app.use(session({
    secret: 'gamerCaveSuperSecreta',
    resave: false,
    saveUninitialized: true
}));

app.use(cookieParser());

const rutasMain = require('./routers/main.js');
const rutasUsers = require('./routers/users.js');
const rutasProducts = require('./routers/products.js');

app.use('/', rutasMain);
app.use('/users', rutasUsers);
app.use('/products', rutasProducts);

app.listen(3030, () => console.log('Servidor corriendo en el puerto 3030'));