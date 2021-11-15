const db = require('../../database/models/index.js');
const Product = db.Product;
const Category = db.Category;

const controlador = {
    list: (req, res) => {
        let procesador = Product.count({
            where: { category_id: 1 }
        });
        let discoRigido = Product.count({
            where: { category_id: 2 }
        });
        let auricular = Product.count({
            where: { category_id: 3 }
        });
        let mouse = Product.count({
            where: { category_id: 4 }
        });
        let teclado = Product.count({
            where: { category_id: 5 }
        });
        let memoriaRam = Product.count({
            where: { category_id: 6 }
        });
        let monitor = Product.count({
            where: { category_id: 7 }
        });
        let cooler = Product.count({
            where: { category_id: 8 }
        });
        let fuente = Product.count({
            where: { category_id: 9 }
        });
        let mother = Product.count({
            where: { category_id: 10 }
        });
        let placaVideo = Product.count({
            where: { category_id: 11 }
        });
        Promise.all([procesador, discoRigido, auricular, mouse, teclado, memoriaRam, monitor, cooler, fuente, mother, placaVideo])
            .then(categories => {
                Product.findAll({
                    include: ['category', 'characteristics', 'images']
                })
                    .then(products => {
                        let productsWithUrl = [];
                        products.forEach(product => {
                            let newProduct = {
                                ...product.dataValues,
                                detail: `/api/products/${product.id}`
                            }
                            productsWithUrl.push(newProduct);
                        });

                        let response = {
                            count: products.length,
                            countByCategory: {
                                procesador: categories[0],
                                discoRigido: categories[1],
                                auricular: categories[2],
                                mouse: categories[3],
                                teclado: categories[4],
                                memoriaRam: categories[5],
                                monitor: categories[6],
                                cooler: categories[7],
                                fuente: categories[8],
                                mother: categories[9],
                                placaVideo: categories[10]
                            },
                            products: productsWithUrl
                        }

                        res.json(response)
                    })


            })
    },
    detail: (req, res) => {
        Product.findByPk(req.params.id, {
            include: ['category', 'characteristics', 'images']
        })
        .then(product => {
            res.json(product)
        })
    }
};
module.exports = controlador;