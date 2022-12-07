const {Warehouse} = require("../models/models");

class WarehouseController {
    async createWarehouse(req, res) {
        return {status:200}
    }
    async getAllWarehouses(req, res) {
        const data = await Warehouse.findAll();
        return {status:200, data: res.json(data)}
    }

}


module.exports = new WarehouseController()