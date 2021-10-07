module.exports = (sequelize, dataTypes) => {
    let alias = 'Invoice';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        price: {
            type: dataTypes.DECIMAL
        },
        date: {
            type: dataTypes.DATE
        },
        user_id: {
            type: dataTypes.INTEGER,
            references: 'user',
            referencesKey: 'id'
        }
    };
    let config = {
        tableName: "invoice",
        timestamps: false
    };
    const Invoice = sequelize.define(alias, cols, config);

    Invoice.associate = function(models) {
        Invoice.belongsTo(models.User, {
            as: 'user',
            foreignKey: 'user_id'
        })
        Invoice.belongsToMany(models.Product, {
            as: 'products',
            through: 'invoice_has_product',
            foreignKey: 'invoice_id',
            otherKey: 'product_id',
            timestamps: false
        })
    }


    return Invoice;
};