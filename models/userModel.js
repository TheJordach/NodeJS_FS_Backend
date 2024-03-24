const mongoose = require("mongoose")

const userSchema = mongoose.Schema({
    // id
    // firstName, lastName, adress, city, state, zipCode, email, password
    _id:mongoose.Schema.Types.ObjectId,
    firstName : {
        Types : String,
        required: true
    },

    lastName : {
        Types : String,
        required: true
    },

    adress : {
        Types : String,
        required: true
    },

    city : {
        Types : String,
        required: true
    },
    
    state : {
        Types : String,
        required: true
    },

    zipCode : {
        Types : String,
        required: true
    },

    email : {
        Types : String,
        required: true
    },

    password : {
        Types : String,
        required: true
    },
})


module.exports = mongoose.model("User", userSchema)