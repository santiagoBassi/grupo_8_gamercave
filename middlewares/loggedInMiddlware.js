function loggedInMiddlware(req, res, next) {
    if (req.session.user != undefined) {
        next();
    } else {
        res.redirect('../users/login')
    }
}

module.exports = loggedInMiddlware;