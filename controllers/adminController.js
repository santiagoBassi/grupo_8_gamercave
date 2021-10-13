const fs = require('fs');
const path = require('path');
const uuid = require('uuid');

const db = require('../database/models/index.js');

const Product = db.Product;
const Category = db.Category;
const Image = db.Image;
const Characteristic = db.Characteristic;




const controlador = {
    admin: (req, res) => {
        let archivoProductsJson = fs.readFileSync('data/products.json', { encoding: 'utf-8' });

        let products = JSON.parse(archivoProductsJson);

        return res.render('./admin/adminPanel', { products })
    },
    productCreate: (req, res) => {
        Category.findAll()
            .then(categories => {
                return res.render('./admin/productCreate', { categories, errors: {} });
            })

    },
    productCreateSave: (req, res) => {

        Product.create({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category_id: req.body.category
            })
            .then(product => {
                for (let i = 0; i < req.files.length; i++) {
                    Image.create({
                        name: req.files[i].filename,
                        product_id: product.id
                    })
                }

                function caracteristicas(cantidadCaracteristicas) {
                    for (let i = 0; i < cantidadCaracteristicas; i++) {
                        if (cantidadCaracteristicas == 1) {
                            Characteristic.create({
                                name: req.body.characteristic,
                                value: req.body.value,
                                product_id: product.id
                            })
                        } else {
                            Characteristic.create({
                                name: req.body.characteristic[i],
                                value: req.body.value[i],
                                product_id: product.id
                            })
                        }
                    }
                }
                caracteristicas(req.body.cantidadInput)

                res.redirect(`../../product/detail/${product.id}`)
            })

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