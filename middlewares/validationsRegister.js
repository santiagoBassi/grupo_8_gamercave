const { check } = require('express-validator');
const path = require('path');
const fs = require('fs');

const validateRegister = [
    check('name')
    .notEmpty().withMessage('No puede estar vacío.').bail()
    .isLength({ min: 1, max: 45 }).withMessage('Puede tener un máximo de 45 caracteres.'),

    check('lastName')
    .notEmpty().withMessage('No puede estar vacío.').bail()
    .isLength({ min: 1, max: 45 }).withMessage('Puede tener un máximo de 45 caracteres.'),

    check('email')
    .notEmpty().withMessage('No puede estar vacío.').bail()
    .isEmail().withMessage('Debes usar una direccion de correo válida.').bail()
    .isLength({ min: 1, max: 45 }).withMessage('Puede tener un máximo de 45 caracteres.'),


    check('phone')
    .notEmpty().withMessage('No puede estar vacío.'),

    check('password')
    .notEmpty().withMessage('No puede estar vacío.').bail()
    .isLength({ min: 1, max: 45 }).withMessage('Debe tener un minimo de 8 y un máximo de 20 caracteres.'),

    check('image').custom((value, { req }) => {
        let file = req.file;
        let acceptedExtensions = ['.png', '.jpeg', '.jpg', '.gif'];
        if (file) {
            let fileExtension = path.extname((file.originalname));
            if (!acceptedExtensions.includes(fileExtension)) {
                fs.unlinkSync(`./public/images/users/${req.file.filename}`);
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
        }
        return true;

    })
]


module.exports = validateRegister;