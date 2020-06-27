var socket = io();
socket.on('connect',function() {
    console.log('connected new user');
});
socket.on('disconnect',function() {
    console.log('disconnected user');
});

socket.on('newMessage',(message)=>{
    console.log('newMessage',message);
});

socket.emit()