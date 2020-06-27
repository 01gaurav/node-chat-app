const path= require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname,'../public');
const port = process.env.PORT || 3000;
var app = express();
var server = http.createServer(app);
var io = socketIO(server);
io.on('connection',(socket)=>{
    console.log('New user Connected');
    
    socket.on('disconnect',()=>{
        console.log('User was Disconnected')
    });

    socket.on('createMessage',(message)=>{
        console.log('CreateMessage',message);
        io.emit('newMessage',{
            from: message.from,
            text: message.text,
            createdAt: new Date().getTime()
        });
    });
});

app.use(express.static(publicPath));

server.listen(3000, ()=>{
    console.log(`Server is up on ${port}`);
});