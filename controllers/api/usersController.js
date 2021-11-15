const db = require('../../database/models/index.js');
const User = db.User;


const controller = {
    list: (req, res) => {
        User.findAll()
            .then(usersDb => {
                let users = [];
                usersDb.forEach(user => {
                    let userForApi = {
                        id: user.id,
                        name: user.name,
                        email: user.email,
                        detail: `/api/users/${user.id}`
                    };
                    users.push(userForApi);
                });
                let response = {
                    count: usersDb.length,
                    users: users
                }
                res.json(response)
            })
    },
    detail: (req, res) => {
        User.findByPk(req.params.id)
            .then(user => {
                let response = {
                    id: user.id,
                    name: user.name,
                    lastName: user.lastName,
                    phone: user.phone,
                    email: user.email,
                    image: `/images/users${user.image}`
                }
                res.json(response)
            })
    }
};
module.exports = controller;