const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Usuario extends Model {}

Usuario.init({
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Usuario'
});



module.exports = Usuario;