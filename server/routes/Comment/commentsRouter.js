const express = require('express')
const router = express.Router()
const { createComment, getAllComments, updateComment, deleteComment } = require('./controller/commentController')
const { checkIsEmpty } = require('../validator/lib/index')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Hello World from commentsRouter')
})

router.post('/create-comment/:userId/:postId', checkIsEmpty, createComment)
router.get('/all-comments/:id', getAllComments)
router.put('/update-comment/:userId/:commentId', checkIsEmpty, updateComment)
router.delete('/delete-comment/:userId/:commentId', checkIsEmpty, deleteComment)

module.exports = router