const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ToDoSchema = new Schema({
    name : {
        type : String
    },
    is_complete : {
        type : Boolean
    },
    created_at : {
        type : Date
    },
    category : {
        type : mongoose.Types.ObjectId, ref: "Category"
    },
    user : {
        type : mongoose.Types.ObjectId, ref: "User"
    },
}, {timestamps : true})

const ToDo = mongoose.model('ToDo', ToDoSchema)
module.exports = ToDo