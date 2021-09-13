const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const controlador = {
    admin: (req, res) => {
        let archivoProductsJson = fs.readFileSync('data/products.json', { encoding: 'utf-8' });

        let products = JSON.parse(archivoProductsJson);

        return res.render('./admin/adminPanel', { products })
    },
    productCreate: (req, res) => {

        return res.render('./admin/productCreate', { errors: {} });
    },
    productCreateSave: (req, res) => {

        /*let errors = validationResult(req);*/

        /*if (errors.isEmpty()) {*/

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
            name: req.body.name,
            category: req.body.category,
            price: req.body.price,
            discount: req.body.discount,
            img1: req.files[0].filename,
            img2: req.files[1].filename,
            img3: req.files[2].filename
        };


        function caracteristicas(cantidadCaracteristicas) {
            for (let i = 0; i < cantidadCaracteristicas; i++) {

                if (cantidadCaracteristicas == 1) {
                    producto[req.body.characteristic] = req.body.value;
                } else {
                    producto[req.body.characteristic[i]] = req.body.value[i];
                }
            }
        }
        caracteristicas(req.body.cantidadInput)


        productos.push(producto);

        let productosJSON = JSON.stringify(productos);

        fs.writeFileSync('data/products.json', productosJSON);

        return res.redirect('create');
        /*
        } else {
            return res.render('./products/productCreate', { errors: errors.mapped() });
        }*/


    },

    productEdit: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' });
        let products = JSON.parse(productsJSON);

        products.forEach(product => {
            if (product.id == req.params.id) {
                let claves = Object.keys(product);
                let characteristic = {};
                for (let i = 8; i < claves.length; i++) {
                    characteristic[claves[i]] = product[claves[i]];
                }
                return res.render('./admin/productEdit', { characteristic: characteristic, product: product });
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
                    name: req.body.name,
                    category: req.body.category,
                    price: req.body.price,
                    discount: req.body.discount,
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
                            updatedProduct[req.body.characteristic] = req.body.value;
                        } else {
                            updatedProduct[req.body.characteristic[i]] = req.body.value[i];
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
        return res.redirect('../../products/detail/' + req.params.id);


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
    }

};
module.exports = controlador;