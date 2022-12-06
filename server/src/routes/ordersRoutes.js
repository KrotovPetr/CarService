const Router = require('express')
const router = new Router()
const ordersController = require('../controllers/ordersController')

router.post('/', ordersController.createOrder)
router.get('/', ordersController.getAllOrders)
module.exports=router;