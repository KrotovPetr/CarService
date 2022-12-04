const Router = require('express')
const router = new Router()
const carServiceRouter = require('./carserviceRoutes')
const mechanicRouter = require('./mechanicsRoutes')

router.use('/service', carServiceRouter)
router.use('/personal', mechanicRouter)

module.exports = router