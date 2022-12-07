const Router = require('express')
const router = new Router()
const orderCarServiceController = require('../controllers/orderCarserviceController')

router.post('/', orderCarServiceController.createOrderCarservice)
router.get('/', orderCarServiceController.getAllOrderCarservices)

module.exports=router;