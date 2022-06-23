const { isAlpha, isAlphanumeric, isStrongPassword } = require('validator')

const validateUpdateUser = (req, res, next) => {
    const { firstName, lastName, username, password, confirmPassword } = req.body
    let errObj = {}

    if(!isAlpha(firstName)) {
        errObj.firstName = "First name cannot include numbers or special characters!"
    }
    if(!isAlpha(lastName)) {
        errObj.lastName = "Last name cannot include numbers or special characters!"
    }
    if(!isAlphanumeric(username)) {
        errObj.username = "Username cannot have any special characters!"
    }
    if(!isStrongPassword(password)) {
        errObj.password = "Password must contain a minimum of 1 number, 1 uppercase letter, 1 lowercase letter, 1 special character and 8 characters in length!"
    }
    if(password !== confirmPassword) {
        errObj.confirmPassword = "Password and confirm password do not match!"
    }
    
    let checkObj = Object.keys(errObj)

    if(checkObj.length > 0) {
        return res.status(500).json({ message: "error", error: errObj })
    }
    else {
        next()
    }
}

module.exports = {
    validateUpdateUser
}