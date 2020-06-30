var expect = require('expect');
var {generateMessage} = require('./message');

describe('generateMessage',()=>{
    it('should generate correct message object', ()=>{
    var from = "master";
    var text = 'Some message';
    var message = generateMessage(from,text);
    var createdAt = message.createdAt;
    expect(typeof message.createdAt).toBe('number');
    expect(message).toMatchObject({from,text,createdAt});
    });
});