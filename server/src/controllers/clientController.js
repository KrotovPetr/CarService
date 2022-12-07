const {Client, Order, Car} = require("../models/models");

class ClientController {
    async createClient(req, res) {
        // console.log(info);
        const info = await Client.create({...req.body})
        return {status:200, data: res.json(info)}
    }
    async getAllClients(req, res) {
        const brands = await Client.findAll();
        return {status:200, data: res.json(brands)}
    }
    async getOneClient(req, res) {
        let params = req.query.email;
        let results = await Client.findOne({where: {email: params}, include: [Car]});
        return {status:200, data: res.json(results)}
    }

}


module.exports = new ClientController()