const {Client, Mechanic, Manager, Detail} = require("../models/models");

class ClientController {
    async createClient(req, res) {
        const login = req.body.last_name+req.body.first_name;
        const password="123456";
        const brand = await Client.create({...req.body, login, password})
        return {status:200}
    }
    async getAllClients(req, res) {
        const brands = await Client.findAll();
        console.log(brands);


        return {status:200, data: res.json(brands)}
    }

}


module.exports = new ClientController()