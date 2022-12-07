const Router = require('express')
const router = new Router()
const ordersController = require('../controllers/ordersController')

router.post('/', ordersController.createOrder)
router.get('/all', ordersController.getAllOrders)
router.get('/current', ordersController.getOneOrder)
module.exports=router;