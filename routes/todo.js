const express = require('express')
const router = express.Router()

const ToDoController = require('../controllers/ToDoController')

router.get('/get-all', ToDoController.getAll)
router.post('/store', ToDoController.store)
router.post('/update', ToDoController.update)

module.exports = router