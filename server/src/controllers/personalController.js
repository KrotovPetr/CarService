const {Mechanic, Manager} = require("../models/models");

class PersonalController {
    async createMechanic(req, res) {
        const login = req.body.last_name+req.body.first_name;
        const password="123456";
        const brand = await Mechanic.create({...req.body, login, password})
        return {status:200}
    }
    async createManager(req, res) {
        const login = req.body.last_name+req.body.first_name;
        const password="123456";
        const brand = await Manager.create({...req.body, login, password})
        res.send({status:200})
    }

    async getAllManagers(req, res) {
        const brands = await Manager.findAll()
        return {status:200, data: res.json(brands)}
    }
    async getAllMechanics(req, res) {
        const brands = await Mechanic.findAll()
        return {status:200, data: res.json(brands)}
    }

    async getManager(req, res) {
        const brands = await Manager.findByPk()
        return {status:200, data: res.json(brands)}
    }
    async getMechanic(req, res) {
        const brands = await Mechanic.findByPk()
        return {status:200, data: res.json(brands)}
    }

}


module.exports = new PersonalController()