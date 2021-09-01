function loggedInMiddlware(req, res, next) {
    if (req.session.usuarioLogeado != undefined) {
        next();
    } else {
        res.redirect('../users/login')
    }
}

module.exports = loggedInMiddlware;