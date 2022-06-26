const express = require('express')
const router = express.Router()
const { createPost, getAllPosts, updatePost, deletePost } = require('./controller/postController')
const { checkIsEmpty } = require('../validator/lib/index')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Hello World from postsRouter')
})

router.post('/create-post/:id', checkIsEmpty, createPost)
router.get('/all-posts', getAllPosts)
router.put('/update-post/:userId/:postId', checkIsEmpty, updatePost)
router.delete('/delete-post/:userId/:postId', deletePost)

module.exports = router