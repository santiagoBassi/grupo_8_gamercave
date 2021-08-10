const fs = require('fs');

const controlador = {
    index: (req, res) => {
        let productosJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let productos = JSON.parse(productosJSON)
        return res.render('index', { productos: productos })
    }

};
module.exports = controlador;