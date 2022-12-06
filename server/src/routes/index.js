const Router = require('express')
const router = new Router()
const carServiceRouter = require('./carserviceRoutes')
const personalRouter = require('./personalRoutes')
const ordersRouter = require('./ordersRoutes')
const clientRouter = require('./clientRoutes')

router.use('/service', carServiceRouter)
router.use('/personal', personalRouter)
router.use('/orders', ordersRouter)
router.use('/client', clientRouter)

module.exports = router