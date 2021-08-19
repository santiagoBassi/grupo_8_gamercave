const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const { send } = require('process');

const controlador = {

    products: (req, res) => {
        let productosJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let productos = JSON.parse(productosJSON)
        return res.render('./products/products', { productos: productos })
    },


    productDetail: (req, res) => {
        let productosJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let productos = JSON.parse(productosJSON)

        productos.forEach(producto => {
            if (producto.id == req.params.id) {
                let claves = Object.keys(producto);
                let caracteristicas = {};
                for (let i = 5; i < claves.length; i++) {
                    caracteristicas[claves[i]] = producto[claves[i]];
                }

                return res.render('./products/productDetail', { caracteristicas: caracteristicas, producto: producto })
            };
        });
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

        let id = uuid.v4();

        let producto = {
            id: id,
            nombre: req.body.nombre,
            categoria: req.body.categoria,
            precio: req.body.precio,
            imagen: req.file.filename,
        };

        function caracteristicas(cantidadCaracteristicas) {
            for (let i = 0; i < cantidadCaracteristicas; i++) {

                if (cantidadCaracteristicas == 1) {
                    producto[req.body.caracteristica] = req.body.valor;
                } else {
                    producto[req.body.caracteristica[i]] = req.body.valor[i];
                }
            }
        }
        caracteristicas(req.body.cantidadInput)

        productos.push(producto);

        let productosJSON = JSON.stringify(productos);

        fs.writeFileSync('data/products.json', productosJSON);
        return res.redirect('create');
    },

    productEdit: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let products = JSON.parse(productsJSON)

        products.forEach(product => {
            if (product.id == req.params.id) {
                let claves = Object.keys(product);
                let caracteristicas = {};
                for (let i = 5; i < claves.length; i++) {
                    caracteristicas[claves[i]] = product[claves[i]];
                }
                return res.render('./products/productEdit', { caracteristicas: caracteristicas, product: product })
            }
        });


    },

    productEditSave: (req, res) => {
        return res.send('actualizo info producto por put')
    },

    productDelete: (req, res) => {
        return res.send('borro producto')
    },
    productCart: (req, res) => {
        return res.render('./products/productCart')
    }


};
module.exports = controlador;