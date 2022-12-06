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
    login: {type: DataTypes.STRING, notNull: true},
    password: {type: DataTypes.STRING, notNull: true},
    email: {type: DataTypes.STRING,notNull: true}
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'manager'
})

const Order = sequelize.define('order', {
    idOrderr: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Data: {type: DataTypes.STRING, notNull: true},
    deed_number: {type: DataTypes.STRING, notNull: true},
    typeOfService: {type: DataTypes.STRING, notNull: true},
    status: {type: DataTypes.STRING, notNull: true},
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'orderr'
})

const Client = sequelize.define('client', {
    idClient: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    last_name: {type: DataTypes.STRING, notNull: true},
    first_name: {type: DataTypes.STRING, notNull: true},
    phone: {type: DataTypes.STRING, notNull: true},
    email: {type: DataTypes.STRING,notNull: true}
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'client'
})

const Car = sequelize.define('car', {
    idCar: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Type: {type: DataTypes.STRING, notNull: true},
    VIN: {type: DataTypes.STRING, notNull: true},
    frame_number: {type: DataTypes.STRING, notNull: true},
    Colour: {type: DataTypes.STRING,notNull: true},
    Model: {type: DataTypes.STRING,notNull: true}
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'car'
})

const Detail = sequelize.define('detail', {
    idDetail: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Colour: {type: DataTypes.STRING,notNull: true},
    Brand: {type: DataTypes.STRING,notNull: true},
    serial_number: {type: DataTypes.STRING,notNull: true}
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'detail'
})


Client.hasOne(Car, {foreignKey: {
        name: 'client_idclient'
    }})
Car.belongsTo(Client, {foreignKey: 'mechanic_idmechanic'})

Mechanic.hasOne(Order,{foreignKey: 'mechanic_idmechanic'})
Order.belongsTo(Mechanic, {foreignKey: 'mechanic_idmechanic'})

Manager.hasOne(Order,{foreignKey: 'manager_idmanager'})
Order.belongsTo(Manager, {foreignKey: 'mechanic_idmechanic'})

Detail.hasMany(Order, {foreignKey: 'detail_iddetail'})
Order.belongsTo(Detail, {foreignKey: 'mechanic_idmechanic'})

Client.hasOne(Order,  {foreignKey: 'client_idclient'})
Order.belongsTo(Client, {foreignKey: 'mechanic_idmechanic'})

module.exports = {
    CarService, Mechanic, Manager, Client, Car, Order, Detail
}
