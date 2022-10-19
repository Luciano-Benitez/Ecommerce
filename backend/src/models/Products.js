const {DataTypes} = require('sequelize');

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
        price: {
            type: DataTypes.FLOAT,
            allowNull: false
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    },{timestamps: false})
};