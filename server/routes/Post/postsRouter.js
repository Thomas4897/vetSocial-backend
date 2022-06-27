const express = require('express')
const router = express.Router()
const { createPost, getAllPosts, updatePost, deletePost, getPostsByUser } = require('./controller/postController')
const { checkIsEmpty, jwtMiddleware } = require('../validator/lib/index')

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.send('Hello World from postsRouter')
})

router.post('/create-post', checkIsEmpty, jwtMiddleware, createPost)
router.get('/all-posts', getAllPosts)
router.put('/update-post/:id', checkIsEmpty, jwtMiddleware, updatePost)
router.delete('/delete-post/:id', jwtMiddleware, deletePost)
router.get('/posts-by-user', jwtMiddleware, getPostsByUser)


module.exports = router