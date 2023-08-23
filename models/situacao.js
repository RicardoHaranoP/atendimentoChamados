const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Situacao extends Model {}

Situacao.init({
    nomeSituacao: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Situacao'
});



module.exports = Situacao;