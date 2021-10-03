const fs = require('fs');

const db = require('../database/models/index.js')
const User = db.User;

const controlador = {
    index: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let products = JSON.parse(productsJSON)
        return res.render('index', { products: products })
    },
    testDB: (req, res) => {

    }

};
module.exports = controlador;