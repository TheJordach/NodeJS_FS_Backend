const express = require("express");

const router = express.Router();

//register a user
router.post("/register", (request, response)=>{
    /** 
     *  ALGORITHM
     *  Email must be unique 
     *  1. findUser
     *  2. if user exist 
     *  3. return response that says Email Exist try loggin in
     *  4. else 
     *  5. encrypt the password
     *  6. set the password with the encrypted password
     *  7. save the user to the database
     *  8. call SaveUser(newUser) function
     *  */ 
});

//User loggin 
//router.post("/loggin", (request, response)=>(){})

module.exports = router