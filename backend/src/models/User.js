const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('users',{
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        role: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        profilePicture: {
            type: DataTypes.STRING
        },
        isVerified:{
            type: DataTypes.BOOLEAN,
            allowNull:false
        }
    },{timestamps: false})
};