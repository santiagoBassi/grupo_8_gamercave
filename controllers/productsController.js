const fs = require('fs');




const controlador = {

    products: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' });
        let products = JSON.parse(productsJSON);
        return res.render('./products/products', { products: products });
    },
    productDetail: (req, res) => {
        let productosJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' });
        let productos = JSON.parse(productosJSON);

        productos.forEach(producto => {
            if (producto.id == req.params.id) {
                let claves = Object.keys(producto);
                let caracteristicas = {};
                for (let i = 7; i < claves.length; i++) {
                    caracteristicas[claves[i]] = producto[claves[i]];
                }

                return res.render('./products/productDetail', { caracteristicas: caracteristicas, producto: producto });
            };
        });
    },
    productCart: (req, res) => {
        return res.render('./products/productCart');
    }


};
module.exports = controlador;