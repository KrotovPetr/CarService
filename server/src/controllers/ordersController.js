const {Order, Mechanic, Manager, Detail, Client} = require("../models/models");
const getNewData = require("../utils/functions/getNewData");
const {Sequelize, where} = require("sequelize");

class OrdersController {
    async createOrder(req, res) {
        const data= Date.now();
        const deedNumber = Date.now().toString();
        const status =  "In work";
        const brand = await Order.create({...req.body, Data: data, deed_number: deedNumber, status:status})
        return {status:200, data: res.json(brand)}
    }

    async getAllOrders(req, res) {
        let results = await Order.findAll({include:[Manager, Client, Mechanic, Detail]});
        return {status:200, data: res.json(results)}
    }
    async getOneOrder(req, res) {
        let id = req.query.id;
        let results = await Order.findByPk(id,{include:[Manager, Client, Mechanic, Detail]});
        return {status:200, data: res.json(results)}
    }
    async deleteOneOrder(req, res) {
        let id = req.query.id;
        let results = await Order.destroy({where:{
            idOrderr: id,
            }});
        return {status:200, message: res.json("Success!")};
    }


}


module.exports = new OrdersController()