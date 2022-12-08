const Router = require('express')
const router = new Router()
const ordersController = require('../controllers/ordersController')

router.post('/', ordersController.createOrder)
router.get('/all', ordersController.getAllOrders)
router.get('/current', ordersController.getOneOrder)
router.delete('/', ordersController.deleteOneOrder)
router.patch('/', ordersController.updateOneOrder)
module.exports=router;

