const fs = require("fs")
const uuid = require("uuid")
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
        const userJSON = fs.readFileSync("data/users.json", { encoding: "utf-8" })
        let usuarios
        if (userJSON == "") {
            usuarios = [];
        }
        else {
           usuarios = JSON.parse (userJSON)
        };

        let id = uuid.v4();

        let usuario = {
            id: id,
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            telefono: req.body.telefono,
            img_user: req.file.filename,
            contrasena: req.body.contrasena
        };
    
        usuarios.push(usuario);

        const usuariosJSON = JSON.stringify(usuarios);
        fs.writeFileSync("data/users.json", usuariosJSON);

        res.redirect("/")
    }


};
module.exports = controlador;