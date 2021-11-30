const fs = require('fs');

const { validationResult } = require('express-validator');

const db = require('../database/models/index.js');

const Product = db.Product;
const Category = db.Category;
const Image = db.Image;
const Characteristic = db.Characteristic;


const controlador = {
    admin: (req, res) => {
        Product.findAll({
                include: ['images']
            })
            .then(products => {
                return res.render('./admin/adminPanel', { products })
            })
    },
    productCreate: (req, res) => {
        Category.findAll()
            .then(categories => {
                return res.render('./admin/productCreate', { categories, errors: {} });
            })

    },
    productCreateSave: (req, res) => {
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            Category.findAll()
            .then((categories => {
                return res.render('./admin/productCreate', {
                    errors: resultValidation.mapped(),
                    oldData: req.body,
                    categories
                });
            }))
            
        } else{
            Product.create({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category_id: req.body.category
            })
            .then(product => {
                let img0 = Image.create({
                    name: req.files[0].filename,
                    product_id: product.id
                })
                let img1 = Image.create({
                    name: req.files[1].filename,
                    product_id: product.id
                })
                let img2 = Image.create({
                    name: req.files[2].filename,
                    product_id: product.id
                })

                Promise.all([img0, img1, img2])
                    .then(() => {
                        function caracteristicas(cantidadCaracteristicas) {
                            for (let i = 0; i < cantidadCaracteristicas; i++) {
                                if (cantidadCaracteristicas == 1) {
                                    Characteristic.create({
                                            name: req.body.characteristic,
                                            value: req.body.value,
                                            product_id: product.id
                                        })
                                        .then(() => {
                                            return res.redirect(`../../products/detail/${product.id}`)

                                        })

                                    .catch(err => {
                                        res.send(err)
                                    })
                                    break;
                                } else {
                                    Characteristic.create({
                                            name: req.body.characteristic[i],
                                            value: req.body.value[i],
                                            product_id: product.id
                                        })
                                        .then(() => {
                                            if (cantidadCaracteristicas == i + 1) {
                                                return res.redirect(`../../products/detail/${product.id}`)
                                            }
                                        })
                                        .catch(err => {
                                            res.send(err)
                                        })
                                }
                            }
                        }
                        caracteristicas(req.body.cantidadInput)

                    })
            })
            .catch(err => {
                res.send(err)
            })
        }

       

    },
    productEdit: (req, res) => {
        Product.findByPk(req.params.id, {
                include: ['category', 'characteristics', 'images']
            })
            .then(product => {
                let images = {
                    img1: product.images[0].name,
                    img2: product.images[1].name,
                    img3: product.images[2].name
                }
                Category.findAll()
                    .then(categories => {
                        return res.render('./admin/productEdit', { product, images, categories });
                    })

            })

    },
    productEditSave: (req, res) => {
        console.log('Llegue al controller');
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            
            Product.findByPk(req.params.id, {
                include: ['category', 'characteristics', 'images']
            })
            .then(product => {
                let images = {
                    img1: product.images[0].name,
                    img2: product.images[1].name,
                    img3: product.images[2].name
                }
                Category.findAll()
                    .then(categories => {
                        return res.render('./admin/productEdit', { product, images, categories, errors: resultValidation.mapped(),  });
                    })

            })
            
        } else{
            Product.update({
                name: req.body.name,
                price: req.body.price,
                discount: req.body.discount,
                category_id: req.body.category
            }, {
                where: {
                    id: req.params.id
                }
            })
            .then(() => {
                Product.findByPk(req.params.id, {
                        include: ['category', 'characteristics', 'images']
                    })
                    .then((product) => {

                        if (req.files != '') {
                            fs.unlinkSync(`./public/images/products/${product.images[0].name}`);
                            fs.unlinkSync(`./public/images/products/${product.images[1].name}`);
                            fs.unlinkSync(`./public/images/products/${product.images[2].name}`);

                            let img0 = Image.update({
                                name: req.files[0].filename,
                            }, {
                                where: { id: product.images[0].id }
                            });

                            let img1 = Image.update({
                                name: req.files[1].filename,
                            }, {
                                where: { id: product.images[1].id }
                            });

                            let img2 = Image.update({
                                name: req.files[2].filename,
                            }, {
                                where: { id: product.images[2].id }
                            });

                            Promise.all([img0, img1, img2])
                        }
                        Characteristic.destroy({ where: { product_id: product.id } })
                            .then(() => {

                                function caracteristicas(cantidadCaracteristicas) {
                                    for (let i = 0; i < cantidadCaracteristicas; i++) {
                                        if (cantidadCaracteristicas == 1) {
                                            Characteristic.create({
                                                    name: req.body.characteristic,
                                                    value: req.body.value,
                                                    product_id: product.id
                                                })
                                                .then(() => {
                                                    return res.redirect(`../../products/detail/${product.id}`)
                                                })

                                            .catch(err => {
                                                res.send(err)
                                            })
                                            break;
                                        } else {
                                            Characteristic.create({
                                                    name: req.body.characteristic[i],
                                                    value: req.body.value[i],
                                                    product_id: product.id
                                                })
                                                .then(() => {
                                                    if (cantidadCaracteristicas == i + 1) {
                                                        return res.redirect(`../../products/detail/${product.id}`)
                                                    }
                                                })
                                                .catch(err => {
                                                    res.send(err)
                                                })
                                        }
                                    }
                                }
                                caracteristicas(req.body.cantidadInput)
                            })
                    })
                    .catch(err => {
                        res.send(err)
                    })
            })
        }
        

    },
    productDelete: (req, res) => {
        res.send('borramos el producto')
        /*
        Product.findByPk(req.params.id, {
                include: ['category', 'characteristics', 'images']
            })
            .then((product) => {
                fs.unlinkSync(`./public/images/products/${product.images[0].name}`);
                fs.unlinkSync(`./public/images/products/${product.images[1].name}`);
                fs.unlinkSync(`./public/images/products/${product.images[2].name}`);


                Product.destroy({ where: { id: req.params.id } })
                    .then(() => {
                        res.redirect('/')
                    })
            })


        /*

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
        return res.redirect('/products');*/
    }
};

module.exports = controlador;