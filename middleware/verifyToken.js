const jwt = require('jsonwebtoken')

export const verifyToken = (req,res,next) => {
    const authorization = req.headers['authorization']
    const token = authorization && authorization.split(' ')[1]
    if(token == null) return res.status(403).json({'success':false,'message' : 'Authorization was empty!'})

    jwt.verify(token, process.env.SECRET_KEY, (err,decoded) => {
        if(err) return res.status(403).json({'success' : false, 'message' : 'Error verify token!'})
        req.username = decoded.username
        next()
    })
}