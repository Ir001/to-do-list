const express = require('express')
const router = express.Router()

const CategoryController = require('../controllers/CategoryController')

router.post('/store', CategoryController.store)
router.post('/update', CategoryController.update)

module.exports = router