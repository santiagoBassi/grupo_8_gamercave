module.exports = (sequelize, dataTypes) => {
    let alias = 'User';
    let cols = {
        id: {
            type: dataTypes.BIGINT(10).UNSIGNED,
            primaryKey: true,
            allowNull: false,
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

    return User;
};