const express = require('express')
const router = express.Router()
const AuthController = require('../controllers/AuthController')
const RefreshToken = require('../controllers/RefreshToken')

router.post('/register', AuthController.register)
router.post('/login', AuthController.login)
router.get('/token', RefreshToken.getToken)

module.exports = router