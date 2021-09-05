const fs = require('fs');

const controlador = {
    index: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let products = JSON.parse(productsJSON)
        return res.render('index', { products: products })
    }

};
module.exports = controlador;