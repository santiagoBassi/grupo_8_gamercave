const db = require('../database/models/index.js');

const { Op } = require("sequelize");

const Product = db.Product;
const Cart = db.Cart;
const Image = db.Image;


const controlador = {
    products: (req, res) => {
        Product.findAll({
            include: ['category', 'characteristics', 'images']
        })
            .then(products => {
                return res.render('./products/products', { products });
            })

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

    },
    cart: (req, res) => {

        Product.findAll({
            include: [
                {
                    model: Image,
                    as: 'images'
                },
                {
                    model: Cart,
                    as: 'cart',
                    where: {
                        user_id: req.session.user.id
                    },
                }]
        })
            .then((products) => {
                return res.render('./products/productCart', { products });
            })

    },
    addToCart: (req, res) => {
        Cart.create({
            user_id: req.session.user.id,
            product_id: req.params.id
        })
            .then(() => {
                res.redirect('/products/cart')
            })
            .catch(err => {
                res.send(err)
            })
    },
    deleteToCart: (req, res) => {
        Cart.destroy({
            where: {
                user_id: req.session.user.id,
                product_id: req.params.id
            }
        })
            .then(() => {
                return res.redirect('/products/cart')
            })
    },
    search: (req, res) => {
        Product.findAll({
            where: {
                name: {
                    [Op.substring]: req.query.product
                }
            },
            include: ['category', 'characteristics', 'images']
        })
            .then(products => {
                return res.render('./products/products', { products });
            })
    },
    filterByPrice: (req, res) => {
        Product.findAll({
            where: {
                price: {
                    [Op.gte]: req.query.min,
                    [Op.lte]: req.query.max
                }
            },
            include: ['category', 'characteristics', 'images']
        })
            .then((products) => {
                return res.render('./products/products', { products });
            })
    }
};
module.exports = controlador;