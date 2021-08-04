const controlador = {
    register: (req, res) => {
        return res.render('./users/register')
    },
    login: (req, res) => {
        return res.render('./users/login')
    },
    recoverpassword: (req, res) => {
        return res.render('./users/recover-password')
    }

};
module.exports = controlador;