module.exports = (sequelize, dataTypes) => {
    let alias = 'Characteristic';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        value: {
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER,
            references: 'product',
            referencesKey: 'id'
        }
    };
    let config = {
        tableName: "characteristic",
        timestamps: false
    };
    const Characteristic = sequelize.define(alias, cols, config);

    Characteristic.associate = function(models) {
        Characteristic.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }


    return Characteristic;
};