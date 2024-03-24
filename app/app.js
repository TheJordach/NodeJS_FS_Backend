const express = require("express");
const cors = require("cors");
const userRouter = require("../Router/userRouter");
const { connect } = require("../db/db"); // import the db

const app = express();

// Middleware setup
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// Health Check
app.get("/", (request, response, next) => {
    response.status(200).json({
        message: "Service is OK"
    });
});

// Routing
app.use("/users", userRouter);

// Error Handling
app.use((request, response, next) => {
    const error = new Error("Not Found");
    error.status = 404;
    next(error);
});

app.use((error, request, response, next) => {
    response.status(error.status || 500).json({
        error: {
            message: error.message,
            status: error.status
        }
    });
});

// Database Connection
connect();

module.exports = app;
