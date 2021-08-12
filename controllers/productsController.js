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
                let caracteristica = 'caracteristica' + i;
                producto[req.body.caracteristica] = req.body.valor2;
            }

        }
        caracteristicas(req.body.cantidadInput)

        return res.send(producto);

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