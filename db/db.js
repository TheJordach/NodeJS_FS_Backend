require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectTo = async () => {
    await mongoose.connect(process.env.mongo);
};

const disconnectFrom = async () => {
    mongoose.set("strictQuery",true)
    await mongoose.connection.close();
};

    /*  Add two const one for finding a user and another for saving the user
    function usage
        const obj = {email : "jordach@makaya.io"}
        const query = modelUser.where(obj)
        findUser(query)
    **/
const findUser = async (query) => {
    return await query.findOne();
};

const saveUser = async (newUser) => {
    return await newUser.save();
};

module.exports = { connectTo, disconnectFrom, findUser, saveUser };
