const {CarService} = require('../models/models')

class CarServiceController {
    async create(req, res) {
        const {name} = req.body
        const brand = await CarService.create({name})
        return {status:200, data: res.json(brand)}
    }

    async getAll(req, res) {
        const brands = await CarService.findAll()
        return {status:200, data: res.json(brands)}
    }

}

module.exports = new CarServiceController()