const fs = require('fs');

const db = require('../database/models/index.js');

const User = db.User;
const Rol = db.Rol;
const Product = db.Product;
const Characteristic = db.Characteristic;
const Category = db.Category;
const Image = db.Image;
const Invoice = db.Invoice;

const controlador = {
    index: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let products = JSON.parse(productsJSON)
        return res.render('index', { products: products })
    },
    testDB: (req, res) => {
        Invoice.findAll({
                include: ['products']
            })
            .then(products => {
                res.json(products)
            })
    }

};
module.exports = controlador;