const Router = require('express')
const router = new Router()
const detailController = require('../controllers/detailController')

router.post('/', detailController.createDetail)
router.get('/all',detailController.getAllDetails)
// router.get('/current', detailController.getOneDetail)
// router.delete('/', detailController.deleteOneDetail)
module.exports=router;