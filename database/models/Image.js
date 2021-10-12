module.exports = (sequelize, dataTypes) => {
    let alias = 'Image';
    let cols = {
        id: {
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: dataTypes.STRING
        },
        product_id: {
            type: dataTypes.INTEGER,
            references: 'product',
            referencesKey: 'id'
        }
    };
    let config = {
        tableName: "image",
        timestamps: false
    };
    const Image = sequelize.define(alias, cols, config);

    Image.associate = function(models) {
        Image.belongsTo(models.Product, {
            as: 'product',
            foreignKey: 'product_id'
        })
    }


    return Image;
};