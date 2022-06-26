const Comment = require('../model/Comment')
const Post = require('../../Post/model/Post')
const User = require('../../User/model/User')

// Create comment
const createComment = async (req, res) => {
    const { comment } = req.body
    const { postId, userId } = req.params

    try {
        const foundPost = await Post.findById(postId)
        if(!foundPost) throw { message: "Post not found" }
        const foundUser = await User.findById(userId)
        if(!foundUser) throw { message: "User not found" }

        const newComment = new Comment({
            comment: comment,
            post: id,
            commentOwner: foundUser._id
        })
        const savedComment = await newComment.save()
        foundUser.commentHistory.push(savedComment.id)
        foundPost.commentHistory.push(savedComment.id)
        await foundUser.save()
        await foundPost.save()
        res.status(200).json({ message: "Saved new comment", payload: savedComment })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err.message })
    }
}

// Get all comments
const getAllComments = async (req, res) => {
    const { id } = req.params

    try {
        const foundUser = await User.findById(id)
        if(!foundUser) throw { message: "User not found!" }
        const foundComments = await Comment.find({ commentOwner: foundUser._id })
        res.status(200).json({ payload: foundComments })
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err.message })
    }
}

// Update comment
const updateComment = async (req, res) => {
    const { commentId, userId } = req.params

    try {
        const foundComment = await Comment.findById(commentId)
        if(!foundComment) throw { message: "Comment not found" }
        const foundUser = await User.findById(userId)
        if(!foundUser) throw { message: "User not found" }

        if(foundComment.commentOwner._id.toString() === foundUser._id.toString()) {
            const updatedComment = await Comment.findByIdAndUpdate(id, req.body, { new: true })
            res.status(200).json({ message: "Comment has been updated", payload: updatedComment })
        }
        else {
            throw { message: "You do no have permission" }
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err })
    }
}

// Delete comment
const deleteComment = async (req, res) => {
    const { commentId, userId } = req.params

    try {
        const foundComment = await Comment.findById(commentId)
        if(!foundComment) throw { message: "Comment not found" }
        const deletedComment = await Comment.findByIdAndDelete(commentId)
        if(!deleteComment) throw { message: "Comment not found" }
        const foundPost = await Post.findById(deletedComment.post)
        if(!foundPost) throw { message: "Post not found" }
        const foundUser = await User.findById(userId)
        if(!foundUser) throw { message: "User not found" }

        if(foundComment.commentOwner._id.toString() === foundUser._id.toString()) {
            foundUser.commentHistory.pull(id)
            foundPost.commentHistory.pull(id)
            await foundUser.save()
            await foundPost.save()
            res.status(200).json({ message: "Comment has been deleted", payload: deletedComment })
        }
        else {
            throw { message: "You do not have permission" }
        }
    }
    catch (err) {
        console.log(err)
        res.status(500).json({ message: "error", error: err })
    }
}

module.exports = {
    createComment,
    getAllComments,
    updateComment,
    deleteComment
}