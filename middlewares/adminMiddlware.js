function adminMiddlware(req, res, next) {
    if (req.session.user && req.session.user.rol_id == 1) {
        next();
    } else {
        res.send('Usted no es un administrador')
    }
}

module.exports = adminMiddlware;