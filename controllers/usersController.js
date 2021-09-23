const fs = require("fs");
const uuid = require("uuid");
const bcrypt = require('bcryptjs');


const controller = {
    register: (req, res) => {
        return res.render('./users/register');
    },

    create: (req, res) => {
        const userJSON = fs.readFileSync("data/users.json", { encoding: "utf-8" });
        let usuarios
        if (userJSON == "") {
            usuarios = [];
        } else {
            usuarios = JSON.parse(userJSON)
        };

        let id = uuid.v4();

        let encryptedPassword = bcrypt.hashSync(req.body.contrasena, 10)


        let usuario = {
            id: id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            img_user: req.file.filename,
            contrasena: encryptedPassword
        };

        usuarios.push(usuario);

        const usuariosJSON = JSON.stringify(usuarios);
        fs.writeFileSync("data/users.json", usuariosJSON);

        return res.redirect("../../");



    },

    showLogin: (req, res) => {
        return res.render('./users/login');
    },
    login: (req, res) => {

        const usersJSON = fs.readFileSync("data/users.json", { encoding: "utf-8" });
        const users = JSON.parse(usersJSON);


        let usuarioALogearse;
        users.forEach((user) => {

            if (user.email == req.body.email) {
                if (bcrypt.compareSync(req.body.password, user.contrasena)) {
                    usuarioALogearse = user;
                };
            };
        });
        if (usuarioALogearse == undefined) {
            return res.render('./users/login', { errors: [{ msj: 'credenciales ivalidas' }] })
        };

        req.session.usuarioLogeado = usuarioALogearse;

        if (req.body.remember != undefined) {
            res.cookie('remember', usuarioALogearse.id, { maxAge: 60000 })

        }
        return res.redirect('/');



    },


    recoverpassword: (req, res) => {
        return res.render('./users/recover-password');
    },

    logout: (req, res) => {
        req.session.destroy();
        res.cookie('remember', null, { maxAge: -1 });
        res.redirect('/')
    },

};
module.exports = controller;