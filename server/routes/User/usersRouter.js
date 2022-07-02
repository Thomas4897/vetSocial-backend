const express = require('express')
const router = express.Router()
const { createUser, updateUser, getCurrentUser, getAllUsers, deleteUser, userLogin } = require('./controller/userController')
const { checkIsEmpty, validateCreateUser, validateUpdateUser, validateLogin, jwtMiddleware } = require('../validator/lib/index')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Hello World from usersRouter')
})

router.post('/create-user', createUser)
router.put('/update-user', checkIsEmpty, validateUpdateUser, jwtMiddleware, updateUser)
router.get('/current-user', jwtMiddleware, getCurrentUser)
router.get('/all-users', getAllUsers)
router.delete('/delete-user/:id', deleteUser)
router.post('/login', checkIsEmpty, validateLogin, userLogin)

module.exports = router