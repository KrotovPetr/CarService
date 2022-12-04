const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const CarService = sequelize.define('carservice', {
    idCarService: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    address: {type: DataTypes.STRING, notNull: true},
    phone: {type: DataTypes.STRING, notNull: true},
    name: {type: DataTypes.STRING, notNull: true}
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'carservice'
})
const Mechanic = sequelize.define('mechanic', {
    idMechanic: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    last_name: {type: DataTypes.STRING, notNull: true},
    first_name: {type: DataTypes.STRING, notNull: true},
    phone: {type: DataTypes.STRING, notNull: true},
    qualification:{type: DataTypes.STRING, notNull: true},
}, {
    createdAt: false,
        updatedAt: false,
        tableName: 'mechanic'
})
const Manager = sequelize.define('manager', {
    idManager: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    last_name: {type: DataTypes.STRING, notNull: true},
    first_name: {type: DataTypes.STRING, notNull: true},
    phone: {type: DataTypes.STRING, notNull: true},
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'manager'
})


module.exports = {
    CarService, Mechanic, Manager
}
