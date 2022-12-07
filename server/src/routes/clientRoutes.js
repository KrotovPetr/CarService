const Router = require('express')
const router = new Router()
const clientController = require('../controllers/clientController')

router.post('/new', clientController.createClient)
router.get('/all', clientController.getAllClients)
router.get('/current', clientController.getOneClient)
module.exports=router;