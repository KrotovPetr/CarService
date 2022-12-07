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

const Warehouse = sequelize.define('warehouse', {
    idWarehouse: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Address: {type: DataTypes.STRING,notNull: true},
    Type: {type: DataTypes.STRING,notNull: true},
    Phone: {type: DataTypes.STRING,notNull: true},
    Email: {type: DataTypes.STRING,notNull: true},
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'warehouse'
})

const Detail_Warehouse = sequelize.define('detail_warehouse', {
    idDetail_Warehouse: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Amount: {type: DataTypes.STRING,notNull: true},
    Price: {type: DataTypes.STRING,notNull: true},
    Year: {type: DataTypes.STRING,notNull: true},
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'detail_warehouse'
})

const Order_Carservice = sequelize.define('order_carservice', {
    idOrderr_Carservice: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    Date: {type: DataTypes.DATE,notNull: true},
    Type: {type: DataTypes.STRING,notNull: true},
    Price: {type: DataTypes.STRING,notNull: true},
}, {
    createdAt: false,
    updatedAt: false,
    tableName: 'orderr_carservice'
})

Client.hasOne(Car, {foreignKey: 'Client_idClient'})
Car.belongsTo(Client, {foreignKey: 'Client_idClient'})

Mechanic.hasOne(Order,{foreignKey: 'Mechanic_idMechanic'})
Order.belongsTo(Mechanic, {foreignKey: 'Mechanic_idMechanic'})

Manager.hasOne(Order,{foreignKey: 'Manager_idManager'})
Order.belongsTo(Manager, {foreignKey: 'Manager_idManager'})

Detail.hasMany(Order, {foreignKey: 'Detail_idDetail'})
Order.belongsTo(Detail, {foreignKey: 'Detail_idDetail'})

Client.hasOne(Order,  {foreignKey: 'Client_idClient'})
Order.belongsTo(Client, {foreignKey: 'Client_idClient'})

Warehouse.hasMany(Detail_Warehouse,  {foreignKey: 'Warehouse_idWarehouse'})
Detail_Warehouse.belongsTo(Warehouse, {foreignKey:'Warehouse_idWarehouse'})

Detail.hasMany(Detail_Warehouse,  {foreignKey: 'Detail_idDetail'})
Detail_Warehouse.belongsTo(Detail ,{foreignKey:'Detail_idDetail'})

Order.hasMany(Order_Carservice,  {foreignKey: 'Orderr_idOrderr'})
Order_Carservice.belongsTo(Order ,{foreignKey:'Orderr_idOrderr'})

CarService.hasMany(Order_Carservice,  {foreignKey: 'CarService_idCarService'})
Order_Carservice.belongsTo(CarService ,{foreignKey:'CarService_idCarService'})
module.exports = {
    CarService, Mechanic, Manager, Client, Car, Order, Detail, Warehouse, Detail_Warehouse, Order_Carservice
}
