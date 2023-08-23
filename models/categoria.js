const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');
const Chamado = require('./chamados');

class Categoria extends Model {}

Categoria.init({
    nomeCategoria: {
        type: DataTypes.STRING,
        allowNull: false
    }
}, {
    sequelize,
    modelName: 'Categoria'
});


module.exports = Categoria;