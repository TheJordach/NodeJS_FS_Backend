const express = require('express');
const { saveUser, findUser} = require('../db/db');
const router = express.Router();
const bcrypt = require("bcrypt")
const UserModel = require("../models/userModel")
//register a user


router.post('/registers', async (request, response) => {
    try {
        // Check if user exists
        const obj = {email : request.body.email}
        const query = UserModel.where(obj)

        const existingUser = await findUser(query);
        if (existingUser) {
            return response.status(409).json({ message: `${existingUser.firstName} exists. Try logging in.` });
        } else {
            // Create new user
            const newUser = new UserModel(request.body);

            // Encrypt password
            newUser.password = await bcrypt.hash(newUser.password, 10);

            // Save the user to the database
            const savedUser = await saveUser(newUser);
            response.status(201).json({ message: "Successful registration. User:", newUser });
        }
    } catch (error) {
        response.status(500).json({ message: `Error: ${error.message}` });
    }
});


module.exports = router;
