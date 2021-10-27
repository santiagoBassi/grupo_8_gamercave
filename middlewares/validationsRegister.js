const { check } = require('express-validator');
const path = require('path');
const fs = require('fs');

const validateRegister = [
    check('name')
    .notEmpty().withMessage('El campo nombre no puede estar vacío.').bail()
    .isLength({ min: 1, max: 45 }).withMessage('El campo nombre puede tener un máximo de 45 caracteres.'),

    check('lastName')
    .notEmpty().withMessage('El campo apellido no puede estar vacío.').bail()
    .isLength({ min: 1, max: 45 }).withMessage('El campo apellido puede tener un máximo de 45 caracteres.'),

    check('email')
    .notEmpty().withMessage('El campo email no puede estar vacío.').bail()
    .isEmail().withMessage('El campo email debe contener una "@".').bail()
    .isLength({ min: 1, max: 45 }).withMessage('El campo email puede tener un máximo de 45 caracteres.'),


    check('phone')
    .notEmpty().withMessage('El campo teléfono no puede estar vacío.'),

    check('password')
    .notEmpty().withMessage('El campo contraseña no puede estar vacío.').bail()
    .isLength({ min: 1, max: 45 }).withMessage('El campo contraseña puede debe tener un minimo de 8 y un máximo de 20 caracteres.'),

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

    })
]


module.exports = validateRegister;