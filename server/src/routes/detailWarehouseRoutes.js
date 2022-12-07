const Router = require('express')
const router = new Router()
const detailWarehouseController = require('../controllers/detailWarehouseController')

router.post('/', detailWarehouseController.createDetailWarehouse)
router.get('/all', detailWarehouseController.getAllDetailWarehouses)
router.get('/current', detailWarehouseController.getOneDetailWarehouse)
module.exports=router;
