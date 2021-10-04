const fs = require('fs');

const db = require('../database/models/index.js')
const User = db.User;
const Rol = db.Rol

const controlador = {
    index: (req, res) => {
        let productsJSON = fs.readFileSync('data/products.json', { encoding: 'utf-8' })
        let products = JSON.parse(productsJSON)
        return res.render('index', { products: products })
    },
    testDB: (req, res) => {
        User.findAll({
                include: ['rol']
            })
            .then(users => {
                res.json(users)
            })
    }

};
module.exports = controlador;