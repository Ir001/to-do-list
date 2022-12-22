const bcrypt = require('bcryptjs')

const register = (req,res,next) => {
    if(bcrypt.hash(req.body.password,10, (err,passwordHash) => {
        if(err) res.json({success : false,'message' : err})
        res.json({success:true, 'message' : 'Success registered!', 'password' : passwordHash})
    }))
    res.end()
}

module.exports = {
    register
}