const express = require('express')
const router = express.Router()
const { createUser } = require('./controller/userController')
const { checkIsEmpty, validateCreateUser } = require('../validator/lib/index')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Hello World from usersRouter')
})

router.post('/create-user', checkIsEmpty, validateCreateUser, createUser)

module.exports = router