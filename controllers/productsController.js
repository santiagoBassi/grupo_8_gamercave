const fs = require('fs');


const db = require('../database/models/index.js');

const Product = db.Product;


const controlador = {

    products: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' });
        let products = JSON.parse(productsJSON);
        return res.render('./products/products', { products: products });
    },
    productDetail: (req, res) => {
        Product.findByPk(req.params.id, {
                include: ['category', 'characteristics', 'images']
            })
            .then(product => {
                let images = {
                    img1: product.images[0].name,
                    img2: product.images[1].name,
                    img3: product.images[2].name
                }
                return res.render('./products/productDetail', { product, images });
            })
            /*
        let productosJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' });
        let productos = JSON.parse(productosJSON);

        productos.forEach(producto => {
            if (producto.id == req.params.id) {
                let claves = Object.keys(producto);

                let caracteristicas = {};
                for (let i = 8; i < claves.length; i++) {
                    caracteristicas[claves[i]] = producto[claves[i]];
                }

                return res.render('./products/productDetail', { caracteristicas: caracteristicas, producto: producto });
            };
        });
    */
    },
    productCart: (req, res) => {
        return res.render('./products/productCart');
    }


};
module.exports = controlador;