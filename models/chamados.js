const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

class Chamado extends Model {}

Chamado.init({
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descricao: {
        type: DataTypes.STRING,
        allowNull: false
    },
    prazoSolucao: {
        type: DataTypes.DATE,
        allowNull: false
    },
    dataCriacao: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    dataSolucao: {
        type: DataTypes.DATE,
    }
        
 
}, {
    sequelize,
    modelName: 'Chamado'
});


module.exports = Chamado;