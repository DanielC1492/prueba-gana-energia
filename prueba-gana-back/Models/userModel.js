const mongoose = require("mongoose");


const userSchema = {
    name: {
        type: String
    },

    nickname: {
        type: String
    },   
    
    email: {
        type: String
    },
    password: {
        type: String,
        required: true
    }

};

const User = mongoose.model("user", userSchema);
module.exports = User;