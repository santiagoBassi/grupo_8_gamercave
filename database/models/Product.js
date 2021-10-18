module.exports = (sequelize, dataTypes) => {
    let alias = 'Product';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        price: {
            type: dataTypes.DECIMAL
        },
        discount: {
            type: dataTypes.DECIMAL
        },
        category_id: {
            type: dataTypes.INTEGER,
            references: 'category',
            referencesKey: 'id'
        }

    };
    let config = {
        tableName: "product",
        timestamps: false
    };
    const Product = sequelize.define(alias, cols, config);

    Product.associate = function(models) {
        Product.belongsTo(models.Category, {
            as: 'category',
            foreignKey: 'category_id'
        })
        Product.hasMany(models.Characteristic, {
            as: 'characteristics',
            foreignKey: 'product_id'
        })
        Product.hasMany(models.Image, {
            as: 'images',
            foreignKey: 'product_id'
        })
        Product.belongsToMany(models.Invoice, {
            as: 'invoices',
            through: 'invoice_has_product',
            foreignKey: 'product_id',
            otherKey: 'invoice_id',
            timestamps: false
        })
        Product.hasMany(models.Cart, {
            as: 'cart',
            foreignKey: 'product_id'
        })
    }

    return Product;
};