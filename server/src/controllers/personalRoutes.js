const {Mechanic, Manager} = require("../models/models");

class PersonalController {
    async createMechanic(req, res) {
        const {name} = req.body
        const brand = await Mechanic.create({name})
        return {status:200, data: res.json(brand)}
    }
    async createManager(req, res) {
        const {name} = req.body
        const brand = await Manager.create({name})
        return {status:200, data: res.json(brand)}
    }

    async getAllManagers(req, res) {
        const brands = await Manager.findAll()
        return {status:200, data: res.json(brands)}
    }
    async getAllMechanics(req, res) {
        const brands = await Mechanic.findAll()
        return {status:200, data: res.json(brands)}
    }

}

module.exports = new PersonalController()