const {Order_Carservice} = require("../models/models");

class OrderCarserviceController {
    async createOrderCarservice(req, res) {
        let date = Date.now();
        let type = "2R";
        let price = 17000;
        const brand = await Order_Carservice.create({...req.body, Date: date, Type: type, Price: price})
        return {status:200, data: res.json(brand)}
    }
    async getAllOrderCarservices(req, res) {
        const brands = await Order_Carservice.findAll();
        return {status:200, data: res.json(brands)}
    }

}


module.exports = new OrderCarserviceController()