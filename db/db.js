require('dotenv').config();
const mongoose = require('mongoose');
const User = require('../models/userModel');

const connect = async () => {
    await mongoose.connect(process.env.mongo);
};

const disconnect = async () => {
    await mongoose.connection.close();
};

//Add two const one for finding a user and onother for saving the user

//obj is any json obj {firstName:request.body.firstName, email : request.body.email}
const findUser = async (obj) => {
    return await User.findOne(obj);
};

const saveUser = async (newUser) => {
    return await newUser.save();
};
module.exports = { connect, disconnect, findUser, saveUser };
