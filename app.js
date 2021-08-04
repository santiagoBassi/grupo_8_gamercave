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

















/*
app.get('/productDetail', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/products/productDetail.html'))
});

app.get('/productCart', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/products/productCart.html'))
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/users/login.html'))
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/users/register.html'))
});

app.get('/recoverpassword', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/users/recover-password.html'))
})*/