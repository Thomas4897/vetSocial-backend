const jwt = require('jsonwebtoken')

const jwtMiddleware = async (req, res, next) => {
    try {
        if(req.headers && req.headers.authorization) {
            const slicedToken = req.headers.authorization.slice(7)
            const decodedToken = jwt.verify(slicedToken, process.env.SECRET_KEY)
            res.locals.decodedToken = decodedToken
            next()
        }
        else {
            throw { message: "You do not have permission" }
        }
    }
    catch (err) {
        console.log(err)
        res.statius(500).json({ message: "error", error: err.message })
    }
}

module.exports = {
    jwtMiddleware
}