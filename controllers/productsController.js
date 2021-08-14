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
        let productosJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let productos = JSON.parse(productosJSON)

        if (productos.length >= req.params.id) {

            return res.render('./products/productEdit', { product: productos[req.params.id - 1] })
        } else {
            res.send('Este producto no existe, intente con otro id')
        }

    },
    productEditSave: (req, res) => {
        return res.send('actualizo info producto por put')
    },
    productDelete: (req, res) => {
        return res.send('borro producto')
    }


};
module.exports = controlador;