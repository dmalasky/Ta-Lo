// setting up the user Schema

//import mongoose
const mongoose = require('mongoose');

//data Schema for the user
const Schema = mongoose.Schema;

const userSchema = new Schema({

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