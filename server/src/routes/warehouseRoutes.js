const Router = require('express')
const router = new Router()
const warehouseController = require('../controllers/warehouseController')

router.post('/', warehouseController.createWarehouse)
router.get('/all', warehouseController.getAllWarehouses)
// router.get('/current', warehouseController.getOneWarehouse)
// router.delete('/', warehouseController.deleteOneWarehouse)
module.exports=router;