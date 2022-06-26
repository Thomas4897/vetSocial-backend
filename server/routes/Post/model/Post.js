const mongoose = require('mongoose')

const PostSchema = new mongoose.Schema({

    post: {
        type: String,
        required: true
    },

    commentHistory: [{
        type: mongoose.Schema.ObjectId,
        ref: "comment"
    }],

    postOwner: {
        type: mongoose.Schema.ObjectId,
        ref: "user"
    }

}, { timestamps: true })

module.exports = mongoose.model("post", PostSchema)