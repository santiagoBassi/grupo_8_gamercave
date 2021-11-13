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
    resave: true,
    saveUninitialized: true
}));

app.use(cookieParser());

const rememberMiddlware = require('./middlewares/rememberMiddlware.js');
const accesMiddlware = require('./middlewares/accesMiddlware.js')

app.use(rememberMiddlware);

app.use(accesMiddlware)

const routsMain = require('./routers/main.js');
const routsUsers = require('./routers/users.js');
const routsProducts = require('./routers/products.js');
const routsAdmin = require('./routers/admin.js');
const apiRoutsUsers = require('./routers/api/users.js');

app.use('/', routsMain);
app.use('/users', routsUsers);
app.use('/products', routsProducts);
app.use('/admin', routsAdmin);
app.use('/api/users', apiRoutsUsers);

app.listen(3030, () => console.log('Servidor corriendo en el puerto 3030'));