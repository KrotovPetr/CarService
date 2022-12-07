const {Car} = require("../models/models");

class CarController {
    async createCar(req, res) {
        const brand = await Car.create(req.body)
        return {status:200, data: res.json(brand)}
    }
    async getAllCars(req, res) {
        const brands = await Car.findAll();
        return {status:200, data: res.json(brands)}
    }
    async getOneCar(req, res) {
        let params = req.query.VIN;
        let results = await Car.findOne({where: {VIN: params}});
        return {status:200, data: res.json(results)}
    }

}

module.exports = new CarController()