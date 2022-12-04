const Router = require('express')
const router = new Router()
const personalController = require('../controllers/personalRoutes')

router.post('/mechanics', personalController.createMechanic)
router.post('/manager', personalController.createManager)
router.get('/mechanics', personalController.getAllMechanics)
router.get('/managers', personalController.getAllManagers)
module.exports=router;