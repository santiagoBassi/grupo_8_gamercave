const fs = require('fs');

const db = require('../database/models/index.js');
const Product = db.Product;


const controlador = {
    index: (req, res) => {

        Product.findAll({
                include: ['category', 'characteristics', 'images']
            })
            .then(products => {
                return res.render('index', { products });
            })
    }
};
module.exports = controlador;