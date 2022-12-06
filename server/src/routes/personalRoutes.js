const Router = require('express')
const router = new Router()
const personalController = require('../controllers/personalController')

router.post('/mechanics', personalController.createMechanic)
router.post('/managers', personalController.createManager)
router.get('/mechanics', personalController.getAllMechanics)
router.get('/managers', personalController.getAllManagers)
module.exports=router;