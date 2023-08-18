const Sequelize = require('sequelize')
const sequelize = new Sequelize('atendimentochamadas', 'root', '1234', {
    host: "localhost",
    dialect: "mysql"
})

module.exports = sequelize;