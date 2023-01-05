const jwt = require('jsonwebtoken')

const verifyToken = (req,res,next) => {
    const authorization = req.headers['authorization']
    const token = authorization && authorization.split(' ')[1]
    if(token == null) return res.status(401).json({'success':false,'message' : 'Authorization was empty!'})

    jwt.verify(token, process.env.SECRET_KEY, (err,decoded) => {
        if(err) return res.status(401).json({'success' : false, 'message' : 'Token invalid!'})
        req.userId = decoded.userId
        next()
    })
}

module.exports = verifyToken