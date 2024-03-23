const http= require('http')
require('dotenv').config();

const server_port = process.env.port

http.createServer().listen(server_port,() =>{
    console.log(`Server is runing on port ${server_port}`)
});