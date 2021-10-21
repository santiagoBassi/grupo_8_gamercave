const db = require('../database/models/index.js');

const Product = db.Product;
const Cart = db.Cart;


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
    addToCart: (req, res) => {


        Cart.create({
                user_id: 2,
                product_id: req.params.id
            })
            .then(() => {
                res.redirect('/products/cart')
            })
            .catch(err => {
                res.send(err)
            })
    },
    productCart: (req, res) => {
        return res.render('./products/productCart');
    }
};
module.exports = controlador;