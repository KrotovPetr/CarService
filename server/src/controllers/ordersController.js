const {Order, Mechanic, Manager, Detail, Client} = require("../models/models");
const getNewData = require("../utils/functions/getNewData");
const {Sequelize, where} = require("sequelize");

class OrdersController {
    async createOrder(req, res) {
        const login = req.body.last_name+req.body.first_name;
        const password="123456";
        const brand = await Order.create({...req.body, login, password})
        return {status:200}
    }
    async getAllOrders(req, res) {
        let results = await Order.findAll({include:[Manager, Client, Mechanic, Detail]});
        // let newData = await getNewData(results);
        return {status:200, data: res.json(results)}
    }
    async getOneOrder(req, res) {
        let id = req.query.id;
        let results = await Order.findByPk(id,{include:[Manager, Client, Mechanic, Detail]});
        return {status:200, data: res.json(results)}
    }

}


module.exports = new OrdersController()