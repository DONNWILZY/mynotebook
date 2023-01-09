const express = require('express');
const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    googleId:{
        type: String,
        required: true
    },

    googleId:{
        type: String,
        required: true
    },

    dispayName:{
        type: String,
        required: false
    },

    firstName:{
        type: String,
        required: true
    },

    lastName:{
        type: String,
        required: true
    },

    image:{
        type: String
    },


    email:{
        type: String
    },

    CreatedAt:{
        type: Date,
        default: Date.now
    }
})




module.exports = mongoose.model('User', UserSchema)