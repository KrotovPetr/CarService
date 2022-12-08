const {Detail} = require("../models/models");

class DetailController {
    async createDetail(req, res) {
        let serialNumber = "SFBFB1"+Date.now();
        const brand = await Detail.create({...req.body, serial_number: serialNumber})
        return {status:200, data: res.json(brand)}
    }
    async getAllDetails(req, res) {
        const brands = await Detail.findAll();
        // console.log(brands);
        return {status:200, data: res.json(brands)}
    }

}

module.exports = new DetailController()