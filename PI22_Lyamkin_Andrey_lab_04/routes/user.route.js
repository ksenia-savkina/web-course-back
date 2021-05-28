const Router = require('express')
const router = new Router()
const users = require('../controllers/user.controller.js')

router.post('/register', users.register)
router.post('/login', users.login)

module.exports = router