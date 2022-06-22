const User = require('../model/User')
const bcrypt = require('bcryptjs')
const { errorHandler } = require('../../validator/utils/errorHandler')

const createUser = async (req, res) => {
    const { firstName, lastName, username, email, password, address } = req.body

    try {
        let salt = await bcrypt.genSalt(10)
        let hashPassword = await bcrypt.hash(password, salt)

        const newUser = new User({
            firstName: firstName,
            lastName: lastName,
            username: username,
            email: email,
            password: password,
            address: address
        })

        const savedUser = await newUser.save()
        res.status(200).json({ message: "New user has been saved", payload: savedUser })
    }
    catch (err) {
        res.status(500).json({ message: "Error", error: errorHandler(error) })
    }
}

module.exports = {
    createUser
}