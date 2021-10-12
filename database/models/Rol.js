module.exports = (sequelize, dataTypes) => {
    let alias = 'Rol';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        }
    };
    let config = {
        tableName: "rol",
        timestamps: false
    };
    const Rol = sequelize.define(alias, cols, config);

    Rol.associate = function(models) {
        Rol.hasMany(models.User, {
            as: 'users',
            foreignKey: 'rol_id'
        })
    }

    return Rol;
};