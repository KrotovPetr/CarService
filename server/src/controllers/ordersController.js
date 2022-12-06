const {Order, Mechanic, Manager, Detail, Client} = require("../models/models");

class OrdersController {
    async createOrder(req, res) {
        const login = req.body.last_name+req.body.first_name;
        const password="123456";
        const brand = await Order.create({...req.body, login, password})
        return {status:200}
    }
    async getAllOrders(req, res) {
        const brands = await Order.findAll()
        // let ansArr = brands.map(async (elem) => {
        //     let mechanic = await Mechanic.findOne(elem["mechanic_idMechanic"]).then(data => data.dataValues)
        //     // console.log(mechanic)
        //     let manager = await Manager.findOne(elem["manager_idManager"]).then(data => data.dataValues)
        //     let detail = await Detail.findOne(elem["detail_idDetail"]).then(data => data.dataValues)
        //     let client = await Client.findOne(elem["client_idClient"]).then(data => data.dataValues)
        //     elem["mechanic"] = mechanic["last_name"] + ` ` + mechanic["first_name"];
        //     elem["manager"] = manager["last_name"] + ` ` + manager["first_name"];
        //     elem["detail"] = detail;
        //     elem["client"] = client["last_name"] + ` ` + client["first_name"];
        //     console.log(elem)
        //     return elem;
        // })
        return {status:200, data: res.json(brands)}
    }

}


module.exports = new OrdersController()