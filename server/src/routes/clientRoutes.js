const Router = require('express')
const router = new Router()
const clientController = require('../controllers/clientController')

router.post('/', clientController.createClient)
router.get('/', clientController.getAllClients)
module.exports=router;