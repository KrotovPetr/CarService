const Router = require('express')
const router = new Router()
const carController = require('../controllers/carController')

router.post('/', carController.createCar)
router.get('/all', carController.getAllCars)
router.get('/current', carController.getOneCar)
module.exports=router;
