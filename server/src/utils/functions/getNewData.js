const {Mechanic, Manager, Detail, Client} = require("../../models/models");

function getNewData(results){
    results = results.map(async (elem)=>{
        let mechanic = await Mechanic.findByPk(elem["mechanic_idmechanic"]).then(data=>data.dataValues)
        let manager = await Manager.findByPk(elem["manager_idmanager"]).then(data => data.dataValues)
        let detail =  await Detail.findByPk(elem["detail_iddetail"]).then(data => data.dataValues)
        let client = await Client.findByPk(elem["client_idclient"]).then(data => data.dataValues)
        return {...elem, mechanic: mechanic, manager: manager, detail: detail, client: client};
    })
    return results
}

module.exports = getNewData;