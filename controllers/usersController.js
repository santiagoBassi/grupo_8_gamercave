const bcrypt = require('bcryptjs');

//Google auth
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client('402810559666-j55lu0tf3cba2lhh0roa7qrfhef90no6.apps.googleusercontent.com');


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
    loginGoogle: (req, res) => {
        async function verify() {
            const ticket = await client.verifyIdToken({
                idToken: req.body.idtoken,
                audience: '402810559666-j55lu0tf3cba2lhh0roa7qrfhef90no6.apps.googleusercontent.com'
            });
            const payload = ticket.getPayload();
            const userid = payload['sub'];
            console.log('sou el 5')
            return payload
        }
        verify()
            .then((payload) => {

                User.findOne({
                        where: {
                            email: payload.email
                        }
                    })
                    .then(user => {
                        if (user) {
                            req.session.usuarioLogeado = user.id;
                            console.log('sou el 2')
                        } else {

                            User.create({
                                    name: payload.given_name,
                                    lastName: payload.family_name,
                                    phone: null,
                                    email: payload.email,
                                    password: null,
                                    image: null,
                                    rol_id: 2
                                })
                                .then(user => {
                                    req.session.usuarioLogeado = user.id;

                                    return res.redirect('/')
                                })
                        }


                    })
            })
            .catch(console.error);


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