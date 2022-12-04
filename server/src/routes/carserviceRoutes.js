const Router = require('express')
const router = new Router()
const carServiceController = require('../controllers/carServiceController')

router.post('/', carServiceController.create)
router.get('/', carServiceController.getAll)
module.exports=router;