const fs = require('fs');
const path = require('path');
const uuid = require('uuid');
const { validationResult } = require('express-validator');
/*const { send } = require('process');
const { RSA_NO_PADDING } = require('constants');
const { listenerCount } = require('events');*/


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


    productCreate: (req, res) => {

        return res.render('./products/productCreate', { errors: {} });
    },



    productCreateSave: (req, res) => {

        let errors = validationResult(req);

        if (errors.isEmpty()) {

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
                img1: req.files[0].filename,
                img2: req.files[1].filename,
                img3: req.files[2].filename
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

            /*fs.writeFileSync('data/products.json', productosJSON);

            return res.redirect('create');*/
        } else {

            return res.render('./products/productCreate', { errors: errors.mapped() });
        }


    },

    productEdit: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' });
        let products = JSON.parse(productsJSON);

        products.forEach(product => {
            if (product.id == req.params.id) {
                let claves = Object.keys(product);
                let caracteristicas = {};
                for (let i = 7; i < claves.length; i++) {
                    caracteristicas[claves[i]] = product[claves[i]];
                }
                return res.render('./products/productEdit', { caracteristicas: caracteristicas, product: product });
            }
        });


    },

    productEditSave: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' });
        let products = JSON.parse(productsJSON);
        let updatedProducts = [];
        products.forEach(product => {

            if (product.id == req.params.id) {

                let updatedProduct = {
                    id: product.id,
                    nombre: req.body.nombre,
                    categoria: req.body.categoria,
                    precio: req.body.precio,
                };
                if (req.files == '') {
                    updatedProduct['img1'] = product.img1;
                    updatedProduct['img2'] = product.img2;
                    updatedProduct['img3'] = product.img3;
                } else {
                    updatedProduct['img1'] = req.files[0].filename;
                    updatedProduct['img2'] = req.files[1].filename;
                    updatedProduct['img3'] = req.files[2].filename;
                    fs.unlinkSync(`./public/images/products/${product.img1}`);
                    fs.unlinkSync(`./public/images/products/${product.img2}`);
                    fs.unlinkSync(`./public/images/products/${product.img3}`);
                };

                function caracteristicas(cantidadCaracteristicas) {
                    for (let i = 0; i < cantidadCaracteristicas; i++) {

                        if (cantidadCaracteristicas == 1) {
                            updatedProduct[req.body.caracteristica] = req.body.valor;
                        } else {
                            updatedProduct[req.body.caracteristica[i]] = req.body.valor[i];
                        }
                    }
                }
                caracteristicas(req.body.cantidadInput);


                updatedProducts.push(updatedProduct);

            } else {
                updatedProducts.push(product);
            };



        });

        let updatedProductsJSON = JSON.stringify(updatedProducts);

        fs.writeFileSync('data/products.json', updatedProductsJSON);
        return res.redirect('../detail/' + req.params.id);


    },

    productDelete: (req, res) => {

        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' });
        let products = JSON.parse(productsJSON);

        let updatedProducts = products.filter(product => {
            return product.id != req.params.id;
        });

        products.forEach(product => {
            if (product.id == req.params.id) {
                fs.unlinkSync(`./public/images/products/${product.img1}`);
                fs.unlinkSync(`./public/images/products/${product.img2}`);
                fs.unlinkSync(`./public/images/products/${product.img3}`);
            }
        })

        let updatedProductsJSON = JSON.stringify(updatedProducts);

        fs.writeFileSync('data/products.json', updatedProductsJSON);
        return res.redirect('/products');
    },
    productCart: (req, res) => {
        return res.render('./products/productCart');
    }


};
module.exports = controlador;