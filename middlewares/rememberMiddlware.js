const fs = require('fs');


function remember(req, res, next) {

    if (req.cookies.remember != undefined && req.session.usuarioLogeado == undefined) {
        const usersJSON = fs.readFileSync("data/users.json", { encoding: "utf-8" });
        const users = JSON.parse(usersJSON);

        let usuarioALogearse;
        users.forEach((user) => {
            if (user.id == req.cookies.remember) {
                usuarioALogearse = user;

            };
        });
        req.session.usuarioLogeado = usuarioALogearse;
    }
    next();
}

module.exports = remember;