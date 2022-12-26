const mongoose = require('mongoose')
const Schema = mongoose.Schema

const CategorySchema = new Schema({
    name : {
        type : String
    },
    created_at : {
        type : Date
    }
}, {timestamps : true})

const Category = mongoose.model('Category', CategorySchema)
module.exports = Category