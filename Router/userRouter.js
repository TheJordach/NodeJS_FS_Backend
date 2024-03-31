const express = require('express');
const { saveUser, findUser} = require('../db/db');
const router = express.Router();
const bcrypt = require("bcrypt")
const UserModel = require("../models/userModel")
const errorTemplate = require("../templates/errorTemplates")
const {loginUser, register}= require("../services/userService")
//register a user


router.post('/register', register);
router.post("/login",loginUser)

module.exports = router;
