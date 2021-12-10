// setting up the user schema

//import mongoose
const mongoose = require('mongoose');

//data schema for the user
const schema = mongoose.schema

const userSchema = new schema({

    userName: {
        type: String,
        required: true
    },

    email: {
        type: String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    },
    
    verifyPassword: {
        type: String,
        required: true
    },


    accountType: {
        type: String,
        required: true
    },

    phone: {
        type: String,
        required: true
    },

})

//export user model
module.exports = mongoose.model('user', userSchema);