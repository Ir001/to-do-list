const bcrypt = require('bcryptjs')
const jwt  = require('jsonwebtoken')
const User = require('../models/User')
const register = async(req,res,next) => {
    if(Object.keys(req.body).length == 0){
        res.json({success:true, 'message' : 'Success registered!', 'password' : passwordHash})
    }
    try {
        const isEmailExist = await User.find({email:req.body.email})
        const isUsernameExist = await User.find({username:req.body.username})
        console.log(isEmailExist.length)
        console.log(isUsernameExist.length)
        if(isEmailExist.length > 0){
            return res.json({success:false, 'message' : `Email already exist!`})
        }
        if(isUsernameExist.length > 0){
            return res.json({success:false, 'message' : `Username already exist!`})
        }
        const passwordHash = await bcrypt.hash(req.body.password,10)
        const user = {
            'fullname' : req.body.fullname,
            'email' : req.body.email,
            'username' : req.body.username,
            'password' : passwordHash,
            'created_at' : Date()
        }
        await User.create(user)
        res.json({success:true, 'message' : `Congratulation, registration successfully!`})
    } catch (error) {
        res.json({success:false, 'message' : `${error.toString()}`})
    }
    res.end()
}

const login = async(req,res,next) => {
    try{
        const user = await User.findOne({username : req.body.username})
        if(user == null) return res.json({success : false, 'message' : 'Username tidak ditemukan'})
        const matchPasswod = await bcrypt.compare(req.body.password, user.password)
        if(!matchPasswod) return res.status(400).json({success : false, 'message' : 'Wrong password!'})
        const accessToken = jwt.sign({
            userId : user.id,
            username : user.username,
            email : user.email,
        }, "SECRET_WOULD_IN_ENV", { expiresIn : '20s'})
        return res.json({success : true, 'data' : {accessToken}})
    }catch(error){
        return res.json(error.toString())
    }
}

module.exports = {
    register,
    login
}