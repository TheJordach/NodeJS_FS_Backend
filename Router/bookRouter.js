const express = require("express");
const router = express.Router();

//All the HTTP Methode logic goes here

// http://localhost:3001/user - example - 
router.get("/", (request, response, next) =>{
    response.status(200).json({
        message : "SUCCESSFUL -GET ",
        metadata : {
            hostname : request.hostname,
            methode : request.method
        }
    });
});

//GET by ID METHODE
//http://localhost:3001/user/81 - example - 
router.get("/:id",(request, response, next) =>{
    response.status(200).json({
        message : "SUCCESSFUL GET by ID",
        metadata:{
            id: request.params.id,
            hostname : request.hostname,
            method: request.method,

        }
    });
});


//POST METHODE
//http://localhost:3001/user - example - 
router.post("/",(request, response, next) => {
    const name = request.body.name

    response.status(201).json({
        message : "SUCCESSFUL - POST",
        metatdata :{
            name : name,
            hostname : request.hostname,
            methode: request.method,
            
        }
    })
})


//PUT by ID METHODE
//http://localhost:3001/user/21 - example - 
router.put("/:id",(request, response, next) =>{
    response.status(200).json({
        message : "SUCCESSFUL PUT by ID",
        metadata:{
            id: request.params.id,
            hostname : request.hostname,
            method: request.method,

        }
    });
});

//DELETE by ID METHODE
//http://localhost:3001/user/81 - example - 
router.delete("/:id",(request, response, next) =>{
    response.status(200).json({
        message : "SUCCESSFUL DELETE by ID",
        metadata:{
            id: request.params.id,
            hostname : request.hostname,
            method: request.method,

        }
    });
});



module.exports = router;