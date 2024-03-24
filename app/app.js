const express = require("express");
const cors = require("cors");

const app = express();

// use middleware to form our contract for incomming payload JSON only -
app.use(express.json());

// use middleware for url enconded -
app.use(express.urlencoded({extended: true}));

// use middleware to handle cors policy -
app.use(cors())

// Health Check  -
app.get("/", (request, response, next) => {
    response.status(200).json({
        message : "Service is OK"
    })
})

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

