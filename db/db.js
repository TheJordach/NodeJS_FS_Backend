require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');

const connectTo = async () => {
    await mongoose.connect(process.env.mongo);
};

const disconnectFrom = async () => {
    await mongoose.connection.close();
};

//Add two const one for finding a user and another for saving the user
//obj is any json obj {firstName:request.body.firstName, email : request.body.email}
const findUser = async (query) => {
    return await query.findOne();
};

const saveUser = async (newUser) => {
    return await newUser.save();
};

module.exports = { connectTo, disconnectFrom, findUser, saveUser };
