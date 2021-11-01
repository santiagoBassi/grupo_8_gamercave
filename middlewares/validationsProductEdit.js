const { check } = require('express-validator');
const path = require('path');
const fs = require('fs');

const validateProductEdit = [
    check('name')
    .notEmpty().withMessage('No puede estar vacío.').bail()
    .isLength({ min: 1, max: 80 }).withMessage('Puede tener un máximo de 80 caracteres.'),

    check('characteristic')
    .notEmpty().withMessage('No puede estar vacío.').bail()
    .isLength({ min: 1, max: 45 }).withMessage('Puede tener un máximo de 45 caracteres.'),

    check('value')
    .notEmpty().withMessage('No puede estar vacío.').bail()
    .isLength({ min: 1, max: 45 }).withMessage('Puede tener un máximo de 45 caracteres.'),

    check('price')
    .notEmpty().withMessage('No puede estar vacío.')
    .isNumeric().withMessage('Debes ingresar un numero'),

    check('discount')
    .notEmpty().withMessage('No puede estar vacío.')
    .isNumeric().withMessage('Debes ingresar un numero'),

    check('imagesProduct').custom((value, { req }) => {
        let acceptedExtensions = ['.png', '.jpeg', '.jpg', '.gif'];
        if (req.files.length == 3) {
            let files = req.files;
            let errores = [];
            files.forEach(file => {
                let fileExtension = path.extname((file.originalname));
                if (!acceptedExtensions.includes(fileExtension)) {
                    //fs.unlinkSync(`./public/images/users/${file.filename}`);
                    errores.push('Error')  
                }
            });
            if(errores.length == 0){
                console.log(errores);
                return true;
            }else{
                console.log(errores);
                throw new Error(`Las extensiones de archivo permitidas son ${acceptedExtensions.join(', ')}`)
            }
        } else if (req.files.length == 0){
                return true;
        }else{
            throw new Error('Debes ingresar tres imagenes')
        }
        
        
    })
    
]

module.exports = validateProductEdit;