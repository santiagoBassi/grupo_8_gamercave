module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        lastName: {
            type: dataTypes.STRING
        },
        phone: {
            type: dataTypes.STRING
        },
        email: {
            type: dataTypes.STRING
        },
        password: {
            type: dataTypes.STRING
        },
        image: {
            type: dataTypes.STRING
        },
        rol_id: {
            type: dataTypes.INTEGER,
            references: 'rol',
            referencesKey: 'id'
        }

    };
    let config = {
        tableName: "user",
        timestamps: false
    };
    const User = sequelize.define(alias, cols, config);

    User.associate = function(models) {
        User.belongsTo(models.Rol, {
            as: 'rol',
            foreignKey: 'rol_id'
        })
        User.hasMany(models.Invoice, {
            as: 'invoices',
            foreignKey: 'user_id'
        })
        User.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'user_id'
        })

    }

    return User;
};