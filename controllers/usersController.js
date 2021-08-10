const controlador = {
    register: (req, res) => {
        return res.render('./users/register')
    },
    login: (req, res) => {
        return res.render('./users/login')
    },
    recoverpassword: (req, res) => {
        return res.render('./users/recover-password')
    },
    create: (req, res) => {
        return res.send('formulario enviado')
    }

};
module.exports = controlador;