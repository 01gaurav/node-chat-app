var expect = require('expect');
var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object', ()=>{
    var from = "master";
    var text = 'Some message';
    var message = generateMessage(from,text);
    // var createdAt = message.createdAt;
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text});
    });
});

describe('generateLocationMessage',()=>{
    it('should generate correct url',()=>{
        var from = 'User';
        var latitude = 11;
        var longitude = 11;
        var url = 'https://www.google.com/maps?q=11,11';
        var message = generateLocationMessage(from,latitude,longitude);
        expect(typeof message.createdAt).toBe('number');
        expect(message).toMatchObject({from,url});
    });
});