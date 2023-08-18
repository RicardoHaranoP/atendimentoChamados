const { DataTypes, Model } = require('sequelize');
const sequelize = require('../db');

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