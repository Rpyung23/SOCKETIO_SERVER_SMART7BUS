const express = require('express')
const app = express()
const server = require('http').createServer(app)
const io = require('socket.io')(server)

io.on('connection',(socket) =>{
    console.log(socket.id);
});

server.listen(7890,()=>{
    console.log("SERVER IO PORT : 7890")
})