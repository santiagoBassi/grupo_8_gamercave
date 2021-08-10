const fs = require('fs');
const path = require('path');
const { send } = require('process');

const controlador = {
    products: (req, res) => {
        let productosJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let productos = JSON.parse(productosJSON)
        return res.render('./products/products', { productos: productos })
    },
    productDetail: (req, res) => {
        return res.render('./products/productDetail')
    },
    productCart: (req, res) => {
        return res.render('./products/productCart')
    },
    productCreate: (req, res) => {
        return res.render('./products/productCreate')
    },

    productCreateSave: (req, res) => {
        let archivoProductosJson = fs.readFileSync('data/products.json', { encoding: 'utf-8' });

        let productos;

        if (archivoProductosJson == '') {
            productos = [];
        } else {
            productos = JSON.parse(archivoProductosJson);
        };

        let id = productos.length + 1;

        let producto = {
            id: id,
            nombre: req.body.nombre,
            categoria: req.body.categoria,
            descripcon: req.body.descripcion,
            precio: req.body.precio
        };

        productos.push(producto);

        let productosJSON = JSON.stringify(productos);

        fs.writeFileSync('data/products.json', productosJSON);
        /*return res.redirect('create');*/
    },
    productEdit: (req, res) => {
        return res.render('./products/productEdit')
    },
    productEditSave: (req, res) => {
        return res.send('actualizo info producto por put')
    },
    productDelete: (req, res) => {
        return res.send('borro producto')
    }


};
module.exports = controlador;