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
        type: String,
        default: "https://www.google.com/search?q=default+profile+picture&rlz=1C5CHFA_enUS968US969&sxsrf=ALiCzsaukE09z39sADepYXoq8u2W0jGhkA:1656276706191&tbm=isch&source=iu&ictx=1&vet=1&fir=eHQKa74ZnnpTfM%252C4XfudSI_3wLzPM%252C_%253Btb7N7_uys1AxsM%252CnoScQk1sIgxspM%252C_%253Bfzm-cB-sF1nIvM%252CYlh7sHyFI9lHtM%252C_%253BUNHHERJjqkwu7M%252CRWqVZbSXhKXhPM%252C_%253BGJiZkEQ3k3RXSM%252CYKjDTpNRE78iCM%252C_%253B5ucjAVy0-StheM%252CX8JaXF6sFzBNAM%252C_%253B6p_S2mVbtUbpWM%252CPUQ6peTKrvRM3M%252C_%253BfHQpzBnOY1MuJM%252CjKSWvYqbfBbtlM%252C_%253BFQMD6_34rHtGaM%252CYlh7sHyFI9lHtM%252C_%253BZUQ4hqK0eoOE9M%252C--oA6_9U9ufzsM%252C_%253BWFoBptIKTJ7GaM%252CCKdkKk6yB8Uk-M%252C_%253BdQoJE2ysNlsn7M%252CWDupMKZi6xa9fM%252C_%253B-9QW3PhbflNqAM%252CMG0JGB0B8kPXNM%252C_%253BWXSmBNqKVSBx2M%252CF2Ho6Y2ez_m87M%252C_%253BJpaFCmffhUdABM%252CeirPelkp9eoYkM%252C_%253BVnqi2Tku_ZoxFM%252CYlh7sHyFI9lHtM%252C_&usg=AI4_-kTP-4DdJyqZoPtpT9G4QDcHqo_JmQ&sa=X&ved=2ahUKEwiPmuPF_8v4AhU2KkQIHSgjCSEQ9QF6BAgGEAE#imgrc=eHQKa74ZnnpTfM"
    },

    address: {
        type: String,
        required: true
    },

    branch: {
        type: String,
        required: true
    },

    friends: [{
        type: String
    }],

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