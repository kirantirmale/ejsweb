const express = require('express')
const router = express.Router()
const authRouting = require('./authRouting')
const pageRouting = require('./pageRouting')
const apirouting = require('./apirouting')


router.use('/', authRouting)
router.use('/', pageRouting)
router.use('/api',apirouting )



module.exports = router