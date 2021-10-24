module.exports = (req, res, next) => {
    //Variable locals (super global - vive en las vistas )
    res.locals.user = false;
    if (req.session.user) {
        res.locals.user = req.session.user;

    }
    next()
}