const db = require('../../database/models/index.js');
const User = db.User;


const controller = {
    list: (req,res)=>{
        User.findAll()
        .then(usersDb => {
            let users=[];
            usersDb.forEach(user => {
                let userForApi ={
                    id: user.id,
                    name:user.name,
                    email:user.email,
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
    }
};
module.exports = controller;