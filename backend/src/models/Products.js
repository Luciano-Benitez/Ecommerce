const {DataTypes, Sequelize} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('products', {
        id: {
            type: DataTypes.INTEGER,
            unique: true,
            primaryKey: true,
            allowNull: false
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        productType: {
            type: DataTypes.STRING,
            allowNull: false
        },
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        rating: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        image: {
            type: DataTypes.ARRAY(Sequelize.TEXT)
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{timestamps: false})
};