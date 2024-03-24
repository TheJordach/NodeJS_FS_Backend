const http= require('http');
const app = require('./app/app');
require('dotenv').config();

const server_port = process.env.port

http.createServer(app).listen(server_port,() =>{
    console.log(`Server is runing on port ${server_port}`)
});