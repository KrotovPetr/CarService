const {Detail_Warehouse} = require("../models/models");

class DetailWarehouseController {
    async createDetailWarehouse(req, res) {
        let price = 45000;
        let year = 2022;
        let amount = 10;
        const brand = await Detail_Warehouse.create({...req.body, Price: price, Year: year, Amount: amount})
        return {status:200, data: res.json(brand)}
    }
    async getAllDetailWarehouses(req, res) {
        const brands = await Detail_Warehouse.findAll();
        console.log(brands);
        return {status:200, data: res.json(brands)}
    }
    async getOneDetailWarehouse(req, res) {
        let params = req.query.VIN;
        // let results = await Detail_Warehouse.findOne({where: {VIN: params}});
        return {status:200, data: res.json(1)}
    }

}

module.exports = new DetailWarehouseController()