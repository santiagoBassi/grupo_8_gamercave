const fs = require("fs");
const uuid = require("uuid");
const bcrypt = require('bcryptjs')


const controlador = {
    register: (req, res) => {
        return res.render('./users/register');
    },

    login: (req, res) => {
        return res.render('./users/login');
    },

    recoverpassword: (req, res) => {
        return res.render('./users/recover-password');
    },

    create: (req, res) => {
        if (req.body.contrasena == req.body.confirmar) {
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
        };


    }


};
module.exports = controlador;