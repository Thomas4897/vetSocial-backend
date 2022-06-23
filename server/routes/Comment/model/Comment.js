const mongoose = require('mongoose')

const CommentSchema = new mongoose.Schema({

    comment: {
        type: String,
        required: true
    },

    post: {
        type: mongoose.Schema.ObjectId,
        ref: "post"
    },

    commentOwner: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }

}, { timestamps: true })

module.exports = mongoose.model("comment", CommentSchema)