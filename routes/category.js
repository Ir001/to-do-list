const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const CategoryController = require('../controllers/CategoryController')

router.get('/index', verifyToken,  CategoryController.index)
router.post('/store', verifyToken,  CategoryController.store)
router.post('/update', verifyToken,  CategoryController.update)

module.exports = router