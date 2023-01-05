const express = require('express')
const router = express.Router()
const verifyToken = require('../middleware/verifyToken')
const ToDoController = require('../controllers/ToDoController')

router.get('/index', verifyToken, ToDoController.index)
router.post('/store', verifyToken, ToDoController.store)
router.post('/update', verifyToken, ToDoController.update)

module.exports = router