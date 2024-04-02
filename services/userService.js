

/*
   Login Algorithm
    1. Find the User
     1.1 if user found -> Return User
     1.2 else -> Return User not found message
* */


const {findUser, saveUser} = require("../db/db");
const bcrypt = require("bcrypt");
const errorTemplate = require("../templates/errorTemplates")
const userModel = require("../models/userModel");
const jWt = require("jsonwebtoken")
require("dotenv").config()


//http:localhost:3001/user/register
exports.register=  async (request, response) => {
    const searchingUser = request.body.firstName
    try {
        // Check if user exists
        const obj = {email : request.body.email}
        const query = userModel.where(obj)

        const existingUser = await findUser(query);

        if (existingUser) {
            // if existingUser found --> send message user already exit
            return response.status(409).json({ message: `${searchingUser} already exists. Try logging in.` });
        } else {
            // Create new user
            const newUser = new userModel(request.body);

            // Encrypt password
            newUser.password = await bcrypt.hash(newUser.password, 10);

            // Save the user to the database
            const savedUser = await saveUser(newUser);
            response.status(201).json({ message: "Successful registration", newUser });
        }
    } catch (error) {
        // this block catch all the error
        errorTemplate(response, error,"Cannot Save user");
    }
}

//http:localhost:3001/user/login
exports.loginUser = async (request, response) =>{
    const loginUser = request.body.firstName


    try {
        //Find the user
        const obj = {email: request.body.email}
        const query = userModel.where(obj)

        const existingUser = await findUser(query);
        // If existingUser is not found --> throw an error
        if (!existingUser) {
            throw new Error(`Authentication failed not able to  found ${loginUser}`)
        } else {
            // if existingUser is  found --> user bcrypt to compare password
            const searchingUserPassword = request.body.password
            const existingUserHashPassword = existingUser.password
            const isPasswordIdentical = await bcrypt
                .compare(searchingUserPassword, existingUserHashPassword) // return boolean or Error

            if (isPasswordIdentical) {
                // if password match --> create jsonWeb Token and return message authentication successes
                /* Json Web Token Logic */
                const loginUserPayload = {user: loginUser}
                const secret = process.env.JWTSECRET
                //1.Signing
                const token = jWt.sign(loginUserPayload, secret)
                // Make userPassword to null because we do not want it to be displayed
                existingUser.password = "*************"
                //return message authentication successes
                return response.status(201).json({
                    user: existingUser,
                    logged: true,
                    token : token,
                    message: "Login Successful"

                })

            } else {
                // if password do NOT match -->  return message authentication  failure
                throw new Error(`Authentication failed Email or Password does not match`)
            }
        }

    } catch (error) {
        // this block catch all the error
        return errorTemplate(response, error, error.message)
    }
}

