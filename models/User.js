const mongoose = require('mongoose')
const Schema = mongoose.Schema

const UserSchema = new Schema({
    fullname : {
        type : String
    },
    username : {
        type : String
    },
    email : {
        type : String
    },
    password : {
        type : String
    },
    refresh_token : {
        type : String
    },
    created_at : {
        type : Date
    },
}, {timestamps : true})

const User = mongoose.model('User', UserSchema)
module.exports = User