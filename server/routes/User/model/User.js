const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({

    firstName: {
        type: String,
        required: true
    },

    lastName: {
        type: String,
        required: true
    },

    username: {
        type: String,
        unique: true,
        required: true
    },
    
    email: {
        type: String,
        unique: true,
        required: true
    },

    password: {
        type: String,
        required: true
    },

    profilePicture: {
        type: String
    },

    address: {
        type: String,
        required: true
    },

    postHistory: [{
        type: mongoose.Schema.ObjectId,
        ref: "post"
    }],

    commentHistory: [{
        type: mongoose.Schema.ObjectId,
        ref: "comment"
    }]

}, { timestamps: true })

module.exports = mongoose.model("user", UserSchema)