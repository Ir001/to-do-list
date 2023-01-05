const jwt = require('jsonwebtoken')
const User = require('../models/User')

const getToken = async(req, res)=>{
    const refreshToken = req.cookies.refreshToken
    if(!refreshToken) return res.status(401).json({'success' : false, 'message' : 'Invalid access token!'})
    const user = await User.findOne({refresh_token : refreshToken})
    if(user.length == 0) return res.status(401).json({'success' : false, 'message' : 'Invalid access token!'})
    const payload = {
        userId : user.id,
        username : user.username,
        email : user.email,
    }
    const accessToken = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn : '20s'})
    return res.json({'success' : true, 'data' : {accessToken}})
}
module.exports = {getToken}