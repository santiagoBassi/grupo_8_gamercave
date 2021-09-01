function guestMddlware(req, res, next) {
    if (req.session.usuarioLogeado == undefined) {
        next();
    } else {
        res.redirect('/');
    }
}

module.exports = guestMddlware;