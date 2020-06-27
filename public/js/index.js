var socket = io();
socket.on('connect',function() {
    console.log('connected new user');
   
    socket.emit('createMessage',{
        from: 'Master',
        text: 'Keep doing'
    });
});
socket.on('disconnect',function() {
    console.log('disconnected user');
});

socket.on('newMessage',(message)=>{
    console.log('newMessage',message);
});

socket.emit()