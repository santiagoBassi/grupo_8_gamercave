const fs = require("fs");
const uuid = require("uuid");
const bcrypt = require('bcryptjs');

const db = require('../database/models/index.js');

const User = db.User;


const controller = {

    register: (req, res) => {
        return res.render('./users/register');
    },

    create: (req, res) => {
        let encryptedPassword = bcrypt.hashSync(req.body.password, 10)
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
                req.session.usuarioLogeado = user;
                return res.redirect("../../");
            })


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

                req.session.usuarioLogeado = usuarioALogearse.id;



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

    logout: (req, res) => {
        req.session.destroy();
        res.cookie('<remember></remember>', null, { maxAge: -1 });
        res.redirect('/')
    },

};
module.exports = controller;