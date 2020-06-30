var socket = io();
socket.on('connect',function() {
    console.log('connected new user');
});
socket.on('disconnect',function() {
    console.log('disconnected user');
});

socket.on('newMessage',function (message){
    console.log('newMessage',message);
    var li = jQuery('<li></li>');
    li.text(`${message.from}: ${message.text}`);
    jQuery('#messages').append(li);
});

socket.on('newLocationMessage',function(message){
    var li = jQuery('<li></li>');
    var a = jQuery('<a target="_blank">My current Location</a>');

    li.text(`${message.from}: `);
    a.attr('href', message.url);
    li.append(a);
    jQuery('#messages').append(li);
});

// socket.emit('createMessage',{
//     from: 'master',
//     text: 'Hi'
// },function(data){
//     console.log('Got it ',data);
// });

jQuery('#message-form').on('submit',function (e) {
    e.preventDefault();

    socket.emit('createMessage',{
        from: 'User',
        text: jQuery('[name=message]').val()
    },function(){
        // console.log('error');
    });
});

var locationButton = jQuery('#send-location');
locationButton.on('click',function(){
    if(!navigator.geolocation){
        return alert('Geolocation not supported by your browser');
    }

    navigator.geolocation.getCurrentPosition(function (position){
        socket.emit('createLocationMessage',{
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    },function(){
        alert('Unable to fetch location');
    });
});