const controlador = {
    products: (req, res) => {
        return res.render('./products/products')
    },
    productDetail: (req, res) => {
        return res.render('./products/productDetail')
    },
    productCart: (req, res) => {
        return res.render('./products/productCart')
    },
    productsUploadEdit: (req, res) => {
        return res.render('./products/productsUploadEdit')
    },

};
module.exports = controlador;