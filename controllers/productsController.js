let productos = [{
        id: 1,
        nombre: 'Placa 1',
        precio: 'US$ 30',
        srcImg: '/images/placa-video.jpg'
    },
    {
        id: 2,
        nombre: 'Placa 2',
        precio: 'US$ 30',
        srcImg: '/images/placa-video.jpg'
    },
    {
        id: 3,
        nombre: 'Placa 3',
        precio: 'US$ 30',
        srcImg: '/images/placa-video.jpg'
    },
    {
        id: 4,
        nombre: 'Placa 4',
        precio: 'US$ 30',
        srcImg: '/images/placa-video.jpg'
    },
    {
        id: 5,
        nombre: 'Placa 5',
        precio: 'US$ 30',
        srcImg: '/images/placa-video.jpg'
    },
    {
        id: 6,
        nombre: 'Placa 6',
        precio: 'US$ 30',
        srcImg: '/images/placa-video.jpg'
    },
    {
        id: 7,
        nombre: 'Placa 7',
        precio: 'US$ 30',
        srcImg: '/images/placa-video.jpg'
    },
    {
        id: 8,
        nombre: 'Placa 8',
        precio: 'US$ 30',
        srcImg: '/images/placa-video.jpg'
    }

];
const controlador = {
    products: (req, res) => {
        return res.render('./products/products', { productos: productos })
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