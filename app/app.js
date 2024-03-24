

/**************************************************************************
 **  
     PART I - REQUEST LISTENER
 *   1.form our contract for incomming payload
 *   2.allow url enconded
 *   3.set and handle cors policy
 *   4.health check 
 *   5.handle bad request and error
 **/

    const express = require("express");
    const cors = require("cors");
    const userRouter = require("./Router/userRouter")

    const app = express();

    // use middleware to form our contract for incomming payload JSON only -
    app.use(express.json());

    // use middleware for url enconded -
    app.use(express.urlencoded({extended: true}));

    // use middleware to handle cors policy -
    app.use(cors())

    // Health Check  - http://localhost:3001
    app.get("/", (request, response, next) => {
    response.status(200).json({
        message : "Service is OK"
        })
    })


  // *************************************************************************


/***************************************************************************
 **  
     PART II - ROUTER
 *   
 **/

     app.use("/users", userRouter )



    // Band url or error handle with a middleware
    app.use((request, response, next)=>{
        const error = new Error("Not Found");
        error.status = 404
        next(error)
    });

    app.use((error,request, response, next)=>{
        response.status(error.status || 500).json({
            error:{
                message: error.message,
                status: error.status
            }
        })
    })


module.exports = app

