const db = require('../database/models/index.js');
const User = db.User;


function remember(req, res, next) {

    if (req.cookies.remember != undefined && req.session.usuarioLogeado == undefined) {

        User.findByPk(req.cookies.remember)
            .then(user => {
                req.session.usuarioLogeado = user;
                next();
            })


    } else {
        next();
    }

}

module.exports = remember;