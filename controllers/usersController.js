const bcrypt = require('bcryptjs');
const fs = require('fs');

const { validationResult } = require('express-validator');

const db = require('../database/models/index.js');
const User = db.User;


const controller = {
    register: (req, res) => {
        return res.render('./users/register');
    },
    create: (req, res) => {
        const resultValidation = validationResult(req)

        if (resultValidation.errors.length > 0) {
            return res.render('./users/register', { errors: resultValidation.mapped() });
        } else {
            return res.send('Esto fue un éxito!')
        }
        /*
        let encryptedPassword = bcrypt.hashSync(req.body.password, 10)
        if (req.file) {
            User.create({
                    name: req.body.name,
                    lastName: req.body.lastName,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: encryptedPassword,
                    image: req.file.filename,
                    rol_id: 2
                })
                .then(user => {
                    req.session.user = user;

                    return res.redirect("/");
                })
        } else {
            User.create({
                    name: req.body.name,
                    lastName: req.body.lastName,
                    phone: req.body.phone,
                    email: req.body.email,
                    password: encryptedPassword,
                    rol_id: 2
                })
                .then(user => {
                    req.session.user = user;

                    return res.redirect("/");
                })
        }



*/
    },
    showLogin: (req, res) => {
        return res.render('./users/login');
    },
    login: (req, res) => {

        let usuarioALogearse;

        User.findOne({
                where: {
                    email: req.body.email
                }
            })
            .then(user => {
                if (bcrypt.compareSync(req.body.password, user.password)) {
                    usuarioALogearse = user;

                } else {
                    return res.render('./users/login', { errors: [{ msj: 'credenciales ivalidas' }] })
                }

                req.session.user = usuarioALogearse;





                if (req.body.remember != undefined) {
                    res.cookie('remember', usuarioALogearse.id, { maxAge: 60000 })

                }
                return res.redirect('/');
            })
            .catch(() => {

                return res.render('./users/login', { errors: [{ msj: 'credenciales ivalidas' }] })

            })

    },
    recoverpassword: (req, res) => {
        return res.render('./users/recover-password');
    },
    userEdit: (req, res) => {
        User.findByPk(req.params.id)
            .then(user => {
                return res.render('./users/userEdit', { user })
            })
    },
    userEditSave: (req, res) => {
        User.findByPk(req.params.id)
            .then(user => {
                let image;
                if (req.file) {
                    image = req.file.filename;
                    fs.unlinkSync(`./public/images/users/${user.image}`);
                } else {
                    image = user.image
                }
                User.update({
                        name: req.body.name,
                        lastName: req.body.lastName,
                        phone: req.body.phone,
                        email: req.body.email,
                        image: image
                    }, {
                        where: {
                            id: req.params.id
                        }
                    })
                    .then(() => {
                        return res.redirect('/')
                    })
            })

    },
    logout: (req, res) => {
        req.session.destroy();
        res.clearCookie("remember");

        res.redirect('/')
    },
};
module.exports = controller;